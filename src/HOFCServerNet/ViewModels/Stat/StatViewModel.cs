using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.ViewModels.Stat
{
    public class StatViewModel
    {
        public Data.Models.Joueur Joueur { get; set; }
        public int NbPasse { get; set; }
        public int NbBut { get; set; }
    }
}
