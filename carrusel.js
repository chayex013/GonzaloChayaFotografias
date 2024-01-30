document.addEventListener('DOMContentLoaded', function () {
    
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
   
    

   // const retroceder = function () {
        // Ocultar los carruseles
        
        //carruselBoudoir.style.display = 'none';
        //carruselFineArt.style.display = 'none';
        
        //carruselStreetStyle.style.display = 'none';
        //carruselUrban.style.display = 'none';

       // galeriaInicial.style.display = 'grid';
//};

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

    
    const arrowButtons = document.querySelectorAll('.carrusel-arrow');
    arrowButtons.forEach(button => {
        button.addEventListener('click', App.prototype.processingButton);
    });

});


function App() {}

App.prototype.processingButton = function (event) {
    const btn = event.currentTarget;
    const carruselList = btn.parentNode;
    const track = carruselList.querySelector('#track');
    const carrusel = track.querySelectorAll('.carrusel');

    const carruselWidth = carrusel[0].offsetWidth;

    const trackWidth = track.offsetWidth;
    const listWidth = carruselList.offsetWidth;

    let leftPosition = parseFloat(window.getComputedStyle(track).getPropertyValue('transform').split(',')[4]) || 0;

    btn.dataset.button == 'prev-arrow'
        ? prevAction(leftPosition, carruselWidth, track, trackWidth)
        : nextAction(leftPosition, carruselWidth, track, trackWidth, listWidth);
};

let prevAction = (leftPosition, carruselWidth, track, trackWidth) => {
    if (leftPosition < 0) {
        track.style.transform = `translateX(${leftPosition + carruselWidth}px)`;
    }
};

let nextAction = (leftPosition, carruselWidth, track, trackWidth, listWidth) => {
    if (leftPosition > listWidth - trackWidth) {
        track.style.transform = `translateX(${leftPosition - carruselWidth}px)`;
    }
};



