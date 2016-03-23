using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.ViewModels.Joueur
{
    public class JoueurViewModel
    {
        public string Message { get; set; }

        public List<JoueurDetailsViewModel> Joueurs { get; set; }
    }
}
