var carlos = {
    nombre: 'Carlos',
    apellido: 'García',
    edad: 24,
    peso: 85
}

console.log(`Al inicio ${carlos.nombre} pesaba ${carlos.peso}kg`)

const INCREMENTO_PESO = 0.300
const PERDER_PESO = 0.300
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona =>  persona.peso += INCREMENTO_PESO
const bajarDePeso = persona =>  persona.peso -= PERDER_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = carlos.peso - 3
var dias = 0

while(carlos.peso>META){
    if(comeMucho()){
        //aumentar  peso
        aumentarDePeso(carlos)
        console.log(aumentarDePeso(carlos))
    }
    if(realizaDeporte()){
        //aumentar  peso
        bajarDePeso(carlos)
        console.log(bajarDePeso(carlos))
    }
    dias +=1
   
}


console.log(`${carlos.nombre} tardó ${dias} días en llegar a los ${META}kg`)