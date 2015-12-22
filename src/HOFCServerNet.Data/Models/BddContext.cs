using Microsoft.Data.Entity;

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
            // TODO a récupérer d'un fichier de conf
            optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=MyDB;Trusted_Connection=True;");
        }
    }
}
