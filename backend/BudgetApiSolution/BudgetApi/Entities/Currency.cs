
namespace BudgetApi.Entities
{
    public class Currency
    {
        public int Id { get; set; }
        public string? Name { get; set; }

        public Budget? Budget { get; set; } // ref to dependant
    }
}
