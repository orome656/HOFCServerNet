using HOFCServerNet.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Repositories
{
    public class ClassementRepository
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
    }
}
