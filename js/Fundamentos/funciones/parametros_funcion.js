// Los parametros permiten pasar valores a una función

// Ejemplo 

function data (nombre, apellido){ // Parametros
    return `Mi nombre es ${nombre} ${apellido}`;
}

let consola = data("Alejandro", "Zapata");
console.log(consola); // Alejandro Zapata

// Ejemplo - grados celcius.

function toCelcius(fahrenheit){
    return (5 / 9) * (fahrenheit - 32);
}
let convert = toCelcius(77);

/*
Los parámetros son los nombres que aparecen en la definición de la función.

Los argumentos son los valores reales que la función transmite y recibe él.

*/

