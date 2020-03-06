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

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)
    if(persona.ingeniero){
        console.log(`Ingeniero`)
    } else{
        console.log(`No es Ingeniero`)
    }

    if(persona.cocinero){
        console.log(`Cocinero`)
    } else{
        console.log(`No es Cocinero`)
    }


    if(persona.cantante){
        console.log(`Cantante`)
    } else{
        console.log(`No es Cantante`)
    }
}

function imprimirSiEsMayorDeEdad(persona){
if(persona.edad >=18){
    console.log(`${persona.nombre} es mayor de edad`)
}else{
    console.log(`${persona.nombre} no es mayor de edad`)
}

}

imprimirProfesiones(carlos)
imprimirSiEsMayorDeEdad(juanlu)