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

// ---------------------------------------------- SERVICIOS  ----------------------------------------------//
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  document.querySelectorAll('.servicio').forEach(el => {
    el.classList.add('invisible');
    observer.observe(el);
  });



// -----------------------------carrusel -----------------------------
// script.js (añadir al final o en un archivo separado como slider.js)
  const track = document.querySelector('.slider-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.slider-button.next');
  const prevButton = document.querySelector('.slider-button.prev');
  const dots = document.querySelectorAll('.dot');

  let currentSlide = 0;

  function updateSlider() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
  }

  nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  });

  prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateSlider();
    });
  });
// ------------------------------------------ redes sociales ------------------------------------------
document.querySelectorAll('.icono').forEach(icono => {
    icono.addEventListener('click', () => {
      document.querySelectorAll('.icono').forEach(i => i.classList.remove('iluminado'));
      icono.classList.add('iluminado');
    });
  });

