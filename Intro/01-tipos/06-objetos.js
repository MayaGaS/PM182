/**
 * LOS OBJETOS EN JS SON DE TIPO DE REFERENCIA 
 * LOS OBJETOS SON UNA AGRUPACION DE DATOS QUE HACEN SENTIDO TENERLOS JUNTOS
 */

// Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "Demon slayer",
    edad: 16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

//modificar una propiedad
personaje.edad = 13; //esta es la forma que mas se utiliza 
personaje['edad'] = 16;

let llave = 'edad';
personaje[llave] = 16;

//eliminar alguna de las propiedades 
delete personaje.anime;

console.log(personaje);