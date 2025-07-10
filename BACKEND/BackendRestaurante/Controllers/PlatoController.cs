using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendRestaurante.Data;
using BackendRestaurante.Models; // ← corregido aquí

namespace BackendRestaurante.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlatoController : ControllerBase
    {
        private readonly AppDbContext _context;
        public PlatoController(AppDbContext context) { _context = context; }

        [HttpPost("nuevo")]
        public IActionResult NuevoPlato(Plato p)
        {
            _context.Platos.Add(p);
            _context.SaveChanges();
            return Ok(p);
        }

        [HttpGet("menu")]
        public IActionResult ListarMenu() =>
            Ok(_context.Platos.Include(p => p.Categoria).ToList());

        [HttpGet("categorias")]
        public IActionResult Categorias() =>
            Ok(_context.Categorias.ToList());
    }
}
