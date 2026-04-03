// Úsase para especificar muchos bloques de código alternativos a ejecutar

/*
Así es como funciona:

La expresión del interruptor se evalúa una vez.
El valor de la expresión se compara con los valores de cada caso.
Si hay una coincidencia, se ejecuta el bloque de código asociado.
Si no hay coincidencia, no se ejecuta código.
*/

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

let day; 
let date = new Date().getDay();
let text;

switch(date){
    case 0: 
    day = "Sunday";
    break;

    case 1: 
    day = "Monday";
    break;

    case 2: 
    day = "Tuesday";
    break;

    case 3: 
    day = "Wednesday";
    break;

    case 4: 
    day = "Thursday";
    break; 

    case 5: 
    day = "Friday";
    break;

    case 6: 
    day = "Saturday";
    break; 

    default: 
    text = "Looking forward to the weekend";
}

