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

        // GET: api/Dealer/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Dealer>> GetDealer(int id)
        {
            var dealer = await _context.Dealer.FindAsync(id);

            if (dealer == null)
            {
                return NotFound();
            }

            return dealer;
        }

        private bool DealerExists(long id)
        {
            return _context.Dealer.Any(e => e.Guid == id);
        }
    }
}
