/*
La afirmación "salta" de los bucles y interruptores.break
La instrucción termina la ejecución de un loop o una instrucción switch.break
Cuando se encuentra en un bucle, el bucle termina inmediatamente. break
El control del programa se transfiere a las sentencias que siguen al bucle.
No se ejecutan más iteraciones de bucle.
*/

for(let i = 0; i < 10; i++){
    if(i === 3){
        break;
    }
    text += "El número es:"  + i + "<br>";
}



