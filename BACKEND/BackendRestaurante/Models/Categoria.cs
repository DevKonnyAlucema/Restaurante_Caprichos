namespace BackendRestaurante.Models
{
    public class Categoria
    {
        public int Id { get; set; }

        public string Nombre { get; set; } = "";

        public List<Plato> Platos { get; set; } = new();
    }
}
