export function generarRespuesta(mensaje) {

  mensaje = mensaje.toLowerCase();

  if (mensaje.includes("hola")) {
    return "Hola 👋";
  }

  if (mensaje.includes("javascript")) {
    return "JavaScript es muy poderoso 🚀";
  }

  if (mensaje.includes("alejo")) {
    return "Hola Alejo, ¿listo para seguir desarrollandome?";
  }

  if (mensaje.includes("modulos")) {
    return "Los módulos organizan aplicaciones grandes.";
  }

  return "No entiendo eso todavía 😅";
}