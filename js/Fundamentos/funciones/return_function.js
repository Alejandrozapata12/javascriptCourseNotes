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


/*
Una función puede devolver un valor al código de llamada como resultado.
La directiva return puede estar en cualquier lugar de la función. Cuando la ejecución lo alcanza, la función se detiene y el valor se devuelve al código de llamada (asignado al result anterior).
*/

function checkAge(age){
  if(age >= 18){
    return true
  }else{
    return confirm("¿Tienes permiso de tus padres?");
  }
}

let age = prompt("¿Cual es tu edad?",18); // Pregunta mas parametros de relleno


if(checkAge(age)){
   alert("Acceso otorgado")
}else{
  alert("Acceso denegado")
}

