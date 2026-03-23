/*
Cuando una función alcanza una sentencia return, la función deja de ejecutarse.
El valor tras la palabra clave return se envía de vuelta al llamante.
El código escrito después de una instrucción return NO se ejecutará.
*/

function multipl(a, b){
    return a * b;

    return "Done"; // no se ejecuta
}

let result = multipl(4, 9); 


// Si una función no devuelve un valor, el valor de retorno quedará indefinido.
function multiply(a, b) {
  let x = a * b;
}

let cv = multiply(4, 3);

// Puedes usar return para detener una función antes de tiempo, según una condición.

function checkAge(age) {
  if (age < 18) {
    return "Too young";
  }
  return "Access granted";
}

// Los valores de función devueltos se usan a menudo para actualizar contenido HTML.
function toCelsius(farenheit) {
  return (5 / 9) * (farenheit - 32);
}

document.getElementById("demo").innerHTML = toCelsius(77);



