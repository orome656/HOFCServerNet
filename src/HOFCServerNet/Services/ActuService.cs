using HOFCServerNet.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Services
{
    public class ActuService
    {
        public List<Actu> GetAll()
        {
            using(var dbContext = new BddContext())
            {
                return dbContext.Actus.OrderByDescending(item => item.Date).ToList();
            }
        }
    }
}
