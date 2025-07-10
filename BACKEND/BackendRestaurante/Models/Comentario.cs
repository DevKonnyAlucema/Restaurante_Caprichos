using System.ComponentModel.DataAnnotations.Schema;

namespace BackendRestaurante.Models
{
    public class Comentario
    {
        public int Id { get; set; }

        public string Mensaje { get; set; } = "";

        public DateTime Fecha { get; set; } = DateTime.Now;

        [Column("usuario_id")]
        public int? UsuarioId { get; set; }

        public Usuario? Usuario { get; set; }
    }
}
