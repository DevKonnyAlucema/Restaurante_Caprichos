using Microsoft.EntityFrameworkCore;
using BackendRestaurante.Models;

namespace BackendRestaurante.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Comentario> Comentarios { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Plato> Platos { get; set; }
    }
}
