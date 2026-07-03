// ================ 1. VARIABLES ================
var prestador = "Alejandro";
let apellido = "Zapata";
const editor = true;

// ================ 2. TIPOS DE DATOS ================

let nombre = "Carlos"; // String
let edad = 24; // Number
let activo = true; // Boolean
let data = { // Objeto
  first: "Alejandro",
  last: "Zapata",
  fullName() {
    console.log(this.first + this.last);
  }
}
data.fullName();

let grande = 99999999999; // BigInt
let proposito = null; // Null
let defecto; // Undefined

// ================ 3. OPERADORES ================

// Aritmeticos

let numberOne = 4;
let numberTwo = 4;
console.log(numberOne + numberTwo); // 8 "SUMA";
console.log(numberOne - numberTwo); // 0 "RESTA";
console.log(numberOne * numberTwo); // 16 "MULTIPLICACIÓN";
console.log(numberOne / numberTwo); // 1 "DIVISION";
console.log(numberOne ** numberTwo); // 256 "EXPONENCIACIÓN";
console.log(numberOne % numberTwo); // 0 "MODULO";

let incremento = numberOne++;
console.log(incremento); // 5 "Incremento";

let decremento = numberTwo--;
console.log(decremento); // 3 "Decremento";

// Asignación

let x = 10;
let y = 12;

let sumaAsigna = x += 5; // 15 suma y asigna
let restaAsigna = y -= 2; // 10 resta y asigna
let multiplicaAsigna = x *= 2; // 30 multiplica y asigna
let divideAsigna = y /= 2; // 5 divide y asigna
let moduloAsigna = x %= 7; // 2 modulo y asigna

// Comparación

let compOne = "4";
let compTwo = 4;

if (compOne == compTwo) {
  console.log("Igual que valor");
} else if (compOne === compTwo) {
  console.log("Igual que valor y tipo");
} else if (compOne != compTwo) {
  console.log("No es igual que valor")
} else if (compOne !== compTwo) {
  console.log("No es igual que valor y tipo");
} else if (compOne > compTwo) {
  console.log("Mayor que");
} else if (compOne < compTwo) {
  console.log("Menor que");
} else if (compOne >= compTwo) {
  console.log("Mayor o igual que");
} else if (compOne <= compTwo) {
  console.log("Menor o igual que");
} else {
  console.log("fuera");
}

// Logicos

let car = "Audi";
let color = "Rojo";
let ciudad = null;

if (car === "Audi" && color === "Rojo") { // && (Y)
  console.log("¡Lo quiero!");
} else if (car === "Audi" || color === "Blanco") { // || (O)
  console.log("mmm no se, lo pensaria");
} else if (!(car === color)) { // ! (Not)
  console.log("No lo quiero");
} else if ((ciudad ?? "No existe") === "No existe") { // ?? Nullish Coalescing 
  console.log("Ciudad no habilitada");
} else {
  console.log("Estoy fuera");
}

// ================ 4. ARRAYS ================
const roles = ["Administrador", "Empleado", "Gerente Bodega"];

// Acceso
console.log(roles[1]); // Empleado

// Busqueda
console.log(roles.indexOf("Administrador")); // 0
console.log(roles.lastIndexOf("Administrador")); // 0
console.log(roles.includes("Empleado")); // true

const cantidadEmpleados = [
  { administrador: 500 },
  { empleado: 0 },
  { gerenteBodega: 155 }
];

let admin = cantidadEmpleados.find(item => item.administrador);
console.log(admin);  // {administrador: 500}

let adminFindIndex = cantidadEmpleados.findIndex(itemTwo => itemTwo.administrador);
console.log(adminFindIndex); // 0

let adminFindLast = cantidadEmpleados.findLast(itemThr => itemThr.administrador);
console.log(adminFindLast); // {administrador: 500}

// Iteración => Iteración y transformación 
const nombres = ["Alejandro", "Carlos", "Adriana", "Sthepanya", "Luis", "Thomas", "Andres", "Natalia"];

let recorrer = nombres.forEach(n => {
  console.log(n) // Alejandro Carlos Adriana Sthepanya Luis Thomas Andres Natalia
})

const transformar = nombres.map(item => item.toUpperCase());
console.log(transformar);
/*
[
  'ALEJANDRO', 'CARLOS',
  'ADRIANA',   'STHEPANYA',
  'LUIS',      'THOMAS',
  'ANDRES',    'NATALIA'
]
*/
// Iteración => FILTRADO
const edades = [10, 40, 60, 78, 24, 56, 89];

const viejos = edades.filter(may => may > 40);
console.log("Las edades mas avanzadas en el sistema son: " + viejos);

// Iteración => REDUCCIÓN
let operation = [2, 4, 5, 6, 8, 12];
let redu = operation.reduce((itOne, itTwo) => itOne + itTwo,0);
console.log(redu);







