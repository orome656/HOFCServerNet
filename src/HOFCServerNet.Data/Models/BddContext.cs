﻿using Microsoft.Data.Entity;
using Microsoft.Extensions.Configuration;

namespace HOFCServerNet.Models
{
    public class BddContext: DbContext
    {
        public DbSet<Calendrier> Calendriers { get; set; }
        public DbSet<Classement> Classements { get; set; }
        public DbSet<Actu> Actus { get; set; }
        public DbSet<Agenda> Agendas { get; set; }
        public DbSet<Journee> Journees { get; set; }
        public DbSet<NotificationClient> NotificationClients { get; set; }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var configurationBuilder = new ConfigurationBuilder();
            configurationBuilder.AddJsonFile("appsettings.json");
            configurationBuilder.AddEnvironmentVariables();
            var configuration = configurationBuilder.Build();

            // TODO a récupérer d'un fichier de conf
            optionsBuilder.UseSqlServer(configuration["Data:DefaultConnection:ConnectionString"]);
        }
    }
}
