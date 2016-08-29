using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HOFCServerNet.Data.Models;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json.Linq;
using NLog;

namespace HOFCServerNet.Utils.Notifications
{
    public class WNSNotificationSender : INotificationSender
    {
        private static readonly string ACCESS_TOKEN_URL_BASE = "https://login.live.com/";
        private static readonly string ACCESS_TOKEN_URL_PATH = "accesstoken.srf";

        private static string ACCESS_TOKEN;

        private static readonly Logger _logger = LogManager.GetLogger("HOFCServerNet.Utils.Notifications.WNSNotificationSender");

        public async Task SendNotification(string titre, string message, NotificationClient client)
        {
            if (ACCESS_TOKEN == null)
                await GetAccessToken();
            
            await CallNotificationSending(client.NotificationID, titre, message);
        }

        private async Task<string> GetAccessToken()
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(ACCESS_TOKEN_URL_BASE);
            string ClientId = Environment.GetEnvironmentVariable("WNS_CLIENT_ID");
            string ClientSecret = Environment.GetEnvironmentVariable("WNS_CLIENT_SECRET");

            HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Post, ACCESS_TOKEN_URL_PATH);
            List<KeyValuePair<string, string>> parameters = new List<KeyValuePair<string, string>>();
            parameters.Add(new KeyValuePair<string, string>("grant_type", "client_credentials"));
            parameters.Add(new KeyValuePair<string, string>("client_id", ClientId));
            parameters.Add(new KeyValuePair<string, string>("client_secret", ClientSecret));
            parameters.Add(new KeyValuePair<string, string>("scope", "notify.windows.com"));
            
            request.Content = new FormUrlEncodedContent(parameters);
            
            HttpResponseMessage response = await client.SendAsync(request);
            string responseContent = await response.Content.ReadAsStringAsync();

            JObject json = JObject.Parse(responseContent);
            ACCESS_TOKEN = json.Value<string>("access_token");
            return ACCESS_TOKEN;
        }

        private async Task CallNotificationSending(string url, string titre, string message)
        {
            HttpClient client = new HttpClient();
            HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Post, url);
            request.Headers.Add("Authorization", String.Format("Bearer {0}", ACCESS_TOKEN));
            request.Headers.Add("X-WNS-Type", "wns/toast");

            string xml = String.Format("<toast><visual><binding template='ToastGeneric'><text>{0}</text><text>{1}</text></binding></visual></toast>", titre, message);
            request.Content = new StringContent(xml);
            request.Content.Headers.ContentType = new MediaTypeHeaderValue("text/xml");

            var response = await client.SendAsync(request);
            if(response.StatusCode != System.Net.HttpStatusCode.OK)
            {
                var contentString = await response.Content.ReadAsStringAsync();
                _logger.Error("Error while sending windows notification. Status Code is " + response.StatusCode + ". Content is " + contentString);
            }
        }
    }
}
