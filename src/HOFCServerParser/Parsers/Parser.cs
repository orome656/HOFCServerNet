using System;
using System.Collections.Generic;
using HtmlAgilityPack;
using NLog;

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
            Console.WriteLine("Load Start");
			var lines = GetLines();
			var modelsToSave = new List<T>();
            if(lines != null)
            {
                foreach (var line in lines)
                {
                    modelsToSave.Add(ParseLine(line));
                }
                if (modelsToSave.Count > 0)
                {
                    SaveToBDD(modelsToSave);
                }
            }
            Console.WriteLine("Load End");
        }
		
		protected abstract IEnumerable<HtmlNode> GetLines();
		
		protected abstract T ParseLine(HtmlNode line);
		
		protected abstract void SaveToBDD(List<T> list);
	}
}