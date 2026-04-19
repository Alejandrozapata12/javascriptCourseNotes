// Recursión y pila

// recursividad => Una función que se llama a sí misma. 

// Dos formas de pensar
/*
Para comenzar con algo simple, escribamos una función pow(x, n) que eleve x a una potencia natural den. En otras palabras, multiplica x por sí mismo n veces.
*/

//Hay dos formas de implementarlo.

// Pensamiento iterativo: el bucle for:
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  };

  return result;
}

console.log(pow(2, 3)); // 8

// Pensamiento recursivo
function pow2(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow2(x, n - 1);
  }
}

console.log(pow2(2, 3)); // 8


// Ejemplo

function countDown(l) {
  if (l === 0) return;

  console.log(l);

  countDown(l - 1);
}

countDown(5); // 5, 4, 3, 2, 1

/*
countDown(5) llama a countDown(4)
luego countDown(3)
luego countDown(2)...
👉 hasta llegar al caso base (0)
*/


// EJEMPLO REAL 2 — Estructuras tipo árbol (MUY IMPORTANTE)

// Objeto 
const company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 2000 }
  ],
  dev: {
    backend: [
      { name: "Mike", salary: 3000 }
    ],
    frontend: [
      { name: "Sara", salary: 2500 }
    ]
  }
};


// Problema => sumar los salarios
function sum(deparment) {
  if (Array.isArray(deparment)) {
    return deparment.reduce((sum, item) => sum + item.salary, 0);
  } else {
    let sum = 0;

    for (let unpt of Object.values(deparment)) {
      sum += sum(unpt);
    }
    return sum;
  }
}


// EJEMPLO 3 => 

// Problema 
const data = [1, [2, 3], [4, [5, 6]], 7];

// Y quieres esto:
[1, 2, 3, 4, 5, 6, 7]


// Solución

function solution(arr) {
  let result = []; // se crea un array vacio

  for (let item of arr) { // Se recorre el array
    if (Array.isArray(item)) { // Si el elemento es otro array
      result = result.concat(solution(item)); // entra la recursión

    } else {
      result.push(item); // Si no es un array, lo agrega normal
    }
  };
  return result;
}












