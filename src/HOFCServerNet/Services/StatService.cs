using HOFCServerNet.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HOFCServerNet.ViewModels.Stat;
using Microsoft.EntityFrameworkCore;

namespace HOFCServerNet.Services
{
    public class StatService
    {

        private BddContext BddContext { get; set; }
        public StatService(BddContext dbContext)
        {
            BddContext = dbContext;
        }

        /// <summary>
        /// Retourne l'ensemble des stats de la saison courante
        /// </summary>
        /// <returns></returns>
        public List<Stat> GetSeasonStat()
        {
            var stats = BddContext.Stats
                             .GroupBy(x => new { x.JoueurId, x.TypeStat })
                             .Select(x => new Stat { JoueurId = x.Key.JoueurId, TypeStat = x.Key.TypeStat, Nombre = x.Count() })
                             .ToList();
            foreach (var stat in stats)
            {
                stat.Joueur = BddContext.Joueurs.FirstOrDefault(j => j.Id == stat.JoueurId);
            }
            return stats;
        }

        /// <summary>
        /// Retourne les stats pour un match 
        /// </summary>
        /// <param name="matchId">Identifiant du match</param>
        /// <returns></returns>
        public List<StatViewModel> GetStatsForMatch(int matchId)
        {
            BddContext.ChangeTracker.AutoDetectChangesEnabled = false;
            List<StatViewModel> results = new List<StatViewModel>();

            /*
            bddContext.Set<StatViewModel>().FromSql("select a.JoueurId, a.Nombre as Nombre, b.Nombre as NbPasse from "
                                      + "(select * from Stat where TypeStat = 0) a "
                                      + "full join "
                                      + "(select * from Stat where TypeStat = 1) b "
                                      + "on b.JoueurId = a.JoueurId; ").ToList();
            */


            var butRequest = (from s1 in BddContext.Stats
                              where s1.MatchId == matchId && s1.TypeStat == (int)Data.Enums.TypeStat.BUT
                              select s1).Include(s => s.Joueur).ToList();

            var passRequest = (from s1 in BddContext.Stats
                               where s1.MatchId == matchId && s1.TypeStat == (int)Data.Enums.TypeStat.PASSE
                               select s1).Include(s => s.Joueur).ToList();

            while (butRequest.Count > 0)
            {
                var butStat = butRequest.First();

                StatViewModel statVm = new StatViewModel();
                statVm.Joueur = butStat.Joueur;
                statVm.NbBut = butStat.Nombre;

                if (passRequest.Count > 0)
                {
                    var passStat = passRequest.Where(p => p.JoueurId == butStat.JoueurId).FirstOrDefault();
                    if (passStat != null)
                    {
                        statVm.NbPasse = passStat.Nombre;
                        passRequest.Remove(passStat);
                    }

                }
                butRequest.Remove(butStat);
                results.Add(statVm);
            }

            if (passRequest.Count > 0)
            {
                while (passRequest.Count > 0)
                {
                    var passeStat = passRequest.First();

                    StatViewModel statVm = new StatViewModel();
                    statVm.Joueur = passeStat.Joueur;
                    statVm.NbPasse = passeStat.Nombre;

                    passRequest.Remove(passeStat);
                    results.Add(statVm);
                }
            }

            /*
            var test = from s1 in bddContext.Stats
            where s1.MatchId == matchId && s1.TypeStatEnum == Data.Enums.TypeStat.BUT
            join s2 in bddContext.Stats on s1.JoueurId equals s2.JoueurId
            where s2.MatchId == matchId && s2.TypeStatEnum == Data.Enums.TypeStat.PASSE
            select new StatViewModel() { Joueur = s1.Joueur, NbBut = s1.Nombre, NbPasse = s2.Nombre };
            var result = test.ToList();
            */
            /*
            bddContext.Stats.Where(x => x.Match.Id == matchId && x.TypeStatEnum == Data.Enums.TypeStat.BUT)
                            .Join(bddContext.Stats.Where(x => x.Match.Id == matchId && x.TypeStatEnum == Data.Enums.TypeStat.PASSE), x => x.Joueur, y => y.Joueur, (x, y) => new StatViewModel() { Joueur = x.Joueur, NbBut = x.Nombre, NbPasse = y.Nombre })
                            .ToList();*/
            /*
            List<StatViewModel> results =  bddContext.Stats
                             .Where(x => x.Match.Id == matchId && x.TypeStatEnum == Data.Enums.TypeStat.BUT)
                             .Include(x => x.Joueur)
                             .Join(bddContext.Stats, x => x.JoueurId, y => y.JoueurId, (x,y) =>  new { Joueur = x.Joueur, TypeY = y.TypeStatEnum, NbBut = x.Nombre, NbPasse = y.Nombre})
                             .Where(g => g.TypeY == Data.Enums.TypeStat.PASSE)
                             .Select(g => new StatViewModel() { Joueur = g.Joueur, NbBut = g.NbBut, NbPasse = g.NbPasse})
                             .ToList();
            */
            return results;
        }

        /// <summary>
        /// Permet de sauvegarder des Stats
        /// </summary>
        /// <param name="viewModel"></param>
        internal void SaveStat(MatchStatViewModel viewModel)
        {
            Stat stat = new Stat()
            {
                JoueurId = viewModel.Joueur.Id,
                MatchId = viewModel.Match.Id,
                TypeStat = (int)viewModel.TypeStat,
                Nombre = viewModel.Nombre
            };

            if (BddContext.Stats.Where(s => s.JoueurId == stat.JoueurId && s.MatchId == stat.MatchId && s.TypeStat == stat.TypeStat).Any())
            {
                List<Stat> listStat = BddContext.Stats.Where(s => s.JoueurId == stat.JoueurId && s.MatchId == stat.MatchId && s.TypeStat == stat.TypeStat).ToList();
                foreach (Stat s in listStat)
                    BddContext.Stats.Remove(s);
            }
            BddContext.Stats.Add(stat);
            BddContext.SaveChanges();
        }
    }
}
