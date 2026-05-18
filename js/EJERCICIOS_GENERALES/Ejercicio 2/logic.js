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

        Swal.fire({
            title: 'Sign In Error',
            text: 'All fields are required.',
            icon: 'error',
            confirmButtonText: 'Try Again',
            confirmButtonColor: '#3085d6'
        });

        email.value = "";
        pass.value = "";

        email.focus();

        return;
    }

    // Correo inválido
    if (!correo.includes("@")) {

        Swal.fire({
            title: 'Invalid Email',
            text: 'Please enter a valid email address.',
            icon: 'warning',
            confirmButtonText: 'Try Again'
        });

        email.value = "";
        pass.value = "";

        email.focus();

        return;
    }

    // Credenciales correctas
    if (correo === "alejo@correo.com" && password === "12345") {

        Swal.fire({
            title: 'Welcome!',
            text: 'Login successful. Redirecting...',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
        });

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 2000);

    } else {

        Swal.fire({
            title: 'Access Denied',
            text: 'Incorrect email or password.',
            icon: 'error',
            confirmButtonText: 'Try Again'
        });

        email.value = "";
        pass.value = "";

        email.focus();
    }
}

document.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && (e.target === email || e.target === pass)) {
        validarDatos();
    }
});

btn.addEventListener("click", validarDatos);


/* ===================== Modals ===================== */
const openForgotPass = document.getElementById("openForgot");
const openSignUp = document.getElementById("up");
const modalForgot = document.getElementById("forgotModal");
const modalSignUp = document.getElementById("signupModal");
const closeForgot = document.getElementById("closeForgot");
const closeSignUp = document.getElementById("closeSignUp");

// OPEN
openSignUp.onclick = () => {
   modalSignUp.style.display = "flex";
}

openForgotPass.onclick = () => {
    modalForgot.style.display = "flex";
}

// CLOSE
closeForgot.onclick = () => {
    modalForgot.style.display = "none";
}

closeSignUp.onclick = () => {
    modalSignUp.style.display = "none";
}

// Outside
window.onclick = (e) =>  {
  if(e.target === modalForgot ) {
    modalForgot.style.display = "none";
  }
  if(e.target === modalSignUp){
    modalSignUp.style.display = "none";
  }
}

