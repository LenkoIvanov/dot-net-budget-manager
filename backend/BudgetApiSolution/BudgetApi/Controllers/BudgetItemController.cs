using BudgetApi.Entities;
using Microsoft.AspNetCore.Mvc;

namespace BudgetApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BudgetItemController : ControllerBase
    {
        // TODO: define db context once and for all
        private readonly ApplicationDBContext dbContext;
        public BudgetItemController(ApplicationDBContext dbcontext)
        {
            this.dbContext = dbcontext;
        }

        [HttpGet]
        public ActionResult<BudgetItem> getBudgetItems()
        {
            var budgetItems = this.dbContext.BudgetItems.ToList();
            if(budgetItems.Count == 0 ) {
                return NotFound();
            }
            return Ok(budgetItems);
        }

        [HttpPost]
        public ActionResult postBudgetItems(BudgetItem budgetItem)
        {
            if(budgetItem == null)
            {
                return BadRequest();
            }
            this.dbContext.BudgetItems.Add(budgetItem);
            this.dbContext.SaveChanges();
            return Ok();
        }
    }
}
