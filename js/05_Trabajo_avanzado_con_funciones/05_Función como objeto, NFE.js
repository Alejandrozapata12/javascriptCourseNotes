// Función como objeto, NFE


//  1. Las funciones son objetos "invocables"
function saludar() {
    console.log("Hola");
}
saludar(); // Hola

// Podemos agregar propiedades a la función como si fuera un objeto
saludar.mensaje = "¡Bienvenido!";
console.log(saludar.mensaje); // ¡Bienvenido!


// 2. Propiedades built-in: name y length
// JavaScript añade automáticamente dos propiedades muy útiles

// name: el nombre de la función
console.log(saludar.name); // saludar
// length: el número de parámetros que espera la función
function sumar(a, b) {
    return a + b;
}
console.log(sumar.length); // 2


// 3. Funciones anónimas y NFE (Named Function Expressions)
// Las funciones anónimas no tienen un nombre, pero podemos asignarlas a una variable
const despedir = function() {
    console.log("Adiós");
};
despedir(); // Adiós

// Las NFE son funciones anónimas que se nombran a sí mismas
const contar = function contarHasta(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
};































