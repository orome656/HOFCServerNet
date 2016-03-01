using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Models;
using HOFCServerNet.Repositories;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    [Route("api/[controller]")]
    public class NotificationController : Controller
    {
        [FromServices]
        public NotificationRepository Repository { get; set; }

        public NotificationController(NotificationRepository _notificationRepository)
        {
            Repository = _notificationRepository;
        }

        // POST api/values
        [HttpPost]
        public void Post(string uuid, string notification_id)
        {
            if(uuid != null && notification_id != null)
            {
                Repository.AddNewClient(uuid, notification_id);
            } else
            {
                // TODO add logs here
            }
        }
    }
}
