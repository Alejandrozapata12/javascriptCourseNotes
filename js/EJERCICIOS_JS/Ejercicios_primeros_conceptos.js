/*
Nivel 1 — Lógica básica (variables + condiciones)
1. Número positivo, negativo o cero

Pide un número al usuario y muestra:

"El número es positivo"

"El número es negativo"

"El número es cero"
*/

let item =Number(prompt("Ingresa un número:"));

if(item > 0 ){
  console.log("El número es positivo");
}else if(item < 0){
    console.log("El número es negativo");
}else{
    console.log("El número es cero");
}

/*
2. Número par o impar

Pide un número y muestra si es:

Par

Impar

Tip: usa el operador %.
*/

let num = Number(prompt("Ingresa un número para calcular: "));

if(num % 2 == 0){
    console.log("Es par");
}else{
    console.log("Es impar")
}


/*
3. Mayor de edad

Pide la edad de una persona.

Si tiene:

18 o más → "Eres mayor de edad"

Menor de 18 → "Eres menor de edad"
*/

let edad = Number(prompt("¿Cual es tu edad?"));

if (edad >= 18){
    console.log("Eres mayor de edad")
}else{
    console.log("Eres menor de edad")
}


/*

4. Comparar dos números

Pide dos números y muestra:

cuál es mayor

o si son iguales
*/

let num1 = Number(prompt("Ingresa el número 1:"));
let num2 = Number(prompt("Ingresa el número 2:"));

if(num1 > num2){
    console.log(`El número ${num1} es mayor que el número ${num2}`)
}else if(num1 == num2){
    console.log("Los números son iguales")
}

/*
5. Calculadora básica

Pide:

número1

número2

operación (+ - * /)
 */

let nu1 = Number(prompt("Ingresa el primer número:"));
let nu2 = Number(prompt("Ingresa el segundo número:"));
let operacion = prompt("Ingresa la operación (+, -, *, /)");

let resultado;

if (operacion === "+") {
    resultado = nu1 + nu2;
}
else if (operacion === "-") {
    resultado = nu1 - nu2;
}
else if (operacion === "*") {
    resultado = nu1 * nu2;
}
else if (operacion === "/") {
    resultado = nu1 / nu2;
}
else {
    console.log("Operación no válida");
}

console.log(`El resultado es: ${resultado}`);


