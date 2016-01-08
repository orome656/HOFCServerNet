using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace HOFCServerNet.Parsers
{
    public class DiaporamaParser
    {
        public static List<String> Parse(string url)
        {
            IEnumerable<HtmlNode> listNode = DiaporamaParser.GetLines(url);
            List<String> list = DiaporamaParser.ParseLine(listNode);
            return list;
        }

        private static IEnumerable<HtmlNode> GetLines(string url)
        {
            var httpClient = new HttpClient();
            string html = httpClient.GetStringAsync(url).Result;
            HtmlDocument document = new HtmlDocument();
            document.LoadHtml(html);
            var root = document.DocumentNode;
            var lines = root.SelectSingleNode("//div[@class='ngg-galleryoverview ngg-ajax-pagination-none']").ChildNodes.Where(item => item.GetAttributeValue("class", "").ToString().Equals("ngg-gallery-thumbnail-box"));
            return lines;
        }

        private static List<string> ParseLine(IEnumerable<HtmlNode> listNode)
        {
            List<string> urls = new List<string>();
            foreach(HtmlNode line in listNode)
            {
                urls.Add(line.ChildNodes.ElementAt(1).ChildNodes.ElementAt(1).GetAttributeValue("href", null));
            }
            return urls;
        }
    }
}
