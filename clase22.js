function Persona(nombre,apellido,altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.85
}

var carlos = new Persona('Carlos','García',1.9)
var juanlu = new Persona('Juan Luis','García',1.84)
var guille = new Persona('Guillermo','Linares',1.87)



