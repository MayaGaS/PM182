/**
 * con la instruccion de in podemos verificar 
 * si es que un objeto tiene alguna propiedad
 * o algun metodo en paarticular 
 * 
 * el constructor de Object tambien tiene metodos de keys y entry y son metodos estaticos
 */

const punto = {
    x: 10,
    y: 15,
    dibujar() {
        console.log('dibujando');
    }
};

// delete punto.dibujar;
if ('dibujar' in punto) {
    punto.dibujar();
}
// let keys = Object.keys(punto);
// console.log(Object.keys(punto));

for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
}

for (let entry of Object.entries(punto)) {
    console.log(entry);
}

for (let llave in punto) {
    console.log(llave, punto[llave]);
}