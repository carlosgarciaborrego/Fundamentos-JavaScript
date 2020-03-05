var carlos = {
    nombre: 'Carlos',
    apellidos: 'García',
    edad: 24
}

var juanlu = {
    nombre: 'JuanLuis',
    apellidos: 'García',
    edad: 30
}

function imprimirNombreEnMayusculas(persona){
    //var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
} 

imprimirNombreEnMayusculas(carlos) 

function imprimirNombreYEdad(persona){
    var {nombre} = persona
    var {edad} = persona
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(carlos)