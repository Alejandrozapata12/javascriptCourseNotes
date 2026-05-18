const logOut        = document.getElementById("logOut");
const logoutAlert   = document.getElementById("logoutAlert");
const cancelLogout  = document.getElementById("cancelLogout");
const confirmLogout = document.getElementById("confirmLogout");

/* OPEN */
logOut.addEventListener("click", (e) => {
    e.preventDefault();
    logoutAlert.classList.add("active");
});

/* CLOSE */
cancelLogout.addEventListener("click", () => {
    logoutAlert.classList.remove("active");
});

/* REDIRECT */
confirmLogout.addEventListener("click", () => {
    window.location.href = "index.html";
});

/* CLICK OUTSIDE */
logoutAlert.addEventListener("click", (e) => {
    if (e.target === logoutAlert) {
        logoutAlert.classList.remove("active");
    }
});