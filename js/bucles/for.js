for(expression1; expression2; expression3){
    // codigo a ejecutar, según las condiciones
}

/*
EXP1 se ejecuta una vez antes de la ejecución del bloque de código.

exp2 define la condición para ejecutar el bloque de código.

EXP3 se ejecuta cada vez que se ha ejecutado el bloque de código.
 */

// Ejemplo

for(let item = 0; item < 5; item++){
    text  += "El número es: " + item + "<br>";
}

/*
let item establece una variable antes de que comience el bucle (sea item = 0).

item < 5 define la condición para que el bucle funcione (item debe ser menor que 5).

item++ aumenta un valor (item++) cada vez que se ha ejecutado el bloque de código.
*/

// Ejemplo, recorriendo un Array

const cars = ["Audi", "Porche","Ferrari", "Lamborghini", "Chevrolet"];

let cuantos = cars.length;

let text = " ";
for(let item = 0; item < cuantos; item++){
   text += cars[item];
}







