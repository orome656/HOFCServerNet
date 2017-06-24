using Microsoft.EntityFrameworkCore;
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

        public DbSet<Tactique> Tactiques { get; set; }

        public DbSet<MatchInfos> MatchInfos { get; set; }

        public BddContext(DbContextOptions<BddContext> options) : base(options) { }

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
