import React, { useState } from 'react';
import ExportButtons from "@/components/ExportButtons";
import { usePagination } from '@/hooks/usePagination';
import PaginationControls from '@/components/PaginationControls';

const AdPerformance = () => {
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [logoSrc, setLogoSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiIGZpbGw9IiMzYjgyZjYiLz48dGV4dCB4PSI1MCIgeT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkxPR084L3RleHQ+PC9zdmc+");

  // Sample data for pagination
  const adData = [
    { headline: 'Best Product Sale - 50% Off Today!', type: 'Responsive Search', impressions: '456,789', clicks: '12,345', ctr: '2.70%', cpc: '$0.95', conversions: '234', roas: '4.2x' },
    { headline: 'Free Shipping - Order Now', type: 'Expanded Text', impressions: '234,567', clicks: '8,901', ctr: '3.80%', cpc: '$1.12', conversions: '189', roas: '3.8x' },
    { headline: 'Premium Quality Products', type: 'Display', impressions: '789,123', clicks: '7,891', ctr: '1.00%', cpc: '$1.45', conversions: '156', roas: '3.2x' },
    { headline: 'Limited Time Offer - Act Fast!', type: 'Responsive Search', impressions: '345,678', clicks: '6,789', ctr: '1.96%', cpc: '$1.23', conversions: '134', roas: '2.9x' },
    { headline: 'Expert Solutions for Your Business', type: 'Expanded Text', impressions: '567,890', clicks: '5,678', ctr: '1.00%', cpc: '$1.67', conversions: '98', roas: '2.1x' },
    { headline: 'Summer Sale - Up to 70% Off', type: 'Responsive Search', impressions: '432,100', clicks: '9,876', ctr: '2.29%', cpc: '$0.87', conversions: '267', roas: '3.9x' },
    { headline: 'New Arrivals - Shop Now', type: 'Display', impressions: '654,321', clicks: '8,765', ctr: '1.34%', cpc: '$1.78', conversions: '145', roas: '2.7x' },
    { headline: 'Black Friday Special Deals', type: 'Responsive Search', impressions: '876,543', clicks: '14,567', ctr: '1.66%', cpc: '$0.92', conversions: '389', roas: '4.5x' },
    { headline: 'Customer Reviews: 5 Stars', type: 'Expanded Text', impressions: '321,654', clicks: '7,432', ctr: '2.31%', cpc: '$1.34', conversions: '198', roas: '3.4x' },
    { headline: 'Money Back Guarantee', type: 'Responsive Search', impressions: '543,210', clicks: '11,098', ctr: '2.04%', cpc: '$1.15', conversions: '245', roas: '3.1x' },
    { headline: 'Fast Delivery - Same Day', type: 'Display', impressions: '765,432', clicks: '6,543', ctr: '0.85%', cpc: '$2.10', conversions: '87', roas: '1.8x' },
    { headline: 'Eco-Friendly Products', type: 'Expanded Text', impressions: '210,987', clicks: '5,234', ctr: '2.48%', cpc: '$1.56', conversions: '156', roas: '2.9x' }
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
  } = usePagination(adData, 10);

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
          <ExportButtons reportTitle="Ad Performance Report" />
        </div>
      </div>

      <div className="container">
        {/* Report Header */}
        <header className="report-header">
          <div className="logo-container">
            <img src={logoSrc} alt="Company Logo" />
          </div>
          <div className="report-title">
            <h1>Ad Performance Report</h1>
            <div>Creative Performance Analysis</div>
          </div>
          <div className="report-meta">
            <div><strong>Account:</strong> ABC Company</div>
            <div><strong>Period:</strong> Jan 1 - Jan 31, 2024</div>
            <div><strong>Analyst:</strong> Creative Team</div>
          </div>
        </header>

        {/* Ad Performance Table */}
        <section className="ad-performance-section">
          <h2 style={{ color: primaryColor, marginBottom: '20px' }}>🎨 Ad Creative Performance</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Headline</th>
                <th>Ad Type</th>
                <th>Impressions</th>
                <th>Clicks</th>
                <th>CTR</th>
                <th>CPC</th>
                <th>Conversions</th>
                <th>ROAS</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((ad, index) => (
                <tr key={index}>
                  <td>{ad.headline}</td>
                  <td>{ad.type}</td>
                  <td>{ad.impressions}</td>
                  <td>{ad.clicks}</td>
                  <td>{ad.ctr}</td>
                  <td>{ad.cpc}</td>
                  <td>{ad.conversions}</td>
                  <td>{ad.roas}</td>
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
            totalItems={adData.length}
            itemsPerPage={10}
          />
        </section>

        {/* Insights */}
        <section className="insights-section">
          <h3>💡 Ad Performance Insights</h3>
          <div>
            <p><strong>Top Performing Ad Types:</strong></p>
            <ul>
              <li>Responsive Search Ads showing strong CTR performance</li>
              <li>Sale-focused headlines driving high conversion rates</li>
              <li>Urgency messaging improving click-through rates</li>
            </ul>
            
            <p><strong>Creative Optimization Opportunities:</strong></p>
            <ul>
              <li>Test more promotional messaging variations</li>
              <li>Optimize Display ad creative performance</li>
              <li>A/B test headlines with different value propositions</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="report-footer">
          <div>
            <strong>Ad Performance Report prepared by:</strong> Creative Analytics Team<br />
            creative@company.com | (555) 123-4567<br />
            Generated on: January 31, 2024
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdPerformance;