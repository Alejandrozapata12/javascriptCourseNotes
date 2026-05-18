const toggle = document.getElementById("themeToggle");
const icon   = toggle.querySelector("i");

// Restaurar preferencia guardada
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    icon.className = "fa-solid fa-sun";
}

toggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    // Cambiar ícono
    icon.className = isDark
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon";

    // Guardar preferencia
    localStorage.setItem("theme", isDark ? "dark" : "light");
});