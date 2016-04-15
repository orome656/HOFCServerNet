using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using HtmlAgilityPack;
using HOFCServerNet.Data.Models;
using System.Globalization;
using HOFCServerParser.Utils;
using HOFCServerNet.Utils.Common;

namespace HOFCServerParser.Parsers
{
    public class CalendrierParser: Parser<Match>
    {
        private static Dictionary<string, string> moisTransform = new Dictionary<string, string>
        {
            {"janvier", "01" },
            {"fevrier", "02" },
            {"mars", "03" },
            {"avril", "04" },
            {"mai", "05" },
            {"juin", "06" },
            {"juillet", "07" },
            {"aout", "08" },
            {"septembre", "09" },
            {"octobre", "10" },
            {"novembre", "11" },
            {"decembre", "12" }
        };
        
        public string category;

        public CalendrierParser(string category) 
        {
            this.category = category;
        }

        protected override IEnumerable<HtmlNode> GetLines()
        {
            var httpClient = new HttpClient();
            string html = httpClient.GetStringAsync(Program.Configuration["Parser:" + SeasonTool.GetSeasonIndex() + ":" + category + ":CalendrierURL"]).Result;
            HtmlDocument document = new HtmlDocument();
            document.LoadHtml(html);
            var root = document.DocumentNode;
            var lines = root
                .SelectSingleNode("//div[@id='refpop']")
                .Descendants("div")
                .Where(n => (n.GetAttributeValue("class", "").Equals("resultatmatch bgbleu rm")));
            return lines;
        }

        protected override Match ParseLine(HtmlNode node)
        {
            Match calendrier = null;
            var childs = node.ChildNodes;
            var now = DateTime.Now;
            if(childs.Count() != 6)
            {
                Console.WriteLine("Something changed ...");
            }
            else
            {
                calendrier = new Match();
                CultureInfo infos = new CultureInfo("fr-CA");
                var date = childs.ElementAt(0).InnerText.Trim().ToLower();
                var datetime = parseDate(date);
                var matchLine = childs.ElementAt(4)
                                      .Descendants("tbody")
                                      .ElementAt(0)
                                      .Descendants("tr")
                                      .ElementAt(0);
                var equipe1 = HtmlEntity.DeEntitize(matchLine.Descendants("td")
                                       .Where(n => n.GetAttributeValue("class", "").Equals("team t2"))
                                       .First()
                                       .FirstChild
                                       .FirstChild
                                       .InnerText
                                       .Trim().ToUpper());
                
                var equipe2 = HtmlEntity.DeEntitize(matchLine.Descendants("td")
                                       .Where(n => n.GetAttributeValue("class", "").Equals("team ar tv2"))
                                       .First()
                                       .FirstChild
                                       .FirstChild
                                       .InnerText
                                       .Trim().ToUpper());

                var score = matchLine.Descendants("td")
                                       .Where(n => n.GetAttributeValue("class", "").Equals("score s2"))
                                       .First()
                                       .InnerText
                                       .Trim();
                if (score != null && score.Length > 0)
                {
                    calendrier.Score1 = int.Parse(score.Split('-').ElementAt(0));
                    calendrier.Score2 = int.Parse(score.Split('-').ElementAt(1));
                }
                calendrier.Equipe1 = equipe1;
                calendrier.Equipe2 = equipe2;
                calendrier.Date = datetime;
            }
            return calendrier;

        }

        private static DateTime parseDate(string dateString)
        {
            dateString = System.Text.RegularExpressions.Regex.Replace(dateString, @"\s+", " ");
            var dateArray = dateString.Split(' ');
            var jour = dateArray.ElementAt(1);
            var mois = moisTransform[dateArray.ElementAt(2)];
            var annee = dateArray.ElementAt(3);

            var time = dateArray.ElementAt(5);

            var completeDate = annee + "/" + mois + "/" + jour + " " + time;
            CultureInfo infos = new CultureInfo("fr-FR");
            return DateTime.ParseExact(completeDate, "yyyy/MM/dd HH'h'mm", infos);
        }

        protected override void SaveToBDD(List<HOFCServerNet.Data.Models.Match> list)
        {
            /*AndroidGCMNotificationSender sender = new AndroidGCMNotificationSender();
            using(var bddContext = new BddContext()) {
                foreach (Match calendrier in list)
                {
                    if (bddContext.Matchs.Any(item => calendrier.Equipe1.Equals(item.Equipe1) 
                                                            && calendrier.Equipe2.Equals(item.Equipe2)
                                                            && this.category.Equals(item.Categorie)))
                    {
                        Match bddCalendrier = bddContext.Matchs.First(item => calendrier.Equipe1.Equals(item.Equipe1)
                                                                                        && calendrier.Equipe2.Equals(item.Equipe2)
                                                                                        && this.category.Equals(item.Categorie));

                        if(bddCalendrier.Score1 == null && bddCalendrier.Score2 == null)
                        {
                            // Faire le test de Score1 > Score2 ou Score1 < Score2 ou Score1 = Score2
                            //sender.SendNotification("Nouveau Résultat","");
                        }
                        bddCalendrier.Date = calendrier.Date;
                        bddCalendrier.Score1 = calendrier.Score1;
                        bddCalendrier.Score2 = calendrier.Score2;
                        
                        bddContext.Entry(bddCalendrier).State = Microsoft.Data.Entity.EntityState.Modified;
                    }
                    else
                    {
                        // New Element insert it and send notification
                        bddContext.Matchs.Add(calendrier);
                    }
                }
                bddContext.SaveChanges();
            }*/
        }
    }
}
