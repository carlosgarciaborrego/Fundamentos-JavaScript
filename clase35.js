const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

function obtenerPersonaje(id){

    return new Promise((resolve,reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
       
        $.get(url, opts, function(data){
            //no se va a llamar a resolve hasta que el get sea exitoso
            resolve(data)
        })
        .fail(() => reject(id))
    })


}

function onError(id){
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}

var ids = [1,2,3]
var promesas = ids.map(id => obtenerPersonaje(id)) 
Promise.all(promesas)
        .then(personajes => console.log(personajes))
        .catch(onError)

// obtenerPersonaje(1) 
//     .then(personaje =>{
//         console.log(`El personaje 1 es ${personaje.name}`)
//         return obtenerPersonaje(2)
//     })
//     .then(personaje => {
//         console.log(`El personaje 2 es ${personaje.name}`)
//         return obtenerPersonaje(3)
//     })
//     .then(personaje => {
//         console.log(`El personaje 3 es ${personaje.name}`)
//     })
//     .catch(onError)


