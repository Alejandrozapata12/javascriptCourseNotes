/*
¿Puedo agregar una propiedad a un string?
Considera el siguiente código:
*/

let srt = "Hello";
srt.test = 5;

console.log(srt.test); // Output: undefined 
// En este ejemplo, intentamos agregar una propiedad test a un string primitivo. Sin embargo, los tipos primitivos no pueden tener propiedades, por lo que el intento de asignar srt.test = 5 no tiene efecto. Cuando intentamos acceder a srt.test, obtenemos undefined porque la propiedad no existe en el string primitivo.

// Esto demuestra que los tipos primitivos no pueden tener propiedades, aunque JavaScript nos permita usar métodos en ellos gracias a la conversión automática a objetos temporales.

/*
Depende de si usas el modo estricto “use strict” o no, el resultado será:
undefined (sin strict mode)
Un error. (strict mode)
*/

