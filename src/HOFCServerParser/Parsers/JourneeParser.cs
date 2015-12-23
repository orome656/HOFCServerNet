using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HtmlAgilityPack;
using System.Net.Http;
using System.Globalization;
using System.Text.RegularExpressions;
using HOFCServerNet.Models;
using HOFCServerParser.Constants;

namespace HOFCServerParser.Parsers
{
    public class JourneeParser : Parser<Journee>
    {
        private string Categorie { get; }
        private int IdJournee { get; }

        public JourneeParser(string categorie, int idJournee)
        {
            Categorie = categorie;
            IdJournee = idJournee;
        }

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
        
        protected override IEnumerable<HtmlNode> GetLines()
        {
            var httpClient = new HttpClient();
            string html = httpClient.GetStringAsync(URLMiseAJour.Journee[Categorie] + IdJournee).Result;
            HtmlDocument document = new HtmlDocument();
            document.LoadHtml(html);
            var root = document.DocumentNode;
            var lines = root
                .SelectSingleNode("//div[@id='refpop']")
                .Descendants("div")
                .Where(n => (n.GetAttributeValue("class", "").Equals("resultatmatch bgbleu rm")));
            return lines;
        }

        protected override Journee ParseLine(HtmlNode line)
        {
            Journee journee = null;
            var childs = line.ChildNodes;
            var now = DateTime.Now;
            if (childs.Count() != 6)
            {
                Console.WriteLine("Something changed ...");
            }
            else
            {
                journee = new Journee();
                CultureInfo infos = new CultureInfo("fr-CA");
                var date = childs.ElementAt(0).InnerText.Trim().ToLower();
                var datetime = parseDate(date);
                var matchLine = childs.ElementAt(4)
                                      .Descendants("tbody")
                                      .ElementAt(0)
                                      .Descendants("tr")
                                      .ElementAt(0);
                var equipe1 = matchLine.Descendants("td")
                                       .Where(n => n.GetAttributeValue("class", "").Equals("team t2"))
                                       .First()
                                       .FirstChild
                                       .FirstChild
                                       .InnerText
                                       .Trim();

                var equipe2 = matchLine.Descendants("td")
                                       .Where(n => n.GetAttributeValue("class", "").Equals("team ar tv2"))
                                       .First()
                                       .FirstChild
                                       .FirstChild
                                       .InnerText
                                       .Trim();

                var score = matchLine.Descendants("td")
                                       .Where(n => n.GetAttributeValue("class", "").Equals("score s2"))
                                       .First()
                                       .InnerText
                                       .Trim();
                if (score != null && score.Length > 0)
                {
                    if (score.IndexOf("Prolongation") != -1)
                        score = score.Substring(0, score.IndexOf("Prolongation")); // Il faudrait ajouter un champ message pour gérer ce cas

                    if (score.IndexOf("Non jou") != -1)
                        score = score.Substring(0, score.IndexOf("Non jou"));

                    if (score.IndexOf("Report") != -1)
                        score = score.Substring(0, score.IndexOf("Report"));


                    if (score.Length > 0) // On refait le check après la supression
                    {
                        journee.Score1 = int.Parse(score.Split('-').ElementAt(0));
                        journee.Score2 = int.Parse(score.Split('-').ElementAt(1));
                    }
                }
                journee.Equipe1 = equipe1;
                journee.Equipe2 = equipe2;
                journee.Date = datetime;
                journee.Categorie = this.Categorie;
                journee.IdJournee = this.IdJournee;
                Regex regex = new Regex(@"det_match\(this,'([0-9]+)");
                journee.InfosId = regex.Match(childs.Last().InnerHtml).Groups[1].Value;
            }
            return journee;
        }

        private static DateTime parseDate(string dateString)
        {
            dateString = Regex.Replace(dateString, @"\s+", " ");
            var dateArray = dateString.Split(' ');
            var jour = dateArray.ElementAt(1);
            var mois = moisTransform[dateArray.ElementAt(2)];
            var annee = dateArray.ElementAt(3);
            string time = null;
            if (dateArray.Length >= 5)
                time = dateArray.ElementAt(5);

            string completeDate = annee + "/" + mois + "/" + jour;
            string parseFormat = "yyyy/MM/dd";

            if (time != null)
            {
                completeDate += " " + time;
                parseFormat += " HH'h'mm";
            }

            CultureInfo infos = new CultureInfo("fr-FR");
            return DateTime.ParseExact(completeDate, parseFormat, infos);
        }

        protected override void SaveToBDD(List<Journee> list)
        {
            using (var bddContext = new BddContext())
            {
                foreach (Journee journee in list)
                {
                    if (bddContext.Journees.Any(item => journee.Equipe1.Equals(item.Equipe1)
                                                        && journee.Equipe2.Equals(item.Equipe2)
                                                        && this.IdJournee.Equals(item.IdJournee)
                                                        && this.Categorie.Equals(item.Categorie)))
                    {
                        Journee bddJournee = bddContext.Journees.First(item => journee.Equipe1.Equals(item.Equipe1)
                                                                                        && journee.Equipe2.Equals(item.Equipe2)
                                                                                        && this.IdJournee.Equals(item.IdJournee)
                                                                                        && this.Categorie.Equals(item.Categorie));


                        bddJournee.Date = journee.Date;
                        bddJournee.Score1 = journee.Score1;
                        bddJournee.Score2 = journee.Score2;

                        bddContext.Entry(bddJournee).State = Microsoft.Data.Entity.EntityState.Modified;
                    }
                    else
                    {
                        // New Element insert it and send notification
                        bddContext.Journees.Add(journee);
                    }
                }
                bddContext.SaveChanges();
            }
        }
    }
}
