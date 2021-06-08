class Persona {
  constructor (nombre, apellido, altura) {
   this.nombre = nombre
   this.apellido = apellido
   this.altura = altura
  }

  saludar(cj) {
     var {nombre, apellido} = this
   console.log(`Hola, me llamo ${nombre} ${apellido}`)
   if (cj) {
     cj(nombre, apellido,)
   }
  }

 soyAlto(){
   return this.altura > 1.8
 }
}

class Desarrollador extends Persona {
constructor (nombre, apellido, altura ) {
    super(nombre, apellido, altura)
  }

saludar(cj) {
  //var nombre = this.nombre
  //var apellido = this.apellido
  var {nombre, apellido} = this

  console.log(`Hola, me  llamo ${nombre} ${apellido} y soy Desarrollador/a`)
  if (cj) {
    cj(nombre, apellido, true)
  }
}
}

function responderSaludo(nombre, apellido, esDev) {
console.log(`Buen dia ${nombre} ${apellido}`)
if (esDev) {
  console.log(`Oh genial, no sabia que eras Desarrollador`)
}
}

var santiago = new Persona('Santiago', 'Rodriguez', 1.74)
var daniela = new Persona('Daniela', 'Carvajal', 1.68)
var jaime = new Desarrollador ('Jaime', 'Polania', 1.89)

santiago.saludar()
daniela.saludar(responderSaludo)
jaime.saludar(responderSaludo)
