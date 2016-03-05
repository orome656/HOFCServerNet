using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HOFCServerNet.Models;

namespace HOFCServerNet.APIModels
{
    public class Joueur: Models.Joueur
    {
        public List<string> Postes { get; set; }
        
    }
}
