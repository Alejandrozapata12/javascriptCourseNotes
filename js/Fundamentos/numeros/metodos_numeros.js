/*
Métodos basicos: 

toString()
toExponential()
toFixed()
toPrecision()
valueOf()


Métodos estaticos: 

Number.isFinite()
Number.isInteger()
Number.isNan()
Number.isSafeInteger()
Number.parseInt()
Number.parseFloat()
*/

// **********Basic Methods**********

// toString() - El método devuelve un número como cadena.

let num_1 = 24;
num_1.toString(); // "24"

// toExponential() - devuelve una cadena, con un número redondeado y escrito usando notación exponencial.

let x = 9.656;
x.toExponential(); // 9.656e+0

// toFixed() - devuelve una cadena, con el número escrita con un número especificado de Decimales.
let z = 9.656;
z.toFixed(0); // 10
z.toFixed(2); // 9.66
z.toFixed(4); // 9.6560
z.toFixed(6); // 9.656000

// toPrecision() - devuelve una cadena, con un número escrito con una longitud especificada.
let v = 9.656;
v.toPrecision(); // 9.656
v.toPrecision(2); // 9.7
v.toPrecision(4); // 9.656
v.toPrecision(6); // 9.65600


// valueOf() - devuelve un número como número.
let y = 123;
y.valueOf(); // 123

// Hay 3 métodos JavaScript que se pueden usar para convertir una variable en un número. 

/*
Método	          Descripción

Number()	     Devuelve un número convertido a partir de su argumento.
ParseFloat()	 Analiza su argumento y devuelve un número de coma flotante
ParseInt()	       Analiza su argumento y devuelve un número entero
*/

Number("10"); // 10 typeOf - Number - también puede convertir una fecha en un número.
Number(new Date("1970-01-01")); // 0


// parseInt() analiza una cadena y devuelve un número entero. Los espacios son permitido. Solo se devuelve el primer número:

// parseFloat() analiza una cadena y devuelve un número. Los espacios son permitido. Solo se devuelve el primer número. 
parseFloat("-10"); // -10
parseInt("-10.33"); // -10.33


// ******** Métodos de objeto de número  ********

/*
Estos métodos de objeto pertenecen al objeto Número:

Método	                  Descripción
Number.isInteger()	Devuelve verdadero si el argumento es entero
Number.isNaN()	    Retornos verdaderos si el argumento es NaN
Number.isFinite()	  Retornos verdaderos si el argumento no es ni Infinito ni NaN
Number.isSafeInteger()	Devuelve verdadero si el argumento es un entero seguro
Number.parseFloat()	     Convierte una cadena en un número
Number.parseInt()	      Convierte una cadena en un número entero
*/

// Number.isInteger() - El método devuelve true si el argumento es un entero.

Number.isInteger(10); // true
Number.isInteger(10.5); // false


// Number.isFinite() - El método devuelve true si el argumento no es Infinito, -iInfinito, ni Nan.
Number.isFinite(123); // true

// Number.isNaN() - El método devuelve true si el argumento es NaN (No un Número). 
Number.isNaN(123); // false

// Number.isSafeInteger() - Un entero seguro es un número que puede representarse exactamente como un número de doble precisión. El método devuelve true si el argumento es un entero seguro.
Number.isSafeInteger(10); // true
Number.isSafeInteger(12345678901234567890); // false

// Number.parseFloat() -analiza una cadena y devuelve un número. Se permiten espacios. Solo se devuelve el primer número:

Number.parseFloat("10"); // 10
Number.parseFloat("10.33"); // 10.33
Number.parseFloat("10 20 30"); // 10
Number.parseFloat("10 years"); // 10
Number.parseFloat("years 10"); // NaN

// Number.parseInt() - analiza una cadena y devuelve un número entero. Se permiten espacios. Solo se devuelve el primer número:
Number.parseInt("-10");  // -10
Number.parseInt("-10.33"); // -10
Number.parseInt("10"); // 10
Number.parseInt("10.33"); // 10
Number.parseInt("10 20 30"); // 10
Number.parseInt("10 years"); // 10
Number.parseInt("years 10"); // NaN














