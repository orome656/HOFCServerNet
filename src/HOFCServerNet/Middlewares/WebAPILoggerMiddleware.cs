using Microsoft.AspNetCore.Http;
using NLog;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Middlewares
{
    public class WebAPILoggerMiddleware
    {
        private readonly RequestDelegate _next;
        public WebAPILoggerMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            var watch = new Stopwatch();
            
            Logger logger = null;
            string controllerName = null;
            if(context.Request.Path.HasValue && context.Request.Path.Value.ToString().Contains("api/"))
            {
                var pathName = context.Request.Path.Value.ToString().Split('/')[2];
                controllerName = pathName.First().ToString().ToUpper() + pathName.Substring(1);
                logger = LogManager.GetLogger("HOFCServerNet.API." + controllerName);
                logger.Info("Start calling url " + context.Request.Path);
            }
            watch.Start();
            await _next.Invoke(context);
            watch.Stop();
            if (logger != null)
            {
                logger.Info("End calling url " + context.Request.Path + " in " + watch.ElapsedMilliseconds + "ms");
            }
        }
    }
}
