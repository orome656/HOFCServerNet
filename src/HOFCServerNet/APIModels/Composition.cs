
using HOFCServerNet.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.APIModels
{
    public class Composition
    {
        public int IdMatch { get; set; }
        public int IdJoueur { get; set; }
        public string PosteCompo { get; set; }
    }
}
