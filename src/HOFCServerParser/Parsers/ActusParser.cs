﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using HOFCServerNet.Data.Models;
using HtmlAgilityPack;
using HOFCServerParser.Utils;
using HOFCServerParser.Constants;
using System.Globalization;

namespace HOFCServerParser.Parsers
{
    public class ActusParser : Parser<Actu>
    {
        protected override IEnumerable<HtmlNode> GetLines()
        {
            var httpClient = new HttpClient();
            string html = httpClient.GetStringAsync(URLMiseAJour.Actus).Result;
            HtmlDocument document = new HtmlDocument();
            document.LoadHtml(html);
            var root = document.DocumentNode;
            var lines = root
                .SelectSingleNode("//div[@id='content']")
                .Descendants("div")
                .Where(n => (n.GetAttributeValue("class", "").Equals("post")));
            
            return lines;
        }

        protected override Actu ParseLine(HtmlNode line)
        {
            var actu = new Actu();
            actu.PostId = int.Parse(line.GetAttributeValue("id", "0-0").Split('-').ElementAt(1));
            var headerNode = line.Descendants("div").Where(n => n.GetAttributeValue("class", "").Equals("title")).First().Descendants("a").First();
            actu.Titre = HtmlEntity.DeEntitize(headerNode.InnerText.Trim());
            actu.URL = headerNode.GetAttributeValue("href", null);
            
            var contentNode = line.Descendants("div").Where(n => n.GetAttributeValue("class", "").Equals("entry")).First();
            actu.Texte = HtmlEntity.DeEntitize(contentNode.Descendants("p").First().InnerText.Trim());
            actu.ImageURL = contentNode.Descendants("img").First().GetAttributeValue("src", null);
    
            var dateString = line.Descendants("div").Where(n => n.GetAttributeValue("class", "").Equals("postmeta")).First().InnerText.Trim();
            actu.Date = ParseDate(dateString);
            
            Console.WriteLine(actu.ToString());
            return actu;
        }

        private DateTime ParseDate(string dateString) {
            CultureInfo infos = new CultureInfo("fr-FR");
            return DateTime.Parse(dateString, infos);
        }

        protected override void SaveToBDD(List<Actu> list)
        {
            AndroidGCMNotificationSender sender = new AndroidGCMNotificationSender();
            using(var bddContext = new BddContext()) {
                foreach(Actu actu in list)
                {
                    if(bddContext.Actus.Any(item => item.PostId == actu.PostId))
                    {
                        // Element already exist update it
                        Actu bddActu = bddContext.Actus.First(item => item.PostId == actu.PostId);
                        bddActu.ImageURL = actu.ImageURL;
                        bddActu.Texte = actu.Texte;
                        bddActu.Titre = actu.Titre;
                        bddActu.URL = actu.URL;
                        bddActu.Date = actu.Date;

                        bddContext.Entry(bddActu).State = Microsoft.Data.Entity.EntityState.Modified;
                    }
                    else
                    {
                        // New Element insert it and send notification
                        bddContext.Actus.Add(actu);
                        //sender.SendNotification("Nouvelle Actualité", actu.Titre);
                    }
                }
                bddContext.SaveChanges();
            }
        }
    }
}
