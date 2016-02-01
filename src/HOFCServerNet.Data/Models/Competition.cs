using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Models
{
    public class Competition: IModel
    {
        [Key]
        public string Nom { get; set; }
        public string Categorie { get; set; }
    }
}
