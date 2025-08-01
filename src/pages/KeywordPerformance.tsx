import React, { useState } from 'react';
import ExportButtons from "@/components/ExportButtons";

interface KeywordData {
  keyword: string;
  matchType: string;
  impressions: string;
  clicks: string;
  ctr: string;
  cpc: string;
  conversions: string;
  convRate: string;
  roas: string;
}

const KeywordPerformance = () => {
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [primaryColor, setPrimaryColor] = useState('#2563eb');
  const [logoUrl, setLogoUrl] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const itemsPerPage = 10;

  const keywordData: KeywordData[] = [
    { keyword: 'best running shoes', matchType: 'Broad', impressions: '456,789', clicks: '12,345', ctr: '2.70%', cpc: '$0.95', conversions: '234', convRate: '1.89%', roas: '4.2x' },
    { keyword: '"nike air max"', matchType: 'Exact', impressions: '234,567', clicks: '8,901', ctr: '3.80%', cpc: '$1.12', conversions: '189', convRate: '2.12%', roas: '3.8x' },
    { keyword: '+affordable +sneakers', matchType: 'Modified Broad', impressions: '189,234', clicks: '7,891', ctr: '4.17%', cpc: '$0.89', conversions: '167', convRate: '2.12%', roas: '5.1x' },
    { keyword: 'sports shoes sale', matchType: 'Phrase', impressions: '345,678', clicks: '6,789', ctr: '1.96%', cpc: '$1.23', conversions: '134', convRate: '1.97%', roas: '2.9x' },
    { keyword: 'discount athletic shoes', matchType: 'Broad', impressions: '567,890', clicks: '5,678', ctr: '1.00%', cpc: '$1.67', conversions: '98', convRate: '1.73%', roas: '2.1x' },
    { keyword: '"running shoes for women"', matchType: 'Exact', impressions: '123,456', clicks: '4,567', ctr: '3.70%', cpc: '$1.05', conversions: '87', convRate: '1.91%', roas: '3.4x' },
    { keyword: 'marathon running gear', matchType: 'Phrase', impressions: '298,765', clicks: '8,234', ctr: '2.76%', cpc: '$0.78', conversions: '198', convRate: '2.40%', roas: '4.8x' },
    { keyword: 'professional athletic shoes', matchType: 'Broad', impressions: '432,109', clicks: '9,876', ctr: '2.29%', cpc: '$1.34', conversions: '156', convRate: '1.58%', roas: '3.1x' },
    { keyword: '"cross training shoes"', matchType: 'Exact', impressions: '187,654', clicks: '6,543', ctr: '3.49%', cpc: '$0.92', conversions: '123', convRate: '1.88%', roas: '3.6x' },
    { keyword: 'lightweight running sneakers', matchType: 'Phrase', impressions: '365,421', clicks: '7,832', ctr: '2.14%', cpc: '$1.15', conversions: '145', convRate: '1.85%', roas: '2.8x' },
    { keyword: 'premium athletic footwear', matchType: 'Broad', impressions: '254,987', clicks: '5,432', ctr: '2.13%', cpc: '$1.89', conversions: '89', convRate: '1.64%', roas: '2.5x' },
    { keyword: '"trail running shoes"', matchType: 'Exact', impressions: '176,234', clicks: '4,987', ctr: '2.83%', cpc: '$1.07', conversions: '112', convRate: '2.25%', roas: '3.9x' }
  ];

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setLogoUrl(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const getDisplayedData = () => {
    if (showAll) return keywordData;
    const startIndex = (currentPage - 1) * itemsPerPage;
    return keywordData.slice(startIndex, startIndex + itemsPerPage);
  };

  const totalPages = Math.ceil(keywordData.length / itemsPerPage);
  const displayedData = getDisplayedData();

  const reportStyle = {
    fontFamily: selectedFont,
    '--primary-color': primaryColor,
  } as React.CSSProperties;

  return (
    <div className="min-h-screen" style={reportStyle}>
      {/* Branding Controls */}
      <div className="branding-controls">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#374151' }}>
            Report Branding Controls
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            <div className="branding-item">
              <label className="label">Company Logo</label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleLogoUpload} 
                className="input"
              />
            </div>
            <div className="branding-item">
              <label className="label">Font Family</label>
              <select 
                value={selectedFont} 
                onChange={(e) => setSelectedFont(e.target.value)}
                className="select"
              >
                <option value="Inter">Inter</option>
                <option value="Roboto">Roboto</option>
                <option value="Lato">Lato</option>
                <option value="Open Sans">Open Sans</option>
              </select>
            </div>
            <div className="branding-item">
              <label className="label">Primary Color</label>
              <input 
                type="color" 
                value={primaryColor} 
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="input"
                style={{ height: '40px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div className="container">
        {/* Header */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
            <div style={{ flex: '1' }}>
              {logoUrl && (
                <img src={logoUrl} alt="Company Logo" style={{ height: '64px', marginBottom: '16px' }} />
              )}
              <h1 
                contentEditable="true" 
                style={{ 
                  fontSize: '30px', 
                  fontWeight: 'bold', 
                  marginBottom: '8px', 
                  outline: 'none',
                  color: primaryColor 
                }}
                suppressContentEditableWarning={true}
              >
                Keyword Performance Report
              </h1>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', fontSize: '14px' }}>
                <div>
                  <strong>Client:</strong>
                  <span 
                    contentEditable="true" 
                    style={{ marginLeft: '8px', outline: 'none' }}
                    suppressContentEditableWarning={true}
                  >
                    Example Client Name
                  </span>
                </div>
                <div>
                  <strong>Date Range:</strong>
                  <span 
                    contentEditable="true" 
                    style={{ marginLeft: '8px', outline: 'none' }}
                    suppressContentEditableWarning={true}
                  >
                    March 1 - 31, 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Metrics */}
        <div className="overview-metrics">
          <div className="metric-card">
            <div className="metric-value" style={{ color: primaryColor }}>1,245</div>
            <div className="metric-label">Total Keywords</div>
          </div>
          <div className="metric-card">
            <div className="metric-value" style={{ color: primaryColor }}>3,456,789</div>
            <div className="metric-label">Total Impressions</div>
          </div>
          <div className="metric-card">
            <div className="metric-value" style={{ color: primaryColor }}>$1.23</div>
            <div className="metric-label">Average CPC</div>
          </div>
          <div className="metric-card">
            <div className="metric-value" style={{ color: primaryColor }}>2,187</div>
            <div className="metric-label">Total Conversions</div>
          </div>
        </div>

        {/* Top Keywords Chart */}
        <div className="card">
          <h2 className="card-title" style={{ color: primaryColor }}>Top Keywords by Conversions</h2>
          <div className="chart-placeholder">
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '18px', fontWeight: '500' }}>Top Keywords Performance Chart</p>
              <p style={{ fontSize: '14px', marginTop: '8px' }}>Chart will be populated with API data</p>
            </div>
          </div>
        </div>

        {/* Keyword Performance Table */}
        <div className="card">
          <h2 className="card-title" style={{ color: primaryColor }}>Keyword Performance Details</h2>
          <div style={{ overflowX: 'auto' }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Keyword</th>
                  <th>Match Type</th>
                  <th>Impressions</th>
                  <th>Clicks</th>
                  <th>CTR</th>
                  <th>CPC</th>
                  <th>Conversions</th>
                  <th>Conv. Rate</th>
                  <th>ROAS</th>
                </tr>
              </thead>
              <tbody>
                {displayedData.map((keyword, index) => (
                  <tr key={index}>
                    <td style={{ fontWeight: '500' }}>{keyword.keyword}</td>
                    <td>{keyword.matchType}</td>
                    <td>{keyword.impressions}</td>
                    <td>{keyword.clicks}</td>
                    <td>{keyword.ctr}</td>
                    <td>{keyword.cpc}</td>
                    <td>{keyword.conversions}</td>
                    <td>{keyword.convRate}</td>
                    <td>{keyword.roas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="pagination">
            <div className="pagination-info">
              {showAll 
                ? `Showing all ${keywordData.length} entries` 
                : `Showing ${((currentPage - 1) * itemsPerPage) + 1}-${Math.min(currentPage * itemsPerPage, keywordData.length)} of ${keywordData.length} entries`
              }
            </div>
            <div className="pagination-controls">
              <button 
                className="button button-secondary"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? 'Show Pages' : 'View All'}
              </button>
              {!showAll && (
                <>
                  <button 
                    className="button button-secondary"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <span style={{ padding: '8px 16px' }}>
                    Page {currentPage} of {totalPages}
                  </span>
                  <button 
                    className="button button-secondary"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Export Functionality */}
        <ExportButtons reportTitle="Keyword Performance Report" />

        {/* Match Type Performance Analysis */}
        <div className="card">
          <h2 className="card-title" style={{ color: primaryColor }}>Match Type Performance Analysis</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '24px' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontWeight: '600', marginBottom: '8px', color: primaryColor }}>Best Converting Match Type</h3>
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937' }}>Exact Match</p>
              <p style={{ fontSize: '14px', color: '#6b7280' }}>Avg Conv. Rate: 2.02%</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontWeight: '600', marginBottom: '8px', color: primaryColor }}>Highest Volume Keyword</h3>
              <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937' }}>discount athletic shoes</p>
              <p style={{ fontSize: '14px', color: '#6b7280' }}>567,890 impressions</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontWeight: '600', marginBottom: '8px', color: primaryColor }}>Best ROAS Keyword</h3>
              <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937' }}>+affordable +sneakers</p>
              <p style={{ fontSize: '14px', color: '#6b7280' }}>5.1x ROAS</p>
            </div>
          </div>
        </div>

        {/* Negative Keywords Suggestions */}
        <div className="card">
          <h2 className="card-title" style={{ color: primaryColor }}>Negative Keyword Recommendations</h2>
          <div style={{ background: '#f9fafb', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
            <h3 style={{ fontWeight: '600', marginBottom: '8px' }}>Suggested Negative Keywords:</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['free', 'cheap', 'used', 'wholesale', 'bulk', 'second hand'].map((keyword) => (
                <span 
                  key={keyword}
                  style={{ 
                    background: 'white', 
                    padding: '4px 12px', 
                    borderRadius: '20px', 
                    fontSize: '14px', 
                    border: '1px solid #e5e7eb' 
                  }}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="card">
          <h2 className="card-title" style={{ color: primaryColor }}>Keyword Strategy Recommendations</h2>
          <textarea 
            className="textarea"
            defaultValue="Based on keyword performance analysis: 1) Exact match keywords show the highest conversion rates and should receive increased budget allocation, 2) 'Modified broad match' keyword '+affordable +sneakers' delivers exceptional ROAS and warrants similar keyword expansion, 3) Implement suggested negative keywords to reduce wasted spend on irrelevant traffic, 4) Consider adding more long-tail exact match variations of top-performing keywords, 5) Pause or reduce bids on low-performing broad match terms with ROAS below 2.5x."
            style={{ minHeight: '120px' }}
          />
        </div>

        {/* Footer */}
        <div className="report-footer">
          <div>
            {logoUrl && <img src={logoUrl} alt="Company Logo" style={{ height: '32px' }} />}
          </div>
          <div style={{ fontSize: '12px', color: '#6b7280' }}>
            <p>Keyword Performance Report | Page 1 of 1</p>
            <p>Generated on {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordPerformance;