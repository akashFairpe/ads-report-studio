import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ExportButtons from "@/components/ExportButtons";
import { usePagination } from '@/hooks/usePagination';
import PaginationControls from '@/components/PaginationControls';

const AdPerformance = () => {
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [logoUrl, setLogoUrl] = useState('');

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
      const url = URL.createObjectURL(file);
      setLogoUrl(url);
    }
  };

  const applyFont = (font: string) => {
    document.documentElement.style.setProperty('--report-font', font);
  };

  React.useEffect(() => {
    applyFont(selectedFont);
  }, [selectedFont]);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
  }, [primaryColor]);

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: `var(--report-font, ${selectedFont})` }}>
      {/* Branding Controls */}
      <div className="bg-card border-b p-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-semibold mb-4 text-card-foreground">Report Branding Controls</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-card-foreground">Company Logo</label>
              <Input type="file" accept="image/*" onChange={handleLogoUpload} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-card-foreground">Font Family</label>
              <select 
                value={selectedFont} 
                onChange={(e) => setSelectedFont(e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              >
                <option value="Inter">Inter</option>
                <option value="Roboto">Roboto</option>
                <option value="Lato">Lato</option>
                <option value="Open Sans">Open Sans</option>
                <option value="Poppins">Poppins</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-card-foreground">Primary Color</label>
              <Input 
                type="color" 
                value={primaryColor} 
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="h-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="bg-card rounded-lg shadow-sm border p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              {logoUrl && (
                <img src={logoUrl} alt="Company Logo" className="h-16 mb-4" id="company-logo" />
              )}
              <h1 
                contentEditable="true" 
                className="text-3xl font-bold mb-2 outline-none"
                style={{ color: primaryColor }}
                suppressContentEditableWarning={true}
                id="report-title"
              >
                Ad Performance Report
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Client:</strong> 
                  <span contentEditable="true" className="ml-2 outline-none" suppressContentEditableWarning={true} id="client-name">
                    Example Client Name
                  </span>
                </div>
                <div>
                  <strong>Date Range:</strong> 
                  <span contentEditable="true" className="ml-2 outline-none" suppressContentEditableWarning={true} id="date-range">
                    March 1 - 31, 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* API Integration Ready - Add data-id attributes for dynamic data injection */}
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Total Ads</h3>
            <p className="text-3xl font-bold text-foreground" id="total-ads" data-id="total_ads">156</p>
          </div>
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Total Impressions</h3>
            <p className="text-3xl font-bold text-foreground" id="total-impressions" data-id="total_impressions">2,456,789</p>
          </div>
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Average CTR</h3>
            <p className="text-3xl font-bold text-foreground" id="avg-ctr" data-id="avg_ctr">1.85%</p>
          </div>
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Total Conversions</h3>
            <p className="text-3xl font-bold text-foreground" id="total-conversions" data-id="total_conversions">1,234</p>
          </div>
        </div>

        {/* Ad Performance Comparison Chart */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>CTR vs Conversion Rate by Ad Type</h2>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground" id="performance-chart" data-id="ad_performance_chart">
            {/* API Integration: Replace with dynamic chart data */}
            <div className="text-center">
              <p className="text-lg font-medium">Ad Performance Comparison Chart</p>
              <p className="text-sm">Chart will be populated with API data</p>
            </div>
          </div>
        </div>

        {/* Top Performing Ads Table */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Top Performing Ads</h2>
          <div className="overflow-x-auto">
            {/* API Integration Ready - Table with data-id attributes */}
            <table className="w-full border-collapse" id="ads-table" data-id="top_ads_table">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Headline</th>
                  <th className="text-left p-3 font-semibold">Type</th>
                  <th className="text-left p-3 font-semibold">Impressions</th>
                  <th className="text-left p-3 font-semibold">Clicks</th>
                  <th className="text-left p-3 font-semibold">CTR</th>
                  <th className="text-left p-3 font-semibold">CPC</th>
                  <th className="text-left p-3 font-semibold">Conversions</th>
                  <th className="text-left p-3 font-semibold">ROAS</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((ad, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="p-3 font-medium">{ad.headline}</td>
                    <td className="p-3">{ad.type}</td>
                    <td className="p-3">{ad.impressions}</td>
                    <td className="p-3">{ad.clicks}</td>
                    <td className="p-3">{ad.ctr}</td>
                    <td className="p-3">{ad.cpc}</td>
                    <td className="p-3">{ad.conversions}</td>
                    <td className="p-3">{ad.roas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
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
        </div>

        {/* Export Functionality */}
        <div className="bg-card rounded-lg shadow-sm border p-6 print:hidden">
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Export Report</h2>
          <ExportButtons reportTitle="Ad Performance Report" />
        </div>

        {/* Ad Performance Insights */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Performance Analysis & Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2" style={{ color: primaryColor }}>Best Performing Ad Type</h3>
              <p className="text-2xl font-bold text-foreground" id="best-ad-type" data-id="best_ad_type">Responsive Search</p>
              <p className="text-sm text-muted-foreground">Avg CTR: 2.33%</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2" style={{ color: primaryColor }}>Highest Converting Ad</h3>
              <p className="text-lg font-bold text-foreground" id="top-converting-ad" data-id="top_converting_ad">Best Product Sale</p>
              <p className="text-sm text-muted-foreground">234 conversions</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2" style={{ color: primaryColor }}>Best ROAS</h3>
              <p className="text-2xl font-bold text-foreground" id="best-roas" data-id="best_roas">4.2x</p>
              <p className="text-sm text-muted-foreground">Ad ID: RSA-001</p>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Recommendations & Next Steps</h2>
          <Textarea 
            defaultValue="Based on the ad performance analysis, Responsive Search Ads are showing superior performance with higher CTRs and conversion rates. We recommend: 1) Increase budget allocation to top-performing RSAs, 2) Test additional headlines similar to 'Best Product Sale' messaging, 3) Pause or optimize underperforming Display ads, 4) A/B test urgency-based copy like 'Limited Time Offer' across more ad groups."
            className="min-h-32 w-full"
            id="recommendations"
            data-id="analyst_recommendations"
          />
        </div>

        {/* Footer */}
        <div className="bg-card rounded-lg shadow-sm border p-6 text-center" style={{ pageBreakBefore: 'auto' }}>
          <div className="flex justify-between items-center">
            <div>
              {logoUrl && <img src={logoUrl} alt="Company Logo" className="h-8" />}
            </div>
            <div className="text-sm text-muted-foreground">
              <span contentEditable="true" suppressContentEditableWarning={true} id="footer-text">
                Powered by AdSpyder | Page 1 of 1
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* API Integration Script Template */}
      {/*
      <script>
        // Sample API integration for dynamic data injection
        async function loadAdPerformanceData() {
          try {
            const response = await fetch('/api/ad-performance');
            const data = await response.json();
            
            // Update summary metrics
            document.getElementById('total-ads').textContent = data.totalAds;
            document.getElementById('total-impressions').textContent = data.totalImpressions;
            document.getElementById('avg-ctr').textContent = data.avgCtr;
            document.getElementById('total-conversions').textContent = data.totalConversions;
            
            // Update insights
            document.getElementById('best-ad-type').textContent = data.bestAdType;
            document.getElementById('top-converting-ad').textContent = data.topConvertingAd;
            document.getElementById('best-roas').textContent = data.bestRoas;
            
            // Update table data
            data.topAds.forEach((ad, index) => {
              document.querySelector(`[data-id="headline_${index + 1}"]`).textContent = ad.headline;
              document.querySelector(`[data-id="type_${index + 1}"]`).textContent = ad.type;
              document.querySelector(`[data-id="impressions_${index + 1}"]`).textContent = ad.impressions;
              // ... update other metrics
            });
            
            // Render performance chart
            renderAdPerformanceChart(data.chartData);
          } catch (error) {
            console.error('Error loading ad performance data:', error);
          }
        }
        
        // Call on page load
        document.addEventListener('DOMContentLoaded', loadAdPerformanceData);
      </script>
      */}
    </div>
  );
};

export default AdPerformance;