using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Data.Models
{
    public class Poste
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(10)]
        public string Nom { get; set; }
        public virtual List<JoueurPoste> JoueurPostes { get; set; }
    }
}
