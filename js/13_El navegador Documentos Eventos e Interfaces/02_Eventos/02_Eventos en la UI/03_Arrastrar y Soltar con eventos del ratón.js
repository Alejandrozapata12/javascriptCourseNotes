/*
1. Claridad
¿Qué es Drag & Drop?

Drag & Drop significa:

Arrastrar un elemento desde un lugar y soltarlo en otro.

Por ejemplo.

┌────────────┐

📄 Documento

└────────────┘

Lo tomas con el mouse.

↓

Lo arrastras.

↓

Lo sueltas.

┌────────────┐

📄 Documento

└────────────┘

Eso es Drag & Drop.

¿Qué eventos necesitamos?

Solo tres.

mousedown

↓

mousemove

↓

mouseup

Nada más.


Usuario presiona

↓

mousedown

--------------------

Usuario mueve

↓

mousemove

--------------------

Usuario suelta

↓

mouseup
*/

const widget = document.querySelector("#widget");

widget.addEventListener("mousedown", iniciarDrag);

function iniciarDrag(event){

    // Distancia entre el cursor y la esquina del widget
    const shiftX =
        event.clientX -
        widget.getBoundingClientRect().left;

    const shiftY =
        event.clientY -
        widget.getBoundingClientRect().top;

    widget.style.cursor = "grabbing";

    function mover(event){

        widget.style.left =
            event.clientX - shiftX + "px";

        widget.style.top =
            event.clientY - shiftY + "px";

    }

    document.addEventListener("mousemove", mover);

    document.addEventListener("mouseup", detenerDrag);

    function detenerDrag(){

        document.removeEventListener(
            "mousemove",
            mover
        );

        document.removeEventListener(
            "mouseup",
            detenerDrag
        );

        widget.style.cursor = "grab";

    }

}

widget.ondragstart = () => false;