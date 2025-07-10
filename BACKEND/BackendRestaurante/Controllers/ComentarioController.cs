using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendRestaurante.Data;
using BackendRestaurante.Models;


namespace BackendRestaurante.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ComentarioController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ComentarioController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("nuevo")]
        public IActionResult NuevoComentario(Comentario c)
        {
            _context.Comentarios.Add(c);
            _context.SaveChanges();
            return Ok(c);
        }

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(_context.Comentarios.Include(c => c.Usuario).ToList());
        }
    }
}
