import React from 'react';
import { usePagination } from '@/hooks/usePagination';
import PaginationControls from '@/components/PaginationControls';

const DevicePerformance = () => {
  // Sample device performance data for pagination
  const deviceData = [
    { device: 'Mobile', icon: '📱', traffic: '58.5%', impressions: '456,789', clicks: '18,234', ctr: '3.99%', cpc: '$1.89', conversions: '721', convRate: '3.95%', cost: '$34,462', roas: '4.2x' },
    { device: 'Desktop', icon: '🖥️', traffic: '30.1%', impressions: '234,567', clicks: '9,876', ctr: '4.21%', cpc: '$2.14', conversions: '456', convRate: '4.62%', cost: '$21,134', roas: '3.8x' },
    { device: 'Tablet', icon: '📲', traffic: '11.4%', impressions: '89,123', clicks: '2,789', ctr: '3.13%', cpc: '$1.67', conversions: '98', convRate: '3.51%', cost: '$4,657', roas: '3.2x' },
    { device: 'Smart TV', icon: '📺', traffic: '2.3%', impressions: '18,456', clicks: '456', ctr: '2.47%', cpc: '$2.89', conversions: '23', convRate: '5.04%', cost: '$1,318', roas: '2.9x' },
    { device: 'Smartwatch', icon: '⌚', traffic: '1.2%', impressions: '9,234', clicks: '123', ctr: '1.33%', cpc: '$1.45', conversions: '5', convRate: '4.07%', cost: '$178', roas: '2.1x' },
    { device: 'Gaming Console', icon: '🎮', traffic: '0.8%', impressions: '6,789', clicks: '89', ctr: '1.31%', cpc: '$3.12', conversions: '4', convRate: '4.49%', cost: '$278', roas: '1.8x' },
    { device: 'Smart Speaker', icon: '🔊', traffic: '0.5%', impressions: '3,456', clicks: '45', ctr: '1.30%', cpc: '$2.67', conversions: '2', convRate: '4.44%', cost: '$120', roas: '1.5x' },
    { device: 'VR Headset', icon: '🥽', traffic: '0.2%', impressions: '1,234', clicks: '23', ctr: '1.86%', cpc: '$4.56', conversions: '1', convRate: '4.35%', cost: '$105', roas: '1.2x' }
  ];

  const {
    currentPage,
    paginatedData,
    exportData,
    totalPages,
    hasNextPage,
    hasPrevPage,
    showAll,
    goToNextPage,
    goToPrevPage,
    toggleShowAll,
    resetPagination
  } = usePagination(deviceData, 10);

  return (
    <div className="min-h-screen bg-background">
      <style>{`
        :root {
          --primary-color: #2563eb;
          --text-color: #1f2937;
          --background-color: #ffffff;
          --border-color: #e5e7eb;
          --success-color: #10b981;
          --warning-color: #f59e0b;
          --danger-color: #ef4444;
          --secondary-bg: #f8fafc;
        }

        .branding-controls {
          background: var(--secondary-bg);
          padding: 20px;
          border-bottom: 2px solid var(--border-color);
          margin-bottom: 30px;
        }

        .branding-controls h3 {
          margin-bottom: 15px;
          color: var(--primary-color);
        }

        .branding-row {
          display: flex;
          gap: 20px;
          align-items: center;
          flex-wrap: wrap;
        }

        .branding-item {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .branding-item label {
          font-weight: 600;
          font-size: 14px;
        }

        .branding-item input, .branding-item select {
          padding: 8px 12px;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          font-size: 14px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .report-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 3px solid var(--primary-color);
        }

        .logo-section img {
          max-height: 60px;
          max-width: 200px;
        }

        .report-title {
          text-align: center;
          flex-grow: 1;
        }

        .report-title h1 {
          font-size: 28px;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 5px;
        }

        .report-meta {
          text-align: right;
          font-size: 14px;
          color: #6b7280;
        }

        .device-summary {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .device-card {
          background: var(--secondary-bg);
          padding: 25px;
          border-radius: 8px;
          border-left: 4px solid var(--primary-color);
          position: relative;
        }

        .device-card h3 {
          font-size: 18px;
          margin-bottom: 15px;
          color: var(--primary-color);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .device-icon {
          font-size: 24px;
        }

        .device-metrics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .metric {
          text-align: center;
        }

        .metric-label {
          font-size: 12px;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .metric-value {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-color);
          margin-top: 2px;
        }

        .device-trend {
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid var(--border-color);
          font-size: 14px;
          text-align: center;
        }

        .trend-positive { color: var(--success-color); }
        .trend-negative { color: var(--danger-color); }

        .charts-section {
          margin-bottom: 40px;
        }

        .charts-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }

        .chart-container {
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 20px;
        }

        .chart-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
          color: var(--primary-color);
        }

        .chart-placeholder {
          height: 250px;
          background: var(--secondary-bg);
          border: 2px dashed var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          color: #6b7280;
          font-style: italic;
          text-align: center;
          padding: 20px;
        }

        .full-width-chart {
          grid-column: 1 / -1;
        }

        .performance-table {
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 40px;
        }

        .table-header {
          background: var(--primary-color);
          color: white;
          padding: 15px 20px;
          font-size: 18px;
          font-weight: 600;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          padding: 12px 15px;
          text-align: left;
          border-bottom: 1px solid var(--border-color);
        }

        th {
          background: var(--secondary-bg);
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        tr:hover {
          background: var(--secondary-bg);
        }

        .device-label {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .device-percentage {
          background: var(--primary-color);
          color: white;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }

        .insights-section {
          background: var(--secondary-bg);
          padding: 30px;
          border-radius: 8px;
          margin-bottom: 40px;
        }

        .insights-section h2 {
          color: var(--primary-color);
          margin-bottom: 20px;
        }

        .editable {
          min-height: 100px;
          padding: 15px;
          border: 2px dashed transparent;
          border-radius: 6px;
          transition: border-color 0.3s;
        }

        .editable:hover {
          border-color: var(--primary-color);
          background: rgba(37, 99, 235, 0.05);
        }

        .editable:focus {
          outline: none;
          border-color: var(--primary-color);
          background: white;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .report-footer {
          text-align: center;
          padding: 30px 0;
          border-top: 2px solid var(--border-color);
          margin-top: 40px;
          color: #6b7280;
        }

        @media (max-width: 768px) {
          .charts-grid { grid-template-columns: 1fr; }
          .branding-row { flex-direction: column; align-items: stretch; }
          .report-header { flex-direction: column; text-align: center; gap: 20px; }
          .device-summary { grid-template-columns: 1fr; }
          .device-metrics { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Branding Controls */}
      <div className="branding-controls">
        <h3>📱 Report Branding Controls</h3>
        <div className="branding-row">
          <div className="branding-item">
            <label htmlFor="logo-upload">Upload Logo:</label>
            <input type="file" id="logo-upload" accept="image/*" />
          </div>
          <div className="branding-item">
            <label htmlFor="font-select">Select Font:</label>
            <select id="font-select">
              <option value="Inter">Inter</option>
              <option value="Roboto">Roboto</option>
              <option value="Lato">Lato</option>
            </select>
          </div>
          <div className="branding-item">
            <label htmlFor="color-picker">Primary Color:</label>
            <input type="color" id="color-picker" defaultValue="#2563eb" />
          </div>
        </div>
      </div>

      <div className="container">
        {/* Report Header */}
        <header className="report-header">
          <div className="logo-section">
            <img id="report-logo" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMjAwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iNjAiIGZpbGw9IiMyNTYzZWIiLz48dGV4dCB4PSIxMDAiIHk9IjM1IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkludGVyIiBmb250LXNpemU9IjE4Ij5Zb3VyIExvZ288L3RleHQ+PC9zdmc+" alt="Company Logo" />
          </div>
          <div className="report-title">
            <h1 contentEditable="true">Device Performance Report</h1>
            <div className="report-meta">
              <div contentEditable="true">Client: TechCorp Solutions</div>
              <div contentEditable="true">Report Period: Jan 1 - Jan 31, 2024</div>
            </div>
          </div>
          <div className="report-meta">
            <div>Generated: Feb 1, 2024</div>
            <div>Analyst: <span contentEditable="true">Mike Chen</span></div>
          </div>
        </header>

        {/* Device Summary Cards */}
        <section className="device-summary">
          <div className="device-card">
            <h3>
              <span className="device-icon">📱</span>
              Mobile
            </h3>
            <div className="device-metrics">
              <div className="metric">
                <div className="metric-label">Impressions</div>
                <div className="metric-value">456,789</div>
              </div>
              <div className="metric">
                <div className="metric-label">Clicks</div>
                <div className="metric-value">18,234</div>
              </div>
              <div className="metric">
                <div className="metric-label">CTR</div>
                <div className="metric-value">3.99%</div>
              </div>
              <div className="metric">
                <div className="metric-label">CPC</div>
                <div className="metric-value">$1.89</div>
              </div>
              <div className="metric">
                <div className="metric-label">Conversions</div>
                <div className="metric-value">721</div>
              </div>
              <div className="metric">
                <div className="metric-label">ROAS</div>
                <div className="metric-value">4.2x</div>
              </div>
            </div>
            <div className="device-trend trend-positive">
              📈 +12.5% vs last period
            </div>
          </div>

          <div className="device-card">
            <h3>
              <span className="device-icon">🖥️</span>
              Desktop
            </h3>
            <div className="device-metrics">
              <div className="metric">
                <div className="metric-label">Impressions</div>
                <div className="metric-value">234,567</div>
              </div>
              <div className="metric">
                <div className="metric-label">Clicks</div>
                <div className="metric-value">8,456</div>
              </div>
              <div className="metric">
                <div className="metric-label">CTR</div>
                <div className="metric-value">3.61%</div>
              </div>
              <div className="metric">
                <div className="metric-label">CPC</div>
                <div className="metric-value">$2.34</div>
              </div>
              <div className="metric">
                <div className="metric-label">Conversions</div>
                <div className="metric-value">423</div>
              </div>
              <div className="metric">
                <div className="metric-label">ROAS</div>
                <div className="metric-value">3.8x</div>
              </div>
            </div>
            <div className="device-trend trend-negative">
              📉 -3.2% vs last period
            </div>
          </div>

          <div className="device-card">
            <h3>
              <span className="device-icon">📟</span>
              Tablet
            </h3>
            <div className="device-metrics">
              <div className="metric">
                <div className="metric-label">Impressions</div>
                <div className="metric-value">89,123</div>
              </div>
              <div className="metric">
                <div className="metric-label">Clicks</div>
                <div className="metric-value">2,890</div>
              </div>
              <div className="metric">
                <div className="metric-label">CTR</div>
                <div className="metric-value">3.24%</div>
              </div>
              <div className="metric">
                <div className="metric-label">CPC</div>
                <div className="metric-value">$2.12</div>
              </div>
              <div className="metric">
                <div className="metric-label">Conversions</div>
                <div className="metric-value">134</div>
              </div>
              <div className="metric">
                <div className="metric-label">ROAS</div>
                <div className="metric-value">3.6x</div>
              </div>
            </div>
            <div className="device-trend trend-positive">
              📈 +8.7% vs last period
            </div>
          </div>
        </section>

        {/* Device Performance Charts */}
        <section className="charts-section">
          <div className="charts-grid">
            <div className="chart-container">
              <h3 className="chart-title">Traffic Distribution by Device</h3>
              <div className="chart-placeholder">
                Pie Chart: Mobile (58%), Desktop (30%), Tablet (12%)
              </div>
            </div>
            <div className="chart-container">
              <h3 className="chart-title">Conversion Rate by Device</h3>
              <div className="chart-placeholder">
                Bar Chart: Conversion Rates Comparison Across Devices
              </div>
            </div>
          </div>
          
          <div className="chart-container full-width-chart">
            <h3 className="chart-title">Device Performance Trends Over Time</h3>
            <div className="chart-placeholder">
              Multi-Line Chart: Daily Performance Trends for Mobile, Desktop, and Tablet
            </div>
          </div>
        </section>

        {/* Detailed Device Performance Table */}
        <section className="performance-table">
          <div className="table-header">Device Performance Breakdown</div>
          <table>
            <thead>
              <tr>
                <th>Device Type</th>
                <th>Traffic %</th>
                <th>Impressions</th>
                <th>Clicks</th>
                <th>CTR</th>
                <th>CPC</th>
                <th>Conversions</th>
                <th>Conv. Rate</th>
                <th>Cost</th>
                <th>ROAS</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((device, index) => (
                <tr key={index}>
                  <td className="device-label">
                    <span>{device.icon}</span>
                    {device.device}
                    <span className="device-percentage">{device.traffic}</span>
                  </td>
                  <td>{device.traffic}</td>
                  <td>{device.impressions}</td>
                  <td>{device.clicks}</td>
                  <td>{device.ctr}</td>
                  <td>{device.cpc}</td>
                  <td>{device.conversions}</td>
                  <td>{device.convRate}</td>
                  <td>{device.cost}</td>
                  <td>{device.roas}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
            showAll={showAll}
            onNextPage={goToNextPage}
            onPrevPage={goToPrevPage}
            onToggleShowAll={toggleShowAll}
            totalItems={deviceData.length}
            itemsPerPage={10}
          />
        </section>

        {/* Device Insights and Recommendations */}
        <section className="insights-section">
          <h2>📱 Device Performance Insights & Analysis</h2>
          <div className="editable" contentEditable="true">
            <p><strong>Key Device Performance Findings:</strong></p>
            <ul>
              <li>Mobile dominates traffic at 58.5% and delivers strongest ROAS at 4.2x</li>
              <li>Desktop users show highest conversion rate at 5.0% despite lower volume</li>
              <li>Mobile CTR outperforms other devices by 10-23%</li>
            </ul>
          </div>
        </section>

        <footer className="report-footer">
          <div>Report generated by AdSpyder Device Analytics Platform</div>
        </footer>
      </div>
    </div>
  );
};

export default DevicePerformance;