using Microsoft.EntityFrameworkCore;
using NewBrandingStyle.Web.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewBrandingStyle.Web.Database
{
    public class NewBrandingStyleContext: DbContext
    {
        public NewBrandingStyleContext(DbContextOptions options): base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }

        public DbSet<ItemEntity> Items { get; set; }
    }
}
