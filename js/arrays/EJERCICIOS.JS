/*
1. Encontrar valores

Dado:

const numeros = [10, 20, 30, 40, 20];

Ejercicios:

Encuentra la primera posición de 20
Encuentra la última posición de 20
Verifica si existe 50
Devuelve el primer número mayor a 25
Devuelve el índice del primer número mayor a 25

*/
const numeros = [10, 20, 30 , 40, 20];

// Primera posición
const primeraPosicion = numeros.indexOf(20); // 1

// Ultima posición
const ultimaPosicion = numeros.lastIndexOf(20); // 4

// Existe 50
const existe = numeros.includes(50); // false

// Mayor a 25
const mayor = numeros.find(n => n > 25); // 30

// Mayor a 25 indice
const indice = numeros.findIndex(n => n > 25); // 2


/*
2. Transformación básica
const numeros = [1, 2, 3, 4, 5];
Multiplica todos por 3 (map)
Filtra los pares (filter)
Suma todos (reduce)
*/

const basica = [1, 2, 3, 4, 5];

// Map
let multip = basica.map(n => n * 3); 

// filter
let filt = basica.filter(num => num % 2 === 0);

// reduce 
let red = basica.reduce((numOne, numTwo) => numOne + numTwo, 0);



/*
3. Validaciones
const edades = [18, 21, 25, 17];
¿Todos son mayores de edad? (every)
¿Al menos uno es menor de edad? (some)
*/
const edades = [18, 21, 25, 17];

// every()
const mayorEdad = edades.every(n => n > 18) // false


/*
4. Trabajo con objetos
const usuarios = [
  { nombre: "Juan", edad: 17 },
  { nombre: "Ana", edad: 22 },
  { nombre: "Pedro", edad: 30 }
];
Obtener solo los mayores de edad
Obtener solo los nombres
Encontrar el primer usuario mayor de 20
Verificar si todos son mayores de edad

*/

const usuarios = [
  { nombre: "Juan", edad: 17 },
  { nombre: "Ana", edad: 22 },
  { nombre: "Pedro", edad: 30 }
];

// Mayores de edad
const mayores = usuarios.filter(item => item.edad >= 18);

// Solo nombres
const nombres = usuarios.map(user => user.nombre);

const mayor20 = usuarios.find(user => user.edad > 20);

const todosMayores = usuarios.every(user => user.edad >= 18);


/*
5. Ordenamiento
const precios = [500, 200, 800, 100];
Ordena de menor a mayor
Ordena de mayor a menor
Invierte el array
Haz lo mismo pero sin modificar el original
*/

const precios = [500, 200, 800, 100];

// Menor a mayor
const menorMayor = [...precios].sort((a, b) => a - b);
// Mayor a menor
const mayorMenor = [...precios].sort((a, b) => b - a);
// Invertir original (muta)
const originalInvertido = [...precios].reverse();
// Invertir sin modificar
const invertir = precios.toReversed();



