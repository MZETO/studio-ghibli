const cartelera$$ = document.querySelector(".cartelera");

console.log(cartelera$$);


let peliculas;

//necesito una función asincrona para hacer la llamada a la api (fetch)
const llamadaApi = async () => {

  const datosApi = await fetch("https://ghibliapi.herokuapp.com/films");
  const datosApiJSON = await datosApi.json();

  //otra manera más eficiente de hacerlo...
  // fetch("https://ghibliapi.herokuapp.com/films").then((respuesta) => respuesta.json()).then((misDatos) => {
  //     console.log(misDatos);
  // });

  pintar(datosApiJSON);

};

const pintar = (peliculas) => {

  for (const pelicula of peliculas) {

    const cartel$$ = document.createElement("div");
    const titulo$$ = document.createElement("h2");
    const imagen$$ = document.createElement("img");
    const info$$ = document.createElement("div");
    const year$$ = document.createElement("p");
    const rating$$ = document.createElement("p");

    cartel$$.classList.add("cartel");
    titulo$$.classList.add("titulo");
    titulo$$.textContent = pelicula.title;
    imagen$$.classList.add("imagen");
    imagen$$.setAttribute("src", pelicula.image);
    imagen$$.setAttribute("alt", pelicula.title);
    info$$.className = "informacion";
    year$$.innerHTML = `${pelicula.release_date}`;
    rating$$.innerText = pelicula.rt_score;


    info$$.appendChild(year$$);
    info$$.appendChild(rating$$);
    cartel$$.appendChild(titulo$$);
    cartel$$.appendChild(imagen$$);
    cartel$$.appendChild(info$$);
    cartelera$$.appendChild(cartel$$);

  }
};

//voy a tener una variable que se va a llamar "películas"
llamadaApi();
