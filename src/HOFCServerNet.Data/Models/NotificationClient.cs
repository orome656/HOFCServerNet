using HOFCServerNet.Data.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Data.Models
{
    public class NotificationClient
    {
        public int ID { get; set; }
        public ClientPlatform Platform { get; set; }
        public string NotificationID { get; set; }
    }
}
