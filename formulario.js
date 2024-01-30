// imagen miniatura
function mostrarMiniatura() {
    const inputFoto = document.getElementById('foto');
    const miniatura = document.getElementById('miniatura');

    // Limpiar miniatura
    miniatura.innerHTML = '';

    // Verificar si se seleccionó un archivo
    if (inputFoto.files.length > 0) {
        const archivo = inputFoto.files[0];

        // Verificar si es una imagen
        if (archivo.type.startsWith('image/')) {
            const lector = new FileReader();

            lector.onload = function (e) {
                // Crear un elemento de imagen y mostrar la miniatura
                const imagen = document.createElement('img');
                imagen.src = e.target.result;
                miniatura.appendChild(imagen);
            };

            // Leer el archivo como un objeto de datos URL
            lector.readAsDataURL(archivo);
        } else {
            miniatura.innerHTML = 'El archivo seleccionado no es una imagen.';
        }
    }
}

// Obtener el input de tipo file
const inputFoto = document.getElementById('foto');

// Agregar un evento al input para mostrar la miniatura en tiempo real
inputFoto.addEventListener('change', mostrarMiniatura);

//requisitos