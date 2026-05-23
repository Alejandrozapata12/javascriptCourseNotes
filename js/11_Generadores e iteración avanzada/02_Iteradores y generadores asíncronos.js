// ¿Qué es un Iterator?

/*
Un iterator es un objeto que permite recorrer datos paso a paso.

Internamente tiene un método llamado:
next()

Y next() devuelve:

{
  value: algo,
  done: true | false
}
*/

// Ejemplo: 

const list = [2,4,5,1,45];

const iterador = list[Symbol.iterador]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/*
{ value: 2, done: false }
{ value: 4, done: false }
{ value: 5, done: false }
{ value: 1, done: false }
{ value: 45, done: false }
{ value: undefined, done: true }

*/

// ¿Que esta pasando aqui?
/*
lists[Symbol.iterator]() -> Crea un iterator interno del array.
iterator.next() -> va avanzando elemento por elemento.
*/


// ==================== Forma de crear un iterador manualmente ====================

// 1.Crea un iterador manualmente: 
const rango = {
  desde: 1,
  hasta: 5,

  [Symbol.iterator]() {
    let actual = this.desde;
    let final = this.hasta;

    return {
      next() {
        if (actual <= final) {
          return {
            value: actual++,
            done: false
          };
        }

        return {
          done: true
        };
      }
    };
  }
};

// 2.Uso:
for (const numero of rango) {
  console.log(numero);
}

// 3.Resultado:
1
2
3
4
5


// Este se complementa con los generadores ya que de esta forma con iteradores manuales,seria mucho codigo mientras que con generadores se optimiza el codigo y se depura mas facil. 


// Ahora iteradores y generadores asincronos
/*
Async Iterators

Un async iterator es un iterator que puede esperar datos asíncronos.

En lugar de:

next()

que devuelve:

{ value, done }

devuelve una Promise:

Promise<{ value, done }>


Async Generator

Es un generator que usa:

async
await
yield

Sintaxis:

async function* nombre() {

}
*/

// Ejemplo simple: 
async function* generador() {
  yield 1;
  yield 2;
  yield 3;
}
// Uso
const gen = generador();
gen.next().then(console.log);

// Resultado: 
{ value: 1, done: false }

/*
IMPORTANTE

Como es async:

next() devuelve Promise.
necesitas await o .then().
*/

// for await...of, Así como existe:

for (const item of iterable)

// para iterables normales…

// Existe:

for await (const item of iterable)

// para async iterables.

// Ejemplo :

async function* numeros() {
  yield 1;
  yield 2;
  yield 3;
}

async function ejecutar() {
  for await (const numero of numeros()) {
    console.log(numero);
  }
}

ejecutar();

// EJEMPLO REALISTA -> Simular datos que llegan desde servidor

function esperar(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function* obtenerDatos() {
  await esperar(1000);
  yield "Usuario 1";

  await esperar(1000);
  yield "Usuario 2";

  await esperar(1000);
  yield "Usuario 3";
}

// Uso
async function ejecutar() {
  for await (const usuario of obtenerDatos()) {
    console.log(usuario);
  }
}

ejecutar();

/*
¿Qué pasa aquí?
Flujo REAL
espera 1 segundo
→ entrega Usuario 1

espera 1 segundo
→ entrega Usuario 2

espera 1 segundo
→ entrega Usuario 3

Eso es literalmente streaming de datos.
*/


// Diferencia de generadores: 

// === Generador normal ===
function* () // Produce datos sin esperar

// === Generador async ===
async function* () // Produce datos esperando


// EJEMPLO CON FETCH

async function* obtenerUsuarios() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const usuarios = await response.json();

  for (const usuario of usuarios) {
    yield usuario;
  }
}


// Uso
async function ejecutar() {
  for await (const usuario of obtenerUsuarios()) {
    console.log(usuario.name);
  }
}

ejecutar();















