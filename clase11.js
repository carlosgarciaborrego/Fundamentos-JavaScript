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

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}



function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} no es mayor de edad`)
    }
}

imprimirSiEsMayorDeEdad(carlos)