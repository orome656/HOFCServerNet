using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using HtmlAgilityPack;
using HOFCServerNet.Models;

namespace HOFCServerParser.Parsers
{
    public class CalendrierParser
    {

        private static string CalendrierURL = "http://district-foot-65.fff.fr/competitions/php/championnat/championnat_calendrier_resultat.php?cp_no=319539&ph_no=1&gp_no=&sa_no=2015&typ_rech=equipe&cl_no=177005&eq_no=1&type_match=deux&lieu_match=deux";


        public static void Parse()
        {
            Console.WriteLine("Load Start");
            var httpClient = new HttpClient();
            string html = httpClient.GetStringAsync(CalendrierURL).Result;
            HtmlDocument document = new HtmlDocument();
            document.LoadHtml(html);
            var root = document.DocumentNode;
            var lines = root
                .SelectSingleNode("//div[@id='refpop']")
                .Descendants("div")
                .Where(n => (n.GetAttributeValue("class", "").Equals("resultatmatch bgbleu rm")));
            foreach(var line in lines)
            {
                ParseLine(line);
            }
            Console.WriteLine("Load End");
        }

        private static Calendrier ParseLine(HtmlNode node)
        {
            var childs = node.ChildNodes;
            Console.WriteLine(childs.Count());
            if(childs.Count() != 6)
            {
                Console.WriteLine("Something changed ...");
            }
            else
            {
                var date = childs.ElementAt(0).InnerText;
                Console.WriteLine(date);
            }
            return null;

        }
    }
}
