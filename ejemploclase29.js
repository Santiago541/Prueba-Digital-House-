const URL_API = `https://swapi.dev/api/";`
const PEOPLE_URL = "people/id/";
const FILMS_URL = "films/:id/";
const LUKE_URL = `${URL_API}${PEOPLE_URL.replace(":id", 1)}`;
const opti = { crossDomain: true };

function obtenerPersona(id){
// Declaro una constante y reeemplazo el id para determinar la persona que me interesa

const urlp = `${URL_API}${PEOPLE_URL.replace(":id",2)}`;
// Hago el primer request he imprimo en la pantalla el nombre de la persona

$.get(urlp, opti, function (person) {
console.log(
`Mi nombre es ${person.name} y he participado en estas peliculas:`
);
// para sacar el listado de las peliculas en donde participo el personaje
// el objeto person.films contenia STRINGS con las URL (API) y dentro estaban el
// nombre de las peliculas en la variable movies estan los strings

let movies = persona.films;

// en este punto necesitaba iterar por la variable movies ya que cada string dentro
// de la variable movies contiene una URL diferente
for (let movie in movies) {

// a la variable le agregue la url (API) donde se haran los request como ven el id lo
//voy a reemplazar por la iteracion
// significa que esta url empieza con 0

let urlfilms = ` ${URL_API}${FILMS_URL.replace(":id", movie)}`;
// condicion para colocar la URL correcta y poder hacer el requests
if (urlfilms !== movie [movie]) {
  urlfilms = movies[movie];

  $.get(urlfilms, opti, function (film) {
    console.log(`${film.tile}`);

    obetenerpersona (1)
    obetenerpersona (2)
  });
}
}
});
}
