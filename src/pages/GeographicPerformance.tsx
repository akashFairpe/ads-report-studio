import React, { useState } from 'react';
import ExportButtons from "@/components/ExportButtons";

interface LocationData {
  country: string;
  flag: string;
  impressions: number;
  clicks: number;
  ctr: number;
  cpc: number;
  conversions: number;
  roas: number;
}

const GeographicPerformance = () => {
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [primaryColor, setPrimaryColor] = useState('#2563eb');
  const [logoUrl, setLogoUrl] = useState('');

  const locationData: LocationData[] = [
    { country: 'United States', flag: '🇺🇸', impressions: 456789, clicks: 12345, ctr: 2.70, cpc: 0.95, conversions: 234, roas: 4.2 },
    { country: 'Canada', flag: '🇨🇦', impressions: 234567, clicks: 8901, ctr: 3.80, cpc: 1.12, conversions: 189, roas: 3.8 },
    { country: 'United Kingdom', flag: '🇬🇧', impressions: 189234, clicks: 7891, ctr: 4.17, cpc: 0.89, conversions: 167, roas: 5.1 },
    { country: 'Australia', flag: '🇦🇺', impressions: 345678, clicks: 6789, ctr: 1.96, cpc: 1.23, conversions: 134, roas: 2.9 },
    { country: 'Germany', flag: '🇩🇪', impressions: 567890, clicks: 5678, ctr: 1.00, cpc: 1.67, conversions: 98, roas: 2.1 },
    { country: 'France', flag: '🇫🇷', impressions: 123456, clicks: 4567, ctr: 3.70, cpc: 1.05, conversions: 87, roas: 3.4 },
    { country: 'Japan', flag: '🇯🇵', impressions: 298765, clicks: 8234, ctr: 2.76, cpc: 0.78, conversions: 198, roas: 4.8 },
    { country: 'Brazil', flag: '🇧🇷', impressions: 432109, clicks: 9876, ctr: 2.29, cpc: 1.34, conversions: 156, roas: 3.1 }
  ];

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setLogoUrl(e.target?.result as string);
      reader.readAsDataURL(file);
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
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#374151' }}>
            🌍 Report Branding Controls
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
                style={{ 
                  fontSize: '30px', 
                  fontWeight: 'bold', 
                  marginBottom: '8px', 
                  color: primaryColor 
                }}
              >
                Geographic Performance Report
              </h1>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', fontSize: '14px' }}>
                <div>
                  <strong>Client:</strong>
                  <input 
                    type="text" 
                    defaultValue="Global Marketing Corp" 
                    className="input"
                    style={{ border: 'none', background: 'transparent', marginLeft: '8px', padding: '2px' }}
                  />
                </div>
                <div>
                  <strong>Report Period:</strong>
                  <input 
                    type="text" 
                    defaultValue="Jan 1 - Jan 31, 2024" 
                    className="input"
                    style={{ border: 'none', background: 'transparent', marginLeft: '8px', padding: '2px' }}
                  />
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right', fontSize: '14px', color: '#6b7280' }}>
              <div>Generated: {new Date().toLocaleDateString()}</div>
              <div>
                Analyst: 
                <input 
                  type="text" 
                  defaultValue="Sarah Johnson" 
                  className="input"
                  style={{ border: 'none', background: 'transparent', marginLeft: '8px', padding: '2px' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Overview Metrics */}
        <div className="overview-metrics" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
          <div className="metric-card">
            <div className="metric-value" style={{ color: primaryColor }}>12</div>
            <div className="metric-label">Countries Reached</div>
            <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>+2 vs last period</div>
          </div>
          <div className="metric-card">
            <div className="metric-value" style={{ color: primaryColor }}>892,456</div>
            <div className="metric-label">Total Impressions</div>
            <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>+18.5% vs last period</div>
          </div>
          <div className="metric-card">
            <div className="metric-value" style={{ color: primaryColor }}>24,789</div>
            <div className="metric-label">Total Clicks</div>
            <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>+12.3% vs last period</div>
          </div>
          <div className="metric-card">
            <div className="metric-value" style={{ color: primaryColor }}>$1.89</div>
            <div className="metric-label">Average CPC</div>
            <div style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px' }}>+8.2% vs last period</div>
          </div>
          <div className="metric-card">
            <div className="metric-value" style={{ color: primaryColor }}>1,247</div>
            <div className="metric-label">Total Conversions</div>
            <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>+22.1% vs last period</div>
          </div>
          <div className="metric-card">
            <div className="metric-value" style={{ color: primaryColor }}>3.8x</div>
            <div className="metric-label">Geographic ROAS</div>
            <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>+0.4x vs last period</div>
          </div>
        </div>

        {/* Geographic Visualization */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginBottom: '30px' }}>
          <div className="card">
            <h2 className="card-title" style={{ color: primaryColor }}>Performance by Geographic Region</h2>
            <div className="chart-placeholder">
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '18px', fontWeight: '500' }}>Interactive Geographic Heatmap</p>
                <p style={{ fontSize: '14px', marginTop: '8px' }}>(Countries/States colored by performance metrics)</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h2 className="card-title" style={{ color: primaryColor }}>Top 5 Performing Locations</h2>
            <div>
              {locationData.slice(0, 5).map((location, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  padding: '12px 0', 
                  borderBottom: index < 4 ? '1px solid #e5e7eb' : 'none' 
                }}>
                  <div>
                    <span style={{ marginRight: '8px', fontSize: '18px' }}>{location.flag}</span>
                    <span style={{ fontWeight: '600' }}>{location.country}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: '14px', color: '#6b7280' }}>
                    <span>${(location.conversions * location.cpc * location.roas).toLocaleString()}</span>
                    <span>{location.roas}x ROAS</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Table */}
        <div className="card">
          <h2 className="card-title" style={{ color: primaryColor }}>Geographic Performance Details</h2>
          <div style={{ overflowX: 'auto' }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Impressions</th>
                  <th>Clicks</th>
                  <th>CTR</th>
                  <th>CPC</th>
                  <th>Conversions</th>
                  <th>ROAS</th>
                </tr>
              </thead>
              <tbody>
                {locationData.map((location, index) => (
                  <tr key={index}>
                    <td>
                      <span style={{ marginRight: '8px', fontSize: '16px' }}>{location.flag}</span>
                      <span style={{ fontWeight: '500' }}>{location.country}</span>
                    </td>
                    <td>{location.impressions.toLocaleString()}</td>
                    <td>{location.clicks.toLocaleString()}</td>
                    <td>{location.ctr}%</td>
                    <td>${location.cpc}</td>
                    <td>{location.conversions}</td>
                    <td>{location.roas}x</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Insights & Analysis */}
        <div className="card">
          <h2 className="card-title" style={{ color: primaryColor }}>🌍 Geographic Insights & Analysis</h2>
          <textarea 
            className="textarea"
            defaultValue="Key Geographic Findings:&#10;• North American markets dominate performance, accounting for 65% of total conversions&#10;• English-speaking markets show consistently higher conversion rates&#10;• European markets show higher CPCs but lower conversion rates&#10;• Asia-Pacific region shows strong potential for expansion with competitive CPCs"
            style={{ minHeight: '150px' }}
          />
        </div>

        {/* Export Buttons */}
        <ExportButtons reportTitle="Geographic Performance Report" />

        {/* Footer */}
        <div className="report-footer">
          <div>
            {logoUrl && <img src={logoUrl} alt="Company Logo" style={{ height: '32px' }} />}
          </div>
          <div style={{ fontSize: '12px', color: '#6b7280' }}>
            <p>Geographic Performance Report | Page 1 of 1</p>
            <p>Generated on {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeographicPerformance;