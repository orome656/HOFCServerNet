using HOFCServerNet.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Utils.Notifications
{
    public class NotificationHub
    {
        private AndroidGCMNotificationSender AndroidNotif = new AndroidGCMNotificationSender();
        private WNSNotificationSender WindowsNotif = new WNSNotificationSender();
        private BddContext BddContext;

        public NotificationHub(BddContext bddContext)
        {
            BddContext = bddContext;
        }

        public async Task NotifyAll(string titre, string message)
        {
            foreach(NotificationClient client in BddContext.NotificationClients.ToList())
            {
                switch(client.Platform)
                {
                    case Data.Enums.ClientPlatform.Android:
                        await AndroidNotif.SendNotification(titre, message, client);
                        break;
                    case Data.Enums.ClientPlatform.Windows:
                        await WindowsNotif.SendNotification(titre, message, client);
                        break;
                }
            }
        }
    }
}
