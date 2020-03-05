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

//Vamos a devolver una function exactamente igual, pero cambiando el parametro edad, por lo que usamos ... para desglosar

function cumpleanos(persona){
    return{
        ...persona,
        edad: persona.edad + 1
    }
}