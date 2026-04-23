// Hay una forma más de crear una función. Raramente se usa, pero a veces no hay alternativa.

// La sintaxis es:
let func = new Function ([arg1, arg2, ...argN], functionBody);
// Es decir, se le pasan los argumentos como strings, y el cuerpo de la función también como un string. Por ejemplo:
let sum = new Function('a', 'b', 'return a + b');
alert( sum(1, 2) ); // 3

// El resultado es una función que se puede llamar como cualquier otra. Sin embargo, no es posible crear funciones recursivas de esta forma, ya que la función no tiene un nombre (es anónima). Por ejemplo:
let factorial = new Function('n', `
  if (n <= 1) return 1;
  return n * factorial(n - 1); // Error: factorial is not defined
`);
alert( factorial(5) ); // Error

// En general, es mejor usar la sintaxis de función normal, ya que es más clara y fácil de leer. La sintaxis de Function se usa principalmente en casos donde el código de la función se genera dinámicamente, como en algunos casos de metaprogramación o cuando 

// Ejemplo descuento 
const descuento = "return precio * (1 - porcentaje / 100);";
const calcularDescuento = new Function('precio', 'porcentaje', descuento);
console.log(calcularDescuento(100, 20)); // 80
























