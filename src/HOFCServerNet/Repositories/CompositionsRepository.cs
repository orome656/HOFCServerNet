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
                List<Models.Composition> composBdd = bddContext.Compositions.Where(c => c.Match.Id == idMatch).ToList();
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

        public void SaveComposition(APIModels.Composition compo)
        {
            using(var bddContext = new BddContext())
            {
                Models.Composition compoBdd = bddContext.Compositions
                                                        .Where(c => c.Match.Id == compo.IdMatch && c.Joueur.Id == compo.IdJoueur)
                                                        .Include(c => c.Poste)
                                                        .Include(c => c.Joueur)
                                                        .FirstOrDefault();
                if(compoBdd != null && compoBdd.Poste.Nom != compo.PosteCompo)
                {
                    Poste poste = bddContext.Postes.Where(p => p.Nom == compo.PosteCompo).First();
                    if(poste != null)
                    {
                        compoBdd.Poste = poste;
                        bddContext.SaveChanges();
                    }

                } 
                else
                {
                    Models.Composition compoBddPoste = bddContext.Compositions
                                                        .Where(c => c.Match.Id == compo.IdMatch && c.Poste.Nom == compo.PosteCompo)
                                                        .FirstOrDefault();
                    if(compoBddPoste != null && compoBddPoste.Joueur.Id != compo.IdJoueur)
                    {
                        bddContext.Remove(compoBddPoste);
                        Models.Composition nouveauCompoPoste = new Models.Composition();
                        nouveauCompoPoste.Joueur = new Models.Joueur() { Id = compo.IdJoueur };
                        nouveauCompoPoste.Poste = compoBddPoste.Poste;
                        nouveauCompoPoste.Match = compoBddPoste.Match;
                        bddContext.Compositions.Add(nouveauCompoPoste);
                        bddContext.SaveChanges();
                    } else if (compoBdd == null && compoBddPoste == null) {
                        Models.Composition nouveauCompoPoste = new Models.Composition();
                        Poste poste = bddContext.Postes.Where(p => p.Nom == compo.PosteCompo).First();
                        if (poste != null)
                        {
                            nouveauCompoPoste.Joueur = new Models.Joueur() { Id = compo.IdJoueur };
                            nouveauCompoPoste.Poste = poste;
                            nouveauCompoPoste.Match = new Match() { Id = compo.IdMatch};
                            bddContext.Compositions.Add(nouveauCompoPoste);
                            bddContext.SaveChanges();
                        }
                        
                    }
                }
            }
        }
    }
}
