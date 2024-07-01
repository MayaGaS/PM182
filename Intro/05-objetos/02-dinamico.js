const user = { id: 1 };
/**
 * cuando se define una variable const no se podra cambiar su valor
 * pero si el valor que le asignamos es un objeto, si se puede cambiar el valor a las propiedades del objeto 
 */


user.name = 'Nicolas';
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

/**
 * hara que no se pueda modificar un objeto 
 * no se podran cambiar sus propiedadeas
 * no se podran cambiar sus valores 
 */
// const user1 = Object.freeze({ id: 1 });
const user1 = Object.seal({ id: 1 }); // si quiero cambiarle el valor a las propiedades, pero no agregarle o quitarle propiedades
user1.name = 'Nico';
user1.id = 2;
console.log(user1);