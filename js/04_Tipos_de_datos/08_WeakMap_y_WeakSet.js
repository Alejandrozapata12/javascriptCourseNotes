// WeakMap y WeakSet
// WeakMap y WeakSet son estructuras de datos similares a Map y Set, pero con una característica importante: las claves en un WeakMap y los valores en un WeakSet son "débiles". Esto significa que si no hay otras referencias a esos objetos, pueden ser recolectados por el recolector de basura de JavaScript.

// WeakMap
// Un WeakMap es una colección de pares clave-valor donde las claves son objetos y los valores pueden ser de cualquier tipo. Las claves en un WeakMap son "débiles", lo que significa que si no hay otras referencias a un objeto clave, ese objeto puede ser recolectado por el recolector de basura.

const weakMap = new WeakMap();
let objKey = { name: "Objeto clave" };
weakMap.set(objKey, "Valor asociado");
console.log(weakMap.get(objKey)); // "Valor asociado"

// Si eliminamos la referencia al objeto clave, el recolector de basura puede eliminarlo del WeakMap
objKey = null; // El objeto clave ya no tiene referencias
// En algún momento después de esto, el recolector de basura puede eliminar la entrada del WeakMap


// WeakSet
// Un WeakSet es una colección de objetos donde los valores son "débiles". Esto significa que si no hay otras referencias a un objeto en un WeakSet, ese objeto puede ser recolectado por el recolector de basura.  
const weakSet = new WeakSet();
let objValue = { name: "Objeto valor" };
weakSet.add(objValue);
console.log(weakSet.has(objValue)); // true


// Si eliminamos la referencia al objeto valor, el recolector de basura puede eliminarlo del WeakSet
objValue = null; // El objeto valor ya no tiene referencias
// En algún momento después de esto, el recolector de basura puede eliminar la entrada del WeakSet
