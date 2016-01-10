using HOFCServerNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace HOFCServerParser.Utils
{
    public class AndroidGCMNotificationSender
    {
        public void SendNotification(string titre, string message)
        {
            string URL = "https://android.googleapis.com/gcm/send";
            using (var bddContext = new BddContext())
            {
                string SERVER_API_KEY = System.Environment.GetEnvironmentVariable("SERVER_API_KEY");
                var value = message;
                HttpClient client = new HttpClient();

                client.BaseAddress = new Uri(URL);
                client.DefaultRequestHeaders
                      .Accept
                      .Add(new MediaTypeWithQualityHeaderValue("application/x-www-form-urlencoded"));
                client.DefaultRequestHeaders.TryAddWithoutValidation("Authorization", string.Format("key={0}", SERVER_API_KEY));
                foreach(NotificationClient nClient in bddContext.NotificationClients.ToList())
                {
                    string deviceId = nClient.NotificationID;
                    string postData = "collapse_key=score_update&time_to_live=108&delay_while_idle=1&data.title=" + titre + "&data.message=" + value + "&data.time=" + System.DateTime.Now.ToString() + "&registration_id=" + deviceId + "";

                    var content = new StringContent(postData,
                                                        Encoding.UTF8,
                                                        "application/x-www-form-urlencoded");

                    HttpResponseMessage response = client.PostAsync(URL, content).Result;
                }
                //return sResponseFromServer;
            }
        }
    }
}
