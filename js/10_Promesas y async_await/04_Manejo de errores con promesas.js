/*
Manejo de errores con promesas
Las promesas encadenadas son excelentes manejando los errores. Cuando una promesa es rechazada, el control salta al manejador de rechazos más cercano. Esto es muy conveniente en la práctica.

Por ejemplo, en el código de abajo, la URL a la cual se le hace fetch es incorrecta (no existe el sitio) y al ser rechazada.catch maneja el error:
*/

fetch('https://no-such-server.blabla') // Promesa rechazada
  .then(response => response.json())
  .catch(err => alert(err)) // TypeError: failed to fetch (El texto puede variar, dependiendo del error)

/*
Como puedes ver, el .catch no tiene que escribirse inmediatamente después de la promesa. Este puede aparecer después de uno o quizás varios .then.

O, puede ocurrir, que todo en el sitio se encuentre bien, pero la respuesta no es un JSON válido. La forma más fácil de detectar todos los errores es agregando .catch al final de la cadena de promesas
*/


fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  }))
  .catch(error => alert(error.message));

/*
Lo normal es que tal .catch no se dispare en absoluto. Pero si alguna de las promesas anteriores es rechazada (por un error de red, un JSON inválido or cualquier otra razón), entonces el error es capturado.
*/

// Try…catch implícito

// El código de un ejecutor de promesas y de manejadores de promesas tiene embebido un " try..catch invisible". Si ocurre una excepción, esta es atrapada y es tratada como un rechazo.

new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch(alert); // Error: Whoo

// …Hace exactamente lo mismo que este:
new Promise((resolve, reject) => {
  reject(new Error("Whoops!"));
}).catch(alert); // Error: Whoops!


//  Rethrowing (relanzamiento de errores)
// Puedes capturar un error… y decidir si pasarlo:

// Ejecución: catch -> catch
new Promise((resolve, reject) => {

  throw new Error("Whoops!");

}).catch(function(error) { // (*)

  if (error instanceof URIError) {
    // Aquí se manejaría el error
  } else {
    alert("No puedo manejar este error");

    throw error; // Lanza este error u otro error que salte en el siguiente catch.
  }

}).then(function() {
  /* Esto no se ejecuta */
}).catch(error => { // (**)

  alert(`Ocurrió un error desconocido: ${error}`);
  // No se devuelve nada => La ejecución continúa de forma normal

});

/*
En caso de que se genere un error, la promesa se rechaza y la ejecución salta al manejador de rechazos más cercano. Pero aquí no hay ninguno. Entonces el error se “atasca”, ya que no hay código para manejarlo.

En la práctica, al igual que con los errores comunes no manejados en el código, esto significa que algo ha salido terriblemente mal.

¿Que sucede cuando ocurre un error regular y no es detectado por try..catch? El script muere con un mensaje en la consola. Algo similar sucede con los rechazos de promesas no manejadas.

En este caso, el motor de JavaScript rastrea el rechazo y lo envía al ámbito global. Puedes ver en consola el error generado si ejecutas el ejemplo anterior.

.catch maneja errores de todo tipo: ya sea una llamada a reject(), o un error que arroja un manejador.
.then también atrapa los errores de la misma manera si se le da el segundo argumento (que es el manejador de error).
Debemos colocar .catch exactamente en los lugares donde queremos manejar los errores y saber cómo manejarlos. El manejador debe analizar los errores (los errores personalizados ayudan), y relanzar los errores desconocidos (tal vez sean errores de programación).
Es correcto no usar .catch en absoluto si no hay forma de recuperarse de un error.
En cualquier caso, deberíamos tener el evento unhandledrejection (para navegadores, o el equivalente en otros entornos) para monitorear errores no manejados e informar al usuario (y probablemente al servidor) para que nuestra aplicación nunca “simplemente muera”.


*/






















