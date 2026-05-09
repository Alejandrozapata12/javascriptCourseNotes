// Microtask Queue en JavaScript
/*
Imagina que JavaScript tiene dos listas de espera para tareas
📋 COLA PRINCIPAL (Código síncrono)
   ↓ Se ejecuta primero, línea por línea

📋 MICROTASK QUEUE (Promesas, then/catch/finally)
   ↓ Se ejecuta DESPUÉS, cuando la principal está vacía

   La microtask queue es una cola interna (también llamada PromiseJobs) donde JavaScript guarda los manejadores de promesas (.then, .catch, .finally) para ejecutarlos después de que termine todo el código síncrono actual.

   🔄 ¿Cómo funciona? (Paso a paso)

   console.log("1️⃣ Inicio");

Promise.resolve()
  .then(() => console.log("2️⃣ Microtask"));

console.log("3️⃣ Fin");

🔍 Ejecución real:
1️⃣ Inicio
3️⃣ Fin
2️⃣ Microtask  ← ¡Se ejecuta al final!

📝 Proceso interno:
✅ console.log("1️⃣ Inicio") → Se ejecuta inmediatamente
⏳ Promise.resolve().then(...) → El .then() se guarda en la microtask queue (no se ejecuta aún)
✅ console.log("3️⃣ Fin") → Se ejecuta inmediatamente
🎯 El motor verifica: "¿Hay código síncrono pendiente?" → No
🚀 Revisa la microtask queue y ejecuta: console.log("2️⃣ Microtask")

🧠 Reglas clave de la Microtask Queue
Regla
Explicación
📦 FIFO
First In, First Out: la primera microtarea en entrar, es la primera en salir
⏸️ Espera activa
Solo se ejecutan cuando no hay nada más en el call stack
🔁 Encadenamiento
Si un .then() genera otra promesa, su manejador también va a la cola
🎯 Prioridad alta
Las microtareas tienen prioridad sobre otras tareas asíncronas (como setTimeout)


⚡ Comparación: Microtasks vs Macrotasks
console.log("🔹 Script start");

setTimeout(() => {
  console.log("⏰ setTimeout (macrotask)");
}, 0);

Promise.resolve()
  .then(() => console.log("✨ Promise (microtask)"));

console.log("🔹 Script end");

🔹 Script start
🔹 Script end
✨ Promise (microtask)    ← Primero: microtasks
⏰ setTimeout (macrotask) ← Después: macrotasks
*/

// Ejemplo practico con encadenamiento

console.log("A");

Promise.resolve()
.then(() => {
  console.log("B");
  return Promise.resolve();
})
.then(() =>{
  console.log("C");
})

console.log("D"); 

// Flujo de ejecución: 
/*
A        ← Código síncrono
D        ← Código síncrono
B        ← Primer .then() de la microtask queue
C        ← Segundo .then() (se agregó después de que B se ejecutó)

Cada .then() se agrega a la cola después de que el anterior termina, por eso se ejecutan en orden.
*/





