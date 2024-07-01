/**
 * los tipos de datos primitivos se copian cuando los asignamos a otras variables
 * los tipos de datos de referencia se referencian y son los objetos, los array y las funciones 
 */

let a = { prop: 1 };

function suma(n) {
    n.prop++;
}

suma(a);
console.log(a);