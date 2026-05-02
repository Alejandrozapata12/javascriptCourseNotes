// Promesas = forma moderna de manejar código asíncrono sin caos. Una Promise representa un valor que estará disponible en el futuro.

/*
Tiene 3 estados:

pending → esperando
fulfilled → éxito
rejected → error


Promise → then → catch

*/

// 1. CREAR UNA PROMESA => resolve → éxito,  reject → error
const promesa = new Promise((resolve, reject) => {
  // lógica async
});

// 2. EJEMPLO SIMPLE
const promesa = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve("Todo salio muy bien");
  },2000);
})

// 3. CONSUMIR PROMESA
promesa
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });


// Ejemplo con error
const promesa = new Promise((resolve, reject) => {
  const ok = false;

  if (ok) {
    resolve("Correcto");
  } else {
    reject("Falló");
  }
});

promesa
  .then(res => console.log(res))
  .catch(err => console.log(err));


// ============ EJEMPLO REAL (tipo API) ============

function obtenerUsuario (){
  return new Promise ((resolve, reject) => {
    setTimeout(()=>{
      const user = {nombre: "Alejandro"};
    }, 2000);

    if(user){
      resolve(user);
    }else {
      reject("No hay usuario");
    }

  })
}

obtenerUsuario()
.then(user => console.log(user.nombre))
.catch(err => console.log(err))




// Consumidores: then y catch

/*
then
El más importante y fundamental es .then.

La sintaxis es:
 */

promise.then(
  function(result) { /* manejar un resultado exitoso */ },
  function(error) { /* manejar un error */ }
);

/*
El primer argumento de .then es una función que se ejecuta cuando se resuelve la promesa y recibe el resultado.

El segundo argumento de .then es una función que se ejecuta cuando se rechaza la promesa y recibe el error.

Por ejemplo, aquí hay una reacción a una promesa resuelta con éxito:

*/

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("hecho!"), 1000);
});

// resolve ejecuta la primera función en .then
promise.then(
  result => alert(result), // muestra "hecho!" después de 1 segundo
  error => alert(error) // no se ejecuta
);

/*
catch

Si solo nos interesan los errores, entonces podemos usar null como primer argumento: .then(null, errorHandlingFunction). O podemos usar .catch(errorHandlingFunction), que es exactamente lo mismo:
*/

let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Vaya!")), 1000);
});

// .catch(f) es lo mismo que promise.then(null, f)
promise.catch(alert); // muestra "Error: ¡Vaya!" después de 1 segundo





















