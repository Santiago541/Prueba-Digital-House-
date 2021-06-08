var Santiago = {
  nombre: 'Santiago',
  apellido: 'Rodriguez',
  edad: 20
}

var Dario = {
  nombre: 'Dario',
  apellido: 'Ramirez',
  edad: 23
}

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(Santiago)
imprimirNombreEnMayusculas(Dario)
imprimirNombreEnMayusculas ({ nombre: 'pepito' })
