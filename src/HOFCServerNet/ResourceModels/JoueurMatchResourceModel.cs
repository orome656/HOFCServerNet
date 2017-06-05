using HOFCServerNet.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.ResourceModels
{
    public class JoueurMatchResourceModel: Joueur
    {
        public JoueurMatchResourceModel(Joueur joueur)
        {
            this.Id = joueur.Id;
            this.Nom = joueur.Nom;
            this.Prenom = joueur.Prenom;
        }

        public string Poste { get; set; }
    }
}
