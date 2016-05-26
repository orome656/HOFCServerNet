using HOFCServerNet.ViewModels;
using Models = HOFCServerNet.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Services
{
    public class CompositionService
    {
        public Models.BddContext BddContext { get; set; }
        public CompositionService(Models.BddContext dbContext)
        {
            BddContext = dbContext;
        }

        public List<CompositionViewModel> GetForMatch(int idMatch)
        {
                List<Models.Composition> composBdd = BddContext.Compositions
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

        /// <summary>
        /// Retourne l'ensemble des joueurs ainsi que ceux que les informations de composition configuré 
        /// pour chacun
        /// </summary>
        /// <param name="idMatch"></param>
        /// <returns></returns>
        public List<Models.Composition> GetJoueursForCompoEdit(int idMatch)
        {
                /*var test = BddContext.Joueurs
                                 .GroupJoin(BddContext.Compositions.Include(c => c.Poste),
                                       joueur => joueur.Id,
                                       composition => composition.Joueur.Id,
                                       (joueur, composition) => new Models.Composition {
                                               Joueur = joueur,
                                               Poste = composition.Where(c => c.Match.Id == idMatch).Select(c => c.Poste).FirstOrDefault()
                                           }
                                 )
                                 .ToList();
                return test;*/
                var compos = BddContext.Compositions.Where(c => c.Match.Id == idMatch).Include(c => c.Joueur).Include(c => c.Poste).ToList();
                var joueurs = BddContext.Joueurs.Where(j => !BddContext.Compositions
                                                                       .Where(c => c.Match.Id == idMatch)
                                                                       .Select(c => c.Joueur.Id)
                                                                       .Contains(j.Id)).Select(joueur=>new Models.Composition() { Joueur = joueur}).ToList();
                return compos.Concat(joueurs).ToList();
                /*var test = from joueur in BddContext.Joueurs
                           join composition in BddContext.Compositions on joueur.Id equals composition.Joueur.Id into cj
                           from subcompo in cj.DefaultIfEmpty()
                           where subcompo.Match.Id == idMatch
                           select new Models.Composition()
                           {
                               Joueur = joueur,
                               Poste = (subcompo == null) ? null : subcompo.Poste
                           };
                return test.ToList();*/
        }

        internal void DeleteMatchComposition(int id)
        {
                var listCompo = BddContext.Compositions.Where(c => c.Match.Id == id).ToList();
                if (listCompo != null && listCompo.Count > 0)
                {
                    BddContext.RemoveRange(listCompo);
                    BddContext.SaveChanges();
                }
        }

        public List<Models.Poste> GetPostes()
        {
                return BddContext.Postes.ToList();
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
                if(BddContext.Compositions.Where(c => c.Match.Id == compos[0].IdMatch).Any())
                {
                    BddContext.Compositions.RemoveRange(BddContext.Compositions.Where(c => c.Match.Id == compos[0].IdMatch));
                }
                foreach (CompositionViewModel compo in compos)
                {
                    Models.Composition nouveauCompoPoste = new Models.Composition();
                    Models.Poste poste = BddContext.Postes.Where(p => p.Nom == compo.PosteCompo).First();
                    if (poste != null)
                    {
                        nouveauCompoPoste.Joueur = new Models.Joueur() { Id = compo.IdJoueur };
                        nouveauCompoPoste.Poste = poste;
                        nouveauCompoPoste.Match = new Models.Match() { Id = compo.IdMatch };
                        BddContext.Compositions.Add(nouveauCompoPoste);
                    }
                }
                BddContext.SaveChanges();
        }

        public void SaveComposition(int idMatch, List<Models.Composition> compos)
        {
                if (BddContext.Compositions.Where(c => c.Match.Id == idMatch).Any())
                {
                    BddContext.Compositions.RemoveRange(BddContext.Compositions.Where(c => c.Match.Id == idMatch));
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
                    BddContext.Compositions.Add(compo);
                }
                BddContext.SaveChanges();
        }
    }
}
