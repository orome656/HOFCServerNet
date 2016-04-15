using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using HOFCServerNet.Data.Models;
using Microsoft.Data.Entity;
using HOFCServerNet.Services;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Diagnostics.Entity;
using Microsoft.AspNet.Authentication.Google;
using Microsoft.AspNet.Authentication.Facebook;

namespace HOFCServerNet
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            // Set up configuration sources.
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddEntityFramework()
                    .AddSqlServer()
                    .AddDbContext<BddContext>()
                    .AddDbContext<ApplicationDbContext>();

            services.AddIdentity<ApplicationUser, IdentityRole>()
                    .AddEntityFrameworkStores<ApplicationDbContext>()
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
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();


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

            app.UseIISPlatformHandler(options =>
            {
                options.AuthenticationDescriptions.Clear();
            });

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
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }

        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
