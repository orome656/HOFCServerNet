using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Data.Models
{
    public class Composition
    {
        public int Id { get; set; }
        public int JoueurId { get; set; }
        public Joueur Joueur { get; set; }
        public int PosteId { get; set; }
        public Poste Poste { get; set; }
        public int MatchId { get; set; }
        public Match Match { get; set; }
    }
}
