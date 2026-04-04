// ======================== Strings ========================
/*
En JavaScript, los datos textuales son almacenados como strings (cadena de caracteres). No hay un tipo de datos separado para caracteres unitarios.

El formato interno para strings es siempre UTF-16, no está vinculado a la codificación de la página.
*/

// ********************* Comillas *********************

// Recordemos los 2 tipos de comillas para strings: comillas simples y comillas dobles. Ambos funcionan igual, pero no pueden mezclarse. Por ejemplo:
let str1 = "Hola";
let str2 = 'Mundo';

// Si queremos usar comillas dentro de un string, podemos usar el otro tipo de comillas para delimitar el string. Por ejemplo:
let str3 = "Ella dijo: 'Hola'";
let str4 = 'Él respondió: "Hola"';

// Si queremos usar el mismo tipo de comillas dentro del string, debemos escaparlas con una barra invertida (\). Por ejemplo:
let str5 = "Ella dijo: \"Hola\"";
let str6 = 'Él respondió: \'Hola\'';

// ********************* Plantillas de texto (Template literals) *********************

// Las plantillas de texto, delimitadas por backticks (`), permiten incluir variables y expresiones dentro de un string usando la sintaxis ${...}. Por ejemplo:
let name = "Juan";
let greeting = `Hola, ${name}!`;
console.log(greeting); // Output: Hola, Juan!

// También podemos incluir expresiones más complejas dentro de las plantillas de texto. Por ejemplo:
let a = 5;
let b = 10;
let result = `La suma de ${a} y ${b} es ${a + b}.`;
console.log(result); // Output: La suma de 5 y 10 es 15.

// ******************** Caracteres especiales ********************

// En los strings, algunos caracteres tienen un significado especial y deben ser escapados con una barra invertida (\). Por ejemplo:
let str7 = "Primera línea\nSegunda línea"; // \n es un salto de línea
let str8 = "El carácter de comilla doble: \"\""; // Escapamos las comillas dobles
let str9 = "El carácter de comilla simple: \'\'"; // Escapamos las comillas simples

// También hay otros caracteres especiales como \t (tabulación), \\ (barra invertida), \r etc. Por ejemplo:
let str10 = "Columna 1\tColumna 2";
let str11 = "Ruta del archivo: C:\\Users\\Juan\\Documents";
let str12 = "Primera línea\rSegunda línea"; // \r es un retorno de carro, puede sobrescribir la línea anterior en algunos contextos


// ********************* Longitud de un string ********************

// La propiedad length de un string devuelve la cantidad de caracteres que contiene. Por ejemplo:
let str13 = "Hola Mundo";
console.log(str13.length); // Output: 10

// ********************* Acceso a caracteres ********************

// Podemos acceder a los caracteres individuales de un string usando la notación de corchetes [] o la función charAt(). Por ejemplo:  
let str14 = "Hola";
console.log(str14[0]); // Output: H
console.log(str14.charAt(1)); // Output: o


// ********************* Inmutabilidad de los strings ********************
// Los strings en JavaScript son inmutables, lo que significa que no se pueden modificar después de haber sido creados. Cualquier operación que parezca modificar un string en realidad crea uno nuevo. Por ejemplo:
let str15 = "Hola";
str15[0] = "h";
console.log(str15); // Output: Hola (no se ha modificado)

// Para modificar un string, debemos crear uno nuevo. Por ejemplo:
let str16 = "Hola";
let newStr = "h" + str16.slice(1);
console.log(newStr); // Output: hola


// ********************* Cambiando capitalización ********************
// Para cambiar la capitalización de un string, podemos usar los métodos toUpperCase() y toLowerCase(). Por ejemplo:
let str17 = "Hola Mundo";
console.log(str17.toUpperCase()); // Output: HOLA MUNDO
console.log(str17.toLowerCase()); // Output: hola mundo

// Si queremos un solo carácter en minúscula:

let char = str17[0].toLowerCase();
console.log(char); // Output: h 


// ********************* Buscando una subcadena de caracteres ********************
// Para buscar una subcadena dentro de un string, podemos usar el método indexOf(). Por ejemplo:
let str18 = "Hola Mundo";
console.log(str18.indexOf("Mundo")); // Output: 5 (la posición donde comienza "Mundo")
console.log(str18.indexOf("mundo")); // Output: -1 (no se encuentra "mundo" con minúscula)

// También podemos usar el método includes() para verificar si una subcadena está presente en un string. Por ejemplo:
console.log(str18.includes("Mundo")); // Output: true
console.log(str18.includes("mundo")); // Output: false  

// ********************* Obteniendo un substring ********************
// Para obtener una parte de un string, podemos usar el método substring(). Por ejemplo:
let str19 = "Hola Mundo";
console.log(str19.substring(0, 4)); // Output: Hola (desde el índice 0 hasta el índice 4, sin incluir el índice 4)
console.log(str19.substring(5)); // Output: Mundo (desde el índice 5 hasta el final del string)


/*
Existen 3 tipos de entrecomillado. Los backticks permiten que una cadena abarque varias líneas e insertar expresiones ${…}.
Podemos usar caracteres especiales como el salto de línea \n.
Para obtener un carácter, usa: [] o el método at.
Para obtener un substring, usa: slice o substring.
Para convertir un string en minúsculas/mayúsculas, usa: toLowerCase/toUpperCase.
Para buscar un substring, usa: indexOf, o para chequeos simples includes/startsWith/endsWith.
Para comparar strings de acuerdo al idioma, usa: localeCompare, de otra manera serán comparados por sus códigos de carácter.
Existen otros métodos útiles:

str.trim() – remueve (“recorta”) espacios desde el comienzo y final de un string.
str.repeat(n) – repite el string n veces.
… y más. Puedes ver el manual para más detalles.
Los strings también tienen métodos para buscar/reemplazar que usan “expresiones regulares”. Este es un tema muy amplio, por ello es explicado en una sección separada del tutorial Expresiones Regulares.

Además, es importante saber que los strings están basados en la codificación Unicode, y se presentan algunas complicaciones en las comparaciones de string. Hay más acerca de Unicode en el capítulo Unicode, String internals.
*/







