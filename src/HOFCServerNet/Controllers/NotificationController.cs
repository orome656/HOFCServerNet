using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.Controllers
{
    [Route("api/[controller]")]
    public class NotificationController : Controller
    {
        // POST api/values
        [HttpPost]
        public void Post(string uuid, string notification_id)
        {
            if(uuid != null && notification_id != null)
            {
                using (var bddContext = new BddContext())
                {
                    var notificationClient = new NotificationClient
                    {
                        UUID = uuid,
                        NotificationID = notification_id
                    };
                    bddContext.NotificationClients.Add(notificationClient);
                    bddContext.SaveChanges();
                }
            } else
            {
                // TODO add logs here
            }
        }
    }
}
