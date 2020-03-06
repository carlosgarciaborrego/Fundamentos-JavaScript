var carlos = {
    nombre: 'Carlos',
    apellido: 'García',
    altura: 1.90,
    libros: 10
}

var juanlu = {
    nombre: 'Juanluis',
    apellido: 'García',
    altura: 1.85,
    libros: 16
}

var guille = {
    nombre: 'Guillermo',
    apellido: 'Linares',
    altura: 1.88,
    libros: 4
}

var ana = {
    nombre: 'Ana',
    apellido: 'Linares',
    altura: 1.75,
    libros: 23
}

var personas = [carlos, juanlu, guille, ana]



const reducer = (acum, { libros }) => acum + libros

var totalDeLibros = personas.reduce(reducer,0)


console.log(`En total todos tienen ${totalDeLibros} libros`)