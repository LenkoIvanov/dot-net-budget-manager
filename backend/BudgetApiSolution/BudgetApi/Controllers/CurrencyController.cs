﻿using BudgetApi.Entities;
using Microsoft.AspNetCore.Mvc;

namespace BudgetApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CurrencyController : ControllerBase
    {
        // TODO: define db context once and for all
        private readonly ApplicationDBContext dbContext;
        public CurrencyController(ApplicationDBContext dbcontext)
        {
            this.dbContext = dbcontext;
        }

        [HttpGet] // Decorator signifies an endpoint
        public ActionResult<Currency> getCurrencies()
        {
            var currencies = this.dbContext.Currencies.ToList();
            if(currencies.Count == 0)
            {
                return NotFound();
            }
            return Ok(currencies);
        }

        [HttpPost]
        public ActionResult postCurrency(Currency currency)
        {
            if(currency == null)
            {
                return BadRequest();
            }
            this.dbContext.Currencies.Add(currency);
            this.dbContext.SaveChanges();
            return Ok();
        }

    }
}
