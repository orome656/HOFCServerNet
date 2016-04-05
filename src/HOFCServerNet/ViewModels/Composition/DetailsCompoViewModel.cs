using HOFCServerNet.Data.Models;
using HOFCServerNet.ViewModels.Joueur;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.ViewModels.Composition
{
    public class DetailsCompoViewModel
    {
        public Match Match { get; set; }
        public List<Data.Models.Composition> Compositions { get; set; }
        public List<Poste> PostesPossibles { get; set; }
    }
}
