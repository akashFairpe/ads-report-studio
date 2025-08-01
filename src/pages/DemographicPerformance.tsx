import React from 'react';
import { usePagination } from '@/hooks/usePagination';
import PaginationControls from '@/components/PaginationControls';

const DemographicPerformance = () => {
  // Sample demographic data for pagination
  const demographicsData = [
    { demographic: 'Male 18-24', impressions: '45,230', clicks: '1,856', ctr: '4.10%', cpc: '$2.12', conversions: '78', cost: '$3,935', roas: '4.8x' },
    { demographic: 'Male 25-34', impressions: '52,110', clicks: '2,134', ctr: '4.09%', cpc: '$2.45', conversions: '95', cost: '$5,228', roas: '3.9x' },
    { demographic: 'Female 18-24', impressions: '41,890', clicks: '1,678', ctr: '4.01%', cpc: '$2.01', conversions: '72', cost: '$3,371', roas: '5.1x' },
    { demographic: 'Female 25-34', impressions: '48,765', clicks: '1,923', ctr: '3.94%', cpc: '$2.33', conversions: '89', cost: '$4,480', roas: '4.2x' },
    { demographic: 'Male 35-44', impressions: '38,456', clicks: '1,534', ctr: '3.99%', cpc: '$2.67', conversions: '61', cost: '$4,096', roas: '3.7x' },
    { demographic: 'Female 35-44', impressions: '35,789', clicks: '1,402', ctr: '3.92%', cpc: '$2.54', conversions: '58', cost: '$3,561', roas: '4.1x' },
    { demographic: 'Male 45-54', impressions: '28,345', clicks: '1,087', ctr: '3.84%', cpc: '$2.89', conversions: '42', cost: '$3,141', roas: '3.2x' },
    { demographic: 'Female 45-54', impressions: '26,123', clicks: '998', ctr: '3.82%', cpc: '$2.71', conversions: '38', cost: '$2,704', roas: '3.5x' },
    { demographic: 'Male 55+', impressions: '22,567', clicks: '834', ctr: '3.70%', cpc: '$3.12', conversions: '29', cost: '$2,602', roas: '2.8x' },
    { demographic: 'Female 55+', impressions: '20,345', clicks: '745', ctr: '3.66%', cpc: '$2.95', conversions: '26', cost: '$2,198', roas: '3.1x' },
    { demographic: 'Unknown Gender 18-24', impressions: '8,456', clicks: '302', ctr: '3.57%', cpc: '$1.98', conversions: '12', cost: '$598', roas: '4.3x' },
    { demographic: 'Unknown Gender 25-34', impressions: '7,234', clicks: '267', ctr: '3.69%', cpc: '$2.15', conversions: '9', cost: '$574', roas: '3.8x' }
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
  } = usePagination(demographicsData, 10);

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

        .metrics-summary {
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

        .chart-section {
          margin-bottom: 40px;
        }

        .chart-container {
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
        }

        .chart-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
          color: var(--primary-color);
        }

        .chart-placeholder {
          height: 300px;
          background: var(--secondary-bg);
          border: 2px dashed var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          color: #6b7280;
          font-style: italic;
        }

        .demographics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 40px;
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
          .demographics-grid { grid-template-columns: 1fr; }
          .branding-row { flex-direction: column; align-items: stretch; }
          .report-header { flex-direction: column; text-align: center; gap: 20px; }
          .metrics-summary { grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); }
        }
      `}</style>

      {/* Branding Controls */}
      <div className="branding-controls">
        <h3>📋 Report Branding Controls</h3>
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
            <h1 contentEditable="true" id="report-title">Demographic Performance Report</h1>
            <div className="report-meta">
              <div contentEditable="true" id="client-name">Client: ABC Company Inc.</div>
              <div contentEditable="true" id="date-range">Report Period: Jan 1 - Jan 31, 2024</div>
            </div>
          </div>
          <div className="report-meta">
            <div>Generated: Feb 1, 2024</div>
            <div>Analyst: <span contentEditable="true">John Smith</span></div>
          </div>
        </header>

        {/* Demographics Summary Metrics */}
        <section className="metrics-summary">
          <div className="metric-card">
            <h3>Total Impressions</h3>
            <div className="metric-value">245,820</div>
            <div className="metric-change positive">+12.5% vs last period</div>
          </div>
          <div className="metric-card">
            <h3>Total Clicks</h3>
            <div className="metric-value">8,456</div>
            <div className="metric-change positive">+8.2% vs last period</div>
          </div>
          <div className="metric-card">
            <h3>Overall CTR</h3>
            <div className="metric-value">3.44%</div>
            <div className="metric-change negative">-0.3% vs last period</div>
          </div>
          <div className="metric-card">
            <h3>Average CPC</h3>
            <div className="metric-value">$2.34</div>
            <div className="metric-change positive">-5.1% vs last period</div>
          </div>
          <div className="metric-card">
            <h3>Total Conversions</h3>
            <div className="metric-value">423</div>
            <div className="metric-change positive">+15.8% vs last period</div>
          </div>
          <div className="metric-card">
            <h3>ROAS</h3>
            <div className="metric-value">4.25x</div>
            <div className="metric-change positive">+0.8x vs last period</div>
          </div>
        </section>

        {/* Demographics Charts */}
        <section className="chart-section">
          <div className="demographics-grid">
            <div className="chart-container">
              <h3 className="chart-title">Performance by Age Group</h3>
              <div className="chart-placeholder">
                Age Distribution Chart (18-24, 25-34, 35-44, 45-54, 55+)
              </div>
            </div>
            <div className="chart-container">
              <h3 className="chart-title">Performance by Gender</h3>
              <div className="chart-placeholder">
                Gender Distribution Chart (Male, Female, Other)
              </div>
            </div>
          </div>
          
          <div className="chart-container">
            <h3 className="chart-title">Age × Gender Performance Matrix</h3>
            <div className="chart-placeholder">
              Intersection Chart: Age Groups × Gender Performance
            </div>
          </div>
        </section>

        {/* Demographics Performance Table */}
        <section className="performance-table">
          <div className="table-header">Detailed Demographics Performance</div>
          <table>
            <thead>
              <tr>
                <th>Demographic</th>
                <th>Impressions</th>
                <th>Clicks</th>
                <th>CTR</th>
                <th>CPC</th>
                <th>Conversions</th>
                <th>Cost</th>
                <th>ROAS</th>
              </tr>
            </thead>
              <tbody>
                {paginatedData.map((demo, index) => (
                  <tr key={index}>
                    <td>{demo.demographic}</td>
                    <td>{demo.impressions}</td>
                    <td>{demo.clicks}</td>
                    <td>{demo.ctr}</td>
                    <td>{demo.cpc}</td>
                    <td>{demo.conversions}</td>
                    <td>{demo.cost}</td>
                    <td>{demo.roas}</td>
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
              totalItems={demographicsData.length}
              itemsPerPage={10}
            />
          </section>

        {/* Insights */}
        <section className="insights-section">
          <h2>📊 Demographic Insights & Analysis</h2>
          <div className="editable" contentEditable="true">
            <p><strong>Key Findings:</strong></p>
            <ul>
              <li>The 25-34 age group shows highest volume and strong performance</li>
              <li>Female 18-24 demographic demonstrates highest ROAS at 5.1x</li>
              <li>Overall performance skews younger with 18-34 accounting for 73% of conversions</li>
            </ul>
          </div>
        </section>

        <footer className="report-footer">
          <div>Report generated by AdSpyder Analytics Platform</div>
        </footer>
      </div>
    </div>
  );
};

export default DemographicPerformance;