// Números

/*
En JavaScript moderno, hay dos tipos de números:

Los números regulares en JavaScript son almacenados con el formato de 64-bit IEEE-754, conocido como “números de doble precisión de coma flotante”. Estos números son los que estaremos usando la mayor parte del tiempo, y hablaremos de ellos en este capítulo.

Los números BigInt representan enteros de longitud arbitraria. A veces son necesarios porque un número entero regular no puede exceder 253 ni ser menor a -253 manteniendo la precisión, algo que mencionamos antes en el capítulo Tipos de datos. Como los bigints son usados en áreas muy especiales, les dedicamos un capítulo especial BigInt.
*/

// Más formas de escribir un número
let num1 = 123;
let num2 = 123.456;
let num3 = 1.23e5; // 1.23 * 10^5
let num4 = 0xFF; // hexadecimal
let num5 = 0b1010; // binario
let num6 = 0o777; // octal

// Por ejemplo 1 billon
// La forma obvia es escribirlo como 1000000000000, pero es difícil de leer. En su lugar, podemos usar la notación exponencial: 1e12, que es más fácil de entender y escribir. También podemos usar guiones bajos para mejorar la legibilidad: 1_000_000_000_000.

let billion1 = 1000000000000; // Forma obvia
let billion2 = 1e12; // Notación exponencial
let billion3 = 1_000_000_000_000; // Usando guiones bajos para mejorar la legibilidad

console.log(billion1);  
console.log(billion2);
console.log(billion3);

// Ahora valores en retroceso
let small1 = 0.000000000001; 
let small2 = 1e-12; // Notación exponencial
let small3 = 1e-6; // Notación exponencial para un millón 

console.log(small1); // 0.000000000001
console.log(small2); // 0.000000000001
console.log(small3); // 0.000001


// Redondeo
// Una de las operaciones más usadas cuando se trabaja con números es el redondeo. JavaScript tiene varias funciones para redondear números:

// Math.round() – redondea al entero más cercano
// Math.floor() – redondea hacia abajo
// Math.ceil() – redondea hacia arriba
// Math.trunc() – elimina la parte decimal

console.log(Math.round(1.5)); // 2 en este caso, 1.5 se redondea hacia arriba y el numero mas cercano es 2
console.log(Math.round(1.4)); // 1 en este caso, 1.4 se redondea hacia abajo y el numero mas cercano es 1
console.log(Math.floor(1.7)); // 1 en este caso, 1.7 se redondea hacia abajo y el numero mas cercano es 1
console.log(Math.ceil(1.2)); // 2 en este caso, 1.2 se redondea hacia arriba y el numero mas cercano es 2
console.log(Math.trunc(1.9)); // 1 en este caso, 1.9 se trunca a 1 eliminando la parte decimal

// También podemos usar el método toFixed(n) para redondear un número a n decimales y convertirlo en una cadena. Por ejemplo:
let num = 1.23456789;
console.log(num.toFixed(2)); // "1.23" en este caso, num se redondea a 2 decimales y se convierte en la cadena "1.23"
console.log(num.toFixed(4)); // "1.2346" en este caso, num se redondea a 4 decimales y se convierte en la cadena "1.2346"

// Ejemplo de la vida real: Supongamos que estamos trabajando en una aplicación de comercio electrónico y necesitamos mostrar el precio de un producto con dos decimales. Podemos usar toFixed(2) para asegurarnos de que el precio se muestre correctamente, incluso si el número original tiene más o menos de dos decimales.
let price = 19.99;
console.log(price.toFixed(2)); // "19.99" en este caso, price se redondea a 2 decimales y se convierte en la cadena "19.99"



// Cálculo impreciso
// A veces, debido a la forma en que los números de coma flotante son representados internamente, podemos obtener resultados imprecisos al realizar cálculos con números decimales. Por ejemplo:
console.log(0.1 + 0.2); // 0.30000000000000004 en este caso, la suma de 0.1 y 0.2 no es exactamente 0.3 debido a la representación interna de los números de coma flotante
// Para evitar este problema, podemos usar una técnica común que consiste en multiplicar los números por una potencia de 10 para convertirlos en enteros, realizar la operación y luego dividir el resultado por la misma potencia de 10. Por ejemplo:
let a = 0.1;
let b = 0.2;
let result = (a * 10 + b * 10) / 10;
console.log(result); // 0.3 en este caso, al multiplicar a y b por 10, los convertimos en enteros, realizamos la suma y luego dividimos el resultado por 10 para obtener el resultado correcto de 0.3

// También podemos usar la función toFixed() para redondear el resultado a un número específico de decimales. Por ejemplo:
let c = 0.1;
let d = 0.2;
let result2 = (c + d).toFixed(2);
console.log(result2); // "0.30" en este caso, al usar toFixed(2), redondeamos el resultado de la suma a 2 decimales y lo convertimos en la cadena "0.30" 

// Tests: isFinite e isNaN
// JavaScript tiene dos funciones globales que nos permiten verificar si un valor es un número finito o no es un número (NaN):

// isFinite(value) – devuelve true si el valor es un número finito, de lo contrario devuelve false
// isNaN(value) – devuelve true si el valor no es un número (NaN), de lo contrario devuelve false

console.log(isFinite(123)); // true en este caso, 123 es un número finito
console.log(isFinite(Infinity)); // false en este caso, Infinity no es un número finito
console.log(isNaN(123)); // false en este caso, 123 es un número, no NaN
console.log(isNaN("Hello")); // true en este caso, "Hello" no es un número, es NaN
console.log(isNaN(NaN)); // true en este caso, NaN no es un número, es NaN



// parseInt y parseFloat
// JavaScript también tiene dos funciones globales para convertir cadenas en números:

// parseInt(string, radix) – convierte una cadena en un número entero, usando la base especificada (radix)
// parseFloat(string) – convierte una cadena en un número de punto flotante

console.log(parseInt("123")); // 123 en este caso, la cadena "123" se convierte en el número entero 123
console.log(parseInt("1010", 2)); // 10 en este caso, la cadena "1010" se interpreta como un número binario (base 2) y se convierte en el número entero 10
console.log(parseFloat("123.45")); // 123.45 en este caso, la cadena "123.45" se convierte en el número de punto flotante 123.45
console.log(parseFloat("1.23e2")); // 123 en este caso, la cadena "1.23e2" se interpreta como un número en notación exponencial y se convierte en el número de punto flotante 123 


// Otras funciones matemáticas
// JavaScript tiene muchas otras funciones matemáticas disponibles a través del objeto Math. Algunas de las más comunes incluyen:

// Math.max(a, b, c, ...) – devuelve el número más grande entre los argumentos
// Math.min(a, b, c, ...) – devuelve el número más pequeño entre los argumentos
// Math.random() – devuelve un número aleatorio entre 0 (inclusive) y 1 (exclusive)
// Math.pow(base, exponent) – devuelve la base elevada a la potencia del exponente
// Math.sqrt(value) – devuelve la raíz cuadrada de un número
console.log(Math.max(1, 5, 3)); // 5 en este caso, el número más grande entre 1, 5 y 3 es 5
console.log(Math.min(1, 5, 3)); // 1 en este caso, el número más pequeño entre 1, 5 y 3 es 1
console.log(Math.random()); // Un número aleatorio entre 0 y 1, por ejemplo, 0.123456789
console.log(Math.pow(2, 3)); // 8 en este caso, 2 elevado a la potencia de 3 es igual a 8
console.log(Math.sqrt(16)); // 4 en este caso, la raíz cuadrada de 16 es igual a 4

// Ejemplo abarcando todo lo anterior: Supongamos que estamos desarrollando una aplicación de calculadora y queremos implementar una función que tome dos números como entrada, realice una operación matemática (como suma, resta, multiplicación o división) y devuelva el resultado redondeado a dos decimales. Podemos usar las funciones matemáticas y de redondeo que hemos aprendido para lograr esto.

function calculate(num1, num2, operation) {
  let result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    default:
      throw new Error("Operación no válida");
  }
  return Math.round(result * 100) / 100; // Redondear a dos decimales
}

console.log(calculate(1.234, 5.678, "add")); // 6.91 en este caso, la suma de 1.234 y 5.678 es 6.912, que se redondea a 6.91
console.log(calculate(1.234, 5.678, "subtract")); // -4.44 en este caso, la resta de 1.234 y 5.678 es -4.444, que se redondea a -4.44 
console.log(calculate(1.234, 5.678, "multiply")); // 7.01 en este caso, la multiplicación de 1.234 y 5.678 es 7.006652, que se redondea a 7.01
console.log(calculate(1.234, 5.678, "divide")); // 0.22 en este caso, la división de 1.234 entre 5.678 es 0.2173, que se redondea a 0.22
























