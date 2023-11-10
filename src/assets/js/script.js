document.getElementById('pokedexbutton').addEventListener('click', function() {
    var pokedexfoto = document.getElementById('pokedexfoto');
    var ventana = document.getElementById('ventana');

    // Cambiar la imagen antes de abrir la ventana
    pokedexfoto.style.transform = 'scale(0)'; // Reducir la escala de la imagen
    pokedexfoto.style.width = '400px'; // Ajustar el tamaño de la imagen
    

    setTimeout(function() {
        pokedexfoto.src = './assets/img/_removal.ai__7b874316-cccf-4bf6-a0b4-73ffe81c4c7f-captura-transformed.png';
        pokedexfoto.style.transform = 'scale(1)';
    }, 50);

    // Abrir la ventana después de cambiar la imagen
    setTimeout(function() {
        ventana.style.display = 'block';
    }, 800);
});

document.getElementById('cerrarVentana').addEventListener('click', function() {
    var ventana = document.getElementById('ventana');

    // Cerrar la ventana antes de cambiar la imagen
    ventana.style.display = 'none';

    var pokedexfoto = document.getElementById('pokedexfoto');
    
    // Cambiar la imagen después de cerrar la ventana
    setTimeout(function() {
        pokedexfoto.src = './assets/img/Pok_dex-removebg-preview-transformed.png';
        pokedexfoto.style.transform = 'scale(1)';
        pokedexfoto.style.width = ''; // Restablecer el ancho a su valor original
    }, 500);
});
