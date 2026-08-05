// ================= 1. Claridad  =================
/*
¿Qué es el evento submit?

Es el evento que se dispara cuando un formulario va a enviarse.

Por ejemplo:

<form id="login">

    <input type="email">

    <input type="password">

    <button>Entrar</button>

</form>

¿Cómo escucha JavaScript ese momento?
*/

const form = document.querySelector("#login");

form.addEventListener("submit", (event) => {

    console.log("Formulario enviado");

});

/*
Cada vez que el formulario vaya a enviarse.
Se ejecuta.
*/

// ================= 2. Entendimiento  =================
/*
¿Qué hace el navegador por defecto?
Supongamos.


¿Por qué en aplicaciones modernas no queremos eso?

Porque hoy usamos:

AJAX
Fetch API
Axios
APIs REST

Queremos enviar datos sin recargar la página.

Para eso existe:

event.preventDefault();
*/

const form=document.querySelector("#registro");

const resultado=document.querySelector("#resultado");

form.addEventListener("submit",(event)=>{

event.preventDefault();

const nombre=form.elements.nombre.value;

const email=form.elements.email.value;

resultado.textContent=

`Nombre: ${nombre} | Correo: ${email}`;

console.log("Formulario enviado.");

});



















































