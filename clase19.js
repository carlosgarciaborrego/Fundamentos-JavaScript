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


const pasarAlturaACms = persona => {
    return {
        ...persona,
        altura: persona.altura * 100
    }
}

var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)