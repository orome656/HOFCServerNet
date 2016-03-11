using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HOFCServerNet.Data.Models;

namespace HOFCServerNet.APIModels
{
    public class Joueur: Data.Models.Joueur
    {
        public List<string> Postes { get; set; }
        
    }
}
