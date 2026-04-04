/*
Transforma border-left-width en borderLeftWidth
Escribe la función camelize(str) que convierta palabras separadas por guión como “mi-cadena-corta” en palabras con mayúscula “miCadenaCorta”.

Esto sería: remover todos los guiones y que cada palabra después de un guión comience con mayúscula.

Ejemplos:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.D. Pista: usa split para dividir el string en un array, transfórmalo y vuelve a unirlo (join).

*/


function camelize(str){
  return str
    .split('-') // divide 'my-long-word' en array ['my', 'long', 'word']
    .map(
      // convierte a mayúscula la primera letra de cada palabra excepto la primera
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // une ['my', 'Long', 'Word'] en 'myLongWord'
}

// Pruebas
console.log(camelize("background-color") == 'backgroundColor'); // true
console.log(camelize("list-style-image") == 'listStyleImage');  // true
console.log(camelize("-webkit-transition") == 'WebkitTransition'); // true


// Ahora un ejemplo como si fuera react, para mostrar como se puede usar esta función en un contexto real

// Supongamos que tenemos un objeto con estilos CSS en formato kebab-case
const styles = {
  'background-color': 'red',
  'font-size': '16px',
  'border-left-width': '2px'
};

// Queremos convertir las claves a camelCase para usarlas en un componente de React
const camelCaseStyles = {}; 
for (let key in styles) {
  camelCaseStyles[camelize(key)] = styles[key];
}

console.log(camelCaseStyles);
// Output: { backgroundColor: 'red', fontSize: '16px', borderLeftWidth: '2px' }
