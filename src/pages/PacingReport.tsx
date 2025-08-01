import React, { useState } from 'react';
import ExportButtons from "@/components/ExportButtons";
import { usePagination } from '@/hooks/usePagination';
import PaginationControls from '@/components/PaginationControls';

const PacingReport = () => {
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [logoSrc, setLogoSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiIGZpbGw9IiMzYjgyZjYiLz48dGV4dCB4PSI1MCIgeT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkxPR084L3RleHQ+PC9zdmc+");

  // Sample pacing data for pagination
  const pacingData = [
    { campaign: 'Brand Keywords Campaign', budget: '$15,000', spend: '$13,245', expected: '$13,548', pacing: '97.8%', status: 'On Pace', action: 'None' },
    { campaign: 'Product Category - Running', budget: '$20,000', spend: '$18,789', expected: '$18,064', pacing: '104.0%', status: 'Over Pace', action: 'Reduce bids 10%' },
    { campaign: 'Competitor Terms', budget: '$10,000', spend: '$9,654', expected: '$9,032', pacing: '106.9%', status: 'High Risk', action: 'Pause low performers' },
    { campaign: 'Display Remarketing', budget: '$5,000', spend: '$3,990', expected: '$4,516', pacing: '88.4%', status: 'Under Pace', action: 'Increase bids 15%' },
    { campaign: 'Search Network - General', budget: '$12,000', spend: '$10,987', expected: '$10,840', pacing: '101.4%', status: 'Over Pace', action: 'Monitor closely' },
    { campaign: 'Video Advertising', budget: '$8,000', spend: '$7,234', expected: '$7,226', pacing: '100.1%', status: 'On Pace', action: 'None' },
    { campaign: 'Shopping Campaigns', budget: '$18,000', spend: '$16,234', expected: '$16,260', pacing: '99.8%', status: 'On Pace', action: 'None' },
    { campaign: 'Local Services', budget: '$6,000', spend: '$4,890', expected: '$5,419', pacing: '90.2%', status: 'Under Pace', action: 'Increase budget' },
    { campaign: 'App Install Campaign', budget: '$9,000', spend: '$8,567', expected: '$8,130', pacing: '105.4%', status: 'Over Pace', action: 'Reduce daily budget' },
    { campaign: 'Performance Max', budget: '$14,000', spend: '$12,456', expected: '$12,645', pacing: '98.5%', status: 'On Pace', action: 'None' },
    { campaign: 'YouTube Shorts', budget: '$4,000', spend: '$3,123', expected: '$3,613', pacing: '86.4%', status: 'Under Pace', action: 'Expand targeting' },
    { campaign: 'Discovery Campaigns', budget: '$7,000', spend: '$6,789', expected: '$6,322', pacing: '107.4%', status: 'High Risk', action: 'Immediate review' }
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
  } = usePagination(pacingData, 10);

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
      '--secondary-color': '#f8f9fa',
      '--success-color': '#34a853',
      '--warning-color': '#fbbc04',
      '--danger-color': '#ea4335'
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

        .status-badge {
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
        }

        .status-on-pace {
          background: rgba(52, 168, 83, 0.2);
          color: var(--success-color);
        }

        .status-over-pace {
          background: rgba(251, 188, 4, 0.2);
          color: var(--warning-color);
        }

        .status-high-risk {
          background: rgba(234, 67, 53, 0.2);
          color: var(--danger-color);
        }

        .status-under-pace {
          background: rgba(52, 168, 83, 0.2);
          color: var(--success-color);
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

          .data-table {
            font-size: 12px;
          }

          .data-table th,
          .data-table td {
            padding: 8px 6px;
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
          <ExportButtons reportTitle="Pacing Report" />
        </div>
      </div>

      <div className="container">
        {/* Report Header */}
        <header className="report-header">
          <div className="logo-container">
            <img src={logoSrc} alt="Company Logo" />
          </div>
          <div className="report-title">
            <h1>Budget Pacing Report</h1>
            <div>Campaign Spend Pacing Analysis</div>
          </div>
          <div className="report-meta">
            <div><strong>Account:</strong> ABC Company</div>
            <div><strong>Period:</strong> Jan 1 - Jan 31, 2024</div>
            <div><strong>Analyst:</strong> Pacing Team</div>
          </div>
        </header>

        {/* Pacing Table */}
        <section className="pacing-section">
          <h2 style={{ color: primaryColor, marginBottom: '20px' }}>📊 Campaign Pacing Status</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Budget</th>
                <th>Current Spend</th>
                <th>Expected Spend</th>
                <th>Pacing %</th>
                <th>Status</th>
                <th>Recommended Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr key={index}>
                  <td>{item.campaign}</td>
                  <td>{item.budget}</td>
                  <td>{item.spend}</td>
                  <td>{item.expected}</td>
                  <td>{item.pacing}</td>
                  <td>
                    <span className={`status-badge ${
                      item.status === 'On Pace' ? 'status-on-pace' : 
                      item.status === 'Over Pace' ? 'status-over-pace' : 
                      item.status === 'High Risk' ? 'status-high-risk' : 'status-under-pace'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td>{item.action}</td>
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
            totalItems={pacingData.length}
            itemsPerPage={10}
          />
        </section>

        {/* Insights */}
        <section className="insights-section">
          <h3>💡 Pacing Management Insights</h3>
          <div>
            <p><strong>Pacing Status Overview:</strong></p>
            <ul>
              <li>67% of campaigns are pacing within optimal range (95-105%)</li>
              <li>2 campaigns require immediate attention due to over-pacing</li>
              <li>3 campaigns are under-pacing and could benefit from increased bids</li>
            </ul>
            
            <p><strong>Recommended Actions:</strong></p>
            <ul>
              <li>Implement automated bid adjustments for over-pacing campaigns</li>
              <li>Increase daily budgets for consistent under-performers</li>
              <li>Monitor high-risk campaigns daily for budget overspend</li>
              <li>Consider budget reallocation between campaigns</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="report-footer">
          <div>
            <strong>Pacing Report prepared by:</strong> Budget Pacing Team<br />
            pacing@company.com | (555) 123-4567<br />
            Generated on: January 31, 2024
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PacingReport;