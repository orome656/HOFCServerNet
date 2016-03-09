﻿using HOFCServerNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Repositories
{
    public class NotificationRepository
    {
        public void AddNewClient(string uuid, string notificationId)
        {
            using(var dbContext = new BddContext())
            {
                var notificationClient = new NotificationClient
                {
                    UUID = uuid,
                    NotificationID = notificationId
                };
                dbContext.NotificationClients.Add(notificationClient);
                dbContext.SaveChanges();
            }
        }
    }
}