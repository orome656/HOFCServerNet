using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using HOFCServerNet.Data.Models;
using HtmlAgilityPack;
using System.Globalization;
using System.Net;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;
using HOFCServerNet.Utils.Notifications;

namespace HOFCServerParser.Parsers
{
    public class ActusParser : Parser<Actu>
    {
        public ActusParser() : base()
        {
            ConfigPath = "Parser:ActuURL";
        }

        protected override IEnumerable<HtmlNode> FilterLines(HtmlNode root)
        {
            return root
                .SelectSingleNode("//div[@id='content']")
                .Descendants("div")
                .Where(n => (n.GetAttributeValue("class", "").Equals("post")));
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
            actu.ImageURL = actu.ImageURL.Replace("amp;", "");
            Regex regEx = new Regex("h=(\\d+)&w=(\\d+)");
            actu.ImageURL = regEx.Replace(actu.ImageURL, "h=1080&w=1920");

            var dateString = line.Descendants("div").Where(n => n.GetAttributeValue("class", "").Equals("postmeta")).First().InnerText.Trim();
            actu.Date = ParseDate(dateString);

            Logger.Debug(actu.ToString());

            return actu;
        }

        private DateTime ParseDate(string dateString) {
            CultureInfo infos = new CultureInfo("fr-FR");
            return DateTime.Parse(dateString, infos);
        }

        protected async override void SaveToBDD(List<Actu> list)
        {
            using (var bddContext = new BddContext(Program.Options)) {
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

                        bddContext.Entry(bddActu).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    }
                    else
                    {
                        // New Element insert it and send notification
                        bddContext.Actus.Add(actu);
                        NotificationHub notif = new NotificationHub(bddContext);
                        await notif.NotifyAll("Nouvelle Actualité", actu.Titre);
                        
                    }
                }
                bddContext.SaveChanges();
            }
        }
    }
}
