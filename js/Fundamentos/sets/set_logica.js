/*
En JavaScript 2025, se añadieron 7 nuevos métodos lógicos al objeto Set:

union()
difference()
intersection()
isDisjointFrom()
isSubsetOf()
isSupersetOf()
symmetricDifference()
*/

// union() -> El método devuelve la unión de dos conjuntos. El método devuelve un nuevo conjunto que contiene los elementos que pertenecen a este conjunto, o en el conjunto de argumentos, o en ambos

const A = new Set(["a","b","c"]);
const B = new Set(["b","c","d"]);

let resultado = A.union(B);
console.log(resultado); // a, b, c, d -> Concateno ambos conjuntos y solo tomo los primeros valores, quito por asi decirlo los duplicados.

// intersection() -> El método devuelve la intersección de dos conjuntos. El método devuelve un nuevo conjunto que contiene los elementos que pertenecen a este conjunto y en el conjunto de argumentos. 
const resultado2 = A.intersection(B);
console.log(resultado2); // La intersección es: b,c

// difference() -> El método devuelve la diferencia entre dos conjuntos. El método devuelve un nuevo conjunto que contiene elementos que pertenecen a este conjunto pero no en el conjunto de argumentos
const resultado3 = A.difference(B);
console.log(resultado3); // La diferencia es: a

// symmetricDifference() -> El método devuelve la diferencia simétrica entre dos conjuntos.El método devuelve un nuevo conjunto que contiene elementos que pertenecen a este conjunto o en el conjunto de argumentos, pero no en ambos.
const resultado4 = A.symmetricDifference(B);
console.log(resultado4); // ad

// isSubsetOf() -> El método devuelve true si todos los elementos de este conjunto también es elementos del conjunto de argumentos. 

let answer = A.isSubsetOf(B); // false

// isSupersetOf() -> El método devuelve true si todos los elementos del conjunto de argumentos también pertenecen a este conjunto. 
let answer_2 = A.isSupersetOf(B); // false

// isDisjointFrom() -> El método devuelve true si este conjunto no tiene elementos en común con el conjunto de argumentos. 
let answer_3 = A.isDisjointFrom(B); // false


























































