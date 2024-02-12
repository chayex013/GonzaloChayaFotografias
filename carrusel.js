/* document.addEventListener('DOMContentLoaded', function () {
    
    // Obtener referencia al botón "Ver Más" de Beauty
    const btnVerMasBeauty = document.getElementById('btn-beauty');
    const btnRetroceso = document.getElementById('btn-retroceso');
    // Obtener referencias a la galería inicial y al carrusel Beauty
    const galeriaInicial = document.getElementById('galeria-inicial');
    const carruselBeauty = document.getElementById('carrusel-beauty');

    // Agregar un evento de clic al botón "Ver Más" de Beauty
    btnVerMasBeauty.addEventListener('click', function () {
        // Ocultar la galería inicial
        galeriaInicial.style.display = 'none';

        // Mostrar el carrusel Beauty
        carruselBeauty.style.display = 'block';
    });

    const btnVerMasLifeStyle = document.getElementById('btn-life');
    const carruselLifeStyle = document.getElementById('carrusel-life');

    btnVerMasLifeStyle.addEventListener('click', function () {
        galeriaInicial.style.display = 'none';
        carruselLifeStyle.style.display = 'block';
    });

    const btnVerMasStreetStyle = document.getElementById('btn-street');
    const carruselStreetStyle = document.getElementById('carrusel-street');

    btnVerMasStreetStyle.addEventListener('click', function () {
        galeriaInicial.style.display = 'none';
        carruselStreetStyle.style.display = 'block';
    });

    const btnVerMasBoudoir = document.getElementById('btn-boudoir');
    const carruselBoudoir = document.getElementById('carrusel-boudoir');

    btnVerMasBoudoir.addEventListener('click', function () {
        galeriaInicial.style.display = 'none';
        carruselBoudoir.style.display = 'block';
    });

    const btnVerMasFineArt = document.getElementById('btn-fine');
    const carruselFineArt = document.getElementById('carrusel-fine');

    btnVerMasFineArt.addEventListener('click', function () {
        galeriaInicial.style.display = 'none';
        carruselFineArt.style.display = 'block';
    });

    const btnVerMasUrban = document.getElementById('btn-urbex');
    const carruselUrban = document.getElementById('carrusel-urbex');

    btnVerMasUrban.addEventListener('click', function () {
        galeriaInicial.style.display = 'none';
        carruselUrban.style.display = 'block';
    });
   


btnRetroceso.addEventListener('click', function () {
    carruselBeauty.style.display = 'none';
    
    galeriaInicial.style.display = 'grid';
});

//para cada uno
const btnRetrocesoLife = document.getElementById('btn-retroceso-life');
btnRetrocesoLife.addEventListener('click', function () {
    
    carruselLifeStyle.style.display = 'none';
    galeriaInicial.style.display = 'grid';
});

const btnRetrocesoStreet = document.getElementById('btn-retroceso-street');
btnRetrocesoStreet.addEventListener('click', function () {
    
    carruselStreetStyle.style.display = 'none';
    galeriaInicial.style.display = 'grid';
});

const btnRetrocesoBoudoir = document.getElementById('btn-retroceso-boudoir');
btnRetrocesoBoudoir.addEventListener('click', function () {
    
    carruselBoudoir.style.display = 'none';
    galeriaInicial.style.display = 'grid';
});


const btnRetrocesoFine = document.getElementById('btn-retroceso-fine');
btnRetrocesoFine.addEventListener('click', function () {
    
    carruselFineArt.style.display = 'none';
    galeriaInicial.style.display = 'grid';
});


const btnRetrocesoUrbex= document.getElementById('btn-retroceso-urbex');
btnRetrocesoUrbex.addEventListener('click', function () {
    
    carruselUrban.style.display = 'none';
    galeriaInicial.style.display = 'grid';
});

   
});




 */