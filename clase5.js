//ALCANCE GLOBAL

var nombre = 'Carlos'

// function imprimrNombreEnMayusculas(){
//     nombre = nombre.toUpperCase()
//     console.log(nombre)
// }

// imprimrNombreEnMayusculas() 


//ALCANCE LOCAL

function imprimrNombreEnMayusculas(nombre){
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimrNombreEnMayusculas(nombre) 