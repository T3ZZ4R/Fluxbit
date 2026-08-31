import "./Dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="dashboard-grid">
        <div className="card">
          <h3>Total Balance</h3>
          <p>$12,430</p>
        </div>

        <div className="card">
          <h3>Profit</h3>
          <p className="positive">+5.2%</p>
        </div>

        <div className="card">
          <h3>Loss</h3>
          <p className="negative">-1.1%</p>
        </div>

        <div className="card">
          <h3>Active Trades</h3>
          <p>8</p>
        </div>
      </div>

      <div className="dashboard-table">
        <h2>Recent Activity</h2>

        <table>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>BTC</td>
              <td>Buy</td>
              <td>$500</td>
              <td className="positive">Success</td>
            </tr>

            <tr>
              <td>ETH</td>
              <td>Sell</td>
              <td>$200</td>
              <td className="negative">Failed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
