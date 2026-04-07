// Map y Set
// ================== Map ==================: Es una colección de pares clave-valor donde las claves pueden ser de cualquier tipo. Permite almacenar y recuperar valores asociados a claves específicas.
const miMapa = new Map();
miMapa.set('nombre', 'Juan'); // Agrega un par clave-valor al mapa, método set() se utiliza para agregar elementos al mapa, donde el primer argumento es la clave y el segundo argumento es el valor asociado a esa clave.
miMapa.set('edad', 30);
console.log(miMapa.get('nombre')); // Imprime 'Juan', el método get() se utiliza para recuperar el valor asociado a una clave específica en el mapa, pasando la clave como argumento.
console.log(miMapa.get('edad')); // Imprime 30


/*
Los métodos y propiedades son:

new Map() – crea el mapa.
map.set(clave, valor)) – almacena el valor asociado a la clave.
map.get(clave) – devuelve el valor de la clave. Será undefined si la clave no existe en map.
map.has(clave) – devuelve true si la clave existe en map, false si no existe.
map.delete(clave) – elimina el elemento con esa clave.
map.clear() – elimina todo del map.
map.size – tamaño, devuelve la cantidad de elementos actual.
*/


// Ejemplo de cada método y propiedad:
const miMapa2 = new Map(); // Crea un nuevo mapa vacío utilizando el constructor Map().
miMapa2.set('color', 'rojo'); // Agrega un par clave-valor al mapa, donde la clave es 'color' y el valor es 'rojo'.
miMapa2.set('forma', 'círculo');
console.log(miMapa2.get('color')); // get() se utiliza para recuperar el valor asociado a la clave 'color', que es 'rojo'.
console.log(miMapa2.has('forma')); // has() se utiliza para verificar si la clave 'forma' existe en el mapa, lo que devuelve true.
miMapa2.delete('color');
console.log(miMapa2.has('color')); // Imprime false
console.log(miMapa2.size); // Imprime 1 porque solo queda el par clave-valor 'forma' en el mapa.
miMapa2.clear();
console.log(miMapa2.size); // Imprime 0 porque el mapa ha sido limpiado y no contiene ningún elemento.

/*
Iteración sobre Map
Para recorrer un map, hay 3 métodos:

map.keys() –- devuelve un iterable con las claves.
map.values() -– devuelve un iterable con los valores.
map.entries() -– devuelve un iterable para las entradas [clave, valor]. Es el que usa por defecto en for..of.
*/

// map.keys() devuelve un iterable con las claves del mapa, lo que permite iterar sobre ellas utilizando un bucle for...of o cualquier otro método de iteración.
const miMapa3 = new Map();
miMapa3.set('a', 1);
miMapa3.set('b', 2);
for (let clave of miMapa3.keys()) {
  console.log(clave); // Imprime 'a' y luego 'b', las claves del mapa.
}

// map.values() devuelve un iterable con los valores del mapa, lo que permite iterar sobre ellos utilizando un bucle for...of o cualquier otro método de iteración.
for (let valor of miMapa3.values()) {
  console.log(valor); // Imprime 1 y luego 2, los valores del mapa.
}

// map.entries() devuelve un iterable con las entradas del mapa, donde cada entrada es un array que contiene la clave y el valor asociados. Esto permite iterar sobre las entradas utilizando un bucle for...of o cualquier otro método de iteración.
for (let entrada of miMapa3.entries()) {
  console.log(entrada); // Imprime ['a', 1] y luego ['b', 2], las entradas del mapa.
}


// Object.entries: Map desde Objeto
const miObjeto = { nombre: 'Ana', edad: 25 };
const miMapaDesdeObjeto = new Map(Object.entries(miObjeto));
console.log(miMapaDesdeObjeto); // Imprime Map { 'nombre' => 'Ana', 'edad' => 25 }, el método Object.entries() se utiliza para convertir un objeto en un array de pares clave-valor, que luego se puede pasar al constructor Map() para crear un mapa a partir de ese objeto.


// Object.fromEntries: Objeto desde Map
const miMapa4 = new Map();
miMapa4.set('pais', 'España');
miMapa4.set('capital', 'Madrid');
const miObjetoDesdeMapa = Object.fromEntries(miMapa4);
console.log(miObjetoDesdeMapa); // Imprime { pais: 'España', capital: 'Madrid' }, el método Object.fromEntries() se utiliza para convertir un mapa en un objeto, donde cada par clave-valor del mapa se convierte en una propiedad y su valor correspondiente en el objeto resultante. 

// Ejemplo: almacenamos los datos en un Map, pero necesitamos pasarlos a un código de terceros que espera un objeto simple.

let map = new Map();
map.set('Banana', 1);
map.set('Apple', 2);
map.set('Pear', 3);

let obj = Object.fromEntries(map);
console.log(obj); // Imprime { Banana: 1, Apple: 2, Pear: 3 }, el método Object.fromEntries() se utiliza para convertir el mapa en un objeto simple, donde cada par clave-valor del mapa se convierte en una propiedad y su valor correspondiente en el objeto resultante.







// ================== Set ==================: Es una colección de valores únicos, es decir, no permite elementos duplicados. Se utiliza para almacenar valores sin importar el orden y sin permitir repeticiones.
const miSet = new Set();
miSet.add(1); // Agrega el valor 1 al conjunto, el método add() se utiliza para agregar elementos al conjunto.
miSet.add(2);
miSet.add(2);
console.log(miSet); // Imprime Set { 1, 2 }, el conjunto no permite elementos duplicados, por lo que el segundo intento de agregar el valor 2 no tiene efecto.
console.log(miSet.has(1)); // Imprime true, el método has() se utiliza para verificar si un valor específico existe en el conjunto, pasando el valor como argumento.
console.log(miSet.has(3)); // Imprime false, el valor 3 no existe en el conjunto.
miSet.delete(2);
console.log(miSet); // Imprime Set { 1 }, el método delete() se utiliza para eliminar un valor específico del conjunto, pasando el valor como argumento. En este caso, el valor 2 es eliminado del conjunto.
miSet.clear();
console.log(miSet); // Imprime Set {}, el método clear() se utiliza para eliminar todos los elementos del conjunto, dejando un conjunto vacío. 
console.log(miSet.size); // Imprime 0, la propiedad size devuelve la cantidad de elementos únicos presentes en el conjunto. En este caso, después de llamar a clear(), el tamaño del conjunto es 0, ya que no contiene ningún elemento.

// Iteración sobre Set
// Para recorrer un set, hay 3 métodos:
// set.keys() –- devuelve un iterable con los valores (en un Set, las claves y los valores son lo mismo).
// set.values() -– devuelve un iterable con los valores (en un Set, las claves y los valores son lo mismo).
// set.entries() -– devuelve un iterable para las entradas [valor, valor], es el que usa por defecto en for..of.

const miSet2 = new Set();
miSet2.add('rojo');
miSet2.add('verde');
miSet2.add('azul');

for (let valor of miSet2.keys()) {
  console.log(valor); // Imprime 'rojo', 'verde' y 'azul', los valores del conjunto.
}

for (let valor of miSet2.values()) {
  console.log(valor); // Imprime 'rojo', 'verde' y 'azul', los valores del conjunto.
}

for (let [valor, valor2] of miSet2.entries()) {
  console.log(valor, valor2); // Imprime 'rojo', 'verde' y 'azul', los valores del conjunto.
}














