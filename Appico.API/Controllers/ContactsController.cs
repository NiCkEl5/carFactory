using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Appico.Api.Modelx;
using Appico.Api.Services;

namespace Appico.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly AppicoDbContext _context;
        private readonly ILogger<ContactsController> _logger;

        public ContactsController(ILogger<ContactsController> logger, AppicoDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        // GET: api/Contacts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactDetail>>> GetContact()
        {
            var query = @"select contact.guid, contact.name, contact.email, dealer.name dealername, carmodels.make, carmodels.model, carmodels.type, contact.[message], contact.created
                            from contact
                            inner join carmodels on contact.model = carmodels.guid
                            inner join dealer on contact.dealer = dealer.guid";

            var list = new List<ContactDetail>();
            list = await _context.ContactDetail.FromSqlRaw(query).ToListAsync();                            

            return list;
        }

        // GET: api/Contacts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Contact>> GetContact(int id)
        {
            var contact = await _context.Contact.FindAsync(id);

            if (contact == null)
            {
                return NotFound();
            }

            return contact;
        }

        // PUT: api/Contacts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContact(int id, Contact contact)
        {
            if (id != contact.Guid)
            {
                return BadRequest();
            }

            _context.Entry(contact).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Contacts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Contact>> PostContact(Contact contact)
        {
            _context.Contact.Add(contact);
            await _context.SaveChangesAsync();

            var query = @"select inventory.guid, inventory.vin, dealer.guid as dealerguid, dealer.name as DealerName, carmodels.guid as carmodelguid, carmodels.model, carmodels.type, carmodels.make 
                            from inventory 
                            inner join carmodels on inventory.model = carmodels.guid 
                            inner join dealer on inventory.dealer = dealer.guid
                            where dealer.guid="+contact.dealer+" and carmodels.guid="+contact.model;
            
            if(_context.ContactDetail.FromSqlRaw(query).Count() == 0){
                return BadRequest();
            }

            return CreatedAtAction("GetContact", new { id = contact.Guid }, contact);
        }

        // DELETE: api/Contacts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Contact>> DeleteContact(int id)
        {
            var contact = await _context.Contact.FindAsync(id);
            if (contact == null)
            {
                return NotFound();
            }

            _context.Contact.Remove(contact);
            await _context.SaveChangesAsync();

            return contact;
        }

        private bool ContactExists(int id)
        {
            return _context.Contact.Any(e => e.Guid == id);
        }
    }
}
