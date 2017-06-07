using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace HOFCServerNet.Data.Models
{
    public class Tactique
    {
        [Key]
        public string Nom { get; set; }
        public int NbDG { get; set; }
        public int NbDC { get; set; }
        public int NbDD { get; set; }
        public int NbMDF { get; set; }
        public int NbMG { get; set; }
        public int NbMC { get; set; }
        public int NbMD { get; set; }
        public int NbMO { get; set; }
        public int NbAIG { get; set; }
        public int NbBT { get; set; }
        public int NbAID { get; set; }
    }
}
