using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Models
{
    public class Joueur
    {
        public int Id { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Categorie { get; set; }
        public List<int> Postes { get; set; }
    }
}
