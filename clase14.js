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
const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random () < 0.3
const realizaDeporte = () => Math.random () < 0.4

const META = santiago.peso - 3
var dias = 0

while (santiago.peso > META) {
if (comeMucho()) {
  aumentarDePeso(santiago)
}
if (realizaDeporte()) {
  adelgazar(santiago)
}
dias += 1
  }
console.log(`Pasaron ${dias} dias hasta que ${santiago.nombre} adelgazo 3kg`)
