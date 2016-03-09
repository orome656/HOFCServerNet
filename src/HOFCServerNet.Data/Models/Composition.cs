﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Models
{
    public class Composition
    {
        public int Id { get; set; }
        public Joueur Joueur { get; set; }
        public Poste Poste { get; set; }
        public Match Match { get; set; }
    }
}