/*
1. Claridad
¿Qué son los Keyboard Events?

Son eventos que el navegador dispara cuando el usuario interactúa con el teclado.

Cada vez que presionas una tecla sucede algo como esto:

Usuario

↓

Presiona una tecla

↓

JavaScript recibe un evento

Ese evento contiene mucha información:

¿Qué tecla fue?
¿Qué código físico tiene?
¿Se estaba presionando Ctrl?
¿Shift?
¿Alt?
¿La tecla sigue presionada?

Todo eso viene dentro de un objeto llamado KeyboardEvent.

Los dos eventos principales
Evento	¿Cuándo ocurre?
keydown	Cuando la tecla se presiona
keyup	Cuando la tecla se libera

Antes existia keypress, sin embargo, ya esta obsoleto. 


Ahora todo se hace con keydown(presiona) - keyup(libera)


Flujo completo 

Supongamos que se presiona la tecla A
Internamente ocurre: 

Presionar A

↓

keydown

↓

(se mantiene presionada)

↓

keyup
*/

/*
2. Entendimiento
key

Esta es la propiedad que más usarás.
*/

document.addEventListener("keydown", (event) => {

    console.log(event.key);

});

/*
¿Qué representa event.key?

Representa el carácter o la tecla que el usuario realmente produjo.

Ejemplo.

Teclado español.

Presiono Ñ
event.key

vale

"ñ"

Otro ejemplo.

Shift + A

Obtienes.

"A"

Porque ese fue el carácter producido.

repeat

Cuando mantienes una tecla presionada.

event.repeat

Devuelve.

true

Mientras se está repitiendo.

Ejemplo.

document.addEventListener("keydown",(event)=>{

    if(event.repeat){

        console.log("Manteniendo la tecla");

    }

});

Atajos de teclado

Aquí es donde realmente se usan.

CTRL + S
document.addEventListener("keydown",(event)=>{

    if(event.ctrlKey && event.key==="s"){

        event.preventDefault();

        console.log("Guardar");

    }

});
CTRL + Z
if(event.ctrlKey && event.key==="z"){
CTRL + C
if(event.ctrlKey && event.key==="c"){
CTRL + V
if(event.ctrlKey && event.key==="v"){
ESC
if(event.key==="Escape"){

Cerrar un modal.

ENTER
if(event.key==="Enter"){

Enviar formulario.

Flechas
ArrowUp

ArrowDown

ArrowLeft

ArrowRight

Muy usadas en juegos.

preventDefault()

El navegador tiene comportamientos por defecto.

Por ejemplo.

CTRL + S

Abre:

Guardar página

Pero queremos.

Guardar documento

Entonces.

event.preventDefault();
*/



/*
Los Keyboard Events son la base de los atajos de teclado y de muchas interacciones rápidas que los usuarios esperan en aplicaciones profesionales.

Piensa en este patrón:

Usuario presiona una tecla
        │
        ▼
     keydown
        │
        ▼
Leer event.key o event.code
        │
        ▼
Ejecutar la acción
        │
        ▼
      keyup

*/

const box = document.querySelector("#box");

let x = 100;
let y = 120;

document.addEventListener("keydown",(event)=>{

    switch(event.key){

        case "ArrowLeft":
            x-=10;
            break;

        case "ArrowRight":
            x+=10;
            break;

        case "ArrowUp":
            y-=10;
            break;

        case "ArrowDown":
            y+=10;
            break;

    }

    box.style.left=x+"px";
    box.style.top=y+"px";

});






