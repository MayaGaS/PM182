/**
 * las funicones pueden ser creadas utilizando el constructor de function
 * existe un metodo llamado call y otro llamado apply que permiten extender objetos que se hayan definido antes  
 */

function Punto(x, y) {
    this.x = y;
    this.y = y;
    this.dibujar = function() {console.log('Dibujando...')}
}

let punto = { z: 7 };
// Punto.call(punto, 1, 2);
Punto.apply(punto, [1, 2])
console.log(punto);

// const Point = new Function('x', 'y', `
// this.x = y;
// this.y = y;
// this.dibujar = function() {console.log('Dibujando...')}
// `);

// const p = new Point(1, 2);
// console.log(p);