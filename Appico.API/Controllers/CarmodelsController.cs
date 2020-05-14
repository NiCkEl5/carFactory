using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Appico.Api.Services;
using Appico.Api.Modelx;


namespace Appico.Api.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CarmodelsController : ControllerBase
  {
    private readonly AppicoDbContext _context;
    private readonly ILogger<CarmodelsController> _logger;

      public CarmodelsController(ILogger<CarmodelsController> logger, AppicoDbContext context)
      {
        _context = context;
        _logger = logger;
      }

      [HttpGet]
      public async Task<ActionResult<IEnumerable<Carmodels>>> GetCarmodel()
      {
        _logger.LogInformation("carmodel");
        return await _context.Carmodels.ToListAsync();
      }
  }
}