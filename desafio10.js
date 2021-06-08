var Santiago = {
  nombre: 'santiago',
  edad: 18,

}

function mayoriaDeEdad({nombre, edad}) {

if (edad > 17){
  console.log(`${nombre} es mayor de edad, tiene ${edad} años`)
}else
  console.log(`${nombre} es menor de edad, tiene ${edad} años`)
}

mayoriaDeEdad(Santiago)
