var santiago = {
nombre: 'Santiago',
apellido: 'Rodriguez',
edad: 20,
peso: 75
}

console.log(`Al inicio del año ${santiago.nombre} pesa ${santiago.peso}kg`)

// function aumentarDePeso (persona) {
// return persona.peso += 200
// }
const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
  var random = Math.random()

if (random < 0.25) {
  aumentarDePeso(santiago)
} else if (random < 0.5) {
 adelgazar(santiago)
}
}
console.log(`Al final del año ${santiago.nombre} pesa ${santiago.peso.toFixed(1)}kg`)
