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
    }
}
