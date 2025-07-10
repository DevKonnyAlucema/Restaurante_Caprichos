namespace BackendRestaurante.Models
{
    public class Usuario
    {
        public int Id { get; set; }

        public string Nombre { get; set; } = "";

        public string Correo { get; set; } = "";

        public string Contraseña { get; set; } = "";

        public List<Comentario> Comentarios { get; set; } = new();
    }
}
