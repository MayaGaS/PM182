/**
 * el nombre que se le da es del recurso que nosotros queremos que cree
 * la convension que se uasara es UpperCamelCase o PascalCase
 * un metodo es una funcion que fue asignada a una propiedad de un objeto
 */

// { id: 1, recuperarClave: function(){} }
function Usuario() {
    this.id =1;
    this.recuperarClave = function () { // ya no son funciones, ahora son metodos
        console.log('recuperando clave...');
    }
}

let usuario = new Usuario();  
/**
 * cuando se usa la palabra reservada new, ocureren cuatro cosas
 * la primera es que se crea un objeto literal del aire 
 * lo segundo que pasa es que se vincula el prototipo de la funicon con el objeto que se acaba de ccrear
 * despues se le asigna a la palabra reservada de this el objeto vacio que se creo
 * y finalmente si no retorna nada, automaticamnete retorna this
 */

console.log(usuario);