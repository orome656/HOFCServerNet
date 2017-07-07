using HOFCServerNet.Data.Models;
using HOFCServerNet.Utils.Net;
using HtmlAgilityPack;
using System;
using System.Globalization;
using System.Linq;
using System.Net.Http;

namespace HOFCServerNet.Parsers
{
    public class ArticleParser
    {
        public static Article Parse(string url)
        {
            Article article = ArticleParser.ParseLine(ArticleParser.GetLine(url));
            return article;
        }

        private static HtmlNode GetLine(string url)
        {
            HttpClient httpClient = new HttpClientProxy();
            string html = httpClient.GetStringAsync(url).Result;
            HtmlDocument document = new HtmlDocument();
            document.LoadHtml(html);
            var root = document.DocumentNode;
            var line = root.SelectSingleNode("//div[@class='post']");
            return line;
        }

        private static Article ParseLine(HtmlNode line)
        {
            string titre = line.ChildNodes.ElementAt(1).InnerText;
            string contenu = line.ChildNodes.ElementAt(5).InnerText;
            DateTime date = ArticleParser.ParseDate(line.ChildNodes.ElementAt(3).InnerText.Trim());
            Article article = new Article();
            article.Titre = titre;
            article.Contenu = contenu;
            article.Date = date;

            return article;
        }

        private static DateTime ParseDate(string dateString)
        {
            CultureInfo infos = new CultureInfo("fr-FR");
            return DateTime.Parse(dateString, infos);
        }
    }
}
