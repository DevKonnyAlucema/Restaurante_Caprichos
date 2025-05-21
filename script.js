// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    // Ya no necesitamos seleccionar pageContent y navbar para la clase 'pushed'
    // const pageContent = document.querySelector('.page-content');
    // const navbar = document.querySelector('.navbar');

    if (hamburgerMenu && navLinks) { // Simplificamos la condición
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            document.body.classList.toggle('pushed'); // APLICA LA CLASE 'pushed' AL BODY
            // Ya no necesitas estas líneas:
            // pageContent.classList.toggle('pushed');
            // navbar.classList.toggle('pushed');
        });
    } else {
        console.error("Error: Uno o más elementos del menú hamburguesa no se encontraron en el DOM.");
        if (!hamburgerMenu) console.error("Elemento '.hamburger-menu' no encontrado.");
        if (!navLinks) console.error("Elemento '.nav-links' no encontrado.");
        // Mensajes de error antiguos que ya no aplicarían
        // if (!pageContent) console.error("Elemento '.page-content' no encontrado.");
        // if (!navbar) console.error("Elemento '.navbar' no encontrado.");
    }
});

// -----------------------------carrusel -----------------------------
// script.js (añadir al final o en un archivo separado como slider.js)

document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.querySelector('.slider-track');
    const slideItems = document.querySelectorAll('.slide-item');
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
    const dots = document.querySelectorAll('.slider-dots-container .dot');

    let currentIndex = 0;
    const totalSlides = slideItems.length;

    // Función para actualizar la posición del slider y la clase 'active'
    function updateSlider() {
        // Calcula el desplazamiento horizontal para el track
        // Asegúrate de que sliderTrack.clientWidth es el ancho del *contenedor visible*
        // o que slideItems[0].clientWidth te da el ancho correcto de cada slide
        const slideWidth = slideItems[0].clientWidth;
        sliderTrack.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

        // Actualiza la clase 'active' en las diapositivas
        slideItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Actualiza la clase 'active' en los puntos (dots)
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Funcionalidad para el botón "Siguiente"
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        });
    }

    // Funcionalidad para el botón "Anterior"
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        });
    }

    // Funcionalidad para los puntos de navegación
    if (dots.length > 0) {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });
    }

    // Autoplay (opcional)
    let autoplayInterval;
    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        }, 4000); // Cambia cada 4 segundos
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Iniciar autoplay al cargar
    startAutoplay();

    // Detener autoplay al pasar el ratón y reanudar al quitarlo (para desktop)
    const sliderSection = document.getElementById('custom-slider-section');
    if (sliderSection) {
        sliderSection.addEventListener('mouseenter', stopAutoplay);
        sliderSection.addEventListener('mouseleave', startAutoplay);
    }

    // Reiniciar slider y recalcular ancho al redimensionar la ventana
    window.addEventListener('resize', () => {
        // Detener temporalmente el autoplay para evitar saltos visuales
        stopAutoplay();
        // Espera un poco antes de reanudar, dando tiempo al navegador a recalcular
        setTimeout(() => {
            updateSlider(); // Recalcula la posición de la diapositiva actual
            startAutoplay();
        }, 300); // Un pequeño retraso
    });

    // Inicializa el slider al cargar la página
    updateSlider();
});


// ------------------------------------------ redes sociales ------------------------------------------
document.querySelectorAll('.icono').forEach(icono => {
    icono.addEventListener('click', () => {
      document.querySelectorAll('.icono').forEach(i => i.classList.remove('iluminado'));
      icono.classList.add('iluminado');
    });
  });

