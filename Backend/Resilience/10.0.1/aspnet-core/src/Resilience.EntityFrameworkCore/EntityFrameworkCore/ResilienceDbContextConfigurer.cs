using Microsoft.EntityFrameworkCore;
using System.Data.Common;

namespace Resilience.EntityFrameworkCore;

public static class ResilienceDbContextConfigurer
{
    public static void Configure(DbContextOptionsBuilder<ResilienceDbContext> builder, string connectionString)
    {
        builder.UseSqlServer(connectionString);
    }

    public static void Configure(DbContextOptionsBuilder<ResilienceDbContext> builder, DbConnection connection)
    {
        builder.UseSqlServer(connection);
    }
}
