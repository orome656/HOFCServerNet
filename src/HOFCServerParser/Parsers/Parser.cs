using System;
using System.Collections.Generic;
using HtmlAgilityPack;
using NLog;
using System.Net.Http;
using HOFCServerParser.Net;

namespace HOFCServerParser.Parsers
{
	public abstract class Parser<T>
	{
        protected Logger Logger;

        public Parser()
        {
            Logger = LogManager.GetLogger(this.GetType().Name);
        }

		public virtual void Parse()
        {
            Logger.Info("Start Parsing " + this.GetType().Name);
            Logger.Info("Start getting lines " + this.GetType().Name);
            var lines = GetLines();
            Logger.Info("End getting lines " + this.GetType().Name);
            var modelsToSave = new List<T>();
            if(lines != null)
            {
                foreach (var line in lines)
                {
                    modelsToSave.Add(ParseLine(line));
                }
                if (modelsToSave.Count > 0)
                {
                    Logger.Info("Start saving to bdd " + this.GetType().Name);
                    SaveToBDD(modelsToSave);
                    Logger.Info("End saving to bdd " + this.GetType().Name);
                } else
                {
                    Logger.Info("Nothing to save for parser " + this.GetType().Name);
                }
            }
            Logger.Info("End Parsing" + this.GetType().Name);
        }

        public HttpClient GetHttpClient()
        {
            HttpClientHandler clientHandler = new HttpClientHandler()
            {
                Proxy = new WebProxy()
            };

            return new HttpClient(clientHandler);
        }

		protected abstract IEnumerable<HtmlNode> GetLines();
		
		protected abstract T ParseLine(HtmlNode line);
		
		protected abstract void SaveToBDD(List<T> list);
	}
}