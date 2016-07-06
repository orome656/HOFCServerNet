using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HtmlAgilityPack;
using System.Net.Http;
using System.Globalization;
using HOFCServerNet.Data.Models;
using HOFCServerParser.Database;
using HOFCServerNet.Utils.Common;

namespace HOFCServerParser.Parsers
{
    public class AgendaParser : Parser<Match>
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

        public AgendaParser(string semaine): base()
        {
            ConfigPath = "Parser:" + SeasonTool.GetSeasonIndex() + ":AgendaURL";
            AdditionalParam = semaine;
            this.semaine = semaine;
        }

        protected override IEnumerable<HtmlNode> FilterLines(HtmlNode root)
        {
            var rootNode = root.SelectSingleNode("//div[@id='refpop']");
            IEnumerable<HtmlNode> lines = null;
            if (rootNode != null)
            {
                lines = rootNode
                    .Descendants("div")
                    .Where(n => (n.GetAttributeValue("class", "").Equals("resultatmatch bgbleu rm")));

            }
            return lines;
        }

        protected override Match ParseLine(HtmlNode line)
        {
            Match agenda = null;
            var childs = line.ChildNodes;
            var now = DateTime.Now;
            if (childs.Count() != 6)
            {
                Console.WriteLine("Something changed ...");
            }
            else
            {
                agenda = new Match();
                var competitionNode = line.ParentNode.PreviousSibling;
                while(String.IsNullOrEmpty(competitionNode.InnerText) || competitionNode.InnerText.Contains("En attente"))
                {
                    competitionNode = competitionNode.PreviousSibling;
                }
                string competitionId = HtmlEntity.DeEntitize(competitionNode.InnerText);

                agenda.Competition = new Competition() {
                    Nom = competitionId,
                    Saison = SeasonTool.GetSeasonIndex(),
                    Categorie = CompetitionTool.GetCategorieFromCompetition(competitionId)
                };
                
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
                                       .InnerText
                                       .Trim()
                                       .ToUpper();
                equipe1 = HtmlEntity.DeEntitize(equipe1);
                var equipe2 = matchLine.Descendants("td")
                                       .Where(n => n.GetAttributeValue("class", "").Equals("team ar tv2"))
                                       .First()
                                       .FirstChild
                                       .InnerText
                                       .Trim()
                                       .ToUpper();
                equipe2 = HtmlEntity.DeEntitize(equipe2);

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
                System.Text.RegularExpressions.Regex regex = new System.Text.RegularExpressions.Regex(@"det_match\(this,'([0-9]+)");
                agenda.InfosId = regex.Match(childs.Last().InnerHtml).Groups[1].Value;
            }
            return agenda;
        }

        private static DateTime parseDate(string dateString)
        {
            dateString = System.Text.RegularExpressions.Regex.Replace(dateString, @"\s+", " ");
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

        protected override void SaveToBDD(List<Match> list)
        {
            //DateTime dateStart = DateTime.ParseExact(this.semaine, "ddMMyyyy", new CultureInfo("fr-FR"));
            //DateTime dateEnd = dateStart.AddDays(7);
            DatabaseManager manager = new DatabaseManager();
            manager.SaveMatchs(list);
        }
    }
}
