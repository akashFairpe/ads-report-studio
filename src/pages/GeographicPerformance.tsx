import React, { useState } from 'react';

const GeographicPerformance = () => {
  const [selectedFont, setSelectedFont] = useState("Inter");
  const [primaryColor, setPrimaryColor] = useState("#2563eb");
  
  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: selectedFont }}>
      <style>{`
        :root {
          --primary-color: ${primaryColor};
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

        .overview-metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .metric-card {
          background: var(--secondary-bg);
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid var(--primary-color);
          text-align: center;
        }

        .metric-card h3 {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 10px;
          color: #6b7280;
        }

        .metric-value {
          font-size: 24px;
          font-weight: 700;
          color: var(--primary-color);
        }

        .metric-change {
          font-size: 12px;
          margin-top: 5px;
        }

        .metric-change.positive { color: var(--success-color); }
        .metric-change.negative { color: var(--danger-color); }

        .geo-section {
          margin-bottom: 40px;
        }

        .geo-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
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
          height: 350px;
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

        .top-locations {
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 20px;
        }

        .location-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid var(--border-color);
        }

        .location-item:last-child {
          border-bottom: none;
        }

        .location-name {
          font-weight: 600;
        }

        .location-metrics {
          display: flex;
          gap: 15px;
          font-size: 14px;
          color: #6b7280;
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

        .flag-icon {
          width: 20px;
          height: 15px;
          margin-right: 8px;
          border-radius: 2px;
          display: inline-block;
          vertical-align: middle;
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
          .geo-grid { grid-template-columns: 1fr; }
          .branding-row { flex-direction: column; align-items: stretch; }
          .report-header { flex-direction: column; text-align: center; gap: 20px; }
          .overview-metrics { grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); }
          .location-metrics { flex-direction: column; gap: 5px; }
        }
      `}</style>

      {/* Branding Controls */}
      <div className="branding-controls">
        <h3>🌍 Report Branding Controls</h3>
        <div className="branding-row">
          <div className="branding-item">
            <label htmlFor="logo-upload">Upload Logo:</label>
            <input type="file" id="logo-upload" accept="image/*" />
          </div>
          <div className="branding-item">
            <label htmlFor="font-select">Select Font:</label>
            <select id="font-select" value={selectedFont} onChange={(e) => setSelectedFont(e.target.value)}>
              <option value="Inter">Inter</option>
              <option value="Roboto">Roboto</option>
              <option value="Lato">Lato</option>
            </select>
          </div>
          <div className="branding-item">
            <label htmlFor="color-picker">Primary Color:</label>
            <input type="color" id="color-picker" value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} />
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
            <h1 contentEditable="true">Geographic Performance Report</h1>
            <div className="report-meta">
              <div contentEditable="true">Client: Global Marketing Corp</div>
              <div contentEditable="true">Report Period: Jan 1 - Jan 31, 2024</div>
            </div>
          </div>
          <div className="report-meta">
            <div>Generated: Feb 1, 2024</div>
            <div>Analyst: <span contentEditable="true">Sarah Johnson</span></div>
          </div>
        </header>

        {/* Geographic Overview Metrics */}
        <section className="overview-metrics">
          <div className="metric-card">
            <h3>Countries Reached</h3>
            <div className="metric-value">12</div>
            <div className="metric-change positive">+2 vs last period</div>
          </div>
          <div className="metric-card">
            <h3>Total Impressions</h3>
            <div className="metric-value">892,456</div>
            <div className="metric-change positive">+18.5% vs last period</div>
          </div>
          <div className="metric-card">
            <h3>Total Clicks</h3>
            <div className="metric-value">24,789</div>
            <div className="metric-change positive">+12.3% vs last period</div>
          </div>
          <div className="metric-card">
            <h3>Average CPC</h3>
            <div className="metric-value">$1.89</div>
            <div className="metric-change negative">+8.2% vs last period</div>
          </div>
          <div className="metric-card">
            <h3>Total Conversions</h3>
            <div className="metric-value">1,247</div>
            <div className="metric-change positive">+22.1% vs last period</div>
          </div>
          <div className="metric-card">
            <h3>Geographic ROAS</h3>
            <div className="metric-value">3.8x</div>
            <div className="metric-change positive">+0.4x vs last period</div>
          </div>
        </section>

        {/* Geographic Visualization */}
        <section className="geo-section">
          <div className="geo-grid">
            <div className="chart-container">
              <h3 className="chart-title">Performance by Geographic Region</h3>
              <div className="chart-placeholder">
                Interactive Geographic Heatmap<br />
                (Countries/States colored by performance metrics)
              </div>
            </div>
            <div className="top-locations">
              <h3 className="chart-title">Top 5 Performing Locations</h3>
              <div>
                <div className="location-item">
                  <div>
                    <span className="flag-icon" style={{background: 'linear-gradient(to bottom, #b22234 33%, white 33%, white 66%, #b22234 66%)'}}></span>
                    <span className="location-name">United States</span>
                  </div>
                  <div className="location-metrics">
                    <span>$12,450</span>
                    <span>4.2x ROAS</span>
                  </div>
                </div>
                <div className="location-item">
                  <div>
                    <span className="flag-icon" style={{background: 'linear-gradient(to right, #ff0000 50%, white 50%)'}}></span>
                    <span className="location-name">Canada</span>
                  </div>
                  <div className="location-metrics">
                    <span>$8,920</span>
                    <span>3.9x ROAS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insights */}
        <section className="insights-section">
          <h2>🌍 Geographic Insights & Analysis</h2>
          <div className="editable" contentEditable="true">
            <p><strong>Key Geographic Findings:</strong></p>
            <ul>
              <li>North American markets dominate performance, accounting for 65% of total conversions</li>
              <li>English-speaking markets show consistently higher conversion rates</li>
              <li>European markets show higher CPCs but lower conversion rates</li>
            </ul>
          </div>
        </section>

        <footer className="report-footer">
          <div>Powered by AdSpyder | Geographic Performance Analytics</div>
        </footer>
      </div>
    </div>
  );
};

export default GeographicPerformance;