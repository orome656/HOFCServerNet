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
            var notRegisteredDevices = new List<NotificationClient>();

            foreach(NotificationClient client in BddContext.NotificationClients.ToList())
            {
                NotificationResult result = NotificationResult.OK;
                switch(client.Platform)
                {
                    case Data.Enums.ClientPlatform.Android:
                        result = await AndroidNotif.SendNotification(titre, message, client);
                        break;
                    case Data.Enums.ClientPlatform.Windows:
                        result = await WindowsNotif.SendNotification(titre, message, client);
                        break;
                }
                if (result == NotificationResult.NOT_REGISTERED) notRegisteredDevices.Add(client);
            }
            _logger.Info("End sending notification.", titre, message);

            if(notRegisteredDevices.Count > 0)
            {
                _logger.Info("Start purging old notification client");

                try
                {
                    await PurgeClient(notRegisteredDevices);
                    _logger.Info("End purging old notification client");
                }
                catch (Exception e)
                {
                    _logger.Error(e, "Error while purging clients");
                }
            }

        }

        private async Task PurgeClient(List<NotificationClient> clients)
        {
            foreach(var client in clients)
            {
                BddContext.NotificationClients.Remove(client);
            }
            await BddContext.SaveChangesAsync();
        }
    }
}
