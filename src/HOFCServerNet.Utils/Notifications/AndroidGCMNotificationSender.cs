using HOFCServerNet.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace HOFCServerNet.Utils.Notifications
{
    public class AndroidGCMNotificationSender: INotificationSender
    {
        public async Task SendNotification(string titre, string message, NotificationClient client)
        {
            string URL = "https://android.googleapis.com/gcm/send";
            string SERVER_API_KEY = System.Environment.GetEnvironmentVariable("SERVER_API_KEY");
            var value = message;
            HttpClient httpClient = new HttpClient();

            httpClient.BaseAddress = new Uri(URL);
            httpClient.DefaultRequestHeaders
                    .Accept
                    .Add(new MediaTypeWithQualityHeaderValue("application/x-www-form-urlencoded"));
            httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Authorization", string.Format("key={0}", SERVER_API_KEY));
            string deviceId = client.NotificationID;
            string postData = "collapse_key=score_update&time_to_live=108&delay_while_idle=1&data.title=" + titre + "&data.message=" + value + "&data.time=" + System.DateTime.Now.ToString() + "&registration_id=" + deviceId + "";
                
            var content = new StringContent(postData,
                                                Encoding.UTF8,
                                                "application/x-www-form-urlencoded");

            HttpResponseMessage response = await httpClient.PostAsync(URL, content);
            //return sResponseFromServer;
        }
    }
}
