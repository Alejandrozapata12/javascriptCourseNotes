/*
String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()
*/

// indexOf() - El método devuelve el índice (posición) de la primera aparición de una cadena en una cadena, o devuelve -1 si la cadena no se encuentra. 

let text = "Please locate where 'locate' occurs!";
let primera = text.indexOf("locate"); // 7 - cuenta cada letra, espacio y caracter

// lastIndexOf() - El método devuelve el índice de la última aparición de un texto especificado en una cadena. 

let ultima = text.lastIndexOf("locate"); // 21  - cuenta cada letra, espacio y caracter

// Ambos métodos aceptan un segundo parámetro como posición inicial para el Buscar

let index = text.indexOf("locate", 15);

// search() - El método busca una cadena (o una expresión regular) y devuelve la posición de la partida. 

let sear = "Please locate where 'locate' occurs!";
sear.search("locate"); // 7 

// match() - El método devuelve un array que contiene los resultados de la coincidencia una cadena contra una cadena (o una expresión regular).

let matc= "The rain in SPAIN stays mainly in the plain";
matc.match("ain"); // ain

// matchAll() - El método devuelve un iterador que contiene los resultados de la coincidencia una cadena contra una cadena (o una expresión regular).

let all = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = all.matchAll("Cats"); // Cats Cats

// includes() - El método devuelve true si una cadena contiene un valor especificado. De lo contrario, devuelve .false. así mismo tambien se le puede poner un segundo parametro que es la posición. 

let value = "Hello world, welcome to the universe.";
let inclu = value.includes("Hello"); // true
let inclu_2 = value.includes("Hello",14); // false ya que Hello no esta en la posición 14

// startWith() - El método devuelve si una cadena comienza con un valor especificado. De lo contrario, devuelve :false.

let startW = "Hello world, welcome to the universe.";
let start = startW.startsWith("Hello"); // true
let start_false = startW.start("Hello",13) // false ya que Hello no esta en la posición 13


// endsWith() - El método devuelve si una cadena termina con un valor especificado. - De lo contrario, devuelve :false

// Funciona igual a startWith(), lo unico que cambia es que en este caso es finaliza mas no inicia. 




