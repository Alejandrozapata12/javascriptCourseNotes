import { esperar } from "./utils.js";

export async function enviarMensaje(mensaje) {

  // Simular latencia servidor
  await esperar(1500);

  return {
    ok: true,
    mensaje
  };

}