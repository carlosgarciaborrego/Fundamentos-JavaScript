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
    nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}

//Desglosar el objeto: viene en las ultimas versiones de javascript
//Vamos a hacer la misma función pero desglosando

function imprimirNombreEnMayusculas2({nombre}){
    console.log(nombre.toUpperCase())
}

//No podemos desglosar un objeto si no sabemos que siempre se podrá acceder al objeto que espera
//imprimirNombreEnMayusculas() --> Ocasionaria un error 


imprimirNombreEnMayusculas(carlos) 
imprimirNombreEnMayusculas({nombre: 'Pepito'}) 

