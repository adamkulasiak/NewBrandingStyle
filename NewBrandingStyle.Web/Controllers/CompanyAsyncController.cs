using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NewBrandingStyle.Web.Database;
using NewBrandingStyle.Web.Entities;
using NewBrandingStyle.Web.Models;

namespace NewBrandingStyle.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyAsyncController : ControllerBase
    {
        private readonly NewBrandingStyleContext _context;
        public CompanyAsyncController(NewBrandingStyleContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GetItems")]
        public async Task<IActionResult> GetItems()
        {
            var items = _context.Items.ToList();

            if (items == null)
                return NotFound("Nope");

            return Ok(items);
        }

        [HttpPost]
        [Route("AddNewItem")]
        public async Task<IActionResult> AddNewItem(CompanyModel companyModel)
        {
            var itemEntity = new ItemEntity
            {
                Name = companyModel.Name,
                Description = companyModel.Description,
                IsVisible = companyModel.IsVisible
            };

            _context.Add(itemEntity);
            _context.SaveChanges();

            return Ok();
        }
    }
}
