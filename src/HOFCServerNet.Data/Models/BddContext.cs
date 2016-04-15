using Microsoft.Data.Entity;
using Microsoft.Extensions.Configuration;

namespace HOFCServerNet.Data.Models
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
        public DbSet<Composition> Compositions { get; set; }
        public DbSet<Vote> Votes { get; set; }
        public DbSet<Stat> Stats { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var configurationBuilder = new ConfigurationBuilder();
            configurationBuilder.AddJsonFile("appsettings.json");
            configurationBuilder.AddEnvironmentVariables();
            var configuration = configurationBuilder.Build();
            
            optionsBuilder.UseSqlServer(configuration["Data:DefaultConnection:ConnectionString"]);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<JoueurPoste>()
                .HasKey(t => new { t.IdJoueur, t.IdPoste });

            modelBuilder.Entity<JoueurPoste>()
                .HasOne(jp => jp.Joueur)
                .WithMany(j => j.JoueurPostes)
                .HasForeignKey(jp => jp.IdJoueur);
            
            modelBuilder.Entity<JoueurPoste>()
                .HasOne(jp => jp.Poste)
                .WithMany(p => p.JoueurPostes)
                .HasForeignKey(jp => jp.IdPoste);
        }
    }
}
