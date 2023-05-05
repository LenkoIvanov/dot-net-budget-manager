using BudgetApi.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BudgetApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BudgetsController : ControllerBase
    {
        // TODO: define db context once and for all
        private readonly ApplicationDBContext dbContext;
        public BudgetsController(ApplicationDBContext dbcontext)
        {
            this.dbContext = dbcontext;
        }

        [HttpGet]
        public ActionResult<Budget> getBudgets()
        {
            var budgets = this.dbContext.Budgets.Include(budget => budget.BudgetItems).ToList();
            if(budgets.Count == 0)
            {
                return NotFound();
            }
            return Ok(budgets);
        }

        [HttpPost]
        public ActionResult postBudget(Budget budget)
        {
            if(budget == null)
            {
                return BadRequest();
            }
            this.dbContext.Budgets.Add(budget);
            this.dbContext.SaveChanges();
            return Ok();
        }

    }
}
