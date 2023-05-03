using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace BudgetApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CurrencyController : ControllerBase
    {
        private readonly CurrencyDb currencyContext;
        public CurrencyController(CurrencyDb dbcontext)
        {
            this.currencyContext = dbcontext;
        }

        [HttpGet] // decorator to signify get endpoint
        public ActionResult<Currency> getCurrencies()
        {
            var currencies = this.currencyContext.Currencies.ToList();
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
            this.currencyContext.Currencies.Add(currency);
            this.currencyContext.SaveChanges();
            return Ok();
        }

    }
}
