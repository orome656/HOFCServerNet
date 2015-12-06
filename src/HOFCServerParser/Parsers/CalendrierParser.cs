using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using HtmlAgilityPack;
using HOFCServerNet.Models;
using System.Globalization;
using System.Text.RegularExpressions;

namespace HOFCServerParser.Parsers
{
    public class CalendrierParser
    {

        private static string CalendrierURL = "http://district-foot-65.fff.fr/competitions/php/championnat/championnat_calendrier_resultat.php?cp_no=319539&ph_no=1&gp_no=&sa_no=2015&typ_rech=equipe&cl_no=177005&eq_no=1&type_match=deux&lieu_match=deux";
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
            Calendrier calendrier = null;
            var childs = node.ChildNodes;
            var now = DateTime.Now;
            if(childs.Count() != 6)
            {
                Console.WriteLine("Something changed ...");
            }
            else
            {
                calendrier = new Calendrier();
                CultureInfo infos = new CultureInfo("fr-CA");
                var date = childs.ElementAt(0).InnerText.Trim().ToLower();
                var datetime = parseDate(date);
                
                calendrier.Date = datetime;
            }
            return calendrier;

        }

        private static DateTime parseDate(string dateString)
        {
            dateString = Regex.Replace(dateString, @"\s+", " ");
            var dateArray = dateString.Split(' ');
            var jour = dateArray.ElementAt(1);
            var mois = moisTransform[dateArray.ElementAt(2)];
            var annee = dateArray.ElementAt(3);

            var time = dateArray.ElementAt(5);

            var completeDate = annee + "/" + mois + "/" + jour + " " + time;
            Console.WriteLine(completeDate);
            CultureInfo infos = new CultureInfo("fr-FR");
            return DateTime.ParseExact(completeDate, "yyyy/MM/dd HH'h'mm", infos);
        }
    }
}
