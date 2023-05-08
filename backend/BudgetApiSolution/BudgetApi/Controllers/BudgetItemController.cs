﻿using BudgetApi.Entities;
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

        [HttpGet("{id}")]
        public ActionResult<BudgetItem> getBudgetItems(int id)
        {
            var specificItems = this.dbContext.BudgetItems.Where(item => item.BudgetId == id).ToList();
            if(specificItems.Count == 0 )
            {
                var empty = new BudgetItem[0];
                return Ok(empty);
            }
            return Ok(specificItems);
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
            return Ok(budgetItem.Id);
        }

        [HttpDelete("{id}")]
        public ActionResult deleteBudgetItem(int id)
        {
            var itemToDelete = this.dbContext.BudgetItems.FirstOrDefault(bi => bi.Id == id);
            if (itemToDelete == null)
            {
                return NotFound("Item does not exist!");
            }
            this.dbContext.BudgetItems.Remove(itemToDelete);
            this.dbContext.SaveChanges();
            return Ok("Item delete successfully");
        }
    }
}
