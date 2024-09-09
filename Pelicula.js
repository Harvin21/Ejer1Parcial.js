//Harvin Manfredy Lainez Salvador U20240630

//Crear un array de películas
let peliculas = [
    { titulo: "Intensamente 2", genero: "Infantil" },
    { titulo: "Thor love and thunder", genero: ["Acción", "Ciencia Ficción"] },
    { titulo: "Deadpool y Wolverine", genero: ["Acción", "Ciencia Ficción"] },
    { titulo: "The Batman", genero: ["Acción", "Ciencia Ficción"] },
    { titulo: "Barbie", genero: ["Romance", "Drama"] },
    { titulo: "Super Mario", genero: "Infantil" },
    { titulo: "La la land", genero:  ["Romance", "Drama"] },
    { titulo: "Star wars Ep 3: La venganza de los sith", genero: ["Acción", "Ciencia Ficción"] },
    { titulo: "Coraline", genero: ["Terror", "Infantil"] },
    { titulo: "John Wick", genero: "Acción" }
  ];
  
  //Definir el género deseado
  let generoDeseado = "Acción";
  
 //Buscar las películas que coincidan con el género deseado
let peliculasEncontradas = [];

for (let i = 0; i < peliculas.length; i++) {
  if (peliculas[i].genero.includes(generoDeseado)) {
    peliculasEncontradas.push(peliculas[i].titulo);
  }
}

//Mostrar el resultado
if (peliculasEncontradas.length > 0) {
  console.log(`Te recomendamos las siguientes películas de género ${generoDeseado}: ${peliculasEncontradas.join(', ')}`);
} else {
  console.log(`No hay películas disponibles para el género ${generoDeseado}.`);
}
