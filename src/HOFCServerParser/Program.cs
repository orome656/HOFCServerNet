using HOFCServerNet.Data.Constants;
using HOFCServerNet.Data.Models;
using HOFCServerNet.Utils.Common;
using HOFCServerParser.Database;
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

            string env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .AddJsonFile($"appsettings.{env}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
            
            DbContextOptionsBuilder<BddContext> options = new DbContextOptionsBuilder<BddContext>();
            options.UseMySql(Program.Configuration["Data:DefaultConnection:ConnectionString"]);

            Options = options.Options;

            string[] equipe = new string[] { "equipe1", "equipe2", "equipe3"};
            
            // Parsing des actualités
            ParseActus();

            if(DateTime.Now.Month != 7)
            {
                // Parsing classement
                ParseClassement(equipe);

                // Parsing des pages Agendas
                ParseAgendas();

                // Parsing des pages par journées
                ParseJournees();
            }

            Logger.Info("Update Batch End");
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
            DateTime date = DateTime.Now.AddDays(-7);
            DateTime maxDate = DateTime.Now.AddDays(7);

            if (date.DayOfWeek != DayOfWeek.Monday)
                date = date.Subtract(new TimeSpan((int)date.DayOfWeek - 1, 0, 0, 0));

            while (date <= maxDate)
            {
                var agendaParser = new AgendaParser(date.ToString("ddMMyyyy"));
                agendaParser.Parse();
                date = date.AddDays(7);
            }
        }

        static void ParseJournees(/*string[] equipes*/)
        {
            DatabaseManager manager = new DatabaseManager();

            int nbJourneesEquipe1 = AppConstants.NbMatchEquipe1;
            int? idJourneeCouranteEquipe1 = manager.GetCurrentJournee("equipe1");

            int nbJourneesEquipe2 = AppConstants.NbMatchEquipe2;
            int? idJourneeCouranteEquipe2 = manager.GetCurrentJournee("equipe2");

            int nbJourneesEquipe3 = AppConstants.NbMatchEquipe3;
            int? idJourneeCouranteEquipe3 = manager.GetCurrentJournee("equipe3");

            string seasonIndex = SeasonTool.GetSeasonIndex();

            int startIndex = 1;
            int endIndex = nbJourneesEquipe1;

            if(idJourneeCouranteEquipe1.HasValue)
            {
                startIndex = (idJourneeCouranteEquipe1.Value > 1) ? idJourneeCouranteEquipe1.Value - 1 : 1;
                endIndex = (idJourneeCouranteEquipe1.Value < nbJourneesEquipe1) ? idJourneeCouranteEquipe1.Value + 1 : idJourneeCouranteEquipe1.Value;
            }

            for (var i = startIndex; i <= endIndex; i++)
            {
                JourneeParser parser = new JourneeParser("equipe1", i, Configuration["Parser:" + SeasonTool.GetSeasonIndex() + ":equipe1:NomCompetition"], seasonIndex);
                parser.Parse();
            }

            startIndex = 1;
            endIndex = nbJourneesEquipe2;

            if (idJourneeCouranteEquipe2.HasValue)
            {
                startIndex = (idJourneeCouranteEquipe2.Value > 1) ? idJourneeCouranteEquipe2.Value - 1 : 1;
                endIndex = (idJourneeCouranteEquipe2.Value < nbJourneesEquipe2) ? idJourneeCouranteEquipe2.Value + 1 : idJourneeCouranteEquipe2.Value;
            }

            for (var i = startIndex; i <= endIndex; i++)
            {
                JourneeParser parser = new JourneeParser("equipe2", i, Configuration["Parser:" + SeasonTool.GetSeasonIndex() + ":equipe2:NomCompetition"], seasonIndex);
                parser.Parse();
            }


            startIndex = 1;
            endIndex = nbJourneesEquipe3;

            if (idJourneeCouranteEquipe3.HasValue)
            {
                startIndex = (idJourneeCouranteEquipe3.Value > 1) ? idJourneeCouranteEquipe3.Value - 1 : 1;
                endIndex = (idJourneeCouranteEquipe3.Value < nbJourneesEquipe3) ? idJourneeCouranteEquipe3.Value + 1 : idJourneeCouranteEquipe3.Value;
            }

            for (var i = startIndex; i <= endIndex; i++)
            {
                JourneeParser parser = new JourneeParser("equipe3", i, Configuration["Parser:" + SeasonTool.GetSeasonIndex() + ":equipe3:NomCompetition"], seasonIndex);
                parser.Parse();
            }
        }
    }
}
