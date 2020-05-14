using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Appico.Api.Modelx;

namespace Appico.Api.Services
{
    public class AppicoDbContext : DbContext
    {
      public DbSet<Carmodels> Carmodels { get; set; }
      public DbSet<Contact> Contact { get; set; }
      public DbSet<Dealer> Dealer { get; set; }
      public DbSet<Inventory> Inventory { get; set; }
      public DbSet<InventoryCar> InventoryCar { get; set; }
      public DbSet<ContactDetail> ContactDetail { get; set; }

      public AppicoDbContext (DbContextOptions<AppicoDbContext> options) 
          : base(options)
      {
      }

    }
}