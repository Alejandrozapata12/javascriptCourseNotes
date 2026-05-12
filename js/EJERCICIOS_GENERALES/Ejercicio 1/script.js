const demo = document.getElementById("demo");
const btn = document.getElementById("evento");

btn.addEventListener("click", () => {
    // 1. Obtener y validar producto
    const producto = prompt("Ingresa el producto por favor:", "Arepas")?.trim();
    
    if (!producto) {
        demo.textContent = "⚠️ Por favor ingresa un nombre de producto válido.";
        return;
    }

    // 2. Obtener y validar precio
    const precioInput = prompt("Ingresa por favor el precio del producto:");
    
    if (precioInput === null || precioInput.trim() === "") {
        demo.textContent = "⚠️ El precio es obligatorio.";
        return;
    }

    const precio = Number(precioInput);
    
    if (isNaN(precio) || precio <= 0) {
        demo.textContent = "⚠️ Ingresa un precio numérico mayor a cero.";
        return;
    }

    // 3. Mostrar resultado de forma segura
    demo.innerHTML = `
        El producto seleccionado es: 
        <span class="product">${producto}</span> y el precio es: 
        <span class="precio">$${precio.toFixed(0)}.</span>
    `;
});