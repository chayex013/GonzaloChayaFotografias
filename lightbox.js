const imagenes = document.querySelectorAll ('.img-galeria', )
const imagenesLight = document.querySelector ('.agregar-imagen')
const contenedorLight = document.querySelector ('.imagen-light')
const contenedorGaleria = document.querySelector('.contenedor-galeria', );

const flechaIzquierda = document.createElement('img');
flechaIzquierda.src = 'imagen/PNG/arrow-sm-left-svgrepo-com.svg';
flechaIzquierda.classList.add('flecha', 'flecha-izquierda');

const flechaDerecha = document.createElement('img');
flechaDerecha.src = 'imagen/PNG/arrow-sm-right-svgrepo-com.svg';
flechaDerecha.classList.add('flecha', 'flecha-derecha');

contenedorLight.appendChild(flechaIzquierda);
contenedorLight.appendChild(flechaDerecha);

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'));
    });
});

const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');

    const flechaCarruselNext = document.querySelector('#next-arrow');
    const flechaCarruselPrev = document.querySelector('#prev-arrow');
    const pieLinks = document.querySelector('#navbar');

    if (imagenesLight.classList.contains('showImage')) {
        
        pieLinks.style.display = 'none';
    } else {
        setTimeout(() => {
          
            pieLinks.style.display = 'flex';
        }, 100);
    }
};

flechaIzquierda.addEventListener('click', () => cambiarImagen('izquierda'));
flechaDerecha.addEventListener('click', () => cambiarImagen('derecha'));

contenedorLight.addEventListener('click', (e) => {
    if (e.target !== imagenesLight && e.target !== flechaIzquierda && e.target !== flechaDerecha) {
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
    }
});

imagenesLight.addEventListener('transitionend', () => {
    
    const pieLinks = document.querySelector('#navbar');

    if (imagenesLight.classList.contains('showImage')) {
        
        pieLinks.style.display = 'none';
    } else {
        
        pieLinks.style.display = 'flex';
    }
});

let indexActual = 0;

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

    const nuevaImagen = imagenes[indexActual].getAttribute('src');
    imagenesLight.src = nuevaImagen;
};