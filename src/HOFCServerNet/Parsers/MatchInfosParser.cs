using HOFCServerNet.Models;
using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace HOFCServerNet.Parsers
{
    public class MatchInfosParser
    {
        private static string MatchId;
        private static string URL = "http://district-foot-65.fff.fr/competitions/php/competition/competition_match_detail_v2.php?o=1&t=1&ma_no=";
        

        public static MatchInfos Parse(string matchId)
        {
            MatchId = matchId;
            HtmlNode node = GetLine();
            if(node == null)
            {
                return null; // la page n'a pas été trouvée (id invalide ...)
            }
            else
            {
                return ParseLine(node);
            }
            
        }

        protected static HtmlNode GetLine()
        {
            var httpClient = new HttpClient();
            string html = httpClient.GetStringAsync(URL + MatchId).Result;
            HtmlDocument document = new HtmlDocument();
            document.LoadHtml(html);
            var root = document.DocumentNode;
            var line = root
                .SelectSingleNode("//div[@class='w350']");
            return line;
        }

        protected static MatchInfos ParseLine(HtmlNode node)
        {
            MatchInfos infos = null;

            infos = new MatchInfos();
            var infosAdresse = node.Descendants("div").ElementAt(0).ChildNodes.ElementAt(1).Descendants("#text");
            infos.Nom = infosAdresse.ElementAt(0).InnerText.Trim().Replace("&#xA0;", " ");
            infos.Adresse = infosAdresse.ElementAt(1).InnerText.Trim().Replace("&#xA0;", " ");
            infos.Ville = infosAdresse.ElementAt(2).InnerText.Trim().Replace("&#xA0;", " ");

            if(node.ChildNodes.Where(item => item.Name == "div").Count() > 2)
            {
                var infosArbitres = node.ChildNodes.Where(item => item.Name == "div")
                                    .ElementAt(2)
                                    .ChildNodes
                                    .ElementAt(1)
                                    .Descendants("ul")
                                    .ElementAt(0)
                                    .Descendants("li");
                foreach (var arbitre in infosArbitres)
                {
                    infos.Arbitres.Add(arbitre.InnerText.Trim().Replace("&#xA0;", " "));
                }
            }
            return infos;
        }
    }
}
