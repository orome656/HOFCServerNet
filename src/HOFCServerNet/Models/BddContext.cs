using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;

namespace HOFCServerNet.Models
{
    public class BddContext: DbContext
    {
        public DbSet<Calendrier> Calendriers { get; set; }
        public DbSet<Classement> Classements { get; set; }
        public DbSet<Actu> Actus { get; set; }

    }
}
