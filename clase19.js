var santiago = {
nombre: 'Santiago',
apellido: 'Rodriguez',
altura: 1.75
}

var alan = {
nombe: 'Alan',
apellido: 'Perez',
altura: 1.86
}

var martin = {
nombre: 'Martin',
apellido:'Gomez',
altura: 1.85
}

var daniela = {
nombre: 'Daniela',
apellido: 'Beltran',
altura: 1.65
}

var manuela = {
  nombre: 'Manuela',
  apellido: 'Barros',
  altura: 1.54
}

var ezequiel = {
  nombre : 'Ezequiel',
  apellido: 'Zapata',
  altura: 1.81
}

//const esAlta = (persona) => {
// return persona.altura > 1.8
//}

const esAlta = ({ altura }) => altura > 1.8

var personas = [santiago, alan, martin, daniela, manuela, ezequiel]

var personasAltas = personas.filter(esAlta)
//var personasAltas = personas.filter (function (persona) {
//  return persona.altura > 1.8
//})

  // persona.altura = persona.altura * 100
const pasarAlturaACms = (persona) => ({
...persona,
altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)
