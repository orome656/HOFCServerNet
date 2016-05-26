using HOFCServerNet.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Services
{
    public class ClassementService
    {
        private BddContext BddContext { get; set; }

        public ClassementService(BddContext dbContext)
        {
            BddContext = dbContext;
        }

        public List<Classement> GetAll()
        {
            return BddContext.Classements
                         .OrderByDescending(item => item.Points)
                         .ThenByDescending(item => item.Difference)
                         .ToList();
        }

        public List<Classement> GetByCategory(string categorie)
        {
            return BddContext.Classements
                            .Where(item => item.Categorie.Equals(categorie))
                            .OrderByDescending(item => item.Points)
                            .ThenByDescending(item => item.Difference)
                            .ToList();
        }

        public Dictionary<string, List<Classement>> GetAllOrderedByCategory()
        {
            return BddContext.Classements
                         .OrderByDescending(item => item.Points)
                         .ThenByDescending(item => item.Difference)
                         .GroupBy(item => item.Categorie)
                         .ToDictionary(group => group.Key, group => group.ToList());
        }
    }
}
