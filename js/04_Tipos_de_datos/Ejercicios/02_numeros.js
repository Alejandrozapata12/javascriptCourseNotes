/*
Suma números del visitante
Crea un script que pida al visitante que ingrese dos números y muestre su suma.
*/
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let sum = num1 + num2;
alert("La suma de " + num1 + " y " + num2 + " es: " + sum);

// Otra forma de hacerlo es usando el operador unario + para convertir las entradas a números directamente:
let a = +prompt("¿El primer número?", "");
let b = +prompt("¿El segundo número?", "");
 
alert( a + b ); // El operador unario + convierte las cadenas ingresadas por el usuario en números antes de realizar la suma, lo que hace que el código sea más conciso.
