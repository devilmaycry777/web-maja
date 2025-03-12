// Obtener las miniaturas y la imagen principal
const thumbnails = document.querySelectorAll('.thumbnails img');
const mainImage = document.querySelector('.main-image img');

// Agregar un evento de clic a cada miniatura
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // Cambiar la imagen principal por la imagen de la miniatura seleccionada
        const newImageSrc = thumbnail.getAttribute('src');
        mainImage.src = newImageSrc;
    });
});
