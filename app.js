// Tu códgigo aquí
const image = document.querySelector("img");
const jokeDIV = document.querySelector("#display-joke");
const button = document.querySelector("#get-joke");

// Pasamos un evento click para invocar la funcion, al hacer click se mostrar un chiste nuevo.
button.addEventListener("click", function () {
  getRandomJoke();
});

async function getRandomJoke() {
  // await -> usado para gestionar funciones que se ejecutan de forma asíncrona, es decir, que van a tardar un ratito más o menos largo, en ejecutarse.
  // Fetch es hacer una petición GET a la URL que pongo como parámetro
  const respuesta = await fetch("https://api.chucknorris.io/jokes/random");
  console.log("Response", respuesta);

  // 2. Va a procesar la respuesta, para convertirla en un tipo de datos que sea capaz mi programa de entenderlo (objeto, array de objetos) 99% veces
  // Le decimos a JavaScript que esa respuesta contiene un string en formato JSON. Queremos que lo convierta de string a objeto (o array de objetos)
  const datos = await respuesta.json();

  jokeDIV.innerHTML = datos.value;
  console.log(datos.value);
}

//invocamos la función al final para que al cargar la pagina ya se muestre un chiste por pantalla
getRandomJoke();
