document.addEventListener('DOMContentLoaded', function () {
    const imagenes = document.querySelectorAll('.img-carrusel');
    const imagenesLight = document.querySelector('.agregar-imagen');
    const contenedorLight = document.querySelector('.imagen-light');

    // Creación de flechas izquierda y derecha para lightbox
    const flechaIzquierda = document.createElement('img');
    flechaIzquierda.src = 'imagen/PNG/arrow-sm-left-svgrepo-com.svg';
    flechaIzquierda.classList.add('flecha', 'flecha-izquierda');

    const flechaDerecha = document.createElement('img');
    flechaDerecha.src = 'imagen/PNG/arrow-sm-right-svgrepo-com.svg';
    flechaDerecha.classList.add('flecha', 'flecha-derecha');

    // Agregamos las flechas al contenedor del lightbox
    contenedorLight.appendChild(flechaIzquierda);
    contenedorLight.appendChild(flechaDerecha);

    // Agregamos un evento click a cada imagen del carrusel
    imagenes.forEach((imagen) => {
        imagen.addEventListener('click', () => {
            aparecerImagen(imagen.getAttribute('src'));
        });
    });

    // Función para mostrar la imagen en el lightbox
    const aparecerImagen = (imagen) => {
        imagenesLight.src = imagen;
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');

        // Selección de flechas y enlaces del carrusel y el pie de página
        const flechaCarruselNext = document.querySelector('#next-arrow');
        const flechaCarruselPrev = document.querySelector('#prev-arrow');
        const flechaCarruselNext1 = document.querySelector('#next-arrow1');
        const flechaCarruselPrev1 = document.querySelector('#prev-arrow1');
        const flechaCarruselNext2 = document.querySelector('#next-arrow-2');
        const flechaCarruselPrev2 = document.querySelector('#prev-arrow-2');
        const flechaCarruselNext3 = document.querySelector('#next-arrow-2');
        const flechaCarruselPrev3 = document.querySelector('#prev-arrow-2');
        const flechaCarruselNext4 = document.querySelector('#next-arrow-2');
        const flechaCarruselPrev4 = document.querySelector('#prev-arrow-2');
        const pieLinks = document.querySelector('#navbar');

        // Ocultar flechas y pie de página al mostrar el lightbox
        if (imagenesLight.classList.contains('showImage')) {
            flechaCarruselNext.style.display = 'none';
            flechaCarruselPrev.style.display = 'none';
            flechaCarruselNext1.style.display = 'none';
            flechaCarruselPrev1.style.display = 'none';
            flechaCarruselNext2.style.display = 'none';
            flechaCarruselPrev2.style.display = 'none';
            flechaCarruselNext3.style.display = 'none';
            flechaCarruselPrev3.style.display = 'none';
            flechaCarruselNext4.style.display = 'none';
            flechaCarruselPrev4.style.display = 'none';
            pieLinks.style.display = 'none';
        } else {
            // Mostrar flechas y pie de página después de una transición
            setTimeout(() => {
                flechaCarruselNext.style.display = 'block';
                flechaCarruselPrev.style.display = 'block';
                flechaCarruselNext1.style.display = 'block';
                flechaCarruselPrev1.style.display = 'block';
                flechaCarruselNext2.style.display = 'block';
                flechaCarruselPrev2.style.display = 'block';
                flechaCarruselNext3.style.display = 'block';
                flechaCarruselPrev3.style.display = 'block';
                flechaCarruselNext4.style.display = 'block';
                flechaCarruselPrev4.style.display = 'block';
                pieLinks.style.display = 'flex';
            }, 100);
        }
    };

    // Eventos click para las flechas izquierda y derecha del lightbox
    flechaIzquierda.addEventListener('click', () => cambiarImagen('izquierda'));
    flechaDerecha.addEventListener('click', () => cambiarImagen('derecha'));

    // Evento click para cerrar el lightbox al hacer clic fuera de la imagen
    contenedorLight.addEventListener('click', (e) => {
        if (e.target !== imagenesLight && e.target !== flechaIzquierda && e.target !== flechaDerecha) {
            contenedorLight.classList.toggle('show');
            imagenesLight.classList.toggle('showImage');
        }
    });

    // Evento de transición para mostrar/ocultar flechas y pie de página
    imagenesLight.addEventListener('transitionend', () => {
        const flechaCarruselNext = document.querySelector('#next-arrow');
        const flechaCarruselPrev = document.querySelector('#prev-arrow');
        const flechaCarruselNext1 = document.querySelector('#next-arrow1');
        const flechaCarruselPrev1 = document.querySelector('#prev-arrow1');
        const flechaCarruselNext2 = document.querySelector('#next-arrow2');
        const flechaCarruselPrev2 = document.querySelector('#prev-arrow2');
        const flechaCarruselNext3 = document.querySelector('#next-arrow3');
        const flechaCarruselPrev3 = document.querySelector('#prev-arrow3');
        const flechaCarruselNext4 = document.querySelector('#next-arrow4');
        const flechaCarruselPrev4 = document.querySelector('#prev-arrow4');
        const pieLinks = document.querySelector('#navbar');

        if (imagenesLight.classList.contains('showImage')) {
            flechaCarruselNext.style.display = 'none';
            flechaCarruselPrev.style.display = 'none';
            flechaCarruselNext1.style.display = 'none';
            flechaCarruselPrev1.style.display = 'none';
            flechaCarruselNext2.style.display = 'none';
            flechaCarruselPrev2.style.display = 'none';
            flechaCarruselNext3.style.display = 'none';
            flechaCarruselPrev3.style.display = 'none';
            flechaCarruselNext4.style.display = 'none';
            flechaCarruselPrev4.style.display = 'none';
            pieLinks.style.display = 'none';
        } else {
            flechaCarruselNext.style.display = 'block';
            flechaCarruselPrev.style.display = 'block';
            flechaCarruselNext1.style.display = 'block';
            flechaCarruselPrev1.style.display = 'block';
            flechaCarruselNext2.style.display = 'block';
            flechaCarruselPrev2.style.display = 'block';
            flechaCarruselNext3.style.display = 'block';
            flechaCarruselPrev3.style.display = 'block';
            flechaCarruselNext4.style.display = 'block';
            flechaCarruselPrev4.style.display = 'block';
            pieLinks.style.display = 'flex';
        }
    });

    let indexActual = 0;

    // Función para cambiar la imagen en el lightbox
    const cambiarImagen = (direccion) => {
        if (direccion === 'izquierda') {
            indexActual--;
            if (indexActual < 0) {
                indexActual = imagenes.length - 1;
            }
        } else if (direccion === 'derecha') {
            indexActual++;
            if (indexActual >= imagenes.length) {
                indexActual = 0;
            }
        }

        // Obtener la nueva imagen y actualizar la fuente de la imagen en el lightbox
        const nuevaImagen = imagenes[indexActual].getAttribute('src');
        imagenesLight.src = nuevaImagen;
    };
});
