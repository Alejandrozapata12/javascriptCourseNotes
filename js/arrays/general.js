/*
Un Array es un tipo de objeto diseñado para almacenar colecciones de datos.

Las características clave de los arrays JavaScript son:

Elementos: Un array es una lista de valores, conocidos como elementos.

Ordenado: Los elementos del array se ordenan según su índice.

Cero indexado: El primer elemento está en el índice 0, el segundo en el índice 1, y así sucesivamente.

Tamaño dinámico: Los arreglos pueden crecer o reducirse a medida que se añaden o eliminan elementos.

Heterogéneos: Los arrays pueden almacenar elementos de diferentes tipos de datos (números, cadenas, objetos y otros arreglos).


Creación de un array
Usar un array literal es la forma más sencilla de crear un array JavaScript.

Sintaxis:

const array_name = [item1, item2, ...];     
*/

// Ejemplo
const cars = ["Volvo", "Ferrari", "Porche"];

// También puedes crear un array vacío y proporcionar elementos más adelante: 
const fruits =[];

fruits[0] = "Orange";
fruits[1] = "Apple";
fruits[2] = "Strawberry";

// ********* Acceso a los elementos del arrays*********
const car = cars[0]; // Volvo

// ********* Cambio de un elemento del array*********
cars[0] = "Land Rover"; // ["Land Rover", "Ferrari", "Porche"];

// ********* Conversión de un array a una cadena*********
const frui = ["Banana", "Orange", "Apple", "Mango"];
const conversion = frui.toString(); // Banana,Orange,Apple,Mango


/*
La diferencia entre matrices y objetos

En JavaScript, los arrays utilizan índices numerados.

En JavaScript, los objetos utilizan índices nombrados.

*/








