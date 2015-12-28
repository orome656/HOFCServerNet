using HOFCServerNet.Data.Constants;
using HOFCServerNet.Models;
using HOFCServerParser.Parsers;
using System;

namespace HOFCServerParser
{
    public class Program
    {
        public static void Main(string[] args)
        { 
            string[] equipe = new string[] { "equipe1", "equipe2", "equipe3"};
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
            if (date.DayOfWeek != DayOfWeek.Monday)
                date = date.Subtract(new TimeSpan((int)date.DayOfWeek - 1, 0, 0, 0));

            while(date < maxDate)
            {
                var agendaParser = new AgendaParser(date.ToString("ddMMyyyy"));
                agendaParser.Parse();
                date = date.AddDays(7);
            }

            int nbJourneesEquipe1 = AppConstants.NbMatchEquipe1;
            int nbJourneesEquipe2 = AppConstants.NbMatchEquipe2;
            int nbJourneesEquipe3 = AppConstants.NbMatchEquipe3;
            for(var i=1;i<=nbJourneesEquipe1;i++)
            {
                JourneeParser parser = new JourneeParser("equipe1", i);
                parser.Parse();
            }
            for (var i = 1; i <= nbJourneesEquipe2; i++)
            {
                JourneeParser parser = new JourneeParser("equipe2", i);
                parser.Parse();
            }
            for (var i = 1; i <= nbJourneesEquipe3; i++)
            {
                JourneeParser parser = new JourneeParser("equipe3", i);
                parser.Parse();
            }
        }
    }
}
