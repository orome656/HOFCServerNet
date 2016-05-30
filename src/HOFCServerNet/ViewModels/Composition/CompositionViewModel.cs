
using HOFCServerNet.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.ViewModels
{
    /// <summary>
    /// Lie le poste d'un joueur pour un match
    /// </summary>
    public class CompositionViewModel
    {
        /// <summary>
        /// L'identifiant du match
        /// </summary>
        public int IdMatch { get; set; }
        /// <summary>
        /// L'identifiant du joueur
        /// </summary>
        public int IdJoueur { get; set; }
        /// <summary>
        /// Le poste occupé par le joueur pour ce match
        /// </summary>
        public string PosteCompo { get; set; }
    }
}
