using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HOFCServerNet.Data.Models;
using HOFCServerNet.Services;
using HOFCServerNet.Data.Enums;
using NLog;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    /// <summary>
    /// Permet de gérer les notification
    /// </summary>
    [Route("api/[controller]")]
    public class NotificationController : Controller
    {
        private NotificationService _notificationService { get; set; }
        private Logger _logger = LogManager.GetLogger("HOFCServerNet.API.NotificationController");

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="notificationService"></param>
        public NotificationController(NotificationService notificationService)
        {
            _notificationService = notificationService;
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
                _notificationService.AddNewClient(platform, notification_id);
            } else
            {
                _logger.Warn("Notification registering called. Missing parameter");
            }
        }
    }
}
