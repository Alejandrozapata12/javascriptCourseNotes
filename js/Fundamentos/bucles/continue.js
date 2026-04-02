/*
La instrucción salta la iteración actual en un bucle.continue
El código restante en la iteración se omite y el procesamiento pasa a la siguiente iteración.

*/

for (let i = 1; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}


