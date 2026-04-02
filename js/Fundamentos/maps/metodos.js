
// new Map() -> Puedes crear un mapa pasando un array al constructor. 
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Map.get() -> Obtienes el valor de una clave en un mapa con el método
fruits.get("apples"); // Hay 500 manzanas

// Map.set() -> Puedes añadir elementos a un mapa con el método
// Create a Map
const frutas = new Map();

// Set Map Values
frutas.set("apples", 500);
frutas.set("bananas", 300);
frutas.set("oranges", 200);

// Map.size -> La propiedad devuelve el número de elementos en una aplicación. 
fruits.size; // 3

// Map.delete() -> El método elimina un elemento de mapa
fruits.delete("apples");

// Map.clear() -> El método elimina todos los elementos de un mapa
fruits.clear(); 

// Map.has() -> El método devuelve verdadero si existe una clave en un mapa
fruits.has("apples"); // true

// Map.forEach() -> El método invoca un callback para cada par clave/valor en un mapa. (iterador)
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value + "<br>"
})

document.getElementById("demo").innerHTML = text;
/*
manzanas = 500
plátanos = 300
naranjas = 200
*/

// Map.entries() -> El método devuelve un objeto iterador con la [key,values] en un mapa. 
let console = "";
for (const x of fruits.entries()) {
  console += x;
}

// Map.keys() -> El método devuelve un objeto iterador con las teclas en un mapa. 
let par = "";
for (const x of fruits.keys()) {
  par += x;
}

// Map.values() -> El método devuelve un objeto iterador con los valores en un mapa. 
let lo = "";
for (const x of fruits.values()) {
  lo += x;
}


// Map.groupBy() -> El método agrupa elementos de un objeto según los valores de cadena retornados por una función de callback. El método no cambie el objeto original

// Create a Map
const fru= [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to select low volumes 
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by ok and low
const result = Map.groupBy(fruits, myCallback);

// Display Results
let tex="These fruits are Ok: <br>";
for (let x of result.get("ok")) {
  tex += x.name + " " + x.quantity + "<br>";
}
tex += "<br>These fruits are low: <br>";
for (let x of result.get("low")) {
  tex += x.name + " " + x.quantity + "<br>";
}
document.getElementById("demo").innerHTML = tex;

/*

Estas frutas están bien:
manzanas 300
plátanos 500

Estas frutas son bajas:
naranjas 200
kiwi 150
*/


