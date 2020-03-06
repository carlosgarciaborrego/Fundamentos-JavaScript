var carlos = {
    nombre: 'Carlos',
    apellido: 'García',
    edad: 24,
    ingeniero: true,
    cocinero: false,
    cantante: false,
}

var juanlu = {
    nombre: 'juanlu',
    apellido: 'García',
    edad: 12,
    ingeniero: false,
    cocinero: false,
    cantante: false
}

const MAYORIA_DE_EDAD = 18

//Asignandole a la variable una funcion
// const esMayorDeEdad = function (persona){
//     return persona.edad >= MAYORIA_DE_EDAD
// }

//Arrow function
// const esMayorDeEdad = (persona) => {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

//Si tenemos un único parametro en el Arrow Function, podemos obviar los parentesis
// const esMayorDeEdad = persona => {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

//Si tenemos una única linea, es decir, si solo devolvemos algo, podemos eliminar el return y ponerlo todo en una única linea
//const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

//Si desestructuramos, debemos poner los paréntesis para los parámetros
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD



function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} no es mayor de edad`)
    }
}

function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log('Acceso denegado')
    }
}

imprimirSiEsMayorDeEdad(carlos)