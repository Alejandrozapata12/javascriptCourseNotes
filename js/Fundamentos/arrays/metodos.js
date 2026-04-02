/*
Array length
Array toString()
Array at()
Array join()
Array pop()
Array push()
Array shift()
Array unshift()
Array isArray()
Array delete()
Array concat()
Array copyWithin()
Array flat()
Array slice()
Array splice()
Array toSpliced()
*/


// Array general
const artists = ["Lana De Rey", "Iggy Azalea", "Tyga", "Halsey"];

// length -> La propiedad devuelve la longitud (tamaño) de un arreglo. 
let size = artists.length; // 4

// toString() -> El método devuelve los elementos de un array como una cadena separada por comas.
let cadena = artists.toString(); // Lana De Rey,Iggy Azalea,Tyga,Halsey

// at() -> El método devuelve un elemento indexado de un array
let indexa = artists.at(2); // Tyga

// join() -> El método también une todos los elementos del array en una cadena.
let art = artists.join("*"); // Lana De Rey*Iggy Azalea*Tyga*Halsey

// pop() -> El método elimina el último elemento de un array. Método devuelve el valor eliminado
let ultimo = artists.pop(); // Halsey 

// push() -> El método añade un nuevo elemento a un array (al final) - método devuelve la nueva longitud
let nuevo = artists.push("Drake") // 5

// shift() -> El método elimina el primer elemento del array y "desplaza" a todos otros elementos para un índice más bajo. Método devuelve el valor eliminado
let primer = artists.shift(); // Lana De Rey

// unshift() -> El método añade un nuevo elemento a un array (al principio) y "se desvía" Elementos más antiguos - método devuelve la longitud - método devuelve la nueva longitud
let nuevo_pri = artists.unshift("Enya"); // 5

// Array.isArray() -> Método se utiliza con el fin de identificar si es los datos son un array
let sera = Array.isArray(artists); // true

// delete() - Utilizando agujeros para hojas en el Arreglo. Mejor usar pop() o shift()


// concat() - El método crea un nuevo array mediante la fusión (concatenación) Matrices existentes. 
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys); // Cecilie,Lone,Emil,Tobias,Linus

// copyWithin() -> El método copia los elementos del array a otra posición dentro de un array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0); // Banana,Orange,Banana,Orange

// flat() - El método crea un nuevo array con elementos de subarray concatenados a una profundidad especificada.

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat(); // [1,2,3,4,5,6]

// splice() -> El método añade nuevos elementos a un array. - El primer parámetro (2) define la posición donde deben añadirse nuevos elementos (empalmar). El segundo parámetro (0) define cuántos elementos deben eliminarse.

fruits.splice(2, 0, "Lemon", "Kiwi"); // Banana,Orange,Lemon,Kiwi,Apple,Mango

// slice() -> El método divide una parte de un array en uno nuevo Arreglo
const citrus = fruits.slice(1); // Orange,Lemon,Apple,Mango