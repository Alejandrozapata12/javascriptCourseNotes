// Iterables

// Un iterable es un objeto que se puede recorrer utilizando un bucle for...of o cualquier otra construcción que requiera iteración. Los iterables son una parte fundamental de JavaScript y permiten trabajar con colecciones de datos de manera eficiente.

// Los objetos iterables son una generalización de arrays. Es un concepto que permite que cualquier objeto pueda ser utilizado en un bucle for..of.


// Ejemplo de un iterable personalizado:

const miIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (const valor of miIterable) {
  console.log(valor); // Imprime 1, luego 2, luego 3
}

// En este ejemplo, hemos creado un objeto llamado miIterable que implementa el método [Symbol.iterator]. Este método es un generador que utiliza la palabra clave yield para producir una secuencia de valores (1, 2 y 3). Al usar un bucle for...of para iterar sobre miIterable, obtenemos cada uno de los valores generados por el iterador.

// Además de los objetos personalizados, muchos objetos integrados en JavaScript son iterables, como los arrays, las cadenas de texto, los mapas y los conjuntos. Esto significa que puedes usar un bucle for...of para recorrer estos tipos de datos sin necesidad de implementar tu propio iterador.


// Ejemplo con un array:

const miArray = [10, 20, 30];

for (const numero of miArray) {
  console.log(numero); // Imprime 10, luego 20, luego 30
}
// En este caso, el array miArray es un iterable, por lo que podemos usar un bucle for...of para recorrer sus elementos de manera sencilla.

// En resumen, los iterables son objetos que pueden ser recorridos utilizando un bucle for...of u otras construcciones de iteración. Permiten trabajar con colecciones de datos de manera eficiente y son una parte fundamental de JavaScript. Puedes crear tus propios iterables personalizados o utilizar los iterables integrados como arrays y cadenas de texto para facilitar la manipulación de datos en tus programas.

// ================ EJEMPLO REAL ================

// Supongamos que queremos crear un iterable que genere una secuencia de números del 1 al 5:
const numeros = {
  *[Symbol.iterator]() {
    for (let i = 1; i <= 5; i++) {
      yield i;
    }
  }
};

for (const numero of numeros) {
  console.log(numero); // Imprime 1, luego 2, luego 3, luego 4, luego 5
}

// En este ejemplo, el objeto numeros es un iterable que genera una secuencia de números del 1 al 5. Al usar un bucle for...of para iterar sobre numeros, obtenemos cada uno de los valores generados por el iterador, lo que nos permite trabajar con la secuencia de números de manera eficiente.


























