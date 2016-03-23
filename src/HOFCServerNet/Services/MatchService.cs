﻿using HOFCServerNet.Data.Models;
using Microsoft.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Services
{
    public class MatchService
    {
        public List<Match> GetAll()
        {
            using(var dbContext = new BddContext())
            {
                return dbContext.Matchs.Include(item => item.Competition).ToList();
            }
        }
        
        public Dictionary<string,List<Match>> GetAllGroupedByCategory()
        {
            Dictionary<string, List<Match>> mapMatchs = new Dictionary<string, List<Match>>();
            mapMatchs.Add("equipe1", this.GetMatchByCategory("equipe1"));
            mapMatchs.Add("equipe2", this.GetMatchByCategory("equipe2"));
            mapMatchs.Add("equipe3", this.GetMatchByCategory("equipe3"));
            return mapMatchs; // TODO voir comment faire en un seul appel ...
            /*using (var dbContext = new BddContext())
            {
                var test = from match in dbContext.Matchs
                           from comp in dbContext.Competitions
                           where match.CompetitionId == comp.Nom
                           select match;*/

                /*var matchMap = (from match in dbContext.Matchs
                                from competition in dbContext.Competitions
                                where competition.Nom == match.CompetitionId
                                group match by competition.Categorie
                                into matchs
                                select matchs).ToDictionary(group => group.Key, group => group.ToList());*/
                //group match by match.Competition.Categorie;

                //var sortie = test.ToDictionary(group => group.Key, group => group.ToList());

                /*var grouping = dbContext.Matchs
                                .Join(dbContext.Competitions, m => m.CompetitionId, c => c.Nom, (m,c) => new { Match = m, Competition = c})
                                .Select(x => x.Match)
                                .GroupBy(x => x.Competition.Categorie);
                return grouping.ToDictionary(group => group.Key, group => group.ToList());
            }*/
        }

        public List<Match> GetMatchsForHOFC()
        {
            using(var dbContext = new BddContext())
            {
                return dbContext.Matchs
                             .Where(item => item.Equipe1.Contains("HORGUES ODOS") || item.Equipe2.Contains("HORGUES ODOS")).OrderBy(item => item.Date)
                             .Include(item => item.Competition)
                             .ToList();
            }
        }

        public List<Match> GetMatchByCategoryAndJournee(string categorie, int numJournee)
        {
            using(var dbContext = new BddContext())
            {
                return dbContext.Matchs
                             .Where(item => item.Competition != null && item.Competition.Categorie.Equals(categorie) && item.IdJournee.Equals(numJournee))
                             .Include(item => item.Competition)
                             .ToList();
            }
        }

        internal Match GetMatchById(int id)
        {
            using (var dbContext = new BddContext())
            {
                return dbContext.Matchs
                             .Where(item => item.Id == id)
                             .Include(item => item.Competition)
                             .First();
            }
        }

        public List<Match> GetMatchsForHOFCByCategory(string categorie)
        {
            using(var dbContext = new BddContext())
            {
                return dbContext.Matchs
                                .Where(item => item.Competition != null && item.Competition.Categorie.Equals(categorie) && (item.Equipe1.Contains("HORGUES ODOS") || item.Equipe2.Contains("HORGUES ODOS")))
                                .OrderBy(item => item.Date)
                                .Include(item => item.Competition)
                                .ToList();
            }
        }

        public List<Match> GetMatchByCategory(string categorie)
        {
            using(var dbContext = new BddContext())
            {
                return dbContext.Matchs
                                .Include(item => item.Competition)
                                .Where(item => item.Competition.Categorie == categorie)
                                .ToList();
            }
        }

        public List<Match> GetMatchBetweenDates(DateTime date, DateTime dateEnd)
        {
            using (var dbContext = new BddContext())
            {
                return dbContext.Matchs.Where(item => date.CompareTo(item.Date) <= 0 && dateEnd.CompareTo(item.Date) > 0)
                                       .Include(item => item.Competition)
                                       .ToList();
            }
        }
    }
}