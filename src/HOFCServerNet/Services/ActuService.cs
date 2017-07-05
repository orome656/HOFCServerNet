using HOFCServerNet.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HOFCServerNet.Parsers;

namespace HOFCServerNet.Services
{
    public class ActuService
    {
        private BddContext BddContext { get; set; }

        public ActuService(BddContext dbContext)
        {
            BddContext = dbContext;
        }

        public List<Actu> GetAll()
        {
            return BddContext.Actus.OrderByDescending(item => item.Date).ToList();
        }

        public Actu Get(int id) {
            var actu = BddContext.Actus.Where(a => a.PostId == id).FirstOrDefault();
            if(actu != null) {
                var url = actu.URL;
                
                if(!string.IsNullOrWhiteSpace(url) && url.Contains("en-image"))
                {
                    var diaporama = DiaporamaParser.Parse(url);
                    actu.Photos = diaporama;
                    BddContext.SaveChanges();
                    // Add Modified
                }
                else if(!string.IsNullOrWhiteSpace(url))
                {
                    var article = ArticleParser.Parse(url);
                    actu.Contenu = article.Contenu;
                    BddContext.SaveChanges();
                }

                return actu;
            } else {
                return null;
            }
        }
    }
}
