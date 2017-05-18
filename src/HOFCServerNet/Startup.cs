using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using HOFCServerNet.Data.Models;
using Microsoft.EntityFrameworkCore;
using HOFCServerNet.Services;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System.IO;
using NLog.Extensions.Logging;
using NLog.Web;
using HOFCServerNet.Middlewares;
using System.Linq;
using OpenIddict.Core;
using OpenIddict.Models;
using System;
using CryptoHelper;
using Microsoft.AspNetCore.HttpOverrides;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Security.Cryptography;
using Microsoft.IdentityModel.Tokens;
using System.Threading.Tasks;
using System.Threading;
using NLog;
using Microsoft.AspNetCore.SpaServices.Webpack;
using AspNet.Security.OpenIdConnect.Primitives;
using Microsoft.AspNetCore.ResponseCompression;

namespace HOFCServerNet
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            // Set up configuration sources.
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json")
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; set; }

        /// <summary>
        /// This method gets called by the runtime. Use this method to add services to the container.
        /// </summary>
        /// <param name="services"></param>
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddEntityFramework()
                    .AddEntityFrameworkSqlite()
                    .AddDbContext<BddContext>(options => options.UseSqlite(Configuration["Data:DefaultConnection:ConnectionString"]))
                    .AddDbContext<ApplicationDbContext>(options => {
                        options.UseSqlite(Configuration["Data:DefaultConnection:ConnectionString"]);
                        options.UseOpenIddict();
                    });

            services.AddIdentity<ApplicationUser, IdentityRole>()
                    .AddEntityFrameworkStores<ApplicationDbContext>()
                    .AddDefaultTokenProviders();

            services.Configure<IdentityOptions>(options =>
            {
                options.ClaimsIdentity.UserNameClaimType = OpenIdConnectConstants.Claims.Name;
                options.ClaimsIdentity.UserIdClaimType = OpenIdConnectConstants.Claims.Subject;
                options.ClaimsIdentity.RoleClaimType = OpenIdConnectConstants.Claims.Role;
            });

            var builder = services.AddOpenIddict()
                    .AddEntityFrameworkCoreStores<ApplicationDbContext>()
                    .AddMvcBinders()
                    .EnableTokenEndpoint("/connect/token")
                    .EnableAuthorizationEndpoint("/connect/authorize")
                    .EnableUserinfoEndpoint("/connect/userinfo")
                    .AllowAuthorizationCodeFlow()
                    .AllowRefreshTokenFlow()
                    .DisableHttpsRequirement()
                    .EnableRequestCaching();
            try
            {
                RSAParameters rsaParams = JsonConvert.DeserializeObject<RSAParameters>(File.ReadAllText("secret.json"));
                builder.AddSigningKey(new RsaSecurityKey(rsaParams));
            } catch(Exception e)
            {
                LogManager.GetCurrentClassLogger().Error(e, "Erreur lors de la récupération des paramétre de sécurité");
                builder.AddEphemeralSigningKey();
            }


            services.AddTransient<MatchService>();
            services.AddTransient<ActuService>();
            services.AddTransient<JoueurService>();
            services.AddTransient<ClassementService>();
            services.AddTransient<NotificationService>();
            services.AddTransient<CompositionService>();
            services.AddTransient<VoteService>();
            services.AddTransient<StatService>();

            // Add framework services.
            services.AddMvc();
            services.Configure<GzipCompressionProviderOptions>(options => options.Level = System.IO.Compression.CompressionLevel.Optimal);
            services.AddResponseCompression();
            services.AddSwaggerGen();
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </summary>
        /// <param name="app"></param>
        /// <param name="env"></param>
        /// <param name="loggerFactory"></param>
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddNLog();

            try
            {
                using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>()
                    .CreateScope())
                {
                    serviceScope.ServiceProvider.GetService<BddContext>()
                         .Database.Migrate();
                    serviceScope.ServiceProvider.GetService<ApplicationDbContext>()
                         .Database.Migrate();
                    serviceScope.ServiceProvider.GetService<BddContext>().EnsureSeedData();
                }
            }
            catch { }

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
            }

            app.UseResponseCompression();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
            });

            app.UseIdentity();

            app.UseOAuthValidation();

            app.UseOpenIddict();
            if(!env.IsDevelopment() || Configuration["GOOGLE_CLIENT_ID"] != null)
            {
                app.UseGoogleAuthentication(new GoogleOptions()
                {
                    ClientId = Configuration["GOOGLE_CLIENT_ID"],
                    ClientSecret = Configuration["GOOGLE_CLIENT_SECRET"]
                });
            }

            if (!env.IsDevelopment() || Configuration["FACEBOOK_APP_ID"] != null)
            {
                app.UseFacebookAuthentication(new FacebookOptions()
                {
                    AppId = Configuration["FACEBOOK_APP_ID"],
                    AppSecret = Configuration["FACEBOOK_SECRET_ID"]
                }); 
            }
            
            app.UseMiddleware<WebAPILoggerMiddleware>();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
            
            app.UseSwagger();
            app.UseSwaggerUi();

            app.AddNLogWeb();
            
            InitializeAsync(app.ApplicationServices, CancellationToken.None).GetAwaiter().GetResult();
        }

        private async Task InitializeAsync(IServiceProvider services, CancellationToken cancellationToken) {

            using (var scope = services.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {

                var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                await context.Database.EnsureCreatedAsync();
                var manager = scope.ServiceProvider.GetRequiredService<OpenIddictApplicationManager<OpenIddictApplication>>();
                

                if (await manager.FindByClientIdAsync("xamarin-auth", cancellationToken) == null)
                {
                    var application = new OpenIddictApplication
                    {
                        ClientId = "xamarin-auth",
                        DisplayName = "HOFC",
                        LogoutRedirectUri = "https://local.webhofc.fr/",
                        RedirectUri = "urn:ietf:wg:oauth:2.0:oob",
                        Type = OpenIddictConstants.ClientTypes.Confidential
                    };

                    await manager.CreateAsync(application, Configuration["OPENIDDICT_CLIENT_SECRET"], cancellationToken);
                }

                // To test this sample with Postman, use the following settings:
                //
                // * Authorization URL: http://localhost:54540/connect/authorize
                // * Access token URL: http://localhost:54540/connect/token
                // * Client ID: postman
                // * Client secret: [blank] (not used with public clients)
                // * Scope: openid email profile roles
                // * Grant type: authorization code
                // * Request access token locally: yes
                if (await manager.FindByClientIdAsync("postman", cancellationToken) == null)
                {
                    var application = new OpenIddictApplication
                    {
                        ClientId = "postman",
                        DisplayName = "Postman",
                        RedirectUri = "https://www.getpostman.com/oauth2/callback"
                    };

                    await manager.CreateAsync(application, cancellationToken);
                }
            }
        }
    }
}
