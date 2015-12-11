using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using HtmlAgilityPack;
using HOFCServerNet.Models;

namespace HOFCServerParser.Parsers
{
    public class ClassementParser: Parser<Classement>
    {
		private static Dictionary<string, string> URL =  new Dictionary<string, string>
        {
            {"equipe1", "http://district-foot-65.fff.fr/competitions/php/championnat/championnat_classement.php?sa_no=2015&cp_no=319539&ph_no=1&gp_no="}
        };
        public string category;

        public ClassementParser(string category) 
        {
            this.category = category;
        }
        protected override IEnumerable<HtmlNode> GetLines()
        {
            var httpClient = new HttpClient();
            string html = httpClient.GetStringAsync(URL[category]).Result;
            HtmlDocument document = new HtmlDocument();
            document.LoadHtml(html);
            var root = document.DocumentNode;
            var lines = root.SelectSingleNode("//table[@class='tablo bordure ac']").Descendants().Where(n => n.Name == "tr" && n.ParentNode.Name == "table");
            return lines;
        }

        protected override Classement ParseLine(HtmlNode node)
        {
            var classement = new Classement();
            var classementAttributes = node.Descendants("td");
            var nom = classementAttributes.ElementAt(1).InnerText.Trim().ToUpper();
            var points = int.Parse(classementAttributes.ElementAt(2).InnerText);
            var joue = int.Parse(classementAttributes.ElementAt(3).InnerText);
            var victoire = int.Parse(classementAttributes.ElementAt(4).InnerText);
            var nul = int.Parse(classementAttributes.ElementAt(5).InnerText);
            var defaite = int.Parse(classementAttributes.ElementAt(6).InnerText);
            var bp = int.Parse(classementAttributes.ElementAt(8).InnerText);
            var bc = int.Parse(classementAttributes.ElementAt(9).InnerText);
            var diff = int.Parse(classementAttributes.ElementAt(11).InnerText);
            
            classement.Equipe = nom;
            classement.Joue = joue;
            classement.Points = points;
            classement.Victoire = victoire;
            classement.Nul = nul;
            classement.Defaite = defaite;
            classement.Bp = bp;
            classement.Bc = bc;
            classement.Difference = diff;
            classement.Categorie = this.category;
            Console.WriteLine(classement.ToString());
            return classement;
        }

        protected override void SaveToBDD(List<Classement> list)
        {
            using(var bddContext = new BddContext()) {
                bddContext.Classements.AddRange(list);
                bddContext.SaveChanges();
            }
        }
    }
}