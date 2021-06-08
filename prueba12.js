var santiago = {
  nombre: 'Santiago',
  apellido: 'Rodriguez',
  edad: 20,
  ingeniero: false,
  cocinero: false,
  cantante: false,
  dj: false,
  futbolista: true,
  guitarrista: false
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 13
}

const MAYORIA_DE_EDAD = 18

//const esMayorDeEdad = function (persona) => {
//return persona.edad >= MAYORIA_DE_EDAD
//}
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

function permitirAcceso(persona) {
if (!esMayorDeEdad(persona)) {
  console.log('ACCESO DENEGADO')
}
}
