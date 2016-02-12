using Microsoft.Data.Entity;
using Microsoft.Extensions.Configuration;

namespace HOFCServerNet.Models
{
    public class BddContext : DbContext
    {
        public DbSet<Match> Matchs { get; set; }
        public DbSet<Classement> Classements { get; set; }
        public DbSet<Competition> Competitions { get; set;}
        public DbSet<Actu> Actus { get; set; }
        public DbSet<NotificationClient> NotificationClients { get; set; }
        public DbSet<Poste> Postes { get; set; }
        public DbSet<Joueur> Joueurs { get; set; }

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
