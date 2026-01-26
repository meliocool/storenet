using System.Net.Mime;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(opt =>
{
    opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
// * AddTransient is Method level instead of req level -> Too fast
// * AddSingleton will not dispose of the service until the app is shut down -> Too Long
// * Scoped to the lifetime of the HTTP req -> Just Right
builder.Services.AddScoped<IProductRepository, ProductRepository>();

// * Above app is service

var app = builder.Build();

// * Below app is a Middleware

// Configure the HTTP request pipeline.

app.MapControllers();

try
{
    using var scope = app.Services.CreateScope();
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<StoreContext>();
    await context.Database.MigrateAsync();
    await StoreContextSeed.SeedAsync(context);
}
catch (Exception ex)
{
    Console.WriteLine(ex);
    throw;
}

app.Run();
