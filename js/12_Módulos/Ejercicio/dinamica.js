const btn = document.getElementById("btn");

btn.addEventListener("click", async () => { 
    let p = document.createElement("p");
    p.textContent = "Cargando...";
    document.body.appendChild(p);


    const calculadora = await import("./calculadora.js");

    p.textContent = `El resultado de la suma es: ${calculadora.sumar(5, 3)}`;

    p.textContent += ` y el resultado de la resta es: ${calculadora.restar(5, 3)}`;
})

