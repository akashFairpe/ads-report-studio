import React, { useState } from 'react';
import ExportButtons from "@/components/ExportButtons";
import { usePagination } from '@/hooks/usePagination';
import PaginationControls from '@/components/PaginationControls';

const DaypartingPerformance = () => {
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [logoSrc, setLogoSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiIGZpbGw9IiMzYjgyZjYiLz48dGV4dCB4PSI1MCIgeT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkxPR084L3RleHQ+PC9zdmc+");

  // Sample dayparting data for pagination
  const daypartingData = [
    { period: '00:00 - 06:00', impressions: '45,123', clicks: '567', ctr: '1.26%', cpc: '$1.23', conversions: '12', convRate: '2.12%' },
    { period: '06:00 - 12:00', impressions: '156,789', clicks: '2,345', ctr: '1.50%', cpc: '$1.15', conversions: '45', convRate: '1.92%' },
    { period: '12:00 - 18:00', impressions: '234,567', clicks: '4,567', ctr: '1.95%', cpc: '$1.08', conversions: '89', convRate: '1.95%' },
    { period: '18:00 - 24:00', impressions: '189,234', clicks: '3,456', ctr: '1.83%', cpc: '$1.19', conversions: '67', convRate: '1.94%' },
    { period: 'Monday Morning', impressions: '98,765', clicks: '1,876', ctr: '1.90%', cpc: '$1.12', conversions: '34', convRate: '1.81%' },
    { period: 'Monday Afternoon', impressions: '123,456', clicks: '2,345', ctr: '1.90%', cpc: '$1.05', conversions: '45', convRate: '1.92%' },
    { period: 'Tuesday Morning', impressions: '105,432', clicks: '2,109', ctr: '2.00%', cpc: '$1.08', conversions: '41', convRate: '1.94%' },
    { period: 'Tuesday Afternoon', impressions: '134,567', clicks: '2,691', ctr: '2.00%', cpc: '$1.01', conversions: '54', convRate: '2.01%' },
    { period: 'Wednesday Morning', impressions: '112,345', clicks: '2,247', ctr: '2.00%', cpc: '$1.06', conversions: '43', convRate: '1.91%' },
    { period: 'Wednesday Afternoon', impressions: '145,678', clicks: '2,914', ctr: '2.00%', cpc: '$0.99', conversions: '59', convRate: '2.02%' },
    { period: 'Thursday Morning', impressions: '108,765', clicks: '2,175', ctr: '2.00%', cpc: '$1.04', conversions: '42', convRate: '1.93%' },
    { period: 'Thursday Afternoon', impressions: '139,876', clicks: '2,798', ctr: '2.00%', cpc: '$0.97', conversions: '57', convRate: '2.04%' }
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
  } = usePagination(daypartingData, 10);

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
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
      '--secondary-color': '#f8f9fa'
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
              <option value="Poppins">Poppins</option>
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
          <ExportButtons reportTitle="Dayparting Performance Report" />
        </div>
      </div>

      <div className="container">
        {/* Report Header */}
        <header className="report-header">
          <div className="logo-container">
            <img src={logoSrc} alt="Company Logo" />
          </div>
          <div className="report-title">
            <h1>Dayparting Performance Report</h1>
            <div>Time-Based Performance Analysis</div>
          </div>
          <div className="report-meta">
            <div><strong>Account:</strong> ABC Company</div>
            <div><strong>Period:</strong> Jan 1 - Jan 31, 2024</div>
            <div><strong>Analyst:</strong> Performance Team</div>
          </div>
        </header>

        {/* Dayparting Table */}
        <section className="dayparting-section">
          <h2 style={{ color: primaryColor, marginBottom: '20px' }}>⏰ Hourly Performance Breakdown</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Time Period</th>
                <th>Impressions</th>
                <th>Clicks</th>
                <th>CTR</th>
                <th>Avg CPC</th>
                <th>Conversions</th>
                <th>Conv Rate</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((period, index) => (
                <tr key={index}>
                  <td>{period.period}</td>
                  <td>{period.impressions}</td>
                  <td>{period.clicks}</td>
                  <td>{period.ctr}</td>
                  <td>{period.cpc}</td>
                  <td>{period.conversions}</td>
                  <td>{period.convRate}</td>
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
            totalItems={daypartingData.length}
            itemsPerPage={10}
          />
        </section>

        {/* Insights */}
        <section className="insights-section">
          <h3>💡 Dayparting Insights</h3>
          <div>
            <p><strong>Peak Performance Times:</strong></p>
            <ul>
              <li>Afternoon periods (12:00-18:00) showing highest click volume</li>
              <li>Mid-week performance typically stronger than weekends</li>
              <li>Early morning hours have lowest CPC but also lower volume</li>
            </ul>
            
            <p><strong>Optimization Recommendations:</strong></p>
            <ul>
              <li>Increase bids during high-converting afternoon periods</li>
              <li>Consider reducing bids during low-performing early morning hours</li>
              <li>Test weekend-specific ad copy and bidding strategies</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="report-footer">
          <div>
            <strong>Dayparting Report prepared by:</strong> Performance Analytics Team<br />
            performance@company.com | (555) 123-4567<br />
            Generated on: January 31, 2024
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DaypartingPerformance;