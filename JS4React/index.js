// Funcion
// function suma(a, b) {
//     return a + b;
// } 

// Funcion farArrow
// const suma = (a,b) => {
//     return a + b;
// }

// Funcion farArrow simplificada
// const suma = (a,b) => a+b

// console.log(suma(2,3))

// Objeto
// const usuario = {
//     nombre: 'Ivan',
//     apellido: 'Guerra',
//     edad: 36,
//     direccion: {
//         pais: 'Mexico',
//         ciudad: 'Queretaro',
//         calle: 'La misma 123'
//     },
//     amigos: ['Alex', 'Carlos'],
//     estatus: true,
//     enviaCorreo: enviarCorr =() => 'enviando...'
// }

// Propiedades 
// console.log(usuario)
// console.log(usuario.direccion.calle)
// console.log(usuario.amigos)

// Metodos 
// console.log(usuario.enviaCorreo())

// Trabajo con el DOM
// const titulo = document.createElement('h1')
// titulo.innerText = 'Soy un titulo creado con JS' //propiedad innerText
// document.body.append(titulo)

// const boton = document.createElement('button')
// boton.innerText = 'Presiona'
// document.body.append(boton)
// desde JS podemos generar eventos o situaciones en las que se va a realizar algo

// boton.addEventListener('click', function (){
    // console.log('Evento click ejecutado')
//     titulo.innerText = "Evento click ejecutado"
//     alert('Exito')
// })

// Trabajo con Arreglos 
// const nombres = ['Alan', 'Isa', 'Pablo', 'Juan Luis']
// for (let i = 0 ; 1< nombres.length; i++){
//     const elemento = nombres[i]
//     console.log(elemento)
// }

// nombres.forEach(function (nombre){
//     console.log(nombre)
// })

// FUNCION MAP: Permite generar copia de un Array
// const array2 = nombres.map(function (nombre){
//     console.log(nombre)
//     return nombre
// })

// console.log(nombres)
// console.log(array2)

// FUNCION FIND: Ubicar elementos en un arreglo 
// const resultado = nombres.find(function (nombre){
//     if (nombre === 'Pablo'){
//         return nombre;
//     }
// })

// console.log(resultado)

// FUNCION FILTER: Recorre el arreglo filtrado resultado
// const resultado = nombres.filter(function (nombre){
//     if(nombre != 'Pablo'){
//         return nombre;
//     }
// })

// console.log(nombres)
// console.log(resultado)

// FUNCION CONCAT:
// const edades=[78,89,12,8,10,15]
// console.log(nombres.concat(edades))

//Spread Operator
// console.log([...nombres, ...edades])

// import {suma, resta} from './calculadora.js';
// import * as calc from './calculadora.js';

// console.log(suma(45,54));
// console.log(resta(45,54));

/**
const ul= document.createElement('ul')


 * fetch('https://jsonplaceholder.typicode.com/posts')
                .then(function (response){
                    console.log("Carga de datos completada")
                    return response.json()
                }).then(function (data){
                    console.log(data)
                    data.forEach( function (post){
                        const li = document.createElement('li')
                        li.innerHTML= post.title
                        ul.append(li)
                    })
                    document.body.append(ul)
                })

console.log('Cargando HTML')
console.log('Cargando CSS')
console.log('Cargando Imagenes')
*/


    // Ejemplo con Async Await
const ul = document.createElement('ul')

async function cargarDatos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const datos = await response.json() //Traer los datos en json
    console.log(datos) 
    datos.forEach(function(post){
        const li = document.createElement('li')
        li.innerHTML = post.title //Traer por cada fila del JSON irla "imprimiendo" por c/u
        ul.append(li) //Mando mi "li" a "ul" para de ahí mandar solo "ul"
    })
    document.body.append(ul) //Para que mande la lista completa (ul) al body
}
cargarDatos()
console.log('Cargando HTML')
console.log('Cargando CSS')
console.log('Cargando Imagenes')

