// Generadores
/*
Un generator es una forma MÁS SIMPLE de crear iterators.


Las funciones regulares devuelven solo un valor único (o nada).
Los generadores pueden producir (“yield”) múltiples valores, uno tras otro, a pedido. Funcionan muy bien con los iterables, permitiendo crear flujos de datos con facilidad.
*/

// Funciones generados:
/*
Para crear un generador, necesitamos una construcción de sintaxis especial: function*, la llamada “función generadora”.
*/

function* generateSequence() {
  yield: 1;
  yield: 2;
  return;
}
// Uso

let uso = generateSequence();
console.log(uso.next()); 
console.log(uso.next());
console.log(uso.next());
console.log(uso.next());

/*
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: undefined, done: true }
*/

// ¿Qué hace yield?
/*
yield PAUSA la función.

La próxima vez que se llama .next(), la función continúa desde donde quedó.

next() → ejecuta → pausa
next() → continúa → pausa
next() → continúa → pausa
*/

// Ejemplo REAL de uso

function* generarIds() {
  let id = 1;

  while (true) {
    yield id++;
  }
}

const ids = generarIds();

console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);

// Salida
1
2
3

// Generator + for...of => Los generadores ya son iterables

function* colores() {
  yield "rojo";
  yield "verde";
  yield "azul";
}

for (const color of colores()) {
  console.log(color);
}

/*
Algo MUY importante

Los generators mantienen estado interno automáticamente.
*/

function* prueba() {
  console.log("Inicio");

  yield 1;
  console.log("Mitad");

  yield 2;
  console.log("Fin");
}

let llamada = prueba();
console.log(llamada.next());
console.log(llamada.next());
console.log(llamada.next());

// Salida: 
/*
Inicio
Mitad
Fin
 */














