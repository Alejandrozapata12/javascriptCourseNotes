// Promisificación
/*
“Promisificación” es una simple transformación. Es la conversión de una función que acepta un callback a una función que devuelve una promesa.

A menudo estas transformaciones son necesarias en la vida real ya que muchas funciones y librerías están basadas en callbacks, pero las promesas son más convenientes así que tiene sentido promisificarlas.

*/

// El problema real
// Antes (callbacks):

function leerArchivo(callback) {
  setTimeout(() => {
    callback(null, "contenido");
  }, 1000);
}

leerArchivo((err, data) => {
  if (err) console.log(err);
  else console.log(data);
});

/*
👉 Esto NO funciona bien con:

.then()
async/await
*/


// 🔥 La solución: PROMISIFY. Convertimos eso en una promesa:

function leerArchivoPromise() {
  return new Promise((resolve, reject) => {
    leerArchivo((err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}