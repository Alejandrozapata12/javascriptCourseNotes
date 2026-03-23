/*
new Set()
add()
clear()
delete()
entries()
forEach()
has()
keys()
values()
size
*/

// new Set() -> Creación de un nuevo conjunto 
const letters = new Set(["a", "b", "c"]);
console.log(letters); // a, b, c

// add() -> Añadir elementos al conjunto
const palabra = new Set();

palabra.add("a"); // a


// size -> propiedad del tamaño
const myNumbers = new Set([1, 2, 4]);
myNumbers.size; // 3


// has() -> El método devuelve true si existe un valor especificado en un conjunto.
let contiene = myNumbers.has(1); // true

// forEach() -> El método invoca una función para cada elemento del conjunto.
const letras = new Set(["n","o","r","b","e","y"]);

let recorrer = letras.forEach(function(value){
    console.log(value) // Norbey
}) 

// values() -> El método devuelve un objeto Iterador con los valores en un Conjunto. 
const cadaUn = new Set(["a","b","c"]);

let recorrerDos = cadaUn.values(); 

for(const cadaItem of recorrerDos){
    console.log(cadaItem)
}

// keys() -> El método devuelve un objeto Iterador con los valores en un Conjunto. (Hace lo mismo que el values())

let recorresTres = cadaUn.keys();

for(let x of recorresTres){
    console.log(x); 
}

// entries() -> El método devuelve un Iterador con pares [valor,valor] de un Conjunto.
// Create a Set
const letrasCuatro = new Set(["a","b","c"]);

// Get all Entries
const iterator = letrasCuatro.entries();

// List all Entries
let text = "";
for (const entry of iterator) {
  text += entry + "<br>";
}
document.getElementById("demo").innerHTML = text; // A,A,A , B,B C,C






