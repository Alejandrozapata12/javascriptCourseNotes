/*
Hacer mayúscula el primer carácter

Escribe una función ucFirst(str) que devuelva el string str con el primer carácter en mayúscula, por ejemplo:
*/

function ucFirst(str) {
  if (!str) return str; // Si la cadena está vacía, devuelve la cadena vacía
  return str[0].toUpperCase() + str.slice(1);
}


/*
Buscar spam
Escribe una función checkSpam(str) que devuelva true si str contiene ‘viagra’ o ‘XXX’, de lo contrario false.

La función debe ser insensible a mayúsculas y minúsculas:

checkSpam('compra ViAgRA ahora') == true
checkSpam('xxxxx gratis') == true
checkSpam("coneja inocente") == false
*/

function checkSpam(str) {
  let lowerStr = str.toLowerCase(); // Convertir la cadena a minúsculas para hacer la búsqueda insensible a mayúsculas
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}


/*
Truncar el texto
Crea una función truncate(str, maxlength) que verifique la longitud de str y, si excede maxlength – reemplaza el final de str con el carácter de puntos suspensivos "…", para hacer su longitud igual a maxlength.

El resultado de la función debe ser la cadena truncada (si es necesario).

Por ejemplo:

truncate("Lo que me gustaría contar sobre este tema es:", 20) = "Lo que me gustaría c…"

truncate("Hola a todos!", 20) = "Hola a todos!"
*/

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…'; // Truncar la cadena y agregar el carácter de puntos suspensivos
  }
  return str; // Si la cadena no excede maxlength, devolverla sin cambios
}

/*
Extraer el dinero

Tenemos un costo en forma de “$120”. Es decir: el signo de dólar va primero y luego el número.

Crea una función extractCurrencyValue(str) que extraiga el valor numérico de dicho string y lo devuelva.

Por ejemplo:

alert( extractCurrencyValue('$120') === 120 ); // true
*/

function extractCurrencyValue(str) {
  return parseFloat(str.slice(1)); // Eliminar el signo de dólar y convertir el resto a un número 
}
console.log(extractCurrencyValue('$120') === 120); // true 


