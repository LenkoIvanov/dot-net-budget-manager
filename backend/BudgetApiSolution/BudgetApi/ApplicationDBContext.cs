using BudgetApi.Entities;
using Microsoft.EntityFrameworkCore;

public class ApplicationDBContext : DbContext //TODO: migrate
{
    public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options)
        : base(options) { }

    // Tables
    public DbSet<Currency> Currencies => Set<Currency>();
    public DbSet<Budget> Budgets => Set<Budget>();
    public DbSet<BudgetItem> BudgetItems => Set<BudgetItem>();

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            optionsBuilder
            .UseNpgsql("Server=127.0.0.1;Port=5432;Database=BudgetDB;Username=admin;Password=admin;");
        }
    }

    // Define relationships, primary & foreign keys
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Budget>()
            .HasMany(e => e.BudgetItems)
            .WithOne(e => e.Budget)
            .HasForeignKey(e => e.BudgetId)
            .HasPrincipalKey(e => e.Id);

        modelBuilder.Entity<Currency>()
            .HasOne(e => e.Budget)
            .WithOne(e => e.Currency)
            .HasForeignKey<Budget>(e => e.CurId)
            .IsRequired(); 
    }   
}