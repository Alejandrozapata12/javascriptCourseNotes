export function agregarMensaje(chat, texto, tipo) {

  const div = document.createElement("div");

  div.classList.add("message");
  div.classList.add(tipo);

  div.textContent = texto;

  chat.appendChild(div);

  chat.scrollTop = chat.scrollHeight;
}