function Persona(nombre, apellido) {
 this.nombre = nombre
 this.apellido = apellido
 this.edad = 20
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var santiago = new Persona('Santiago', 'Rodriguez')
var daniela = new Persona('Daniela', 'Carvajal')
var jaime = new Persona ('Jaime', 'Polania')
