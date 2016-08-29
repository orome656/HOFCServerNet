using HOFCServerNet.Data.Models;
using NLog;
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
        private static readonly Logger _logger = LogManager.GetLogger("HOFCServerNet.Utils.Notifications.AndroidGCMNotificationSender");

        public async Task SendNotification(string titre, string message, NotificationClient client)
        {
            string URL = "https://android.googleapis.com/gcm/send";
            string SERVER_API_KEY = System.Environment.GetEnvironmentVariable("SERVER_API_KEY");
            var encodedMessage = System.Net.WebUtility.UrlEncode(message);
            var encodedTitle = System.Net.WebUtility.UrlEncode(titre);
            HttpClient httpClient = new HttpClient();

            httpClient.BaseAddress = new Uri(URL);
            httpClient.DefaultRequestHeaders
                    .Accept
                    .Add(new MediaTypeWithQualityHeaderValue("application/x-www-form-urlencoded"));
            httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Authorization", string.Format("key={0}", SERVER_API_KEY));
            string deviceId = client.NotificationID;
            string postData = "collapse_key=score_update&time_to_live=108&delay_while_idle=1&data.title=" + encodedTitle + "&data.message=" + encodedMessage + "&data.time=" + System.DateTime.Now.ToString() + "&registration_id=" + deviceId + "";
                
            var content = new StringContent(postData,
                                                Encoding.UTF8,
                                                "application/x-www-form-urlencoded");

            HttpResponseMessage response = await httpClient.PostAsync(URL, content);
            var responseString = await response.Content.ReadAsStringAsync();
            if (response.StatusCode != System.Net.HttpStatusCode.OK)
            {
                _logger.Error("Error while sending Android notification. Return code is " + response.StatusCode + ". Content is " + response.Content);
            }
            else if(responseString.Contains("NotRegistered"))
            {
                _logger.Error("Error while sending Android notification. Device is not registered");
            }
            else
            {
                _logger.Debug("Android notification OK. Content is " + responseString);
            }
        }
    }
}
