using HOFCServerNet.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Services
{
    public class ActuService
    {
        private BddContext BddContext { get; set; }

        public ActuService(BddContext dbContext)
        {
            BddContext = dbContext;
        }

        public List<Actu> GetAll()
        {
            return BddContext.Actus.OrderByDescending(item => item.Date).ToList();
        }
    }
}
