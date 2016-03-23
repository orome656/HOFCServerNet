using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.ViewModels.Joueur
{
    public class JoueurDetailsViewModel
    {
        public int? Id { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Categorie { get; set; }
        public List<string> Postes { get; set; }
    }
}
