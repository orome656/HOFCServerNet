using HOFCServerNet.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Services
{
    public class ClassementService
    {
        public List<Classement> GetAll()
        {
            using(var dbContext = new BddContext())
            {
                return dbContext.Classements
                             .OrderByDescending(item => item.Points)
                             .ThenByDescending(item => item.Difference)
                             .ToList();
            }
        }

        public List<Classement> GetByCategory(string categorie)
        {
            using(var dbContext = new BddContext())
            {
                return dbContext.Classements
                             .Where(item => item.Categorie.Equals(categorie))
                             .OrderByDescending(item => item.Points)
                             .ThenByDescending(item => item.Difference)
                             .ToList();
            }
        }

        public Dictionary<string, List<Classement>> GetAllOrderedByCategory()
        {
            using (var dbContext = new BddContext())
            {
                return dbContext.Classements
                             .OrderByDescending(item => item.Points)
                             .ThenByDescending(item => item.Difference)
                             .GroupBy(item => item.Categorie)
                             .ToDictionary(group => group.Key, group => group.ToList());
            }
        }
    }
}
