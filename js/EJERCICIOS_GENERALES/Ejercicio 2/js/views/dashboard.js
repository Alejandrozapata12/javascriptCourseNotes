export function dashboardView(){

    return `

        <section class="content">

            <div class="title-section">

                <h1>Performance Overview</h1>

                <p>
                    General analysis of sales and marketing performance
                </p>

            </div>

            <div class="cards">

                <div class="card">
                    <span>TOTAL REVENUE</span>
                    <h2>$124,500</h2>
                </div>

                <div class="card">
                    <span>CONVERSION RATE</span>
                    <h2>4.8%</h2>
                </div>

                <div class="card">
                    <span>RETURN ON INVESTMENT</span>
                    <h2>285%</h2>
                </div>

            </div>

            <div class="chart-card">

                <canvas id="revenueChart"></canvas>

            </div>

        </section>

    `;

}