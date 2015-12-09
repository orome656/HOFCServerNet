using System;
using System.Collections.Generic;
using HtmlAgilityPack;

namespace HOFCServerParser.Parsers
{
	public abstract class Parser
	{
		public virtual void Parse()
        {
            Console.WriteLine("Load Start");
			var lines = GetLines();
            foreach(var line in lines)
            {
                var model = ParseLine(line);
            }
            Console.WriteLine("Load End");
        }
		
		protected abstract IEnumerable<HtmlNode> GetLines();
		
		protected abstract IModel ParseLine(HtmlNode line);
		
		protected abstract void SaveToBDD();
	}
}