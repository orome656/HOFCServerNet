using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HOFCServerNet.Data.Models;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json.Linq;

namespace HOFCServerNet.Utils.Notifications
{
    public class WNSNotificationSender : INotificationSender
    {
        private static readonly string ACCESS_TOKEN_URL_BASE = "https://login.live.com/";
        private static readonly string ACCESS_TOKEN_URL_PATH = "accesstoken.srf";

        private static string ACCESS_TOKEN;


        public async Task SendNotification(string titre, string message, NotificationClient client)
        {
            if (ACCESS_TOKEN == null)
                await GetAccessToken();
            
            CallNotificationSending(client.NotificationID, titre, message);
        }

        private async Task<string> GetAccessToken()
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(ACCESS_TOKEN_URL_BASE);
            string ClientId = Environment.GetEnvironmentVariable("WNS_CLIENT_ID");
            string ClientSecret = Environment.GetEnvironmentVariable("WNS_CLIENT_SECRET");

            HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Post, ACCESS_TOKEN_URL_PATH);

            request.Content = new StringContent(String.Format("grant_type=client_credentials&client_id={0}&client_secret={1}&scope=notify.windows.com", ClientId, ClientSecret));
            request.Content.Headers.ContentType = new MediaTypeHeaderValue("application/x-www-form-urlencoded");

            HttpResponseMessage response = await client.SendAsync(request);
            string responseContent = await response.Content.ReadAsStringAsync();

            JObject json = JObject.Parse(responseContent);
            ACCESS_TOKEN = json.Value<string>("access_token");
            return ACCESS_TOKEN;
        }

        private async void CallNotificationSending(string url, string titre, string message)
        {
            HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Add("Authorization", String.Format("Bearer {0}", ACCESS_TOKEN));
            client.DefaultRequestHeaders.Add("X-WNS-Type", "wns/toast");
            client.DefaultRequestHeaders.Add("Content-Type", "text/xml");

            string xml = String.Format("<toast><visual><binding template='ToastGeneric'><text>{0}</text>{1}<text></text></binding></visual></toast>", titre, message);
            HttpContent content = new StringContent(xml);
            await client.PostAsync(url, content);
        }
    }
}
