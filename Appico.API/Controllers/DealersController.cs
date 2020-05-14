using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Appico.Api.Modelx;
using Appico.Api.Services;

namespace Appico.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DealersController : ControllerBase
    {
        private readonly AppicoDbContext _context;

        public DealersController(AppicoDbContext context)
        {
            _context = context;
        }

        // GET: api/Dealer
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Dealer>>> GetDealer()
        {
            return await _context.Dealer.ToListAsync();
        }

        private bool DealerExists(long id)
        {
            return _context.Dealer.Any(e => e.Guid == id);
        }
    }
}
