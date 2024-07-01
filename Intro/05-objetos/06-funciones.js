/**
 * las funciones JS tambien son objetos y se les consideran objetos de primera clase 
 * tienen propiedades, se les pueden asignar a otras variables o constantes 
 * se pueden pasar como argumentos a otras fuciones
 * las funciones pueden ser retornadas 
*/

function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario
let user = new U('Nicolas');

console.log(user);

function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'Chanchito');
console.log(user1);

function returned() {
    return function() {
        console.log('Hola Mundo');
    }
}

let saludo = returned();
saludo();