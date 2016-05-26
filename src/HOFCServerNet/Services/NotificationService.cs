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

        public void AddNewClient(string uuid, string notificationId)
        {
            var notificationClient = new NotificationClient
            {
                UUID = uuid,
                NotificationID = notificationId
            };
            BddContext.NotificationClients.Add(notificationClient);
            BddContext.SaveChanges();
        }
    }
}
