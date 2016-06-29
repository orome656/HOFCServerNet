using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HOFCServerNet.Data.Models;
using HOFCServerNet.Services;
using HOFCServerNet.Data.Enums;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    /// <summary>
    /// Permet de gérer les notification
    /// </summary>
    [Route("api/[controller]")]
    public class NotificationController : Controller
    {
        private NotificationService Service { get; set; }

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="_service"></param>
        public NotificationController(NotificationService _service)
        {
            Service = _service;
        }

        /// <summary>
        /// Permet de s'enregistrer pour recevoir les notifications
        /// </summary>
        /// <param name="platform"></param>
        /// <param name="notification_id"></param>
        [HttpPost]
        public void Post(ClientPlatform platform, string notification_id)
        {
            if(platform != 0 && notification_id != null)
            {
                Service.AddNewClient(platform, notification_id);
            } else
            {
                // TODO add logs here
            }
        }
    }
}
