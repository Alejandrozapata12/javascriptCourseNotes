// =================  1. Claridad =================
/*
¿Qué son focus y blur?

Son eventos que indican si un elemento tiene o pierde el foco.

Pero, ¿qué es el foco?

El foco es el elemento con el que el usuario está interactuando en ese momento.

Por ejemplo:

Nombre: [ Alejandro ]
          ↑
       Tiene el foco

Si ahora haces clic en otro campo:

Nombre: Alejandro

Correo: [ alejandro@email.com ]
           ↑
       Ahora este tiene el foco

El foco cambió de un elemento al otro.

¿Qué sucede internamente?

Cuando haces clic en un campo ocurre:

Usuario hace clic

↓

El input recibe el foco

↓

Se dispara el evento focus

Cuando sales del campo:

Usuario hace clic fuera

↓

El input pierde el foco

↓

Se dispara el evento blur
*/

// =================  2. Entendimiento =================

// ****************** focus evento  ******************
// Se ejecuta cuando un elemento recibe el foco. <input id="nombre">
const input = document.querySelector("#nombre");

input.addEventListener("focus", () => {

    console.log("El usuario comenzó a escribir");

});

// ****************** blur evento ******************
// Se ejecuta cuando el elemento pierde el foco.
const input = document.querySelector("#nombre");

input.addEventListener("blur", () => {
    console.log("El usuario ha salido")
});

/*
focus

↓

Entró al campo

----------------------

blur

↓

Salió del campo
*/

// ****************** Método focus() ******************
/*
No solo existe el evento.
También existe el método.
Esto mueve automáticamente el cursor.
Es como si el usuario hubiera hecho clic.
*/
input.focus();

// Ejemplo - Una vez carga la pagina se hace enfasis en el input

window.onload = () => {
    input.focus();
}

// ****************** Método blur() ******************
/*
También puedes quitar el foco.
El cursor desaparece.
*/
input.blur();

// Validación con blur  Este es uno de los usos más comunes.
input.addEventListener("blur", () => {

    if(input.value===""){

        alert("Debe escribir su nombre");

    }

});

/*
 Evento/Método	¿Qué hace?	¿Hace bubbling?
focus	Se dispara cuando un elemento recibe el foco	❌ No
blur	Se dispara cuando un elemento pierde el foco	❌ No
focusin	Igual que focus, pero sí se propaga	✅ Sí
focusout	Igual que blur, pero sí se propaga	✅ Sí
element.focus()	Da el foco mediante código	No aplica
element.blur()	Quita el foco mediante código	No aplica
 */







































