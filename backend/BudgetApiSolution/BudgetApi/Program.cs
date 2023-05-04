using Microsoft.EntityFrameworkCore;

// docker run --name BudgetDB -e POSTGRES_PASSWORD=admin -e POSTGRES_USER=admin -d -p 5432:5432 postgres

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ApplicationDBContext>(opt => opt.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddControllers();
var app = builder.Build();
app.MapControllers();
app.Run();
