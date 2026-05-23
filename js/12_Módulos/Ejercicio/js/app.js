import { agregarMensaje } from "./ui.js";

import { enviarMensaje } from "./api.js";

import { generarRespuesta } from "./bot.js";

const chat = document.getElementById("chat");

const input = document.getElementById("input");

const btn = document.getElementById("btn");

async function manejarChat() {

  const mensaje = input.value.trim();

  if (!mensaje) return;

  // Mostrar usuario
  agregarMensaje(chat, mensaje, "user");

  input.value = "";

  // Mostrar pensando
  agregarMensaje(chat, "Pensando...", "bot");

  // Simular API
  const response = await enviarMensaje(mensaje);

  // Eliminar "Pensando..."
  chat.lastChild.remove();

  // Generar respuesta
  const respuesta =
    generarRespuesta(response.mensaje);

  // Mostrar respuesta
  agregarMensaje(chat, respuesta, "bot");
}

btn.addEventListener("click", manejarChat);

input.addEventListener("keydown", event => {

  if (event.key === "Enter") {
    manejarChat();
  }

});