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

async function obtenerPersonajes(){
    var ids = [1,2,3]
    var promesas = ids.map(id => obtenerPersonaje(id)) 
    try{
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    }catch(id){
        onError(id)
    }
}

obtenerPersonajes()



