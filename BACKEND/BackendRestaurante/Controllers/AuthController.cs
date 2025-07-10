using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendRestaurante.Data;
using BackendRestaurante.Models;

namespace BackendRestaurante.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("registro")]
        public IActionResult Registro(Usuario u)
        {
            _context.Usuarios.Add(u);
            _context.SaveChanges();
            return Ok(u);
        }

        [HttpPost("login")]
        public IActionResult Login(string correo, string contraseña)
        {
            var user = _context.Usuarios
                .FirstOrDefault(u => u.Correo == correo && u.Contraseña == contraseña);

            return user != null ? Ok(user) : Unauthorized();
        }
    }
}
