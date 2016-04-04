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
                var test = from joueur in bddContext.Joueurs
                           /*join composition in bddContext.Compositions on joueur.Id equals composition.Joueur.Id into cj
                           from subcompo in cj.DefaultIfEmpty()
                           where subcompo.Match.Id == idMatch*/
                           select new Models.Composition()
                           {
                               Joueur = joueur//,
                               //Poste = (subcompo == null) ? null : subcompo.Poste
                           };
                return test.ToList();
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
    }
}
