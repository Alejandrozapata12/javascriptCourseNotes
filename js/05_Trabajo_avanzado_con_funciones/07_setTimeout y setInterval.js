// Planificación: setTimeout y setInterval

/*
Podemos decidir ejecutar una función no ahora, sino un determinado tiempo después. Eso se llama “planificar una llamada”. Para eso sirve la función setTimeout.
*/

/*
Hay dos métodos para ello:

setTimeout nos permite ejecutar una función una vez, pasado un intervalo de tiempo dado.
setInterval nos permite ejecutar una función repetidamente, comenzando después del intervalo de tiempo, luego repitiéndose continuamente cada intervalo.
*/

// setTimeout - sintaxis 
// setTimeout(func|code, delay, arg1, arg2, ...);
// setInterval - sintaxis
// setInterval(func|code, delay, arg1, arg2, ...);


// Ejemplo de setTimeout
function saludar() {
    console.log("¡Hola!");
}
setTimeout(saludar, 2000); // Saluda después de 2 segundos

// Ejemplo de setInterval
let contador = 0;
const intervalo = setInterval(() => {
    contador++;
    console.log(`Contador: ${contador}`);
    if (contador >= 5) {
        clearInterval(intervalo); // Detiene el intervalo después de 5 iteraciones
    }
}, 1000); // Incrementa el contador cada segundo

// cancelar con clearTimeout y clearInterval
const timeoutId = setTimeout(() => {
    console.log("Esto no se ejecutará");
}, 3000);
clearTimeout(timeoutId); // Cancela el timeout antes de que se ejecute

const intervalId = setInterval(() => {
    console.log("Esto no se ejecutará");
}, 1000);
clearInterval(intervalId); // Cancela el intervalo antes de que se ejecute

// Mostrar un aviso después de 3 segundos (como un popup de cookies)
setTimeout(() => {
  console.log("🍪 ¿Aceptas las cookies?");
}, 3000);

// Actualizar precio en tiempo real cada 5 segundos (como en Binance)
const intervalo = setInterval(() => {
  const precio = (Math.random() * 1000 + 29000).toFixed(2);
  console.log(`💰 BTC: $${precio}`);
}, 5000);

// Detenerlo después de 30 segundos
setTimeout(() => {
  clearInterval(intervalo);
  console.log("Actualizaciones detenidas");
}, 30000);

















