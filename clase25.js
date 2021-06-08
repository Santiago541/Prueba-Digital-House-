class Persona {
  constructor (nombre, apellido, altura) {
   this.nombre = nombre
   this.apellido = apellido
   this.altura = altura
  }

  saludar() {
   console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
  }

 soyAlto(){
   return this.altura > 1.8
 }
}

class Desarrollador extends Persona {
constructor (nombre, apellido, altura ) {
    super(nombre, apellido, altura)
  }

saludar() {
  console.log(`Hola, me  llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a`)
}
}


var santiago = new Persona('Santiago', 'Rodriguez', 1.74)
var daniela = new Persona('Daniela', 'Carvajal', 1.68)
var jaime = new Persona ('Jaime', 'Polania', 1.89)
