using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HOFCServerNet.Data.Models;
using HOFCServerNet.Services;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    [Route("api/[controller]")]
    public class NotificationController : Controller
    {
        public NotificationService Service { get; set; }

        public NotificationController(NotificationService _service)
        {
            Service = _service;
        }

        // POST api/values
        [HttpPost]
        public void Post(string uuid, string notification_id)
        {
            if(uuid != null && notification_id != null)
            {
                Service.AddNewClient(uuid, notification_id);
            } else
            {
                // TODO add logs here
            }
        }
    }
}
