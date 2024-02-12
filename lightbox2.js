    document.addEventListener('DOMContentLoaded', function () {
        const imagenes = document.querySelectorAll('.img-carrusel');
        const imagenesLight = document.querySelector('.agregar-imagen');
        const contenedorLight = document.querySelector('.imagen-light');
        let indexActual = 0;

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
        imagenes.forEach((imagen, index) => {
            imagen.addEventListener('click', () => {
                // Obtener la galería específica de la imagen
                const galeria = obtenerGaleria(imagen);
                aparecerImagen(imagen.getAttribute('src'), index, galeria);
            });
        });

        // Función para obtener la galería específica de la imagen
        const obtenerGaleria = (imagen) => {
            // Lógica para determinar la galería de la imagen
            // Puedes usar clases, atributos, IDs u otra lógica según tu estructura HTML
            const parentCarousel = imagen.closest('.carousel, .carousel-1');
            if (parentCarousel) {
                const galeriaClass = Array.from(parentCarousel.classList).find(className => className !== 'carousel' && className !== 'carousel-1' && className !== 'carousel-2');
                if (galeriaClass) {
                    return galeriaClass;
                }
            }

            // Si no se puede determinar la galería, devuelve un valor predeterminado o maneja la lógica según tu necesidad.
            return 'default';
        };

        // Función para mostrar la imagen en el lightbox
        const aparecerImagen = (imagen, index, galeria) => {
            imagenesLight.src = imagen;
            contenedorLight.classList.toggle('show');
            imagenesLight.classList.toggle('showImage');

            // Actualiza el índice actual para la galería específica
            indexActual = index;

            // Agrega la clase de la galería para mostrar solo en esa galería
            contenedorLight.classList.add(galeria);
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
          
            const pieLinks = document.querySelector('#navbar');

        if (imagenesLight.classList.contains('showImage')) {
                // Oculta las flechas y el pie de página para la galería específica
                ocultarElementos( pieLinks);
            } else {
                // Muestra las flechas y el pie de página después de la transición
                mostrarElementos( pieLinks);
            }
        });

        

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
        // Función para ocultar elementos
        const ocultarElementos = (...elementos) => {
            elementos.forEach(elemento => {
                if (elemento) {
                    elemento.style.display = 'none';
                }
            });
        };

        // Función para mostrar elementos
        const mostrarElementos = (...elementos) => {
            elementos.forEach(elemento => {
                if (elemento) {
                    elemento.style.display = 'block';
                }
            });
        };
    });
