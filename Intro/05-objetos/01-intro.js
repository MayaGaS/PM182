let user = {
    email: 'nico@holamundo.io',
    name: 'Nicolas',
    direccion: {
        calle:'Queen st',
        numero: 15,
    },
    activo: true,
    recuperarClave: function () { // se le llama funcion anonima 
        console.log('Recuperar clave...');
    }, 
};