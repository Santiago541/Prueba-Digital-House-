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

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`)

if (persona.ingeniero) {
    console.log('ingeniero')
  } else { console.log('No es ingeniero');
  }

if (persona.cocinero) {
    console.log('cocinero')
  } else { console.log('No es cocinero')}
  }

if (persona.cantante) {
      console.log('cantante')
    } else { console.log('No es cantante')
  }

if (persona.dj) {
    console.log('dj')
  } else { console.log('No es dj')}

if (persona.futbolista) {
    console.log('futbolista')
  } else { console.log('No es futbolista')}


if (persona.guitarrista) {
    console.log('guitarrista')
} else { console.log('No es guitarrista')
}


const mayoriadeedad = 18

function esMayorDeEdad(persona) {
 return persona.edad >= mayoriadeedad
}

function imprimirSiEsMayorDeEdad(persona) {
if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}
