using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Data.Models
{
    public class JoueurPoste
    {
        public int IdJoueur { get; set; }
        public Joueur Joueur { get; set; }

        public int IdPoste { get; set; }
        public Poste Poste { get; set; }
    }
}
