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
using OpenIddict;
using System;
using CryptoHelper;

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
                    .AddDbContext<ApplicationDbContext>(options => options.UseSqlite(Configuration["Data:DefaultConnection:ConnectionString"]));

            services.AddIdentity<ApplicationUser, IdentityRole>()
                    .AddEntityFrameworkStores<ApplicationDbContext>()
                    .AddDefaultTokenProviders();

            services.AddOpenIddict<ApplicationDbContext>()
                    .EnableTokenEndpoint("/connect/token")
                    .EnableAuthorizationEndpoint("/connect/authorize")
                    .EnableUserinfoEndpoint("/connect/userinfo")
                    .AllowAuthorizationCodeFlow()
                    .AllowRefreshTokenFlow()
                    .AllowImplicitFlow()
                    .AddEphemeralSigningKey();


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
            }
            

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseIdentity();

            app.UseOAuthValidation();

            app.UseOpenIddict();

            app.UseGoogleAuthentication(new GoogleOptions()
            {
                ClientId = Configuration["GOOGLE_CLIENT_ID"],
                ClientSecret = Configuration["GOOGLE_CLIENT_SECRET"]
            });

            app.UseFacebookAuthentication(new FacebookOptions()
            {
                AppId = Configuration["FACEBOOK_APP_ID"],
                AppSecret = Configuration["FACEBOOK_SECRET_ID"]
            });
            
            app.UseMiddleware<WebAPILoggerMiddleware>();

            app.UseMvc(routes =>
            {
                routes.MapRoute("journee",
                    template: "Journee/Index/{equipe}/{idJournee}", defaults: new { controller = "Journee", action="Index", equipe="equipe1", idJournee = 1});
                routes.MapRoute("actu",
                    template: "Journee/Detail/{url}", defaults: new { controller = "Journee", action = "Index", equipe = "equipe1", idJournee = 1 });
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Actu}/{action=Index}/{id?}");
            });
            
            app.UseSwagger();
            app.UseSwaggerUi();

            app.AddNLogWeb();
            
            using (var context = new ApplicationDbContext(app.ApplicationServices.GetRequiredService<DbContextOptions<ApplicationDbContext>>()))
            {
                context.Database.EnsureCreated();
                // Add Mvc.Client to the known applications.
                if (!context.Applications.Any())
                {
                    // Note: when using the introspection middleware, your resource server
                    // MUST be registered as an OAuth2 client and have valid credentials.
                    // 
                    // context.Applications.Add(new OpenIddictApplication {
                    //     Id = "resource_server",
                    //     DisplayName = "Main resource server",
                    //     Secret = Crypto.HashPassword("secret_secret_secret"),
                    //     Type = OpenIddictConstants.ClientTypes.Confidential
                    // });

                    context.Applications.Add(new OpenIddictApplication
                    {
                        ClientId = "xamarin-auth",
                        ClientSecret = Crypto.HashPassword(Configuration["OPENIDDICT_CLIENT_SECRET"]),
                        DisplayName = "HOFC",
                        LogoutRedirectUri = "https://local.webhofc.fr/",
                        RedirectUri = "urn:ietf:wg:oauth:2.0:oob",
                        Type = OpenIddictConstants.ClientTypes.Confidential
                    });
                    if(env.IsDevelopment())
                    {
                        // To test this sample with Postman, use the following settings:
                        // 
                        // * Authorization URL: http://localhost:54540/connect/authorize
                        // * Access token URL: http://localhost:54540/connect/token
                        // * Client ID: postman
                        // * Client secret: [blank] (not used with public clients)
                        // * Scope: openid email profile roles
                        // * Grant type: authorization code
                        // * Request access token locally: yes
                        context.Applications.Add(new OpenIddictApplication
                        {
                            ClientId = "postman",
                            DisplayName = "Postman",
                            RedirectUri = "https://www.getpostman.com/oauth2/callback",
                            Type = OpenIddictConstants.ClientTypes.Public
                        });

                    }
                    context.SaveChanges();
                }
            }
        }

        /// <summary>
        /// Entry point for the application
        /// </summary>
        /// <param name="args"></param>
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
                                  //options.UseHttps("", "");
                                  options.UseConnectionLogging();
                              })
                              .UseContentRoot(Directory.GetCurrentDirectory())
                              .UseIISIntegration()
                              .UseStartup<Startup>()
                              .Build();

            host.Run();
            //WebApplication.Run<Startup>(args);
        }
    }
}
