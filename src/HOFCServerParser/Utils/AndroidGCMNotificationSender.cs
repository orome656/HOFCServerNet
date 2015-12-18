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
                string SERVER_API_KEY = "server api key";
                var SENDER_ID = "application number";
                var value = message;
                HttpClient client = new HttpClient();

                client.BaseAddress = new Uri(URL);
                client.DefaultRequestHeaders
                      .Accept
                      .Add(new MediaTypeWithQualityHeaderValue("application/x-www-form-urlencoded"));
                client.DefaultRequestHeaders.Add("Authorization", string.Format("key={0}", SERVER_API_KEY));
                client.DefaultRequestHeaders.Add("Sender", string.Format("id={0}", SENDER_ID));
                foreach(NotificationClient nClient in bddContext.NotificationClients.ToList())
                {
                    string deviceId = nClient.NotificationID;
                    string postData = "collapse_key=score_update&time_to_live=108&delay_while_idle=1&data.message=" + value + "&data.time=" + System.DateTime.Now.ToString() + "&registration_id=" + deviceId + "";

                    var content = new StringContent(postData,
                                                        Encoding.UTF8,
                                                        "application/x-www-form-urlencoded;charset=UTF-8");

                    HttpResponseMessage response = client.PostAsync(URL, content).Result;
                }
                //return sResponseFromServer;
            }
        }
    }
}
