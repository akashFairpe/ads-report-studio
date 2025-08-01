import React, { useState } from 'react';
import ExportButtons from "@/components/ExportButtons";
import { Link } from 'react-router-dom';
import { usePagination } from '@/hooks/usePagination';
import PaginationControls from '@/components/PaginationControls';

const AdGroupPerformance = () => {
  const [primaryColor, setPrimaryColor] = useState('#1a73e8');
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [logoSrc, setLogoSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiIGZpbGw9IiMxYTczZTgiLz48dGV4dCB4PSI1MCIgeT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkxPR088L3RleHQ+PC9zdmc+");

  // Sample data for pagination
  const adGroupData = [
    { name: 'Brand Keywords - Core', status: 'Active', impressions: '1,234,567', clicks: '23,456', ctr: '1.90%', cpc: '$0.85', conversions: '892', costConv: '$23.45', convRate: '3.80%' },
    { name: 'Product Category - Shoes', status: 'Active', impressions: '987,654', clicks: '18,901', ctr: '1.91%', cpc: '$1.12', conversions: '567', costConv: '$37.23', convRate: '3.00%' },
    { name: 'Competitor Terms', status: 'Paused', impressions: '456,789', clicks: '8,234', ctr: '1.80%', cpc: '$1.45', conversions: '234', costConv: '$51.23', convRate: '2.84%' },
    { name: 'Long-tail Keywords', status: 'Active', impressions: '234,567', clicks: '5,678', ctr: '2.42%', cpc: '$0.67', conversions: '345', costConv: '$11.23', convRate: '6.08%' },
    { name: 'Seasonal Promotions', status: 'Limited', impressions: '567,890', clicks: '12,345', ctr: '2.17%', cpc: '$1.23', conversions: '456', costConv: '$33.45', convRate: '3.69%' },
    { name: 'Mobile Specific', status: 'Active', impressions: '345,678', clicks: '7,890', ctr: '2.28%', cpc: '$0.98', conversions: '234', costConv: '$18.67', convRate: '2.97%' },
    { name: 'Display Campaigns', status: 'Active', impressions: '678,901', clicks: '9,876', ctr: '1.45%', cpc: '$0.89', conversions: '123', costConv: '$71.45', convRate: '1.25%' },
    { name: 'Video Campaigns', status: 'Paused', impressions: '123,456', clicks: '2,345', ctr: '1.90%', cpc: '$2.45', conversions: '67', costConv: '$85.67', convRate: '2.86%' },
    { name: 'Shopping Campaigns', status: 'Active', impressions: '789,012', clicks: '15,678', ctr: '1.99%', cpc: '$1.34', conversions: '578', costConv: '$36.23', convRate: '3.69%' },
    { name: 'Remarketing Lists', status: 'Active', impressions: '456,123', clicks: '11,234', ctr: '2.46%', cpc: '$0.76', conversions: '456', costConv: '$18.76', convRate: '4.06%' },
    { name: 'Local Campaigns', status: 'Limited', impressions: '234,789', clicks: '4,567', ctr: '1.95%', cpc: '$1.56', conversions: '123', costConv: '$57.89', convRate: '2.69%' },
    { name: 'Performance Max', status: 'Active', impressions: '567,234', clicks: '13,456', ctr: '2.37%', cpc: '$0.92', conversions: '678', costConv: '$18.23', convRate: '5.04%' }
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
  } = usePagination(adGroupData, 10);

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
    <div className="page-background" style={{ 
      fontFamily: selectedFont,
      '--primary-color': primaryColor,
      '--text-color': '#333',
      '--background-color': '#fff',
      '--border-color': '#e0e0e0',
      '--secondary-color': '#f8f9fa',
      '--success-color': '#34a853',
      '--warning-color': '#fbbc04',
      '--danger-color': '#ea4335',
      '--info-color': '#4285f4'
    } as React.CSSProperties}>
      <style>{`
        .page-background {
          background-color: #ffffff;
          min-height: 100vh;
        }

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

        .breadcrumb {
          background: var(--secondary-color);
          padding: 15px 20px;
          border-radius: 8px;
          margin-bottom: 30px;
          font-size: 14px;
        }

        .breadcrumb a {
          color: var(--primary-color);
          text-decoration: none;
        }

        .breadcrumb a:hover {
          text-decoration: underline;
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

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .summary-card {
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          position: relative;
        }

        .summary-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--primary-color);
          border-radius: 8px 8px 0 0;
        }

        .summary-value {
          font-size: 28px;
          font-weight: bold;
          color: var(--primary-color);
          margin-bottom: 5px;
        }

        .summary-label {
          color: #666;
          font-size: 14px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .summary-change {
          font-size: 12px;
          font-weight: bold;
        }

        .summary-change.positive {
          color: var(--success-color);
        }

        .summary-change.negative {
          color: var(--danger-color);
        }

        .summary-change.neutral {
          color: var(--warning-color);
        }

        .chart-grid {
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
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .performance-table {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          margin-bottom: 30px;
        }

        .table-header {
          background: var(--primary-color);
          color: white;
          padding: 15px 20px;
          font-weight: 600;
        }

        .data-table {
          width: 100%;
          border-collapse: collapse;
        }

        .data-table th {
          background: var(--primary-color);
          color: white;
          padding: 15px;
          text-align: left;
          font-weight: 600;
          font-size: 14px;
        }

        .data-table td {
          padding: 12px 15px;
          border-bottom: 1px solid var(--border-color);
          font-size: 14px;
        }

        .data-table tr:hover {
          background-color: var(--secondary-color);
        }

        .data-table tr:nth-child(even) {
          background-color: #fafafa;
        }

        .performance-excellent {
          background: linear-gradient(90deg, rgba(52, 168, 83, 0.1), rgba(52, 168, 83, 0.2));
          border-left: 4px solid var(--success-color);
        }

        .performance-good {
          background: linear-gradient(90deg, rgba(66, 133, 244, 0.1), rgba(66, 133, 244, 0.2));
          border-left: 4px solid var(--info-color);
        }

        .performance-average {
          background: linear-gradient(90deg, rgba(251, 188, 4, 0.1), rgba(251, 188, 4, 0.2));
          border-left: 4px solid var(--warning-color);
        }

        .performance-poor {
          background: linear-gradient(90deg, rgba(234, 67, 53, 0.1), rgba(234, 67, 53, 0.2));
          border-left: 4px solid var(--danger-color);
        }

        .status-badge {
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
        }

        .status-active {
          background: rgba(52, 168, 83, 0.2);
          color: var(--success-color);
        }

        .status-paused {
          background: rgba(251, 188, 4, 0.2);
          color: var(--warning-color);
        }

        .status-limited {
          background: rgba(234, 67, 53, 0.2);
          color: var(--danger-color);
        }

        .keyword-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .keyword-card {
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .keyword-card h4 {
          color: var(--primary-color);
          margin-bottom: 15px;
          font-size: 16px;
        }

        .keyword-list {
          list-style: none;
        }

        .keyword-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .keyword-item:last-child {
          border-bottom: none;
        }

        .keyword-text {
          font-family: monospace;
          background: var(--secondary-color);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 12px;
        }

        .keyword-metrics {
          display: flex;
          gap: 10px;
          font-size: 12px;
        }

        .keyword-metric {
          background: white;
          border: 1px solid var(--border-color);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .creative-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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

        .creative-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .creative-preview {
          background: var(--secondary-color);
          border: 1px dashed var(--border-color);
          padding: 15px;
          border-radius: 4px;
          margin-bottom: 15px;
          font-size: 14px;
          line-height: 1.4;
        }

        .ad-headline {
          font-weight: bold;
          color: #1a0dab;
          margin-bottom: 5px;
        }

        .ad-description {
          color: #666;
          margin-bottom: 5px;
        }

        .ad-url {
          color: var(--success-color);
          font-size: 12px;
        }

        .creative-metrics-grid {
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
          font-size: 18px;
          font-weight: bold;
          color: var(--primary-color);
        }

        .creative-metric-label {
          font-size: 11px;
          color: #666;
          text-transform: uppercase;
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
          
          .summary-grid,
          .keyword-grid,
          .creative-grid {
            grid-template-columns: 1fr;
          }
          
          .chart-grid {
            grid-template-columns: 1fr;
          }
          
          .data-table {
            font-size: 12px;
          }
          
          .data-table th,
          .data-table td {
            padding: 8px 10px;
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
            <img src={logoSrc} alt="Company Logo" />
          </div>
          <div className="report-title">
            <h1 contentEditable={true} suppressContentEditableWarning={true}>
              Ad Group Performance Report
            </h1>
            <div contentEditable={true} suppressContentEditableWarning={true}>
              Detailed Ad Group Analysis
            </div>
          </div>
          <div className="report-meta">
            <div><strong>Account:</strong> <span contentEditable={true} suppressContentEditableWarning={true}>ABC Company</span></div>
            <div><strong>Campaign:</strong> <span contentEditable={true} suppressContentEditableWarning={true}>Search - Product Terms</span></div>
            <div><strong>Period:</strong> <span contentEditable={true} suppressContentEditableWarning={true}>Jan 1 - Jan 31, 2024</span></div>
            <div><strong>Analyst:</strong> <span contentEditable={true} suppressContentEditableWarning={true}>Mike Chen</span></div>
          </div>
        </header>

        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb">
          <span contentEditable={true} suppressContentEditableWarning={true}>
            <Link to="/account-performance" style={{ color: primaryColor, textDecoration: 'none' }}>Account: ABC Company</Link> → 
            <Link to="/campaign-performance" style={{ color: primaryColor, textDecoration: 'none' }}>Campaign: Search - Product Terms</Link> → 
            <strong>Ad Group Performance Analysis</strong>
          </span>
        </nav>

        {/* Summary Metrics */}
        <section className="summary-section">
          <h2 style={{ color: primaryColor, marginBottom: '20px' }}>📊 Ad Group Summary Metrics</h2>
          <div className="summary-grid">
            <div className="summary-card">
              <div className="summary-value">8</div>
              <div className="summary-label">Active Ad Groups</div>
              <div className="summary-change positive">+2 vs last period</div>
            </div>
            <div className="summary-card">
              <div className="summary-value">5.23%</div>
              <div className="summary-label">Average CTR</div>
              <div className="summary-change positive">+0.45% vs last period</div>
            </div>
            <div className="summary-card">
              <div className="summary-value">$24,567</div>
              <div className="summary-label">Total Cost</div>
              <div className="summary-change neutral">+8% vs last period</div>
            </div>
            <div className="summary-card">
              <div className="summary-value">1,045</div>
              <div className="summary-label">Total Conversions</div>
              <div className="summary-change positive">+15% vs last period</div>
            </div>
            <div className="summary-card">
              <div className="summary-value">387%</div>
              <div className="summary-label">Average ROAS</div>
              <div className="summary-change positive">+23% vs last period</div>
            </div>
            <div className="summary-card">
              <div className="summary-value">$23.51</div>
              <div className="summary-label">Average CPA</div>
              <div className="summary-change positive">-12% vs last period</div>
            </div>
          </div>
        </section>

        {/* Comparison Charts */}
        <section className="comparison-section">
          <h2 style={{ color: primaryColor, marginBottom: '20px' }}>📈 Ad Group Performance Comparison</h2>
          <div className="chart-grid">
            <div className="chart-container">
              [Ad Group Performance Comparison Chart: CTR vs Conversion Rate]
            </div>
            <div className="chart-container">
              [Spend vs ROAS by Ad Group Chart]
            </div>
          </div>
        </section>

        {/* Ad Group Performance Table */}
        <section className="performance-table">
          <div className="table-header">
            🎯 Detailed Ad Group Performance Breakdown
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Ad Group Name</th>
                <th>Status</th>
                <th>Impressions</th>
                <th>Clicks</th>
                <th>CTR</th>
                <th>Avg. CPC</th>
                <th>Conversions</th>
                <th>Cost/Conv</th>
                <th>Conv. Rate</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((adGroup, index) => (
                <tr key={index} className="performance-good">
                  <td>{adGroup.name}</td>
                  <td>
                    <span className={`status-badge ${
                      adGroup.status === 'Active' ? 'status-active' : 
                      adGroup.status === 'Paused' ? 'status-paused' : 'status-limited'
                    }`}>
                      {adGroup.status}
                    </span>
                  </td>
                  <td>{adGroup.impressions}</td>
                  <td>{adGroup.clicks}</td>
                  <td>{adGroup.ctr}</td>
                  <td>{adGroup.cpc}</td>
                  <td>{adGroup.conversions}</td>
                  <td>{adGroup.costConv}</td>
                  <td>{adGroup.convRate}</td>
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
            totalItems={adGroupData.length}
            itemsPerPage={10}
          />
        </section>

        {/* Keyword Breakdown */}
        <section className="keyword-section">
          <h2 style={{ color: primaryColor, marginBottom: '20px' }}>🔍 Top Keywords by Ad Group</h2>
          <div className="keyword-grid">
            <div className="keyword-card">
              <h4>Premium Laptops - Top Keywords</h4>
              <ul className="keyword-list">
                <li className="keyword-item">
                  <span className="keyword-text">premium laptop</span>
                  <div className="keyword-metrics">
                    <span className="keyword-metric">CTR: 7.2%</span>
                    <span className="keyword-metric">Conv: 89</span>
                  </div>
                </li>
                <li className="keyword-item">
                  <span className="keyword-text">business laptop</span>
                  <div className="keyword-metrics">
                    <span className="keyword-metric">CTR: 6.8%</span>
                    <span className="keyword-metric">Conv: 67</span>
                  </div>
                </li>
                <li className="keyword-item">
                  <span className="keyword-text">high-end laptop</span>
                  <div className="keyword-metrics">
                    <span className="keyword-metric">CTR: 5.9%</span>
                    <span className="keyword-metric">Conv: 45</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="keyword-card">
              <h4>Gaming Accessories - Top Keywords</h4>
              <ul className="keyword-list">
                <li className="keyword-item">
                  <span className="keyword-text">gaming mouse</span>
                  <div className="keyword-metrics">
                    <span className="keyword-metric">CTR: 6.4%</span>
                    <span className="keyword-metric">Conv: 78</span>
                  </div>
                </li>
                <li className="keyword-item">
                  <span className="keyword-text">mechanical keyboard</span>
                  <div className="keyword-metrics">
                    <span className="keyword-metric">CTR: 5.7%</span>
                    <span className="keyword-metric">Conv: 56</span>
                  </div>
                </li>
                <li className="keyword-item">
                  <span className="keyword-text">gaming headset</span>
                  <div className="keyword-metrics">
                    <span className="keyword-metric">CTR: 5.1%</span>
                    <span className="keyword-metric">Conv: 42</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Creative Performance by Ad Group */}
        <section className="creative-performance">
          <h2 style={{ color: primaryColor, marginBottom: '20px' }}>🎨 Creative Performance by Ad Group</h2>
          <div className="creative-grid">
            <div className="creative-card">
              <div className="creative-header">
                <h4>Premium Laptops - Best Performing Ad</h4>
                <span className="status-badge status-active">Active</span>
              </div>
              <div className="creative-preview">
                <div className="ad-headline">Premium Business Laptops - Professional Grade Performance</div>
                <div className="ad-description">Discover high-performance laptops designed for professionals. Free shipping on orders over $500. 30-day money-back guarantee.</div>
                <div className="ad-url">shop.example.com/laptops/premium</div>
              </div>
              <div className="creative-metrics-grid">
                <div className="creative-metric">
                  <div className="creative-metric-value">6.8%</div>
                  <div className="creative-metric-label">CTR</div>
                </div>
                <div className="creative-metric">
                  <div className="creative-metric-value">156</div>
                  <div className="creative-metric-label">Conversions</div>
                </div>
                <div className="creative-metric">
                  <div className="creative-metric-value">$18.90</div>
                  <div className="creative-metric-label">CPA</div>
                </div>
                <div className="creative-metric">
                  <div className="creative-metric-value">8.5</div>
                  <div className="creative-metric-label">Quality Score</div>
                </div>
              </div>
            </div>

            <div className="creative-card">
              <div className="creative-header">
                <h4>Gaming Accessories - Best Performing Ad</h4>
                <span className="status-badge status-active">Active</span>
              </div>
              <div className="creative-preview">
                <div className="ad-headline">Pro Gaming Gear - Level Up Your Game</div>
                <div className="ad-description">Premium gaming accessories for serious gamers. Mechanical keyboards, precision mice, and immersive headsets. Free 2-day shipping.</div>
                <div className="ad-url">shop.example.com/gaming/accessories</div>
              </div>
              <div className="creative-metrics-grid">
                <div className="creative-metric">
                  <div className="creative-metric-value">5.9%</div>
                  <div className="creative-metric-label">CTR</div>
                </div>
                <div className="creative-metric">
                  <div className="creative-metric-value">124</div>
                  <div className="creative-metric-label">Conversions</div>
                </div>
                <div className="creative-metric">
                  <div className="creative-metric-value">$19.75</div>
                  <div className="creative-metric-label">CPA</div>
                </div>
                <div className="creative-metric">
                  <div className="creative-metric-value">7.8</div>
                  <div className="creative-metric-label">Quality Score</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insights & Analysis */}
        <section className="insights-section">
          <h3>💡 Ad Group Performance Insights</h3>
          <div contentEditable={true} suppressContentEditableWarning={true}>
            <p><strong>Top Performing Ad Groups:</strong></p>
            <ul>
              <li><strong>Premium Laptops:</strong> Leading performer with 6.17% CTR and 467% ROAS, driven by high-intent business keywords</li>
              <li><strong>Gaming Accessories:</strong> Strong engagement (5.41% CTR) with consistent conversion rates across gaming-focused keywords</li>
              <li><strong>Office Software:</strong> Stable performance with good conversion volume, particularly strong with productivity-related terms</li>
            </ul>
            
            <p><strong>Underperforming Areas:</strong></p>
            <ul>
              <li><strong>Smart Watches:</strong> Low CTR (3.03%) and high CPA ($41.69) indicate poor keyword-ad relevance</li>
              <li><strong>Mobile Phones:</strong> High competition driving up costs and reducing Quality Scores</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="report-footer">
          <div contentEditable={true} suppressContentEditableWarning={true}>
            <strong>Ad Group Analysis prepared by:</strong> <span contentEditable={true} suppressContentEditableWarning={true}>Digital Analytics Pro</span><br />
            <span contentEditable={true} suppressContentEditableWarning={true}>analytics@digitalpro.com | (555) 987-6543</span><br />
            <span contentEditable={true} suppressContentEditableWarning={true}>Generated on: January 31, 2024</span>
          </div>
        </footer>

        {/* Export Buttons */}
        <div className="print:hidden" style={{ marginTop: '20px', textAlign: 'center' }}>
          <ExportButtons reportTitle="Ad Group Performance Report" />
        </div>
      </div>
    </div>
  );
};

export default AdGroupPerformance;