/*
Number.EPSILON
Number.MAX_VALUE
Number.MIN_VALUE
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER
Number.POSITIVE_INFINITY
Number.NEGATIVE_INFINITY
Number.NaN

*/


/*
| Propiedad                     | Explicación                                                                 | Ejemplo de uso |
|--------------------------------|-----------------------------------------------------------------------------|---------------|
| Number.EPSILON                | Es la diferencia más pequeña entre 1 y el siguiente número representable en JavaScript. Se usa para comparar números decimales con precisión debido a errores de redondeo en punto flotante. | console.log(Number.EPSILON); // 2.220446049250313e-16 |

| Number.MAX_VALUE              | Es el número positivo más grande que JavaScript puede representar antes de convertirse en Infinity. | console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 |

| Number.MIN_VALUE              | Es el número positivo más pequeño mayor que 0 que JavaScript puede representar. | console.log(Number.MIN_VALUE); // 5e-324 |

| Number.MAX_SAFE_INTEGER       | Es el número entero más grande que JavaScript puede representar con precisión sin perder exactitud. | console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 |

| Number.MIN_SAFE_INTEGER       | Es el número entero más pequeño que JavaScript puede representar con precisión. | console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991 |

| Number.POSITIVE_INFINITY      | Representa el valor infinito positivo. Ocurre cuando un número excede el límite máximo. | console.log(1 / 0); // Infinity |

| Number.NEGATIVE_INFINITY      | Representa el valor infinito negativo. Ocurre cuando un número negativo excede el límite mínimo. | console.log(-1 / 0); // -Infinity |

| Number.NaN                    | Significa "Not a Number". Representa un valor que no es un número válido después de una operación matemática. | console.log(0 / 0); // NaN |

*/


console.log("EPSILON:", Number.EPSILON);
console.log("MAX_VALUE:", Number.MAX_VALUE);
console.log("MIN_VALUE:", Number.MIN_VALUE);
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("NaN:", Number.NaN);