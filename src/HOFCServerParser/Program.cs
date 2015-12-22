using HOFCServerNet.Models;
using HOFCServerParser.Parsers;
using System;

namespace HOFCServerParser
{
    public class Program
    {
        public static void Main(string[] args)
        { 
            string[] equipe = new string[] { "equipe1"/*, "equipe2", "equipe3"*/};
            foreach(string name in equipe)
            {
                var calendrierParser = new CalendrierParser(name);
                calendrierParser.Parse();
            }
            foreach (string name in equipe)
            {
                var classementParser = new ClassementParser(name);
                classementParser.Parse();
            }
            var actusParser = new ActusParser();
            actusParser.Parse();
            DateTime now = DateTime.Now;
            DateTime date;
            DateTime maxDate;
            if(now.Month <= 7)
            {
                date = new DateTime(now.Year - 1, 8, 1);
                maxDate = new DateTime(now.Year, 7, 1);
            }
            else
            {
                date = new DateTime(now.Year, 8, 1);
                maxDate = new DateTime(now.Year + 1, 7, 1);
            }
            while(date < maxDate)
            {
                var agendaParser = new AgendaParser(date.ToString("ddMMyyyy"));
                agendaParser.Parse();
                date = date.AddDays(7);
            }
        }
    }
}
