using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var config = new ConfigurationBuilder()
                            .SetBasePath(Directory.GetCurrentDirectory())
                            .AddJsonFile("hosting.json", optional: true)
                            .AddEnvironmentVariables()
                            .Build();

            var host = new WebHostBuilder()
                        .UseConfiguration(config)
                        .UseKestrel(options => {
                            options.NoDelay = true;
                            if (!string.IsNullOrWhiteSpace(config["HOFC_SSL_CERT_PATH"]))
                                options.UseHttps(config["HOFC_SSL_CERT_PATH"]);
                            options.UseConnectionLogging();
                        })
                        .UseContentRoot(Directory.GetCurrentDirectory())
                        .UseIISIntegration()
                        .UseStartup<Startup>()
                        .Build();

            host.Run();
        }
    }
}
