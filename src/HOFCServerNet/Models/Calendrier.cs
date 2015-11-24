﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Models
{
    public class Calendrier
    {
        public int Id { get; set; }
        public string Equipe1 { get; set; }
        public string Equipe2 { get; set; }
        public int Score1 { get; set; }
        public int Score2 { get; set; }
        public DateTime Date { get; set; }
        public string Categorie { get; set; }
    }
}
