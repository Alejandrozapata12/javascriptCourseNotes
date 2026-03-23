/*
El Objeto del Mapa
Un mapa JavaScript es un objeto que puede almacenar colecciones de pares clave-valor, similar a un diccionario en otros lenguajes de programación.

Los mapas difieren de los objetos estándar en que las claves pueden ser de cualquier tipo de dato.

*/

/*
Características del mapa
Tipos de
teclas Map las teclas pueden ser de cualquier tipo (cadenas, números, objetos, etc.).

Orden
de inserción El mapa recuerda el orden original de inserción de las teclas.

Tamaño
El número de elementos en un mapa se puede obtener fácilmente usando la propiedad de tamaño.

Los Mapas de Rendimiento
están optimizados para añadidos y eliminaciones frecuentes de pares clave-valor.

Los Mapas
de Iteración son iterables, permitiendo el uso directo de para... de bucles o métodos como forEach().


Orden
de iteración El orden original se conserva durante la iteración.

*/

//  Como crear un Map() 
/*
Crea un nuevo mapa y añade elementos con Map.set()
Pasar un Array existente al constructornew Map()
*/

// Nuevo mapa
const frutas = new Map();

// Asignar clave - valor mediante map.set()
frutas.set("Manzanas", 500); //  clave - valor
frutas.set("Naranja", 1300);
frutas.set("Mandarina", 300);

// Imprimir los resultados con un ejemplo
let obtener  = frutas.get("Manzanas");
console.log(obtener); // Hay 500 Manzanas


// Tambien se le puede pasar un array al constructor
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);


//  El método set() -> se puede usar para añadir elementos a un objeto Map, cambio de valores.

// Método get() -> El método obtiene el valor de una clave en un Mapa. 
// Ejemplo: 
let getD = frutas.get("Naranja");



