function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function () {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
 this.nombre = nombre
 this.apellido = apellido
 this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = () => {
  return this.altura > 1.8
}

function Desarrollador(nombre, apellido ) {
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
  console.log(`Hola, me  llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a`)
}

//var santiago = new Persona('Santiago', 'Rodriguez', 1.74)
//var daniela = new Persona('Daniela', 'Carvajal', 1.68)
//var jaime = new Persona ('Jaime', 'Polania', 1.89)
