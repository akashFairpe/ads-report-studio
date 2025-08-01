import React, { useState } from 'react';
import ExportButtons from "@/components/ExportButtons";
import { usePagination } from '@/hooks/usePagination';
import PaginationControls from '@/components/PaginationControls';

const SearchTermReport = () => {
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [logoSrc, setLogoSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiIGZpbGw9IiMzYjgyZjYiLz48dGV4dCB4PSI1MCIgeT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkxPR084L3RleHQ+PC9zdmc+");

  // Sample search terms data for pagination
  const searchTermsData = [
    { searchTerm: 'best running shoes for marathon', keyword: 'running shoes', matchType: 'Broad', impressions: '45,678', clicks: '2,234', ctr: '4.89%', cpc: '$0.95', conversions: '187', status: 'High Performer' },
    { searchTerm: 'nike air max 270 sale', keyword: 'nike air max', matchType: 'Phrase', impressions: '23,456', clicks: '1,456', ctr: '6.21%', cpc: '$1.12', conversions: '89', status: 'High Performer' },
    { searchTerm: 'cheap athletic shoes', keyword: 'athletic shoes', matchType: 'Broad', impressions: '78,901', clicks: '789', ctr: '1.00%', cpc: '$0.45', conversions: '12', status: 'Review Needed' },
    { searchTerm: 'free running apps', keyword: 'running', matchType: 'Broad', impressions: '12,345', clicks: '234', ctr: '1.90%', cpc: '$0.67', conversions: '0', status: 'Consider Negative' },
    { searchTerm: 'women running shoes size 8', keyword: 'women running shoes', matchType: 'Phrase', impressions: '34,567', clicks: '1,234', ctr: '3.57%', cpc: '$1.23', conversions: '67', status: 'High Performer' },
    { searchTerm: 'running shoes repair', keyword: 'running shoes', matchType: 'Broad', impressions: '5,678', clicks: '89', ctr: '1.57%', cpc: '$0.89', conversions: '1', status: 'Consider Negative' },
    { searchTerm: 'adidas ultraboost review', keyword: 'adidas ultraboost', matchType: 'Phrase', impressions: '19,876', clicks: '987', ctr: '4.97%', cpc: '$1.34', conversions: '54', status: 'High Performer' },
    { searchTerm: 'discount running gear', keyword: 'running gear', matchType: 'Broad', impressions: '67,543', clicks: '1,351', ctr: '2.00%', cpc: '$0.78', conversions: '23', status: 'Review Needed' },
    { searchTerm: 'marathon training shoes', keyword: 'marathon shoes', matchType: 'Phrase', impressions: '28,765', clicks: '1,438', ctr: '5.00%', cpc: '$1.56', conversions: '78', status: 'High Performer' },
    { searchTerm: 'how to tie running shoes', keyword: 'running shoes', matchType: 'Broad', impressions: '9,876', clicks: '123', ctr: '1.25%', cpc: '$0.45', conversions: '0', status: 'Consider Negative' },
    { searchTerm: 'best trail running shoes 2024', keyword: 'trail running shoes', matchType: 'Phrase', impressions: '15,432', clicks: '771', ctr: '5.00%', cpc: '$1.89', conversions: '43', status: 'High Performer' },
    { searchTerm: 'running shoes under 50', keyword: 'cheap running shoes', matchType: 'Broad', impressions: '45,678', clicks: '456', ctr: '1.00%', cpc: '$0.67', conversions: '8', status: 'Review Needed' }
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
  } = usePagination(searchTermsData, 10);

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

        .status-high-performer {
          background: rgba(52, 168, 83, 0.2);
          color: var(--success-color);
        }

        .status-review-needed {
          background: rgba(251, 188, 4, 0.2);
          color: var(--warning-color);
        }

        .status-consider-negative {
          background: rgba(234, 67, 53, 0.2);
          color: var(--danger-color);
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
          <ExportButtons reportTitle="Search Term Report" />
        </div>
      </div>

      <div className="container">
        {/* Report Header */}
        <header className="report-header">
          <div className="logo-container">
            <img src={logoSrc} alt="Company Logo" />
          </div>
          <div className="report-title">
            <h1>Search Term Report</h1>
            <div>Query Performance Analysis</div>
          </div>
          <div className="report-meta">
            <div><strong>Account:</strong> ABC Company</div>
            <div><strong>Period:</strong> Jan 1 - Jan 31, 2024</div>
            <div><strong>Analyst:</strong> Data Team</div>
          </div>
        </header>

        {/* Search Terms Table */}
        <section className="search-terms-section">
          <h2 style={{ color: primaryColor, marginBottom: '20px' }}>🔍 Search Terms Performance</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Search Term</th>
                <th>Keyword</th>
                <th>Match Type</th>
                <th>Impressions</th>
                <th>Clicks</th>
                <th>CTR</th>
                <th>CPC</th>
                <th>Conversions</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((term, index) => (
                <tr key={index}>
                  <td>{term.searchTerm}</td>
                  <td>{term.keyword}</td>
                  <td>{term.matchType}</td>
                  <td>{term.impressions}</td>
                  <td>{term.clicks}</td>
                  <td>{term.ctr}</td>
                  <td>{term.cpc}</td>
                  <td>{term.conversions}</td>
                  <td>
                    <span className={`status-badge ${
                      term.status === 'High Performer' ? 'status-high-performer' : 
                      term.status === 'Review Needed' ? 'status-review-needed' : 'status-consider-negative'
                    }`}>
                      {term.status}
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
            totalItems={searchTermsData.length}
            itemsPerPage={10}
          />
        </section>

        {/* Insights */}
        <section className="insights-section">
          <h3>💡 Search Term Insights</h3>
          <div>
            <p><strong>High Performing Terms:</strong></p>
            <ul>
              <li>Marathon-related searches show strong conversion rates</li>
              <li>Specific product searches (Nike Air Max) perform well</li>
              <li>Brand + product combinations drive quality traffic</li>
            </ul>
            
            <p><strong>Optimization Opportunities:</strong></p>
            <ul>
              <li>Consider negative keywords for non-converting informational searches</li>
              <li>Review broad match performance for quality improvements</li>
              <li>Expand successful phrase match terms</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="report-footer">
          <div>
            <strong>Search Term Report prepared by:</strong> Digital Analytics Team<br />
            analytics@company.com | (555) 123-4567<br />
            Generated on: January 31, 2024
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SearchTermReport;