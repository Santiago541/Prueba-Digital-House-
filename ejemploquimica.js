// Los objetos sirven para modelar cosas de la vida real, abstracciones y demás. Podemos empaquetar atributos a un objeto. Un objeto puede ser pasado como parámetro en una función.

var elemento ={
   //Key______________//Value
    nombre_elemento: "Hidrógeno",
    numero_atomico:1,
    configuracion_electronica: '1S-1',
    categoria: "Gas",
    usos:"Combustible"
}

var elemento ={
    //Key______________//Value
    nombre_elemento: "Carbono",
    numero_atomico:12,
    configuracion_electronica: '4p-6',
    categoria: "Sólido",
    usos:"la vida misma como la conocemos."
}



// Me imprimirá todos los atributos que tiene el objeto.
function imprimirElemento ({ nombre_elemento }) {
    console.log(elemento.nombre_elemento);// llamo individualmente los atributos de ese objeto.
    console.log(elemento.numero_atomico);
}


imprimirElemento (hidrogeno)

// Invoco la función sin parámetros. Si la llamo tomando el código así, solo me leerá los atributos de Carbono, por lo que implica que debe llamarse los objetos en orden

//Los objetos tienen un nombre único. por lo cual:


var hidrogeno ={
    //Key______________//Value
     nombre_elemento: "Hidrógeno",
     numero_atomico:1,
     configuracion_electronica: '1S-1',
     categoria: "Gas",
     usos:"Combustible"
 }

 var carbono ={
     //Key______________//Value
     nombre_elemento: "Carbono",
     numero_atomico:12,
     configuracion_electronica: '4p-6',
     categoria: "Sólido",
     usos:"la vida misma como la conocemos."
 }

 var helio ={
    //Key______________//Value
    nombre_elemento: "Helio",
    numero_atomico:2,
    configuracion_electronica: 'NN',
    categoria: "Gas noble",
    usos:"El sol está hecho de helio"
}


 // Me imprimirá todos los atributos que tiene el objeto.
 functionimprimirElementoSinParametro()
     console.log(hidrogeno.nombre_elemento);// llamo individualmente los atributos de ese objeto.
     console.log(carbono.nombre_elemento);// llamo individualmente los atributos de ese objeto.
     console.log(carbono.usos);// llamo individualmente los atributos de ese objeto.



 imprimirElementoSinParametro() // Así puede llamarme a ambos elementos químicos por su atributo nombre y usos.

//Podemos inclusive pasar por parámetro a un objeto
functionimprimirElemento(elemento)
    var nombre_elemento = elemento.nombre_elemento
    console.log(nombre_elemento);

imprimirElemento(carbono) // Invoco la función con el nombre del objeto

//  O podemos reducir aún más

//Sin necesidad de declarar una variable
functionimprimirElementoSinVariable(elemento)
    console.log(elemento.nombre_elemento);

imprimirElementoSinVariable(helio) // Invoco la función con el nombre del objeto

//Existen diferentes formas de trabajar dependiendo del contexto, podemos desglosar el objeto como parámetro de la siguiente manera:

functionimprimirElementoSinVariable({nombre_elemento, usos}) // De esta manera solo llamo los atributos que me interesan del objeto al que voy a pasar por función.

    console.log(nombre_elemento);
    console.log(usos);

imprimirElementoSinVariable(helio) // Invoco la función con el nombre del objeto
imprimirElementoSinVariable(hidrogeno) // Invoco la función con el nombre del objeto
imprimirElementoSinVariable(carbono) // Invoco la función con el nombre del objeto
imprimirElementoSinVariable({nombre_elemento: 'Uranio',usos:'Ninguno buena para la humanidad'}) // Puedo inclusive crear atributos de un objeto dentro de la función.
