using HOFCServerNet.Data.Constants;
using HOFCServerNet.Data.Models;
using HOFCServerNet.Utils.Common;
using HOFCServerParser.Parsers;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using NLog;
using System;
using System.IO;

namespace HOFCServerParser
{
    public class Program
    {
        public static IConfigurationRoot Configuration { get; set; }
        public static DbContextOptions<BddContext> Options { get; set; }
        private static Logger Logger = LogManager.GetCurrentClassLogger();

        public static void Main(string[] args)
        {
            Logger.Info("Update Batch Starting");

            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .AddEnvironmentVariables();
            Configuration = builder.Build();
            
            DbContextOptionsBuilder<BddContext> options = new DbContextOptionsBuilder<BddContext>();
            options.UseSqlite(Program.Configuration["Data:DefaultConnection:ConnectionString"]);

            Options = options.Options;

            string[] equipe = new string[] { "equipe1", "equipe2", "equipe3"};

            // Parsing classement
            ParseClassement(equipe);

            // Parsing des actualités
            ParseActus();

            // Parsing des pages Agendas
            ParseAgendas();

            // Parsing des pages par journées
            ParseJournees();

            Logger.Info("Update Batch End");
        }

        private static void ParseCalendriers(string[] equipes)
        {
            foreach (string name in equipes)
            {
                var calendrierParser = new CalendrierParser(name);
                calendrierParser.Parse();
            }
        }

        private static void ParseActus()
        {
            var actusParser = new ActusParser();
            actusParser.Parse();
        }

        static void ParseClassement(string[] equipes)
        {
            foreach (string name in equipes)
            {
                var classementParser = new ClassementParser(name, Configuration["Parser:" + SeasonTool.GetSeasonIndex() + ":" + name + ":NomCompetition"]);
                classementParser.Parse();
            }
        }

        static void ParseAgendas()
        {
            DateTime now = DateTime.Now;
            DateTime date;
            DateTime maxDate;
            if (now.Month <= 7)
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

            while (date < maxDate)
            {
                var agendaParser = new AgendaParser(date.ToString("ddMMyyyy"));
                agendaParser.Parse();
                date = date.AddDays(7);
            }
        }

        static void ParseJournees(/*string[] equipes*/)
        {
            int nbJourneesEquipe1 = AppConstants.NbMatchEquipe1;
            int nbJourneesEquipe2 = AppConstants.NbMatchEquipe2;
            int nbJourneesEquipe3 = AppConstants.NbMatchEquipe3;
            string seasonIndex = SeasonTool.GetSeasonIndex();
            for (var i = 1; i <= nbJourneesEquipe1; i++)
            {
                JourneeParser parser = new JourneeParser("equipe1", i, "EXCELLENCE POULE UNIQUE", seasonIndex);
                parser.Parse();
            }
            for (var i = 1; i <= nbJourneesEquipe2; i++)
            {
                JourneeParser parser = new JourneeParser("equipe2", i, "PREMIERE DIVISION POULE UNIQUE", seasonIndex);
                parser.Parse();
            }
            for (var i = 1; i <= nbJourneesEquipe3; i++)
            {
                JourneeParser parser = new JourneeParser("equipe3", i, "PROMOTION 1ERE DIVISION POULE A", seasonIndex);
                parser.Parse();
            }
        }
    }
}
