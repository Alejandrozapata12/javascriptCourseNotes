/*
Un WeakMap de JavaScript es una colección de pares clave/valor donde las claves deben ser objetos.

Un WeakMap contiene referencias débiles a sus claves.

*/

// Create a WeakMap
let myMap = new WeakMap();

// Create an Object
let myObj = {fname:"John", lname:"Doe"};

// Set a WeakMap value
myMap.set(myObj, "player");

// Get the WeakMap value
let type = myMap.get(myObj);


