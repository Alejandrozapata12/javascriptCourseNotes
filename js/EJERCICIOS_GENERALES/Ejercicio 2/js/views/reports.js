export function reportsView() {

    return `

        <section class="content">

            <div class="title-section">
                <h1>Reports</h1>
                <p>Detailed breakdown of sales, traffic and performance metrics.</p>
            </div>

            <!-- KPI CARDS -->
            <div class="cards">

                <div class="card">
                    <span>TOTAL ORDERS</span>
                    <h2>0</h2>
                    <small class="green">0</small>
                </div>

                <div class="card">
                    <span>AVG ORDER VALUE</span>
                    <h2>0</h2>
                    <small class="red">0</small>
                </div>

                <div class="card">
                    <span>REFUND RATE</span>
                    <h2>0</h2>
                    <small class="green">0</small>
                </div>

            </div>

            <!-- TABLE -->
            <div class="table-card">

                <div class="table-header">
                    <h3>Monthly Summary</h3>
                    <button>Export CSV</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Month</th>
                            <th>Revenue</th>
                            <th>Orders</th>
                            <th>Refunds</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>January</td>
                            <td>$12,000</td>
                            <td>870</td>
                            <td>14</td>
                            <td><span class="green">● On track</span></td>
                        </tr>
                        <tr>
                            <td>February</td>
                            <td>$19,000</td>
                            <td>1,140</td>
                            <td>9</td>
                            <td><span class="green">● On track</span></td>
                        </tr>
                        <tr>
                            <td>March</td>
                            <td>$15,000</td>
                            <td>920</td>
                            <td>21</td>
                            <td><span class="red">● Below target</span></td>
                        </tr>
                        <tr>
                            <td>April</td>
                            <td>$25,000</td>
                            <td>1,380</td>
                            <td>7</td>
                            <td><span class="green">● On track</span></td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </section>

    `;

}