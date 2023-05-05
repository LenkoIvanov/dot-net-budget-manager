
namespace BudgetApi.Entities
{
    public class Budget
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public double Funds { get; set; }

        public string? Currency { get; set; }  

        public ICollection<BudgetItem> BudgetItems { get; } = new List<BudgetItem>(); // ref to dependants

    }
}
