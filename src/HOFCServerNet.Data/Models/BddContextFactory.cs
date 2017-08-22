﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Data.Models
{
    public class BddContextFactory : IDesignTimeDbContextFactory<BddContext>
    {
        public BddContext CreateDbContext(string[] args)
        {
            var builder = new ConfigurationBuilder()
                      .SetBasePath(Directory.GetCurrentDirectory())
                      .AddJsonFile("appsettings.json");
            var Configuration = builder.Build();

            var optionsBuilder = new DbContextOptionsBuilder<BddContext>();
            optionsBuilder.UseMySql(Configuration["Data:DefaultConnection:ConnectionString"]);

            return new BddContext(optionsBuilder.Options);
        }
    }
}
