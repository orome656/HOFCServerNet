using System;
using System.Collections.Generic;
using System.Linq;
using HtmlAgilityPack;
using NLog;
using System.Net.Http;
using HOFCServerParser.Net;

namespace HOFCServerParser.Parsers
{
	public abstract class Parser<T>
	{
        protected Logger Logger;
        protected string ConfigPath;
        protected string AdditionalParam = "";

        public Parser()
        {
            Logger = LogManager.GetLogger(this.GetType().Name);
        }

		public virtual void Parse()
        {
            Logger.Info("Start Parsing ");
            try
            {

                var root = GetHtml(ConfigPath, AdditionalParam);
                IEnumerable<HtmlNode> lines = null;
                if(root != null)
                {
                    lines = FilterLines(root);
                    Logger.Debug("Got " + lines.Count() + " lines");

                    var modelsToSave = new List<T>();

                    if (lines != null)
                    {
                        foreach (var line in lines)
                        {
                            try
                            {
                                var element = ParseLine(line);
                                modelsToSave.Add(element);
                            }
                            catch (Exception e)
                            {
                                Logger.Error(e, "Error while parsing line");
                            }
                        }
                        if (modelsToSave.Count > 0)
                        {
                            Logger.Debug(modelsToSave);
                            SaveToBDD(modelsToSave);
                        }
                    }
                }
                else
                {
                    Logger.Info("Nothing to get");
                }
            } catch (Exception e)
            {
                Logger.Error(e, "Error while parsing");
            }
            Logger.Info("End Parsing");
        }

        public HttpClient GetHttpClient()
        {
            var proxy = Program.Configuration["HTTP_PROXY"];
            if (proxy != null)
            {
                Logger.Info($"Utilisation du proxy {proxy}");
                HttpClientHandler clientHandler = new HttpClientHandler()
                {
                    Proxy = new WebProxy()
                };

                return new HttpClient(clientHandler);
            }
            else
            {
                return new HttpClient();
            }

        }

        public HtmlNode GetHtml(string configPath, string additionalParam = "")
        {
            var httpClient = GetHttpClient();
            string url = Program.Configuration[configPath];
            if(string.IsNullOrEmpty(url))
            {
                Logger.Error("URL not exist for parameter : " + configPath);
                return null;
            }
            else
            {
                Logger.Info(string.Format(!string.IsNullOrEmpty(additionalParam)?"Calling URL : {0}, With Parameter : {1}": "Calling URL : {0}", url, additionalParam));

                string html = httpClient.GetStringAsync(Program.Configuration[configPath] + additionalParam).Result;
                HtmlDocument document = new HtmlDocument();
                document.LoadHtml(html);
                return document.DocumentNode;
            }
        }

		protected abstract IEnumerable<HtmlNode> FilterLines(HtmlNode root);
		
		protected abstract T ParseLine(HtmlNode line);
		
		protected abstract void SaveToBDD(List<T> list);
	}
}