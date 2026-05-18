import { loadView } from "./router.js";
import { loadChart } from "./chart.js";

import "./logout.js";
import "./theme.js";

window.addEventListener("DOMContentLoaded", () => {

    /* DEFAULT VIEW */

    loadView("dashboard");

    loadChart();

    /* DASHBOARD */

    document
        .getElementById("dashboardLink")

        .addEventListener("click", (e) => {

            e.preventDefault();

            loadView("dashboard");

            loadChart();

        });

    /* REPORTS */

    document
        .getElementById("reportsLink")

        .addEventListener("click", (e) => {

            e.preventDefault();

            loadView("reports");

        });

    /* SETTINGS */

    document
        .getElementById("settingsLink")

        .addEventListener("click", (e) => {

            e.preventDefault();

            loadView("settings");

        });

});