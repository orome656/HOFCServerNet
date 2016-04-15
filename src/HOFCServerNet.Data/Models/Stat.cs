using HOFCServerNet.Data.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Data.Models
{
    public class Stat
    {
        public int Id { get; set; }

        public int MatchId { get; set; }
        public virtual Match Match { get; set; }

        public int JoueurId { get; set; }
        public virtual Joueur Joueur { get; set; }

        public int TypeStat { get; set; } // But, Passe ...

        [NotMapped]
        public TypeStat TypeStatEnum { get { return (TypeStat)TypeStat; } }

        public int Nombre { get; set; }
    }
}
