using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Appico.Api.Services;
using Appico.Api.Modelx;


namespace Appico.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoriesController : ControllerBase
    {
        private readonly ILogger<InventoriesController> _logger;
        private readonly AppicoDbContext _context;

        public InventoriesController(ILogger<InventoriesController> logger, AppicoDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        // GET: api/Inventories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InventoryCar>>> GetInventory()
        {
            List<Inventory> inventory = await _context.Inventory.ToListAsync();
            var list = new List<InventoryCar>();

            // var query = @"select inventory.guid, inventory.vin, dealer.name as DealerName, carmodels.model, carmodels.type, carmodels.make 
            //             from inventory left join carmodels on inventory.model = carmodels.guid left join dealer on inventory.dealer = dealer.guid";

            var query = @"select inventory.guid, inventory.vin, dealer.guid as dealerguid, dealer.name as DealerName, carmodels.guid as carmodelguid, carmodels.model, carmodels.type, carmodels.make 
                         from inventory 
                        inner join carmodels on inventory.model = carmodels.guid 
                        inner join dealer on inventory.dealer = dealer.guid";

            list = await _context.InventoryCar.FromSqlRaw(query).ToListAsync();
            
            return list;
        }

        private bool InventoryExists(long id)
        {
            return _context.Inventory.Any(e => e.Guid == id);
        }
    }
}
