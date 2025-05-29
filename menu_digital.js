document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });
    
    // Filtrado de categorías
    const categoryBtns = document.querySelectorAll('.category-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover activo de todos los botones
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Agregar activo al botón clickeado
            this.classList.add('active');
            
            const category = this.textContent.toLowerCase();
            
            // Filtrar items
            menuItems.forEach(item => {
                const itemCategory = item.querySelector('.category-tag').textContent.toLowerCase();
                
                if (category === 'todo' || itemCategory.includes(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Función de búsqueda
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        menuItems.forEach(item => {
            const itemName = item.querySelector('h2').textContent.toLowerCase();
            const itemDesc = item.querySelector('.description').textContent.toLowerCase();
            
            if (itemName.includes(searchTerm) || itemDesc.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Añade esto al final de tu menu.js

// Efecto de clic en los items del menú
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mousedown', function() {
        this.classList.add('active');
    });
    
    item.addEventListener('mouseup', function() {
        setTimeout(() => {
            this.classList.remove('active');
        }, 300);
    });
    
    item.addEventListener('mouseleave', function() {
        this.classList.remove('active');
    });
    
    // Opcional: mantener resaltado al hacer clic (para selección)
    item.addEventListener('click', function() {
        document.querySelectorAll('.menu-item').forEach(i => {
            i.classList.remove('selected');
        });
        this.classList.add('selected');
    });
});