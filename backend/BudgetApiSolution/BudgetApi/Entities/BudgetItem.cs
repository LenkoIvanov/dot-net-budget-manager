
namespace BudgetApi.Entities
{
    public class BudgetItem
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public double Cost { get; set; }

        public int BudgetId { get; set; } // required foreign key
    }
}
