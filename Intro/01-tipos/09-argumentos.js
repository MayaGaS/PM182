// las funciones pueden recibir multiples argumentos y tambien mutiples parametros

function suma(a, b) { // cuando referenciamos los valores dentro de las funciones se llaman PARAMETROS 
    console.log(arguments); // esto para poder acceder a todos los valores que se estan pasando a la funcion
    return a + b;
}

let resultado = suma(5, 6, 1, 2, 3); // los valores que se pe pasan a las funciones cuando se mandan llamar son ARGUMENTOS 
console.log(resultado);
console.log(typeof suma);