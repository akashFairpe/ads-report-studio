import React, { useState } from 'react';

const AccountPerformance = () => {
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
      fontFamily: selectedFont + ', sans-serif',
      '--primary-color': primaryColor,
      '--text-color': '#333',
      '--background-color': '#fff',
      '--border-color': '#e0e0e0',
      '--secondary-color': '#f8f9fa'
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

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .metric-card {
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .metric-value {
          font-size: 32px;
          font-weight: bold;
          color: var(--primary-color);
          margin-bottom: 5px;
        }

        .metric-label {
          color: #666;
          font-size: 14px;
          text-transform: uppercase;
        }

        .chart-container {
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 20px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          font-style: italic;
          margin-bottom: 30px;
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
          
          .metrics-grid {
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
        </div>
      </div>

      <div className="container">
        {/* Report Header */}
        <header className="report-header">
          <div className="logo-container">
            <img id="report-logo" src={logoSrc} alt="Company Logo" />
          </div>
          <div className="report-title">
            <h1 contentEditable={true} suppressContentEditableWarning={true}>
              Account Performance Summary
            </h1>
            <div contentEditable={true} suppressContentEditableWarning={true}>
              Google Ads Performance Report
            </div>
          </div>
          <div className="report-meta">
            <div><strong>Client:</strong> <span contentEditable={true} suppressContentEditableWarning={true}>ABC Company</span></div>
            <div><strong>Period:</strong> <span contentEditable={true} suppressContentEditableWarning={true}>Jan 1 - Jan 31, 2024</span></div>
            <div><strong>Analyst:</strong> <span contentEditable={true} suppressContentEditableWarning={true}>John Smith</span></div>
          </div>
        </header>

        {/* Key Metrics Summary */}
        <section className="metrics-section">
          <h2 style={{ color: primaryColor, marginBottom: '20px' }}>📊 Key Performance Metrics</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-value">12,456</div>
              <div className="metric-label">Total Clicks</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">245,789</div>
              <div className="metric-label">Impressions</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">5.07%</div>
              <div className="metric-label">Click-Through Rate</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">$2.34</div>
              <div className="metric-label">Avg. Cost Per Click</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">1,234</div>
              <div className="metric-label">Conversions</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">$29,146</div>
              <div className="metric-label">Total Cost</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">425%</div>
              <div className="metric-label">Return on Ad Spend</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">9.91%</div>
              <div className="metric-label">Conversion Rate</div>
            </div>
          </div>
        </section>

        {/* Trend Charts */}
        <section className="chart-section">
          <h2 style={{ color: primaryColor, marginBottom: '20px' }}>📈 Performance Trends</h2>
          <div className="chart-container">
            [Trend Chart: Spend vs Conversions Over Time]<br />
            {/* API Integration Point: Replace with chart library data */}
          </div>
        </section>

        {/* Campaign Snapshot Table */}
        <section className="table-section">
          <h2 style={{ color: primaryColor, marginBottom: '20px' }}>🎯 Top Performing Campaigns</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Campaign Name</th>
                <th>Impressions</th>
                <th>Clicks</th>
                <th>CTR</th>
                <th>Cost</th>
                <th>Conversions</th>
                <th>ROAS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Search - Brand Terms</td>
                <td>45,632</td>
                <td>3,421</td>
                <td>7.49%</td>
                <td>$8,025</td>
                <td>421</td>
                <td>525%</td>
              </tr>
              <tr>
                <td>Search - Product Terms</td>
                <td>89,156</td>
                <td>4,235</td>
                <td>4.75%</td>
                <td>$9,912</td>
                <td>398</td>
                <td>402%</td>
              </tr>
              <tr>
                <td>Display - Remarketing</td>
                <td>67,890</td>
                <td>2,156</td>
                <td>3.18%</td>
                <td>$5,434</td>
                <td>189</td>
                <td>348%</td>
              </tr>
              <tr>
                <td>Shopping - All Products</td>
                <td>43,111</td>
                <td>2,644</td>
                <td>6.13%</td>
                <td>$5,775</td>
                <td>226</td>
                <td>392%</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Insights & Notes */}
        <section className="insights-section">
          <h3>💡 Key Insights & Analysis</h3>
          <div contentEditable={true} suppressContentEditableWarning={true}>
            <p><strong>Performance Highlights:</strong></p>
            <ul>
              <li>Brand campaigns continue to deliver the highest ROAS at 525%, significantly above account average</li>
              <li>Overall conversion rate improved by 12% compared to previous period</li>
              <li>Cost per acquisition decreased by 8% while maintaining conversion volume</li>
            </ul>
            
            <p><strong>Areas for Optimization:</strong></p>
            <ul>
              <li>Display remarketing campaigns show opportunity for bid optimization</li>
              <li>Product search terms could benefit from negative keyword expansion</li>
              <li>Shopping campaigns performing well but could expand product coverage</li>
            </ul>
          </div>
        </section>

        {/* Recommendations */}
        <section className="insights-section">
          <h3>🚀 Recommendations & Next Steps</h3>
          <div contentEditable={true} suppressContentEditableWarning={true}>
            <ol>
              <li><strong>Increase Budget Allocation:</strong> Shift 15% more budget to brand campaigns given superior ROAS performance</li>
              <li><strong>Expand Keyword Coverage:</strong> Add 50+ new product-related keywords based on search term analysis</li>
              <li><strong>Optimize Display Targeting:</strong> Refine audience segments for remarketing campaigns to improve CTR</li>
              <li><strong>Landing Page Testing:</strong> A/B test product landing pages to improve conversion rates further</li>
              <li><strong>Competitor Analysis:</strong> Monitor competitive landscape for new keyword opportunities</li>
            </ol>
          </div>
        </section>

        {/* Footer */}
        <footer className="report-footer">
          <div contentEditable={true} suppressContentEditableWarning={true}>
            <strong>Report prepared by:</strong> <span contentEditable={true} suppressContentEditableWarning={true}>Digital Marketing Agency</span><br />
            <span contentEditable={true} suppressContentEditableWarning={true}>contact@agency.com | (555) 123-4567</span><br />
            <span contentEditable={true} suppressContentEditableWarning={true}>Generated on: January 31, 2024</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AccountPerformance;