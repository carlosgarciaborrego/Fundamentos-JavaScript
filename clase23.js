function Persona(nombre,apellido,altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = () => {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = () => this.altura > 1.85

var carlos = new Persona('Carlos','García',1.9)
var juanlu = new Persona('Juan Luis','García',1.84)
var guille = new Persona('Guillermo','Linares',1.87)


//En esta clase nos encontramos con que si ponemos los prototypes como arrow functions, nos van a dar un undefined, ya que el this saldría de la función 
// como una variable global. Y como sabemos this como variable global es lo mismo que decir windows, y al no estar este definido ocurre el error.

