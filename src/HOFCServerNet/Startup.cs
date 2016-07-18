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

            services.AddIdentity<ApplicationUser, IdentityRole>(options => {
                options.Cookies.ApplicationCookie.AutomaticAuthenticate = true;
                options.Cookies.ApplicationCookie.AutomaticChallenge = false;
                options.Cookies.ApplicationCookie.AuthenticationScheme = "ApplicationCookie";
            }).AddEntityFrameworkStores<ApplicationDbContext>()
              .AddDefaultTokenProviders();
            
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

            //services.AddSwaggerGen();
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

            /*app.UseIISPlatformHandler(options =>
            {
                options.AuthenticationDescriptions.Clear();
            });*/

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseIdentity();

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

            // TODO Re enable when nuget package is updated
            //app.UseSwaggerGen();
            //app.UseSwaggerUi();

            app.AddNLogWeb();
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
                            .Build();

            var host = new WebHostBuilder()
                              .UseConfiguration(config)
                              .UseKestrel()
                              .UseContentRoot(Directory.GetCurrentDirectory())
                              .UseIISIntegration()
                              .UseStartup<Startup>()
                              .Build();

            host.Run();
            //WebApplication.Run<Startup>(args);
        }
    }
}
