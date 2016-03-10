using HOFCServerNet.APIModels;
using HOFCServerNet.Models;
using Microsoft.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Repositories
{
    public class CompositionsRepository
    {

        public List<APIModels.Composition> GetForMatch(int idMatch)
        {
            using(var bddContext = new BddContext())
            {
                List<Models.Composition> composBdd = bddContext.Compositions
                                                               .Where(c => c.Match.Id == idMatch)
                                                               .Include(c => c.Match)
                                                               .Include(c => c.Joueur)
                                                               .Include(c => c.Poste)
                                                               .ToList();
                List<APIModels.Composition> compos = new List<APIModels.Composition>();
                foreach(Models.Composition compoBdd in composBdd)
                {
                    compos.Add(compoBddToAPI(compoBdd));
                }
                return compos;
            }
        }

        private APIModels.Composition compoBddToAPI(Models.Composition compoBdd)
        {
            APIModels.Composition compo = new APIModels.Composition();
            compo.IdJoueur = compoBdd.Joueur.Id;
            compo.IdMatch = compoBdd.Match.Id;
            compo.PosteCompo = compoBdd.Poste.Nom;
            return compo;
        }

        public void SaveComposition(List<APIModels.Composition> compos)
        {
            using(var bddContext = new BddContext())
            {
                if(bddContext.Compositions.Where(c => c.Match.Id == compos[0].IdMatch).Any())
                {
                    bddContext.Compositions.RemoveRange(bddContext.Compositions.Where(c => c.Match.Id == compos[0].IdMatch));
                }
                foreach (APIModels.Composition compo in compos)
                {
                    Models.Composition nouveauCompoPoste = new Models.Composition();
                    Poste poste = bddContext.Postes.Where(p => p.Nom == compo.PosteCompo).First();
                    if (poste != null)
                    {
                        nouveauCompoPoste.Joueur = new Models.Joueur() { Id = compo.IdJoueur };
                        nouveauCompoPoste.Poste = poste;
                        nouveauCompoPoste.Match = new Match() { Id = compo.IdMatch };
                        bddContext.Compositions.Add(nouveauCompoPoste);
                    }
                }
                bddContext.SaveChanges();
            }
        }
    }
}
