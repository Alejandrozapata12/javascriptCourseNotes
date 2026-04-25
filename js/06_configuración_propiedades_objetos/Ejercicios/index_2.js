function createCart() {
  let items = []; // 🔒 privado (closure)

  const cart = {};

  // 🔥 agregar producto (setter-like behavior)
  Object.defineProperty(cart, "addItem", {
    value: (name, price) => {
      if (!name || price <= 0) {
        throw new Error("Datos inválidos");
      }

      items.push({ name, price });
    }
  });

  // 🔥 getter → total dinámico
  Object.defineProperty(cart, "total", {
    get() {
      return items.reduce((sum, item) => sum + item.price, 0);
    }
  });

  
  // 🔥 getter → cantidad
  Object.defineProperty(cart, "count", {
    get() {
      return items.length;
    }
  });

  // 🔒 ocultar items reales
  Object.defineProperty(cart, "items", {
    get() {
      return items.map(item => ({ ...item }));// copia segura
    },
    enumerable: false
  });

  // 🔒 evitar modificación directa del total
  Object.defineProperty(cart, "total", {
    writable: false
  });

  return cart;
}


// ================== UI ==================
const cart = createCart();

const btn = document.getElementById("add");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  try {
    const name = document.getElementById("name").value;
    const price = Number(document.getElementById("price").value);

    cart.addItem(name, price);

    output.textContent = `
Productos: ${cart.count}
Total: $${cart.total}

Detalle:
${JSON.stringify(cart.items, null, 2)}
    `;
  } catch (e) {
    output.textContent = "Error: " + e.message;
  }
});