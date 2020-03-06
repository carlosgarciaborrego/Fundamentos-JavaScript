var carlos = {
    nombre: 'Carlos',
    apellido: 'García',
    altura: 1.90
}

var juanlu = {
    nombre: 'Juanluis',
    apellido: 'García',
    altura: 1.85
}

var guille = {
    nombre: 'Guillermo',
    apellido: 'Linares',
    altura: 1.88
}

var ana = {
    nombre: 'Ana',
    apellido: 'Linares',
    altura: 1.75
}

var personas = [carlos, juanlu, guille, ana]

const esAlta = persona => persona.altura > 1.8
 
var personasAltas = personas.filter(esAlta)



console.log(personasAltas)