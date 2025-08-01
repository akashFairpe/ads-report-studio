import React, { useState } from 'react';

interface QualityScoreData {
  keyword: string;
  qualityScore: number;
  expectedCtr: string;
  adRelevance: string;
  landingPageExp: string;
  impressions: number;
  clicks: number;
  ctr: number;
  status: string;
}

const QualityScoreAnalysisReport = () => {
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [primaryColor, setPrimaryColor] = useState('#2563eb');
  const [logoUrl, setLogoUrl] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const itemsPerPage = 10;

  const qualityScoreData: QualityScoreData[] = [
    { keyword: "digital marketing", qualityScore: 8, expectedCtr: "Above average", adRelevance: "Above average", landingPageExp: "Above average", impressions: 15420, clicks: 892, ctr: 5.78, status: "Excellent" },
    { keyword: "online advertising", qualityScore: 7, expectedCtr: "Above average", adRelevance: "Average", landingPageExp: "Above average", impressions: 12350, clicks: 654, ctr: 5.29, status: "Good" },
    { keyword: "ppc campaign", qualityScore: 6, expectedCtr: "Average", adRelevance: "Above average", landingPageExp: "Average", impressions: 9875, clicks: 445, ctr: 4.51, status: "Average" },
    { keyword: "google ads", qualityScore: 9, expectedCtr: "Above average", adRelevance: "Above average", landingPageExp: "Above average", impressions: 18920, clicks: 1240, ctr: 6.55, status: "Excellent" },
    { keyword: "search marketing", qualityScore: 5, expectedCtr: "Below average", adRelevance: "Average", landingPageExp: "Average", impressions: 7650, clicks: 298, ctr: 3.89, status: "Poor" },
    { keyword: "conversion optimization", qualityScore: 8, expectedCtr: "Above average", adRelevance: "Above average", landingPageExp: "Above average", impressions: 11200, clicks: 672, ctr: 6.00, status: "Excellent" },
    { keyword: "landing page", qualityScore: 4, expectedCtr: "Below average", adRelevance: "Below average", landingPageExp: "Average", impressions: 6890, clicks: 185, ctr: 2.68, status: "Poor" },
    { keyword: "ad copy", qualityScore: 7, expectedCtr: "Average", adRelevance: "Above average", landingPageExp: "Above average", impressions: 9340, clicks: 512, ctr: 5.48, status: "Good" },
    { keyword: "keyword research", qualityScore: 6, expectedCtr: "Average", adRelevance: "Average", landingPageExp: "Above average", impressions: 8765, clicks: 394, ctr: 4.49, status: "Average" },
    { keyword: "bid management", qualityScore: 8, expectedCtr: "Above average", adRelevance: "Above average", landingPageExp: "Average", impressions: 10450, clicks: 587, ctr: 5.62, status: "Excellent" },
    { keyword: "remarketing", qualityScore: 7, expectedCtr: "Above average", adRelevance: "Average", landingPageExp: "Above average", impressions: 13200, clicks: 726, ctr: 5.50, status: "Good" },
    { keyword: "display advertising", qualityScore: 5, expectedCtr: "Below average", adRelevance: "Average", landingPageExp: "Below average", impressions: 5920, clicks: 201, ctr: 3.39, status: "Poor" }
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
    if (showAll) return qualityScoreData;
    const startIndex = (currentPage - 1) * itemsPerPage;
    return qualityScoreData.slice(startIndex, startIndex + itemsPerPage);
  };

  const totalPages = Math.ceil(qualityScoreData.length / itemsPerPage);
  const displayedData = getDisplayedData();

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Excellent': return 'badge badge-success';
      case 'Good': return 'badge badge-warning';
      case 'Average': return 'badge badge-warning';
      case 'Poor': return 'badge badge-danger';
      default: return 'badge';
    }
  };

  const reportStyle = {
    fontFamily: selectedFont,
    '--primary-color': primaryColor,
  } as React.CSSProperties;

  return (
    <div className="min-h-screen" style={reportStyle}>
      {/* Branding Controls */}
      <div className="branding-controls">
        <div className="branding-row">
          <div className="branding-item">
            <label className="label" htmlFor="logo-upload">Company Logo</label>
            <input 
              id="logo-upload" 
              type="file" 
              accept="image/*" 
              onChange={handleLogoUpload} 
              className="input"
              style={{ width: '200px' }}
            />
          </div>
          <div className="branding-item">
            <label className="label">Font Family</label>
            <select 
              value={selectedFont} 
              onChange={(e) => setSelectedFont(e.target.value)}
              className="select"
              style={{ width: '150px' }}
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
              style={{ width: '80px', height: '40px' }}
            />
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div className="container">
        {/* Header */}
        <div className="report-header">
          <div className="logo-section">
            <img 
              src={logoUrl || "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMjAwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iNjAiIGZpbGw9IiMyNTYzZWIiLz48dGV4dCB4PSIxMDAiIHk9IjM1IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkludGVyIiBmb250LXNpemU9IjE4Ij5Zb3VyIExvZ288L3RleHQ+PC9zdmc+"} 
              alt="Company Logo" 
            />
          </div>
          <div className="report-title">
            <h1 style={{ color: primaryColor }}>Quality Score Analysis Report</h1>
            <div style={{ marginTop: '8px' }}>
              <input 
                type="text" 
                defaultValue="Client Account Name" 
                className="input"
                style={{ border: 'none', background: 'transparent', textAlign: 'center', fontSize: '16px' }}
              />
            </div>
          </div>
          <div className="report-meta">
            <p><strong>Report Period:</strong></p>
            <input type="date" defaultValue="2024-01-01" className="input" style={{ marginBottom: '4px' }} />
            <input type="date" defaultValue="2024-01-31" className="input" />
          </div>
        </div>

        {/* Quality Score Overview */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title" style={{ color: primaryColor }}>Quality Score Overview</h2>
          </div>
          <div className="overview-metrics">
            <div className="metric-card">
              <div className="metric-value" style={{ color: primaryColor }}>6.8</div>
              <div className="metric-label">Average Quality Score</div>
            </div>
            <div className="metric-card">
              <div className="metric-value" style={{ color: primaryColor }}>Above Average</div>
              <div className="metric-label">Expected CTR</div>
            </div>
            <div className="metric-card">
              <div className="metric-value" style={{ color: primaryColor }}>Above Average</div>
              <div className="metric-label">Landing Page Experience</div>
            </div>
            <div className="metric-card">
              <div className="metric-value" style={{ color: primaryColor }}>Above Average</div>
              <div className="metric-label">Ad Relevance</div>
            </div>
          </div>
        </div>

        {/* Quality Score by Keyword Table */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title" style={{ color: primaryColor }}>Quality Score by Keyword</h2>
          </div>
          
          <table className="table">
            <thead>
              <tr>
                <th>Keyword</th>
                <th>Quality Score</th>
                <th>Expected CTR</th>
                <th>Ad Relevance</th>
                <th>Landing Page Exp</th>
                <th>Impressions</th>
                <th>Clicks</th>
                <th>CTR</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map((item, index) => (
                <tr key={index}>
                  <td>{item.keyword}</td>
                  <td><strong>{item.qualityScore}/10</strong></td>
                  <td>{item.expectedCtr}</td>
                  <td>{item.adRelevance}</td>
                  <td>{item.landingPageExp}</td>
                  <td>{item.impressions.toLocaleString()}</td>
                  <td>{item.clicks.toLocaleString()}</td>
                  <td>{item.ctr}%</td>
                  <td><span className={getStatusBadgeClass(item.status)}>{item.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="pagination">
            <div className="pagination-info">
              {showAll 
                ? `Showing all ${qualityScoreData.length} entries` 
                : `Showing ${((currentPage - 1) * itemsPerPage) + 1}-${Math.min(currentPage * itemsPerPage, qualityScoreData.length)} of ${qualityScoreData.length} entries`
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

        {/* Quality Score Trend Chart */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title" style={{ color: primaryColor }}>Quality Score Trend</h2>
          </div>
          <div className="chart-placeholder">
            <p>Quality Score Trend Chart</p>
            <p style={{ fontSize: '14px', marginTop: '8px' }}>(Chart showing quality score changes over time)</p>
          </div>
        </div>

        {/* Quality Score Distribution */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title" style={{ color: primaryColor }}>Quality Score Distribution</h2>
          </div>
          <div className="overview-metrics">
            <div className="metric-card">
              <div className="metric-value" style={{ color: '#ef4444' }}>2</div>
              <div className="metric-label">Poor (1-4)</div>
            </div>
            <div className="metric-card">
              <div className="metric-value" style={{ color: '#f59e0b' }}>4</div>
              <div className="metric-label">Average (5-7)</div>
            </div>
            <div className="metric-card">
              <div className="metric-value" style={{ color: '#10b981' }}>6</div>
              <div className="metric-label">Excellent (8-10)</div>
            </div>
          </div>
        </div>

        {/* Optimization Actions & Insights */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title" style={{ color: primaryColor }}>Optimization Actions & Insights</h2>
          </div>
          <textarea 
            className="textarea"
            placeholder="Enter your strategic analysis and recommendations here..."
            defaultValue="Based on the quality score analysis, focus on improving keywords with scores below 6. Consider revising ad copy for better relevance and optimizing landing pages for better user experience."
            style={{ minHeight: '150px' }}
          />
        </div>

        {/* Export Buttons */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
          <button className="button button-primary">Export to PDF</button>
          <button className="button button-secondary">Export to Excel</button>
          <button className="button button-secondary">Export to CSV</button>
        </div>

        {/* Footer */}
        <div className="report-footer">
          <div>
            <img 
              src={logoUrl || "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMjAwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iNjAiIGZpbGw9IiMyNTYzZWIiLz48dGV4dCB4PSIxMDAiIHk9IjM1IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkludGVyIiBmb250LXNpemU9IjE4Ij5Zb3VyIExvZ288L3RleHQ+PC9zdmc+"} 
              alt="Company Logo" 
              style={{ height: '30px' }}
            />
          </div>
          <div>
            <p>Quality Score Analysis Report | Page 1 of 1</p>
            <p>Generated on {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityScoreAnalysisReport;