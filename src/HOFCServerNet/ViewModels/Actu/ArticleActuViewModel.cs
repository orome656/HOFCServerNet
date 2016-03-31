using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.ViewModels.Actu
{
    public class ArticleActuViewModel
    {
        public string Contenu { get; internal set; }
        public DateTime Date { get; internal set; }
        public string Titre { get; set; }
    }
}
