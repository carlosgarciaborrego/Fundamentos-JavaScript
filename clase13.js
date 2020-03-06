var carlos = {
    nombre: 'Carlos',
    apellido: 'García',
    edad: 24,
    peso: 85
}

console.log(`Al inicio del año ${carlos.nombre} pesa ${carlos.peso}kg`)

const INCREMENTO_PESO = 0.200
const PERDER_PESO = 0.200
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona =>  persona.peso += INCREMENTO_PESO

const bajarDePeso = persona =>  persona.peso -= PERDER_PESO



for (let i=1; i<=DIAS_DEL_ANO; i++) {
    var random = Math.random()
    if(random<=0.25){
        //engordar
        aumentarDePeso(carlos)
    }else if(random>=0.75){
        //adelgazar
        bajarDePeso(carlos)
    }
}


console.log(`Al final del año ${carlos.nombre} pesa ${carlos.peso}kg`)