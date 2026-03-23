/*
1. Recorrido básico
Dado:
const numeros = [10, 20, 30, 40, 50];
👉 Muestra cada número en consola usando:
for
forEach
*/

const par = document.getElementById("demo");

const numeros = [10, 20, 30, 40, 50];

let contenido = " ";

numeros.forEach((numero) => {
    contenido += numero + "<br>";
});

par.innerHTML = contenido;


/*
2. Suma total
👉 Calcula la suma de todos los elementos del array.
Resultado esperado:
150
*/
let suma = numeros.reduce((a, b) => a + b, 0);
console.log(suma) // 150


/*
3. Máximo y mínimo
👉 Encuentra:
El número mayor
El número menor
*/



