const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

const onResponse = function(persona){
        console.log(`Hola, yo soy ${persona.name}`)
    }

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, opts, onResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)

//No sabemos el orden en el que nos van a dar la respuestas, esto es el asincronismo en su máximo explendor
