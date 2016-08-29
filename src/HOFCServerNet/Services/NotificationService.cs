using HOFCServerNet.Data.Enums;
using HOFCServerNet.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Services
{
    public class NotificationService
    {
        public BddContext BddContext { get; set; }
        public NotificationService(BddContext dbContext)
        {
            BddContext = dbContext;
        }

        public void AddNewClient(ClientPlatform platform, string notificationId)
        {
            if(!BddContext.NotificationClients.Any(c => notificationId.Equals(c.NotificationID)))
            {
                var notificationClient = new NotificationClient
                {
                    Platform = platform,
                    NotificationID = notificationId
                };
                BddContext.NotificationClients.Add(notificationClient);
                BddContext.SaveChanges();
            }
        }
    }
}
