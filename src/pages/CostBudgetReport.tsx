import React, { useState } from 'react';
import ExportButtons from "@/components/ExportButtons";
import { usePagination } from '@/hooks/usePagination';
import PaginationControls from '@/components/PaginationControls';

const CostBudgetReport = () => {
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [logoSrc, setLogoSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiIGZpbGw9IiMzYjgyZjYiLz48dGV4dCB4PSI1MCIgeT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkxPR084L3RleHQ+PC9zdmc+");

  // Sample cost breakdown data for pagination
  const costData = [
    { campaign: 'Brand Keywords Campaign', budget: '$15,000', spend: '$13,245', used: '88.3%', cpc: '$0.95', costConv: '$18.50', status: 'On Track' },
    { campaign: 'Product Category - Running', budget: '$20,000', spend: '$18,789', used: '93.9%', cpc: '$1.23', costConv: '$25.67', status: 'Monitor' },
    { campaign: 'Competitor Terms', budget: '$10,000', spend: '$9,654', used: '96.5%', cpc: '$1.89', costConv: '$35.80', status: 'Over Budget' },
    { campaign: 'Display Remarketing', budget: '$5,000', spend: '$3,990', used: '79.8%', cpc: '$0.67', costConv: '$19.95', status: 'Under Budget' },
    { campaign: 'Search Network - General', budget: '$12,000', spend: '$10,567', used: '88.1%', cpc: '$1.12', costConv: '$22.45', status: 'On Track' },
    { campaign: 'Video Advertising', budget: '$8,000', spend: '$7,234', used: '90.4%', cpc: '$0.78', costConv: '$28.90', status: 'On Track' },
    { campaign: 'Shopping Campaigns', budget: '$18,000', spend: '$16,789', used: '93.3%', cpc: '$1.34', costConv: '$24.67', status: 'Monitor' },
    { campaign: 'Local Services', budget: '$6,000', spend: '$4,567', used: '76.1%', cpc: '$2.12', costConv: '$45.78', status: 'Under Budget' },
    { campaign: 'App Install Campaign', budget: '$9,000', spend: '$8,123', used: '90.3%', cpc: '$0.89', costConv: '$18.95', status: 'On Track' },
    { campaign: 'Performance Max', budget: '$14,000', spend: '$12,890', used: '92.1%', cpc: '$1.05', costConv: '$21.34', status: 'Monitor' },
    { campaign: 'YouTube Shorts', budget: '$4,000', spend: '$3,123', used: '78.1%', cpc: '$0.45', costConv: '$16.78', status: 'Under Budget' },
    { campaign: 'Discovery Campaigns', budget: '$7,000', spend: '$6,234', used: '89.1%', cpc: '$0.98', costConv: '$26.45', status: 'On Track' }
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
  } = usePagination(costData, 10);

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
        }

        .data-table td {
          padding: 12px 15px;
          border-bottom: 1px solid var(--border-color);
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

        .status-on-track {
          background: rgba(52, 168, 83, 0.2);
          color: var(--success-color);
        }

        .status-monitor {
          background: rgba(251, 188, 4, 0.2);
          color: var(--warning-color);
        }

        .status-over-budget {
          background: rgba(234, 67, 53, 0.2);
          color: var(--danger-color);
        }

        .status-under-budget {
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
          <ExportButtons reportTitle="Cost Budget Report" />
        </div>
      </div>

      <div className="container">
        {/* Report Header */}
        <header className="report-header">
          <div className="logo-container">
            <img src={logoSrc} alt="Company Logo" />
          </div>
          <div className="report-title">
            <h1>Cost & Budget Report</h1>
            <div>Campaign Budget Analysis</div>
          </div>
          <div className="report-meta">
            <div><strong>Account:</strong> ABC Company</div>
            <div><strong>Period:</strong> Jan 1 - Jan 31, 2024</div>
            <div><strong>Analyst:</strong> Budget Team</div>
          </div>
        </header>

        {/* Cost Budget Table */}
        <section className="cost-budget-section">
          <h2 style={{ color: primaryColor, marginBottom: '20px' }}>💰 Campaign Budget Performance</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Budget</th>
                <th>Spend</th>
                <th>% Used</th>
                <th>Avg CPC</th>
                <th>Cost/Conv</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr key={index}>
                  <td>{item.campaign}</td>
                  <td>{item.budget}</td>
                  <td>{item.spend}</td>
                  <td>{item.used}</td>
                  <td>{item.cpc}</td>
                  <td>{item.costConv}</td>
                  <td>
                    <span className={`status-badge ${
                      item.status === 'On Track' ? 'status-on-track' : 
                      item.status === 'Monitor' ? 'status-monitor' : 
                      item.status === 'Over Budget' ? 'status-over-budget' : 'status-under-budget'
                    }`}>
                      {item.status}
                    </span>
                  </td>
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
            totalItems={costData.length}
            itemsPerPage={10}
          />
        </section>

        {/* Insights */}
        <section className="insights-section">
          <h3>💡 Budget Management Insights</h3>
          <div>
            <p><strong>Budget Efficiency:</strong></p>
            <ul>
              <li>Brand campaigns showing optimal budget utilization</li>
              <li>Competitor terms requiring budget adjustment</li>
              <li>Display remarketing has room for increased investment</li>
            </ul>
            
            <p><strong>Optimization Recommendations:</strong></p>
            <ul>
              <li>Reallocate budget from under-performing campaigns</li>
              <li>Increase bids for under-budget high performers</li>
              <li>Implement budget pacing for over-spending campaigns</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="report-footer">
          <div>
            <strong>Cost Budget Report prepared by:</strong> Budget Management Team<br />
            budget@company.com | (555) 123-4567<br />
            Generated on: January 31, 2024
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CostBudgetReport;