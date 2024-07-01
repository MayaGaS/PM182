/**
 * Creacion de objetos con la misma estructura
 * Las factory functions nos ayudan a no tener un codigo repetitivo
 * utilizan como convesvion camelCase
 * por lo regular siempre empiezan con crear o create
 */

function crearUsuario(name, email) { 
    return {
        email,
        name,
        actiivo: true,
        recuperarClave: function () {
            console.log('recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Nicolas', 'nico@holamundo.io');
let user2 = crearUsuario('Felipe', 'felipe@holamundo.io');

console.log(user1, user2);