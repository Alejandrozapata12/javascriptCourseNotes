/*
String length
String charAt()
String charCodeAt()
String codePointAt()
String concat()
String at()
String [ ]
String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String isWellFormed()
String toWellFormed()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()
*/

// String length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

// *******************Métodos de extracción de Strings*******************

// String charAt() , String charCodeAt() , At(), slice(start, end), substring(start, end), substr(start, length)

let texto = "Hello World";
let extraccion = texto.charAt(0) // H, returna la letra expecicada. 

let extrac = texto.charCodeAt(0) // 72,  retorna un codigo  UTF-16

let newAt = texto.at(2) // l, retorna la segunda letra del texto, claramente para este ejemplo. 


let fruits = "Apple, Wiki, Banana";

let slice = fruits.slice(7, 13) // El método toma 2 parámetros: posición inicial y posición final - extrae una parte de una cadena y devuelve el Parte extraída en una cuerda nueva.

let subcadena = fruits.substring(7,13) // Este es similar a slice(), solo que en este la diferencia es que los valores de inicio y final menores que 0 se tratan como 0.

let longitud = fruits.substr(7, 6); // es similar a .slice(), la diferencia es que el segundo parámetro especifica la longitud de la pieza extraída.


// extrae una parte de una cadena y devuelve el Parte extraída en una cuerda nueva.
// *******************FIN Métodos de extracción de Strings*******************


// concat(), une 2 o mas cadenas

let song = "Brooklyn";
let artist = "Lana Del Rey";

let conca = song.concat(" ",artist);


// Métodos de conversión toUpperCase() y toLowerCase()

// toUpperCase() -  convierte una cadena de texto de minuscula a mayuscula. 

let minu = "hola a todos";
let resultado = minu.toUpperCase(); // HOLA A TODOS

//  toLowerCase() - convierte una cadena texto de mayuscula a minuscula.

let mayus = "HOLA A TODOS";
let final = mayus.toLowerCase(); // hola a todos


// Métodos de espacio - trim(), trimStart(), trimEnd()

// trim() - El método elimina espacios en blanco de ambos lados de una cadena. 

let text1 = "                  Hello World!         ";
let str = text1.trim(); // Hello World

// trimStart() - El método elimina espacios en blanco iniciales de la cadena. 
let text2 = "               Hola a todos     ";
let star = text2.trimStart(); // Hola a todos    

// trimEnd() - El método elimina espacios en blanco finales de la cadena. 
let text3 = "    Hola a todos!      ";
let end = text3.trimEnd(); 


// Métodos de relleno de cadenas - padStart()padEnd()

// padStart() - El método rellena una cadena desde el principio.
let nu = 5;
let pasarStr = nu.toString(); 
let pad = pasarStr.padStart(4,"*"); // ***5 - Acolcha una cuerda con "0" hasta que alcance la longitud 4. 

// padEnd() -  El método rellena una cuerda desde el extremo.

let nd = 8;
let resu = nd.padEnd(5,"+"); // 5+++



// repeat() - El método devuelve una cadena con varias copias de una cadena. string.repeat(count)

let fra = "normal";
let repe = fra.repeat(4); // normalnormalnormalnormal


// Métodos de sustitución de cadenas - replace(), replaceAll()

// replace() - El método sustituye un valor especificado por otro Valor en una cadena, solo reemplaza la primera coincidencia
let mensaje = "Please visit Caldas"; 
let susti = mensaje.replace("Caldas", "San Francisco"); // Please visit San Francisco

// replaceAll() - El método sustituye un valor especificado por otro valor en una cadena y a diferencia de replace() este cambia todas las coincidencias. 


// Métodos de conversión de cadenas en un array split()

// split() - Una cadena puede convertirse en un array con el método. 

let textss = "a,b,c,d,e,f";
const myArray = textss.split(",");



















