// chart.js
let revenueChart; // ← agregar esto arriba

export function loadChart(){
    const canvas = document.getElementById("revenueChart");
    
    if(!canvas) {
        console.warn("⚠️ Canvas #revenueChart no encontrado");
        return;
    }

    if(canvas.offsetWidth === 0 || canvas.offsetHeight === 0) {
        canvas.style.height = "300px";
        canvas.style.width = "100%";
    }

    if(revenueChart) revenueChart.destroy();

    revenueChart = new Chart(canvas, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr"],
            datasets: [{
                label: "Revenue",
                data: [],
                borderColor: "#2563eb",
                backgroundColor: "rgba(37,99,235,.1)",
                tension: .4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: true }
            }
        }
    });
}