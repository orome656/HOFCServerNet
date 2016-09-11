using HOFCServerNet.Data.Models;
using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Utils.Notifications
{
    public class NotificationHub
    {
        private static readonly Logger _logger = LogManager.GetLogger("HOFCServerNet.Utils.Notifications.AndroidGCMNotificationSender");

        private AndroidGCMNotificationSender AndroidNotif = new AndroidGCMNotificationSender();
        private WNSNotificationSender WindowsNotif = new WNSNotificationSender();
        private BddContext BddContext;

        public NotificationHub(BddContext bddContext)
        {
            BddContext = bddContext;
        }

        public async Task NotifyAll(string titre, string message)
        {
            _logger.Info("Start sending notification. Title : {0}, Message : {1}", titre, message);
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
            _logger.Info("End sending notification.", titre, message);
        }
    }
}
