using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<CurrencyDb>(opt => opt.UseInMemoryDatabase("CurrencyList"));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();
var app = builder.Build();

app.MapGet("/currencies", async (CurrencyDb db) =>
    await db.Currencies.ToListAsync());

app.MapGet("/currencies/{id}", async (int id, CurrencyDb db) =>
    await db.Currencies.FindAsync(id)
        is Currency curr
            ? Results.Ok(curr)
            : Results.NotFound());

app.MapPost("/currencies", async (Currency curr, CurrencyDb db) =>
{
    db.Currencies.Add(curr);
    await db.SaveChangesAsync();

    return Results.Created($"/currencies/{curr.Id}", curr);
});

app.MapPut("/currencies/{id}", async (int id, Currency inputCurr, CurrencyDb db) =>
{
    var curr = await db.Currencies.FindAsync(id);

    if (curr is null) return Results.NotFound();

    curr.Name = inputCurr.Name;
   

    await db.SaveChangesAsync();

    return Results.NoContent();
});

app.MapDelete("/currencies/{id}", async (int id, CurrencyDb db) =>
{
    if (await db.Currencies.FindAsync(id) is Currency curr)
    {
        db.Currencies.Remove(curr);
        await db.SaveChangesAsync();
        return Results.Ok(curr);
    }

    return Results.NotFound();
});

app.Run();
