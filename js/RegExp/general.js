/*
Expresiones regulares
Una expresión regular es una secuencia de caracteres que forma un patrón de búsqueda.

Regex es una forma abreviada común de referirse a una expresión regular.

JavaScript RegExp es un objeto para manejar expresiones regulares.

RegExp se utiliza para:

Búsqueda de texto
Sustitución de texto
Validación de texto

*/

let text = "Visit W3Schools";
let n = text.search(/w3schools/i);
console.log(n); // 6 -> position

/*
Uso de métodos de cadenas
Las expresiones regulares se usan a menudo con los métodos de cadena:

Método	Descripción
Match(regex)	Devuelve un array de resultados
replace(regex)	Devuelve una nueva String
search(regex)	Devuelve el índice de la primera coincidencia
*/

// Match(); 
let text1 = "Visit W3Schools!"; 
const myArr = text1.match(/W3Schools/);

document.getElementById("demo").innerHTML = myArr; // W3Schools

// replace()
let frase1 = "Yo quiero un trabajo como analista de datos"; 
const conver = frase1.replace(/analista de datos/i, "desarrollar de software"); // Yo quiero un trabajo como desarrollar de software

// search()
let frase2 = "Mañana ya debo ir a un trabajo que solo me proporciona una quincena"; 
const encontrar = frase2.search(/quincena/i); // 59 -> position

/*
Alternancia de RexExp (OR)
En una expresión regular, una alternancia se denota con un carácter vertical |.
Una alternancia coincide con cualquiera de las alternativas separadas con |.
*/

/*
Ejemplo
Una búsqueda global de las alternativas (rojo|azul|gris):
*/
let colores = "Black, red, white, blue, orange, gray";
let search = colores.match(/red|blue|gray/g); //  red,blue,gray


/*
Banderas Regex de JavaScript

/pattern/flags
Las banderas de expresión regular son parámetros que pueden modificar cómo se utiliza un patrón, como convertirla en insensible a mayúsculas minúsculas o global.

Estos son los más comunes:

Flag	Description
/g	Performs a global match (find all)
/i	Performs case-insensitive matching
/u	Enables Unicode support (new 2015)
*/

// La bandera /g (Global) -> La bandera /g coincide con todas las ocurrencias del patrón, no solo con la primera.

let fun = "Mi nombre es Alejandro Zapata";
let flag = /es/g;
let patt = fun.match(flag); // es

// La bandera /i (Insensible) -> La bandera /i hace que una coincidencia sea insensible a mayúsculas y mayúsculas: /abc/i coincide con "abc", "AbC", "ABC".
let wev = "Visit W3Schools";
const pattern = /w3schools/i; 
let result = wev.match(pattern); // W3Schools



/*
Metapersonajes de RexExp

// Match words
const pattern = /\w/;
Los metapersonajes son personajes con un significado especial.

Se pueden usar para emparejar dígitos, palabras, espacios y más.

Estos son los más comunes:

Meta	Descripción
\d	Dígitos de los partidos
\w	Coincide con las palabras
\s	Espacios de coincidencia
*/

// RegExp \d (dígitos) Metacarácter -> El metacarácter \d coincide con los dígitos.
let ex = "Give 100%!";
const pattern2 = /\d/g;

let result2 = ex.match(pattern2);

document.getElementById("demo").innerHTML = result2; // 1,0,0

// Metapersonaje RegExp \w (palabra) => El metapersonaje \w coincide con los caracteres de palabra. Un carácter de palabra es un carácter de la a la z, de la A a la Z, del 0 al 9, incluyendo _ (guion bajo).

// Ejemplo -> Una búsqueda global de caracteres de palabras:

let t = "Give 100%!";
const patte = /\w/g;

let resu = text.match(pattern); // G,i,v,e,1,0,0











