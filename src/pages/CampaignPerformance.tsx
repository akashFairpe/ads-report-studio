import React, { useState } from 'react';
import ExportButtons from "@/components/ExportButtons";

const CampaignPerformance = () => {
  const [primaryColor, setPrimaryColor] = useState('#1a73e8');
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [logoSrc, setLogoSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiIGZpbGw9IiMxYTczZTgiLz48dGV4dCB4PSI1MCIgeT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkxPR088L3RleHQ+PC9zdmc+");

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoSrc(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ 
      fontFamily: selectedFont,
      '--primary-color': primaryColor,
      '--text-color': '#333',
      '--background-color': '#fff',
      '--border-color': '#e0e0e0',
      '--secondary-color': '#f8f9fa',
      '--success-color': '#34a853',
      '--warning-color': '#fbbc04',
      '--danger-color': '#ea4335'
    } as React.CSSProperties}>
      <style>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .branding-controls {
          background: var(--secondary-color);
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 30px;
          border: 2px dashed var(--border-color);
        }

        .control-group {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          align-items: center;
        }

        .control-item {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .control-item label {
          font-weight: 600;
          font-size: 14px;
        }

        .control-item input, .control-item select {
          padding: 8px 12px;
          border: 1px solid var(--border-color);
          border-radius: 4px;
          font-size: 14px;
        }

        .report-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid var(--primary-color);
        }

        .logo-container {
          max-width: 200px;
        }

        .logo-container img {
          max-width: 100%;
          height: auto;
          max-height: 60px;
        }

        .report-title {
          text-align: center;
          flex-grow: 1;
          margin: 0 20px;
        }

        .report-title h1 {
          color: var(--primary-color);
          font-size: 28px;
          margin-bottom: 10px;
        }

        .report-meta {
          text-align: right;
          min-width: 200px;
        }

        [contenteditable="true"] {
          border: 1px dashed transparent;
          padding: 4px;
          border-radius: 4px;
        }

        [contenteditable="true"]:hover {
          border-color: var(--primary-color);
          background-color: rgba(26, 115, 232, 0.1);
        }

        [contenteditable="true"]:focus {
          outline: 2px solid var(--primary-color);
          border-color: var(--primary-color);
          background-color: rgba(26, 115, 232, 0.1);
        }

        .funnel-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 30px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          margin-bottom: 30px;
        }

        .funnel-step {
          text-align: center;
          flex: 1;
        }

        .funnel-number {
          font-size: 36px;
          font-weight: bold;
          color: var(--primary-color);
          margin-bottom: 10px;
        }

        .funnel-label {
          font-size: 16px;
          color: #666;
          margin-bottom: 5px;
        }

        .funnel-arrow {
          font-size: 24px;
          color: var(--primary-color);
          margin: 0 20px;
        }

        .performance-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .performance-card {
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .performance-card h4 {
          color: var(--primary-color);
          margin-bottom: 15px;
          font-size: 18px;
        }

        .metric-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          padding: 8px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .metric-row:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        .metric-label {
          color: #666;
          font-size: 14px;
        }

        .metric-value {
          font-weight: bold;
          color: var(--text-color);
        }

        .status-positive {
          color: var(--success-color);
          font-weight: bold;
        }

        .status-neutral {
          color: var(--warning-color);
          font-weight: bold;
        }

        .charts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .chart-container {
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 20px;
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          font-style: italic;
        }

        .breakdown-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .breakdown-card {
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .breakdown-card h3 {
          color: var(--primary-color);
          margin-bottom: 15px;
        }

        .breakdown-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .breakdown-item:last-child {
          border-bottom: none;
        }

        .breakdown-bar {
          flex-grow: 1;
          margin: 0 15px;
          height: 8px;
          background: #f0f0f0;
          border-radius: 4px;
          overflow: hidden;
        }

        .breakdown-fill {
          height: 100%;
          background: var(--primary-color);
          border-radius: 4px;
        }

        .creative-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .creative-card {
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .creative-preview {
          background: var(--secondary-color);
          border: 1px dashed var(--border-color);
          padding: 20px;
          border-radius: 4px;
          margin-bottom: 15px;
          text-align: center;
          color: #666;
          font-style: italic;
        }

        .creative-metrics {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .creative-metric {
          text-align: center;
          padding: 10px;
          background: var(--secondary-color);
          border-radius: 4px;
        }

        .creative-metric-value {
          font-size: 20px;
          font-weight: bold;
          color: var(--primary-color);
        }

        .creative-metric-label {
          font-size: 12px;
          color: #666;
        }

        .data-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 30px;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .data-table th {
          background: var(--primary-color);
          color: white;
          padding: 15px;
          text-align: left;
          font-weight: 600;
        }

        .data-table td {
          padding: 12px 15px;
          border-bottom: 1px solid var(--border-color);
        }

        .data-table tr:hover {
          background-color: var(--secondary-color);
        }

        .insights-section {
          background: var(--secondary-color);
          border-radius: 8px;
          padding: 25px;
          margin-bottom: 30px;
        }

        .insights-section h3 {
          color: var(--primary-color);
          margin-bottom: 15px;
        }

        .report-footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid var(--border-color);
          text-align: center;
          color: #666;
        }

        @media (max-width: 768px) {
          .report-header {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          
          .control-group {
            flex-direction: column;
            align-items: stretch;
          }
          
          .funnel-container {
            flex-direction: column;
            gap: 20px;
          }
          
          .funnel-arrow {
            transform: rotate(90deg);
            margin: 10px 0;
          }
          
          .performance-grid,
          .breakdown-section,
          .creative-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Branding Controls */}
      <div className="branding-controls">
        <h3 style={{ marginBottom: '15px', color: primaryColor }}>🎨 Customize Report Branding</h3>
        <div className="control-group">
          <div className="control-item">
            <label htmlFor="logo-upload">Upload Logo:</label>
            <input 
              type="file" 
              id="logo-upload" 
              accept="image/*"
              onChange={handleLogoUpload}
            />
          </div>
          <div className="control-item">
            <label htmlFor="font-select">Brand Font:</label>
            <select 
              id="font-select" 
              value={selectedFont}
              onChange={(e) => setSelectedFont(e.target.value)}
            >
              <option value="Inter">Inter</option>
              <option value="Roboto">Roboto</option>
              <option value="Lato">Lato</option>
              <option value="Open Sans">Open Sans</option>
              <option value="Montserrat">Montserrat</option>
            </select>
          </div>
          <div className="control-item">
            <label htmlFor="primary-color">Primary Color:</label>
            <input 
              type="color" 
              id="primary-color" 
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
            />
          </div>
          <ExportButtons reportTitle="Campaign Performance Report" />
        </div>
      </div>

      <div className="container">
        {/* Report Header */}
        <header className="report-header">
          <div className="logo-container">
            <img src={logoSrc} alt="Company Logo" />
          </div>
          <div className="report-title">
            <h1 contentEditable={true} suppressContentEditableWarning={true}>
              Campaign Performance Report
            </h1>
            <div contentEditable={true} suppressContentEditableWarning={true}>
              Search - Product Categories
            </div>
          </div>
          <div className="report-meta">
            <div><strong>Account:</strong> <span contentEditable={true} suppressContentEditableWarning={true}>ABC Company</span></div>
            <div><strong>Campaign ID:</strong> <span contentEditable={true} suppressContentEditableWarning={true}>12345678</span></div>
            <div><strong>Period:</strong> <span contentEditable={true} suppressContentEditableWarning={true}>Jan 1 - Jan 31, 2024</span></div>
            <div><strong>Analyst:</strong> <span contentEditable={true} suppressContentEditableWarning={true}>Sarah Johnson</span></div>
          </div>
        </header>

        {/* Campaign Funnel */}
        <section className="funnel-section">
          <h2 style={{ color: primaryColor, marginBottom: '20px' }}>🎯 Campaign Funnel Overview</h2>
          <div className="funnel-container">
            <div className="funnel-step">
              <div className="funnel-number">156,789</div>
              <div className="funnel-label">Impressions</div>
              <div style={{ fontSize: '12px', color: '#666' }}>People who saw your ads</div>
            </div>
            <div className="funnel-arrow">→</div>
            <div className="funnel-step">
              <div className="funnel-number">7,845</div>
              <div className="funnel-label">Clicks</div>
              <div style={{ fontSize: '12px', color: '#666' }}>CTR: <span>5.00%</span></div>
            </div>
            <div className="funnel-arrow">→</div>
            <div className="funnel-step">
              <div className="funnel-number">823</div>
              <div className="funnel-label">Conversions</div>
              <div style={{ fontSize: '12px', color: '#666' }}>CVR: <span>10.49%</span></div>
            </div>
          </div>
        </section>

        {/* Performance Cards */}
        <section className="performance-grid">
          <div className="performance-card">
            <h4>💰 Cost Metrics</h4>
            <div className="metric-row">
              <span className="metric-label">Total Spend</span>
              <span className="metric-value">$18,375</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Avg. CPC</span>
              <span className="metric-value">$2.34</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Cost per Conversion</span>
              <span className="metric-value">$22.33</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Budget Utilization</span>
              <span className="metric-value status-positive">87%</span>
            </div>
          </div>

          <div className="performance-card">
            <h4>📈 Performance Metrics</h4>
            <div className="metric-row">
              <span className="metric-label">Impression Share</span>
              <span className="metric-value">73%</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Quality Score</span>
              <span className="metric-value status-positive">7.2/10</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">ROAS</span>
              <span className="metric-value status-positive">425%</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Conv. Value</span>
              <span className="metric-value">$78,075</span>
            </div>
          </div>

          <div className="performance-card">
            <h4>📊 Engagement Metrics</h4>
            <div className="metric-row">
              <span className="metric-label">Avg. Position</span>
              <span className="metric-value">2.1</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Top Impr. %</span>
              <span className="metric-value">65%</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Abs. Top Impr. %</span>
              <span className="metric-value">34%</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Lost IS (Budget)</span>
              <span className="metric-value status-neutral">12%</span>
            </div>
          </div>
        </section>

        {/* Performance Trend Charts */}
        <section className="chart-section">
          <h2 style={{ color: primaryColor, marginBottom: '20px' }}>📈 Performance Trends</h2>
          <div className="charts-grid">
            <div className="chart-container">
              [Performance Trend Chart: Clicks, Conversions, Cost Over Time]
            </div>
            <div className="chart-container">
              [CTR & Quality Score Trend Chart]
            </div>
          </div>
        </section>

        {/* Device & Demographic Breakdown */}
        <section className="breakdown-section">
          <div className="breakdown-card">
            <h3>📱 Device Performance</h3>
            <div className="breakdown-item">
              <span>Desktop</span>
              <div className="breakdown-bar">
                <div className="breakdown-fill" style={{ width: '45%' }}></div>
              </div>
              <span><strong>45%</strong></span>
            </div>
            <div className="breakdown-item">
              <span>Mobile</span>
              <div className="breakdown-bar">
                <div className="breakdown-fill" style={{ width: '38%' }}></div>
              </div>
              <span><strong>38%</strong></span>
            </div>
            <div className="breakdown-item">
              <span>Tablet</span>
              <div className="breakdown-bar">
                <div className="breakdown-fill" style={{ width: '17%' }}></div>
              </div>
              <span><strong>17%</strong></span>
            </div>
          </div>

          <div className="breakdown-card">
            <h3>🎯 Audience Insights</h3>
            <div className="breakdown-item">
              <span>25-34 years</span>
              <div className="breakdown-bar">
                <div className="breakdown-fill" style={{ width: '35%' }}></div>
              </div>
              <span><strong>35%</strong></span>
            </div>
            <div className="breakdown-item">
              <span>35-44 years</span>
              <div className="breakdown-bar">
                <div className="breakdown-fill" style={{ width: '28%' }}></div>
              </div>
              <span><strong>28%</strong></span>
            </div>
            <div className="breakdown-item">
              <span>45-54 years</span>
              <div className="breakdown-bar">
                <div className="breakdown-fill" style={{ width: '22%' }}></div>
              </div>
              <span><strong>22%</strong></span>
            </div>
            <div className="breakdown-item">
              <span>Other</span>
              <div className="breakdown-bar">
                <div className="breakdown-fill" style={{ width: '15%' }}></div>
              </div>
              <span><strong>15%</strong></span>
            </div>
          </div>
        </section>

        {/* Creative Performance */}
        <section className="creative-section">
          <h2 style={{ color: primaryColor, marginBottom: '20px' }}>🎨 Creative Performance</h2>
          <div className="creative-grid">
            <div className="creative-card">
              <h4>Ad Creative #1</h4>
              <div className="creative-preview">
                [Ad Preview Image/Text]<br />
                "Premium Quality Products - Shop Now!"
              </div>
              <div className="creative-metrics">
                <div className="creative-metric">
                  <div className="creative-metric-value">6.2%</div>
                  <div className="creative-metric-label">CTR</div>
                </div>
                <div className="creative-metric">
                  <div className="creative-metric-value">342</div>
                  <div className="creative-metric-label">Conversions</div>
                </div>
                <div className="creative-metric">
                  <div className="creative-metric-value">$19.50</div>
                  <div className="creative-metric-label">CPA</div>
                </div>
                <div className="creative-metric">
                  <div className="creative-metric-value">89K</div>
                  <div className="creative-metric-label">Impressions</div>
                </div>
              </div>
            </div>

            <div className="creative-card">
              <h4>Ad Creative #2</h4>
              <div className="creative-preview">
                [Ad Preview Image/Text]<br />
                "Limited Time Offer - Save 30% Today!"
              </div>
              <div className="creative-metrics">
                <div className="creative-metric">
                  <div className="creative-metric-value">4.8%</div>
                  <div className="creative-metric-label">CTR</div>
                </div>
                <div className="creative-metric">
                  <div className="creative-metric-value">281</div>
                  <div className="creative-metric-label">Conversions</div>
                </div>
                <div className="creative-metric">
                  <div className="creative-metric-value">$24.80</div>
                  <div className="creative-metric-label">CPA</div>
                </div>
                <div className="creative-metric">
                  <div className="creative-metric-value">67K</div>
                  <div className="creative-metric-label">Impressions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insights & Recommendations */}
        <section className="insights-section">
          <h3>💡 Campaign Insights & Analysis</h3>
          <div contentEditable={true} suppressContentEditableWarning={true}>
            <p><strong>Key Performance Highlights:</strong></p>
            <ul>
              <li>Campaign consistently outperforming target ROAS of 350% with current 425% ROAS</li>
              <li>Creative #1 showing strongest performance with 6.2% CTR, 23% above campaign average</li>
              <li>Desktop traffic converting at highest rate (12.5%) compared to mobile (8.7%)</li>
              <li>25-34 age demographic driving 35% of conversions with lowest CPA</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="report-footer">
          <div contentEditable={true} suppressContentEditableWarning={true}>
            <strong>Campaign Report prepared by:</strong> <span contentEditable={true} suppressContentEditableWarning={true}>Digital Performance Agency</span><br />
            <span contentEditable={true} suppressContentEditableWarning={true}>performance@agency.com | (555) 123-4567</span><br />
            <span contentEditable={true} suppressContentEditableWarning={true}>Generated on: January 31, 2024</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CampaignPerformance;