using Microsoft.EntityFrameworkCore;

// docker run --name BudgetDB -e POSTGRES_PASSWORD=admin -e POSTGRES_USER=admin -d -p 5432:5432 postgres

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ApplicationDBContext>(opt => opt.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddControllers();
builder.Services.AddCors((options =>
{
    options.AddPolicy("PolicyBudget",
    policy =>
    {
        policy.WithOrigins("http://localhost:3000", "http://localhost:5018")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
}));
var app = builder.Build();
app.Use(async (context, next) =>
{
    context.Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:3000");
    context.Response.Headers.Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    await next.Invoke();
});
app.UseCors("PolicyBudget");
app.MapControllers();
app.Run();
