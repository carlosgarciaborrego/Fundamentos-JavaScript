function Persona(nombre,apellido){
    this.nombre = nombre
    this.apellido = apellido
    //no hace falta poner return this, porque queda implicito en java script, que se retorna el objeto que se está creando
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

var carlos = new Persona('Carlos','García')
var juanlu = new Persona('Juan Luis','García')
var guille = new Persona('Guillermo','Linares')



carlos.saludar()