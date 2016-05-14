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
    public class JourneeParser : Parser<Match>
    {
        private string Categorie { get; }
        private int IdJournee { get; }
        private string Competition { get; }
        private string SeasonIndex { get; }

        public JourneeParser(string categorie, int idJournee, string competition, string seasonIndex) : base()
        {
            Categorie = categorie;
            IdJournee = idJournee;
            Competition = competition;
            SeasonIndex = seasonIndex;
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
            string html = httpClient.GetStringAsync(Program.Configuration["Parser:" + SeasonTool.GetSeasonIndex() + ":" + Categorie + ":JourneeURL"] + IdJournee).Result;
            HtmlDocument document = new HtmlDocument();
            document.LoadHtml(html);
            var root = document.DocumentNode;
            var rootNode = root.SelectSingleNode("//div[@id='refpop']");
            IEnumerable<HtmlNode> lines = null;
            if(rootNode != null)
            {
                lines = rootNode.Descendants("div")
                                .Where(n => (n.GetAttributeValue("class", "").Equals("resultatmatch bgbleu rm")));
            }
                
            return lines;
        }

        protected override Match ParseLine(HtmlNode line)
        {
            Match journee = null;
            var childs = line.ChildNodes;
            var now = DateTime.Now;
            if (childs.Count() != 6)
            {
                Console.WriteLine("Something changed ...");
            }
            else
            {
                journee = new Match();
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
                journee.IdJournee = this.IdJournee;
                journee.Competition = new Competition() { Nom = this.Competition, Saison = this.SeasonIndex, Categorie = this.Categorie };

                System.Text.RegularExpressions.Regex regex = new System.Text.RegularExpressions.Regex(@"det_match\(this,'([0-9]+)");
                journee.InfosId = regex.Match(childs.Last().InnerHtml).Groups[1].Value;
            }
            return journee;
        }

        private static DateTime parseDate(string dateString)
        {
            dateString = System.Text.RegularExpressions.Regex.Replace(dateString, @"\s+", " ");
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

        protected override void SaveToBDD(List<Match> list)
        {
            DatabaseManager manager = new DatabaseManager();
            manager.SaveMatchs(list);
        }
    }
}
