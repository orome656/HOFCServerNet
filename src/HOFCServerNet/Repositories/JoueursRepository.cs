using HOFCServerNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Repositories
{
    public class JoueursRepository
    {
        public List<Joueur> GetAll()
        {
            using(var bddContext = new BddContext())
            {
                return bddContext.Joueurs.ToList();
            }
        }

        public Joueur GetById(int id)
        {
            using (var bddContext = new BddContext())
            {
                return bddContext.Joueurs.Where(item => item.Id == id).First();
            }
        }

        public void Delete(int id)
        {
            using (var bddContext = new BddContext())
            {
                Joueur joueur = bddContext.Joueurs.Where(item => item.Id == id).FirstOrDefault();
                if (joueur != null)
                {
                    bddContext.Joueurs.Remove(joueur);
                    bddContext.SaveChanges();
                }
            }
        }
    }
}
