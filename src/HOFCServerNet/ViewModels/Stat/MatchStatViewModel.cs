using HOFCServerNet.Data.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.ViewModels.Stat
{
    public class MatchStatViewModel
    {
        public List<StatViewModel> Stats { get; set; }

        public List<Data.Models.Joueur> Joueurs { get; set; }

        public Data.Models.Match Match { get; set; }
        public Data.Models.Joueur Joueur { get; set; }
        public TypeStat TypeStat { get; set; }
        public int Nombre { get; set; }
    }
}
