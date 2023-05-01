using Microsoft.EntityFrameworkCore;

class CurrencyDb : DbContext
{
    public CurrencyDb(DbContextOptions<CurrencyDb> options)
        : base(options) { }

    public DbSet<Currency> Currencies => Set<Currency>();
}