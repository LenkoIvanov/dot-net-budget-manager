using Microsoft.EntityFrameworkCore;

public class CurrencyDb : DbContext
{
    public CurrencyDb(DbContextOptions<CurrencyDb> options)
        : base(options) { }

    public DbSet<Currency> Currencies => Set<Currency>();

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            optionsBuilder
            .UseNpgsql("Server=127.0.0.1;Port=5432;Database=BudgetDB;Username=admin;Password=admin;");
        }
    }
}