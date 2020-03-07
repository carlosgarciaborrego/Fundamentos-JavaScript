class Persona{
    constructor(nombre,apellido,altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn) {
        var { nombre, apellido } = this
        console.log(`Hola me llamo ${nombre} ${apellido}`)
        if(fn){
            fn(nombre,apellido,false)
        }
    }

    soyAlto(){
        return this.altura > 1.85
    }
}



class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre,apellido,altura)
    }
    saludar(){
        // var nombre = this.nombre
        // var apellido = this.apellido
        //Es equivalente a lo de abajo
        var { nombre, apellido } = this

        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador/a`)
        if(fn){
            fn(nombre,apellido,true)
        }
    }

}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev){
        console.log('Ah mira, no sabía que eras desarrollador/a')
    }
}

var carlos = new Persona('Carlos', 'García', 1.9)
var juanlu = new Persona('JuanLuis', 'García', 1.84)
var guille = new Persona('Guille', 'Linares', 1.88)


carlos.saludar(responderSaludo)
juanlu.saludar(responderSaludo)
guille.saludar()