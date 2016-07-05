using HOFCServerNet.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Utils.Notifications
{
    public interface INotificationSender
    {
        Task SendNotification(string titre, string message, NotificationClient client);
    }
}
