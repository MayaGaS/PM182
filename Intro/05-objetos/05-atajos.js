let obj = {}; // atajo para llamar al constructor de objetos
let obj2 = new Object();

/**
 * new Array(); --> []
 * new String(); --> "" '' ``
 * new Number(); --> 12
 * new Boolean(); --> true false 
 */

function Uusuario() {
    this.name = "Chanchito feliz";
}
let user = new Uusuario();
console.log(user.constructor);

const s1 = "1 + 1";
const s2 = new String("1 + 1");
// console.log(eval(s1), eval(s2));
console.log(s2.valueOf());