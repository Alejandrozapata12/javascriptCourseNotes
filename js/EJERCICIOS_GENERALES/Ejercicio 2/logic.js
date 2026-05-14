'use strict';

const email = document.getElementById("email_inp");
const pass = document.getElementById("pass_inp");
const btn = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

function validarDatos() {

    let correo = email.value.trim();
    let password = pass.value.trim();

    mensaje.textContent = "";
    mensaje.style.color = "red";

    // Campos vacíos
    if (!correo || !password) {

        mensaje.textContent = "Todos los campos son obligatorios.";

        email.value = "";
        pass.value = "";

        email.focus();

        return;
    }

    // Correo inválido
    if (!correo.includes("@")) {

        mensaje.textContent = "Correo inválido.";

        email.value = "";
        pass.value = "";

        email.focus();

        return;
    }

    // Credenciales correctas
    if (correo === "alejo@correo.com" && password === "12345") {

        mensaje.textContent = "Ingreso exitoso, espere mientras es redirigido...";
        mensaje.style.color = "green";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 2000);

    } else {

        mensaje.textContent = "Correo o contraseña incorrectos.";

        email.value = "";
        pass.value = "";

        email.focus();
    }
}

document.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        validarDatos();
    }
});

btn.addEventListener("click", validarDatos);