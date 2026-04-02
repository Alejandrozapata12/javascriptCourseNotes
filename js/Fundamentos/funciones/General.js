// Declaración de una función
function showMessage(){
    alert("Hola a todos!!"); // codigo a ejecutar
}

// Llamada de la función
showMessage();


// Variables locales -> Una variable declarada dentro de una función solo es visible dentro de esa función.

// Ejemplo: 
function myAlert(){
    let message = "Hola, ¡soy javascript!"; // Declaración de la variable local a la función, la cual solo puede ser accedida dentro de la misma función

    alert(message); // console de esa variable la cual funciona. 
}

myAlert(); // Llamada de la función. 

alert(message); // Aqui arroja error porque se esta llamando a la variable que esta dentro de la función, fuera de ella. 

// Ya es diferente si creo una variable fuera de la función y luego la llamo dentro de la función creada, ejemplo: 

let userName = "Alejo";

function saludar(){
    let mensaje = 'Hola, ' + userName;
    alert(mensaje);
}

saludar(); // Hola Alejo