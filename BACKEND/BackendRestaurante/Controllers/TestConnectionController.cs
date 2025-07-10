using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendRestaurante.Data;
using System;
using System.Linq;

namespace BackendRestaurante.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestConnectionController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TestConnectionController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult ProbarConexion()
        {
            try
            {
                var usuarios = _context.Usuarios.ToList(); // Asegúrate de tener DbSet<Usuario>
                return Ok(new
                {
                    ok = true,
                    mensaje = "Conexión exitosa",
                    totalUsuarios = usuarios.Count
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    ok = false,
                    error = ex.Message
                });
            }
        }
    }
}
