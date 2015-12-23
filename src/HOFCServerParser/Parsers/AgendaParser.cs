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
    public class AgendaParser : Parser<Agenda>
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

        // Date du début de la semaine au format DDMMYYYY : 04012016
        private string semaine = null;

        public AgendaParser(string semaine)
        {
            this.semaine = semaine;
        }

        protected override IEnumerable<HtmlNode> GetLines()
        {
            var httpClient = new HttpClient();
            string html = httpClient.GetStringAsync(URLMiseAJour.Agenda + semaine).Result;
            HtmlDocument document = new HtmlDocument();
            document.LoadHtml(html);
            var root = document.DocumentNode;
            var lines = root
                .SelectSingleNode("//div[@id='refpop']")
                .Descendants("div")
                .Where(n => (n.GetAttributeValue("class", "").Equals("resultatmatch bgbleu rm")));
            return lines;
        }

        protected override Agenda ParseLine(HtmlNode line)
        {
            Agenda agenda = null;
            var childs = line.ChildNodes;
            var now = DateTime.Now;
            if (childs.Count() != 6)
            {
                Console.WriteLine("Something changed ...");
            }
            else
            {
                agenda = new Agenda();
                agenda.Titre = line.ParentNode.PreviousSibling.InnerText;
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


                    if(score.Length > 0) // On refait le check après la supression
                    {
                        agenda.Score1 = int.Parse(score.Split('-').ElementAt(0));
                        agenda.Score2 = int.Parse(score.Split('-').ElementAt(1));
                    }
                }
                agenda.Equipe1 = equipe1;
                agenda.Equipe2 = equipe2;
                agenda.Date = datetime;
                agenda.Semaine = this.semaine;
                Regex regex = new Regex(@"det_match\(this,'([0-9]+)");
                agenda.InfosId = regex.Match(childs.Last().InnerHtml).Groups[1].Value;
            }
            return agenda;
        }

        private static DateTime parseDate(string dateString)
        {
            dateString = Regex.Replace(dateString, @"\s+", " ");
            var dateArray = dateString.Split(' ');
            var jour = dateArray.ElementAt(1);
            var mois = moisTransform[dateArray.ElementAt(2)];
            var annee = dateArray.ElementAt(3);
            string time = null;
            if(dateArray.Length >= 5)
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

        protected override void SaveToBDD(List<Agenda> list)
        {
            using (var bddContext = new BddContext())
            {
                foreach (Agenda calendrier in list)
                {
                    if (bddContext.Agendas.Any(item => calendrier.Equipe1.Equals(item.Equipe1)
                                                            && calendrier.Equipe2.Equals(item.Equipe2)
                                                            && this.semaine.Equals(item.Semaine)))
                    {
                        Agenda bddCalendrier = bddContext.Agendas.First(item => calendrier.Equipe1.Equals(item.Equipe1)
                                                                                        && calendrier.Equipe2.Equals(item.Equipe2)
                                                                                        && this.semaine.Equals(item.Semaine));

                        
                        bddCalendrier.Date = calendrier.Date;
                        bddCalendrier.Score1 = calendrier.Score1;
                        bddCalendrier.Score2 = calendrier.Score2;

                        bddContext.Entry(bddCalendrier).State = Microsoft.Data.Entity.EntityState.Modified;
                    }
                    else
                    {
                        // New Element insert it and send notification
                        bddContext.Agendas.Add(calendrier);
                    }
                }
                bddContext.SaveChanges();
            }
        }
    }
}
