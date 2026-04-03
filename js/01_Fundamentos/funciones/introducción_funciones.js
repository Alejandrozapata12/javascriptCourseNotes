// SIntaxis

/*
function name(par1, par2, ...){
   // Codigo a ejecutar
}
*/


// Creación y llamada de una función

function welcome(){ // Creación de la función
    return "Hello World"; // Retorno de la función
}

let mensaje = welcome(); // Llamada de la función

// La función puede usarse muchas veces

function suma (a ,b){
    return a + b;
}

let suma_1 = suma(4, 5); // llamada 1
let suma_2 = suma(9, 8);  // llamada 2


// Variables locales -- solo pueden ser accedidas dentro de la function

function data(){
    let nombre = "Alejandro Zapata";
}

let message = data();








