using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Models
{
    public class Actu
    {
        public int Id { get; set; }
        public int PostId { get; set; }
        public string Titre { get; set; }
        public string Texte { get; set; }
        public string URL { get; set; }
        public string ImageURL { get; set; }
        public DateTime Date { get; set; }
    }
}
