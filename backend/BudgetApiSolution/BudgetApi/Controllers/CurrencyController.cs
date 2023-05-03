using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        public ActionResult get()
        {
            return Ok("works");
        }

    }
}
