
namespace BudgetApi.Entities
{
    public class Budget
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public double Funds { get; set; }

        public ICollection<BudgetItem> BudgetItems { get; } = new List<BudgetItem>(); // ref to dependants

        
        public int CurId { get; set; } // required foreign key

        public Currency Currency { get; set; } = null!; // required ref navigation

    }
}
