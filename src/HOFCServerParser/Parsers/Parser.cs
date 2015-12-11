using System;
using System.Collections.Generic;
using HtmlAgilityPack;

namespace HOFCServerParser.Parsers
{
	public abstract class Parser<T>
	{
		public virtual void Parse()
        {
            Console.WriteLine("Load Start");
			var lines = GetLines();
			var modelsToSave = new List<T>();
            foreach(var line in lines)
            {
                modelsToSave.Add(ParseLine(line));
            }
			if(modelsToSave.Count > 0) {
				SaveToBDD(modelsToSave);
			}
            Console.WriteLine("Load End");
        }
		
		protected abstract IEnumerable<HtmlNode> GetLines();
		
		protected abstract T ParseLine(HtmlNode line);
		
		protected abstract void SaveToBDD(List<T> list);
	}
}