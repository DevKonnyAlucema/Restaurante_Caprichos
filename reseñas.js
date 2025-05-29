document.addEventListener('DOMContentLoaded', function() {
    // --- Rotación de mensajes motivacionales ---
    const spots = document.querySelectorAll('.spot');
    let currentSpot = 0;
    
    function rotateSpots() {
        spots.forEach(spot => spot.classList.remove('active'));
        currentSpot = (currentSpot + 1) % spots.length;
        spots[currentSpot].classList.add('active');
    }
    
    setInterval(rotateSpots, 5000);
    
    // --- Sistema de valoración con estrellas ---
    const stars = document.querySelectorAll('.stars .fas');
    let currentRating = 0;
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            currentRating = rating;
            
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
            
            document.querySelector('.rating-text').textContent = 
                `Gracias por tu valoración de ${rating} estrella${rating !== 1 ? 's' : ''}!`;
        });
        
        star.addEventListener('mouseover', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.style.color = '#ffc107';
                } else {
                    s.style.color = '#ddd';
                }
            });
        });
        
        star.addEventListener('mouseout', function() {
            stars.forEach((s, index) => {
                if (index < currentRating) {
                    s.style.color = '#ffc107';
                } else {
                    s.style.color = '#ddd';
                }
            });
        });
    });
    
    // --- Manejo del formulario y FEED DE RESEÑAS ---
    const reviewForm = document.querySelector('.reseña-form');
    const listaResenasDiv = document.getElementById('listaResenas');

    // Array para almacenar las reseñas (simulado, en real vendrían de un servidor)
    let reviews = [
        { user: 'Ana G.', rating: 5, review: '¡Caprichos es una delicia! El ambiente es genial y la comida espectacular. ¡Volveré pronto!' },
        { user: 'Carlos M.', rating: 4, review: 'Buena experiencia en general. Me gustó mucho el postre, aunque la espera fue un poco larga.' },
        { user: 'Sofía P.', rating: 5, review: 'Cada plato es una obra de arte. La atención al cliente es de primera. ¡Muy recomendado!' }
    ];

    // Función para mostrar/actualizar las reseñas en el HTML
    function displayReviews() {
        listaResenasDiv.innerHTML = ''; // Limpiamos el contenedor antes de añadir nuevas reseñas

        if (reviews.length === 0) {
            listaResenasDiv.classList.add('empty-state');
            listaResenasDiv.innerHTML = '<p>Aún no hay reseñas. ¡Sé el primero en compartir tu experiencia!</p>';
            return;
        } else {
            listaResenasDiv.classList.remove('empty-state');
        }

        reviews.forEach(review => {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('reseña-item');

            const starsHtml = Array(5).fill('<i class="far fa-star"></i>').map((star, i) => 
                i < review.rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'
            ).join('');

            reviewItem.innerHTML = `
                <div class="header-reseña">
                    <span class="nombre-usuario">${review.user}</span>
                    <div class="estrellas-reseña">${starsHtml}</div>
                </div>
                <p>"${review.review}"</p>
            `;
            listaResenasDiv.prepend(reviewItem); // Añadir al principio para que las más nuevas salgan primero
        });
    }

    // Mostrar las reseñas al cargar la página
    displayReviews();
    
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const reviewText = this.querySelector('textarea').value;
        const userName = this.querySelector('input').value.trim() || 'Cliente Anónimo';
        
        if (reviewText.trim() === '') {
            alert('Por favor, escribe tu reseña antes de enviar.');
            return;
        }
        
        if (currentRating === 0) {
            alert('Por favor, califica tu experiencia con las estrellas.');
            return;
        }
        
        // Aquí es donde normalmente enviarías los datos a tu servidor
        // En este ejemplo, simplemente los añadimos al array 'reviews'
        const newReview = {
            user: userName,
            rating: currentRating,
            review: reviewText
        };

        reviews.unshift(newReview); // Añadir la nueva reseña al principio del array
        displayReviews(); // Volver a dibujar el feed con la nueva reseña
        
        // Mensaje de éxito
        alert('¡Gracias por tu reseña! Valoramos mucho tu opinión.');
        
        // Resetear formulario
        this.reset();
        stars.forEach(star => star.classList.remove('active')); // Resetear estrellas visualmente
        currentRating = 0; // Resetear la calificación
        document.querySelector('.rating-text').textContent = 'Califica tu experiencia'; // Resetear texto de calificación
    });
    
    // Scroll suave al formulario
    document.querySelector('.cta-button').addEventListener('click', function(e) {
        e.preventDefault();
        // Usar un ID para el formulario si necesitas un scroll más preciso
        // O simplemente scroll al contenedor principal del formulario
        const formElement = document.querySelector('.reseña-form');
        if (formElement) {
            formElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center' // Centra el formulario en la vista
            });
        }
    });
});