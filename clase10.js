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
    } else { console.log('No es cantante')}
    }

if (persona.dj) {
    console.log('dj')
  } else { console.log('No es dj')}
  }

if (persona.futbolista) {
    console.log('futbolista')
  } else { console.log('No es futbolista')}
  }

if (persona.guitarrista) {
    console.log('guitarrista')
} else { console.log('No es guitarrista')}
}

}

imprimirProfesiones(santiago)

function imprimirSiEsMayorDeEdad(persona){
  if (persona.edad >= 18)
  console.log(`${persona.nombre} es mayor de edad`);
} else {
  console.log(`${persona.nombre} no es mayor de edad`);
}

  imprimirSiEsMayorDeEdad(Santiago);
