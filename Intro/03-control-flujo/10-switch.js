// nos va a permitir indicar al codigo donde queremos explicitamente donde queremos que este se vaya dependiendo del valor que tiene una variable

let accion = 'actualizar';

switch (accion) {
    case 'listar':
        console.log('Accion de listar');
        break;
    case 'guardar':
        console.log('Accion de guardar');
        break;
    default: // se va a ejecutar siempre y cuando no exista ninun case al cual la variable pueda corresponder
        console.log('Accion no reconocida');
}