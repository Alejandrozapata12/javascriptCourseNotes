/*
Parámetros predeterminados alternativos
A veces tiene sentido asignar valores predeterminados a los parámetros más tarde, después de la declaración de función.

Podemos verificar si un parámetro es pasado durante la ejecución de la función comparándolo con undefined:
 */

function showMessage(text){
    // .....

    if(text === undefined){
        text = "Mensaje Vacio";
    }

    alert(text);
}

showMessage(); // Mensaje vacio

// Para este caso arroja Mensaje vacio, debido a que el parametro de la función (text) esta vacio en el sentido de que al momneto de llamar la función no se le esta asignando un argumento, por ende si no aplicamos por ejemplo esta condicional entonces el showMessage() imprime undefined, sin embargo, en esta ocación se controla pasando un mensaje en caso de que este vacio. 

// Tambien se puede usar el operador coaleciente ?? para tratar esto, asi: 

function showCount(count) {
  // si count es undefined o null, muestra "desconocido"
  alert(count ?? "desconocido");
}

showCount(0); // 0
showCount(null); // desconocido
showCount(); // desconocido