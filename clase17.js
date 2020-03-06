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


for (var i=0; i <personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}mts`)
}