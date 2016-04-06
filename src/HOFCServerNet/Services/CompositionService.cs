using HOFCServerNet.ViewModels;
using Models = HOFCServerNet.Data.Models;
using Microsoft.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Services
{
    public class CompositionService
    {

        public List<CompositionViewModel> GetForMatch(int idMatch)
        {
            using(var bddContext = new Models.BddContext())
            {
                List<Models.Composition> composBdd = bddContext.Compositions
                                                               .Where(c => c.Match.Id == idMatch)
                                                               .Include(c => c.Match)
                                                               .Include(c => c.Joueur)
                                                               .Include(c => c.Poste)
                                                               .ToList();
                List<CompositionViewModel> compos = new List<CompositionViewModel>();
                foreach(Models.Composition compoBdd in composBdd)
                {
                    compos.Add(compoBddToAPI(compoBdd));
                }
                return compos;
            }
        }

        /// <summary>
        /// Retourne l'ensemble des joueurs ainsi que ceux que les informations de composition configuré 
        /// pour chacun
        /// </summary>
        /// <param name="idMatch"></param>
        /// <returns></returns>
        public List<Models.Composition> GetJoueursForCompoEdit(int idMatch)
        {
            using(var bddContext = new Models.BddContext())
            {
                /*var test = bddContext.Joueurs
                                 .GroupJoin(bddContext.Compositions.Include(c => c.Poste),
                                       joueur => joueur.Id,
                                       composition => composition.Joueur.Id,
                                       (joueur, composition) => new Models.Composition {
                                               Joueur = joueur,
                                               Poste = composition.Where(c => c.Match.Id == idMatch).Select(c => c.Poste).FirstOrDefault()
                                           }
                                 )
                                 .ToList();
                return test;*/
                var compos = bddContext.Compositions.Where(c => c.Match.Id == idMatch).Include(c => c.Joueur).Include(c => c.Poste).ToList();
                var joueurs = bddContext.Joueurs.Where(j => !bddContext.Compositions
                                                                       .Where(c => c.Match.Id == idMatch)
                                                                       .Select(c => c.Joueur.Id)
                                                                       .Contains(j.Id)).Select(joueur=>new Models.Composition() { Joueur = joueur}).ToList();
                return compos.Concat(joueurs).ToList();
                /*var test = from joueur in bddContext.Joueurs
                           join composition in bddContext.Compositions on joueur.Id equals composition.Joueur.Id into cj
                           from subcompo in cj.DefaultIfEmpty()
                           where subcompo.Match.Id == idMatch
                           select new Models.Composition()
                           {
                               Joueur = joueur,
                               Poste = (subcompo == null) ? null : subcompo.Poste
                           };
                return test.ToList();*/
            }
        }

        public List<Models.Poste> GetPostes()
        {
            using (var bddContext = new Models.BddContext())
            {
                return bddContext.Postes.ToList();
            }
        }

        private CompositionViewModel compoBddToAPI(Models.Composition compoBdd)
        {
            CompositionViewModel compo = new CompositionViewModel();
            compo.IdJoueur = compoBdd.Joueur.Id;
            compo.IdMatch = compoBdd.Match.Id;
            compo.PosteCompo = compoBdd.Poste.Nom;
            return compo;
        }

        public void SaveComposition(List<CompositionViewModel> compos)
        {
            using(var bddContext = new Models.BddContext())
            {
                if(bddContext.Compositions.Where(c => c.Match.Id == compos[0].IdMatch).Any())
                {
                    bddContext.Compositions.RemoveRange(bddContext.Compositions.Where(c => c.Match.Id == compos[0].IdMatch));
                }
                foreach (CompositionViewModel compo in compos)
                {
                    Models.Composition nouveauCompoPoste = new Models.Composition();
                    Models.Poste poste = bddContext.Postes.Where(p => p.Nom == compo.PosteCompo).First();
                    if (poste != null)
                    {
                        nouveauCompoPoste.Joueur = new Models.Joueur() { Id = compo.IdJoueur };
                        nouveauCompoPoste.Poste = poste;
                        nouveauCompoPoste.Match = new Models.Match() { Id = compo.IdMatch };
                        bddContext.Compositions.Add(nouveauCompoPoste);
                    }
                }
                bddContext.SaveChanges();
            }
        }

        public void SaveComposition(int idMatch, List<Models.Composition> compos)
        {
            using (var bddContext = new Models.BddContext())
            {
                if (bddContext.Compositions.Where(c => c.Match.Id == idMatch).Any())
                {
                    bddContext.Compositions.RemoveRange(bddContext.Compositions.Where(c => c.Match.Id == idMatch));
                }
                foreach (Models.Composition compo in compos)
                {
                    if(compo.Match == null)
                    {
                        compo.Match = new Data.Models.Match()
                        {
                            Id = idMatch
                        };
                    }
                    bddContext.Compositions.Add(compo);
                }
                bddContext.SaveChanges();
            }
        }
    }
}
