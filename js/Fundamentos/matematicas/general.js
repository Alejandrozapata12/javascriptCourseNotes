/*
El Objeto Matemático
El objeto JavaScript Math te permite realizar tareas matemáticas.

El objeto Math es estático.

Todos los métodos y propiedades pueden usarse sin crear primero un objeto Math.

Math.PI;
*/

// Propiedades matemáticas
/*
La sintaxis de cualquier propiedad matemática es : .Math.property

JavaScript proporciona 8 constantes matemáticas a las que se puede acceder como propiedades matemáticas:
*/

Math.E        // returns Euler's number -> 2.718281828459045
Math.PI       // returns PI -> 3.141592653589793
Math.SQRT2    // returns the square root of 2 -> 1.4142135623730951
Math.SQRT1_2  // returns the square root of 1/2 -> 0,7071067811865476
Math.LN2      // returns the natural logarithm of 2 -> 0,6931471805599453
Math.LN10     // returns the natural logarithm of 10 -> 2.302585092994046
Math.LOG2E    // returns base 2 logarithm of E -> 1.4426950408889634
Math.LOG10E   // returns base 10 logarithm of E -> 0.4342944819032518

/*
Métodos matemáticos
La sintaxis para cualquier método de matemáticas es: Math.method(number)

Número a entero
Existen 4 métodos comunes para redondear un número a un entero:

Math.round(x)	Devuelve x redondeado a su entero más cercano
Math.ceil(x)	Devuelve x redondeado hacia arriba a su entero más cercano
Math.floor(x)	Devuelve x redondeado hacia abajo a su entero más cercano
Math.trunc(x)	Devuelve la parte entera de x (nueva en ES6)
*/

// Math.round(x) -> devuelve el entero más cercano.
Math.round(4.6); // 5

// Math.celi(x) -> devuelve el valor de x redondeado al número entero más cercano.
Math.ceil(4.9); // 5
Math.ceil(4.7); // 5
Math.ceil(4.4); // 5
Math.ceil(4.2); // 5
Math.ceil(-4.2); // -4

// Math.floor() -> devuelve el valor de x redondeado hacia abajo a su entero más cercano
Math.floor(4.9); // 4
Math.floor(4.7); // 4 
Math.floor(4.4); // 4
Math.floor(4.2); // 4
Math.floor(-4.2); // -5 

// Math.trunc() ->  devuelve la parte entera de x
Math.trunc(4.9); // 4
Math.trunc(4.7); // 4 
Math.trunc(4.4); // 4
Math.trunc(4.2); // 4
Math.trunc(-4.2); // -4

// Math.sign()-> etorna si x es negativo, nulo o positivo. 
/*
Si x es positivo, devuelve 1
Si x es negativo, devuelve -1
Si x es cero, devuelve 0
*/ 
Math.sign(-4); // -1
Math.sign(0); //  0
Math.sign(4); //  1

// Math.pow() -> devuelve el valor de x a la potencia de y.
Math.pow(8, 2); // 8 x 8 = 64

// Math.sqrt() -> devuelve la raíz cuadrada de x
Math.sqrt(64); // 8 x 8 : 64 => 8 

// Math.abs() -> devuelve el valor absoluto (positivo) de x. 
Math.abs(-4.7)// 4.7

// Math.sin() -> devuelve el seno (un valor entre -1 y 1) del ángulo x (dado en radianes). Si quieres usar grados en lugar de radianes, tienes que convertir grados a radianes: Ángulo en radianes = Ángulo en grados x PI / 180.
Math.sin(90 * Math.PI /180); // 1

// Math.cos() -> Math.cos(x) devuelve el coseno (un valor entre -1 y 1) del ángulo x (dado en radianes). Si quieres usar grados en lugar de radianes, tienes que convertir grados a radianes: Ángulo en radianes = Ángulo en grados x PI / 180.
Math.cos(0 * Math.PI / 180); // 1

//  Math.min() y Math.max() -> Math.min() y  Math.max() puede usarse para encontrar el valor más bajo o más alto en una lista de argumentos:
Math.min(0, 150, 30, 20, -8, -200); // -200
Math.max(0, 150, 30, 20, -8, -200); // 150

// Math.random() -> Math.random() devuelve un número aleatorio entre 0 (inclusive) y 1 (exclusivo). 
Math.random(); // 0.08071526868197576 etc... porque cada vez que se ejecuta cambia aleatoriamente. 

// Math.log() -> devuelve el logaritmo natural de x
Math.log(1); // 0
Math.log(2); // 0.6931471805599453
Math.log(3); //1.0986122886681096 

















