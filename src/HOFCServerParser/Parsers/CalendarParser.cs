using HOFCServerNet.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using HtmlAgilityPack;
using HOFCServerNet.Utils.Common;
using System.Linq;
using HOFCServerParser.Database;

namespace HOFCServerParser.Parsers
{
    class CalendarParser : Parser<Match>
    {
        public string Categorie;

        public CalendarParser(string _category)
        {
            this.Categorie = _category;
            ConfigPath = "Parser:" + SeasonTool.GetSeasonIndex() + ":" + Categorie + ":CalendrierURL";
        }

        protected override IEnumerable<HtmlNode> FilterLines(HtmlNode root)
        {
            return root.SelectNodes("//div[@class='results-content']");
        }

        protected override Match ParseLine(HtmlNode line)
        {
            var childs = line.ChildNodes;
            var idJournee = int.Parse(childs.ElementAt(0).InnerText.Trim().Split(' ')[1]);
            for(var i = 1; i < childs.Count; i++)
            {
                var matchLine = childs.ElementAt(i);
                var dateString = matchLine.Descendants("div[@class='date']").First().InnerText;

                var match = new Match();
                match.IdJournee = idJournee;
                var details = matchLine.Descendants("div[@class='details']").First();
                match.Equipe1 = details.ChildNodes.ElementAt(0).Descendants("div[@class='name']").First().InnerText.Trim();
                match.Equipe2 = details.ChildNodes.ElementAt(2).Descendants("div[@class='name']").First().InnerText.Trim();
                // score : Utilisé la reconnaissance d'image
            }

            return null;
        }

        protected override void SaveToBDD(List<Match> list)
        {
            DatabaseManager manager = new DatabaseManager();
            manager.SaveMatchs(list);
        }
    }
}
