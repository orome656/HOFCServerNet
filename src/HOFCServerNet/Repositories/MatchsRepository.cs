using HOFCServerNet.Models;
using Microsoft.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Repositories
{
    public class MatchsRepository
    {
        public List<Match> GetAll()
        {
            using(var dbContext = new BddContext())
            {
                return dbContext.Matchs.Include(item => item.Competition).ToList();
            }
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
