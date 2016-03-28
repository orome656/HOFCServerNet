using HOFCServerNet.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.ViewModels.Journee
{
    public class JourneeViewModel
    {
        public string Categorie { get; set; }
        public int IdJournee { get; set; }
        public int NbMatchs { get; set; }
        public List<Match> Matchs { get; set; }
    }
}
