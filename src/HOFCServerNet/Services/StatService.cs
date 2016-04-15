﻿using HOFCServerNet.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HOFCServerNet.ViewModels.Stat;
using Microsoft.Data.Entity;

namespace HOFCServerNet.Services
{
    public class StatService
    {
        public List<Stat> GetSeasonStat()
        {
            using(var bddContext = new BddContext())
            {
                var stats =  bddContext.Stats
                                 .GroupBy(x => new { x.JoueurId, x.TypeStat })
                                 .Select(x => new Stat { JoueurId = x.Key.JoueurId, TypeStat = x.Key.TypeStat, Nombre = x.Count() })
                                 .ToList();
                foreach(var stat in stats)
                {
                    stat.Joueur = bddContext.Joueurs.FirstOrDefault(j => j.Id == stat.JoueurId);
                }
                return stats;
            }
        }

        public List<StatViewModel> GetStatsForMatch(int matchId)
        {
            using (var bddContext = new BddContext())
            {
                bddContext.ChangeTracker.AutoDetectChangesEnabled = false;
                List<StatViewModel> results = new List<StatViewModel>();

                /*
                bddContext.Set<StatViewModel>().FromSql("select a.JoueurId, a.Nombre as Nombre, b.Nombre as NbPasse from "
                                          + "(select * from Stat where TypeStat = 0) a "
                                          + "full join "
                                          + "(select * from Stat where TypeStat = 1) b "
                                          + "on b.JoueurId = a.JoueurId; ").ToList();
                */


                var butRequest = (from s1 in bddContext.Stats
                                  where s1.MatchId == matchId && s1.TypeStat == (int)Data.Enums.TypeStat.BUT
                                  select s1).Include(s => s.Joueur).ToList();

                var passRequest = (from s1 in bddContext.Stats
                                   where s1.MatchId == matchId && s1.TypeStat == (int)Data.Enums.TypeStat.PASSE
                                   select s1).Include(s => s.Joueur).ToList();
                
                while (butRequest.Count > 0)
                {
                    var butStat = butRequest.First();

                    StatViewModel statVm = new StatViewModel();
                    statVm.Joueur = butStat.Joueur;
                    statVm.NbBut = butStat.Nombre;

                    if(passRequest.Count > 0)
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

                if(passRequest.Count > 0)
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
        }

        internal void SaveStat(MatchStatViewModel viewModel)
        {
            Stat stat = new Stat()
            {
                JoueurId = viewModel.Joueur.Id,
                MatchId = viewModel.Match.Id,
                TypeStat = (int)viewModel.TypeStat,
                Nombre = viewModel.Nombre
            };

            using(var bddContext = new BddContext())
            {
                if(bddContext.Stats.Where(s => s.JoueurId == stat.JoueurId && s.MatchId == stat.MatchId && s.TypeStat == stat.TypeStat).Any())
                {
                    List<Stat> listStat = bddContext.Stats.Where(s => s.JoueurId == stat.JoueurId && s.MatchId == stat.MatchId && s.TypeStat == stat.TypeStat).ToList();
                    foreach(Stat s in listStat)
                        bddContext.Stats.Remove(s);
                }
                bddContext.Stats.Add(stat);
                bddContext.SaveChanges();
            }

        }
    }
}
