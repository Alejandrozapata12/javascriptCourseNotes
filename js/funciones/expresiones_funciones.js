// Una expresión de función es una función almacenada en una variable.

const sumar = function(a, b){
    return a + b;
}

let resultado = sumar(4, 5);

// funciones almacenadas en variables

function run(item){
    return item();
}

const sayHello = function(){
    return "Hello";
}

let resu = run(sayHello);


