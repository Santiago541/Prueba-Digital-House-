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

var personas = [santiago, alan, martin, daniela, manuela, ezequiel]

for (var i = 0; i < personas.length; i++) {
 var persona = personas [i]
 console.log(`${persona.nombre} mide ${persona.altura}mts`)
}
