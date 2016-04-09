using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Data.Models
{
    public class Stat
    {
        public int Id { get; set; }
        public Joueur Joueur { get; set; }
        public int TypeStat { get; set; } // But, Passe ...
        public int Nombre { get; set; }
    }
}
