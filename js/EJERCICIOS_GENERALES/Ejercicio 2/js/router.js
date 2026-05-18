import { dashboardView } from "./views/dashboard.js";
import { reportsView } from "./views/reports.js";
import { settingsView } from "./views/settings.js";

const app = document.getElementById("app");

export function loadView(view){

    switch(view){

        case "dashboard":

            app.innerHTML = dashboardView();

        break;

        case "reports":

            app.innerHTML = reportsView();

        break;

        case "settings":

            app.innerHTML = settingsView();

        break;

        default:

            app.innerHTML = dashboardView();

    }

}