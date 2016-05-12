using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using HtmlAgilityPack;
using HOFCServerNet.Data.Models;
using HOFCServerNet.Utils.Common;

namespace HOFCServerParser.Parsers
{
    public class ClassementParser: Parser<Classement>
    {
		public string Categorie;
        public string CompetitionName { get; set; }

        public ClassementParser(string _category, string _competitionName) 
        {
            this.Categorie = _category;
            this.CompetitionName = _competitionName;
        }
        protected override IEnumerable<HtmlNode> GetLines()
        {
            var httpClient = new HttpClient();
            string html = httpClient.GetStringAsync(Program.Configuration["Parser:" + SeasonTool.GetSeasonIndex() + ":" + Categorie + ":ClassementURL"]).Result;
            HtmlDocument document = new HtmlDocument();
            document.LoadHtml(html);
            var root = document.DocumentNode;
            var rootNode = root.SelectSingleNode("//table[@class='tablo bordure ac']");
            IEnumerable<HtmlNode> lines = null;
            if (rootNode != null) {
                lines = rootNode.Descendants()
                                .Where(n => n.Name == "tr" && n.ParentNode.Name == "table");
            }
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
            
            classement.Equipe = HtmlEntity.DeEntitize(nom.ToUpper());
            classement.Joue = joue;
            classement.Points = points;
            classement.Victoire = victoire;
            classement.Nul = nul;
            classement.Defaite = defaite;
            classement.Bp = bp;
            classement.Bc = bc;
            classement.Difference = diff;
            classement.Categorie = this.Categorie;
            Console.WriteLine(classement.ToString());
            return classement;
        }

        protected override void SaveToBDD(List<Classement> list)
        {
            using(var bddContext = new BddContext()) {
                Competition competition = bddContext.Competitions.FirstOrDefault(c => c.Nom.Equals(this.CompetitionName) && c.Saison.Equals(SeasonTool.GetSeasonIndex()));
                if(competition == null)
                {
                    competition = new Competition()
                    {
                        Categorie = this.Categorie,
                        Nom = this.CompetitionName,
                        Saison = SeasonTool.GetSeasonIndex()
                    };
                }
                foreach (Classement classement in list)
                {
                    if (bddContext.Classements.Any(item => classement.Equipe.Equals(item.Equipe) && this.Categorie.Equals(item.Categorie)))
                    {
                        Classement bddClassement = bddContext.Classements.First(item => classement.Equipe.Equals(item.Equipe) && this.Categorie.Equals(item.Categorie));

                        bddClassement.Joue = classement.Joue;
                        bddClassement.Points = classement.Points;
                        bddClassement.Victoire = classement.Victoire;
                        bddClassement.Nul = classement.Nul;
                        bddClassement.Defaite = classement.Defaite;
                        bddClassement.Bp = classement.Bp;
                        bddClassement.Bc = classement.Bc;
                        bddClassement.Difference = classement.Difference;
                        
                        bddContext.Entry(bddClassement).State = Microsoft.Data.Entity.EntityState.Modified;
                    }
                    else
                    {
                        
                        classement.Competition = competition;
                        // New Element insert it
                        bddContext.Classements.Add(classement);
                    }
                }
                bddContext.SaveChanges();
            }
        }
    }
}