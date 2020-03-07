function Persona(nombre,apellido,altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.85
} 

function Desarrollador (nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador,Persona)

Desarrollador.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}



