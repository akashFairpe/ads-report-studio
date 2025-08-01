import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ExportButtons from "@/components/ExportButtons";
import { usePagination } from '@/hooks/usePagination';
import PaginationControls from '@/components/PaginationControls';

const KeywordPerformance = () => {
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [logoUrl, setLogoUrl] = useState('');

  // Sample keyword data for pagination
  const keywordData = [
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
  } = usePagination(keywordData, 10);

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
                Keyword Performance Report
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
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Total Keywords</h3>
            <p className="text-3xl font-bold text-foreground" id="total-keywords" data-id="total_keywords">1,245</p>
          </div>
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Total Impressions</h3>
            <p className="text-3xl font-bold text-foreground" id="total-impressions" data-id="total_impressions">3,456,789</p>
          </div>
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Average CPC</h3>
            <p className="text-3xl font-bold text-foreground" id="avg-cpc" data-id="avg_cpc">$1.23</p>
          </div>
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Total Conversions</h3>
            <p className="text-3xl font-bold text-foreground" id="total-conversions" data-id="total_conversions">2,187</p>
          </div>
        </div>

        {/* Top Keywords Chart */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Top Keywords by Conversions</h2>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground" id="keywords-chart" data-id="top_keywords_chart">
            {/* API Integration: Replace with dynamic chart data */}
            <div className="text-center">
              <p className="text-lg font-medium">Top Keywords Performance Chart</p>
              <p className="text-sm">Chart will be populated with API data</p>
            </div>
          </div>
        </div>

        {/* Keyword Performance Table */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Keyword Performance Details</h2>
          <div className="overflow-x-auto">
            {/* API Integration Ready - Table with data-id attributes */}
            <table className="w-full border-collapse" id="keywords-table" data-id="keywords_performance_table">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Keyword</th>
                  <th className="text-left p-3 font-semibold">Match Type</th>
                  <th className="text-left p-3 font-semibold">Impressions</th>
                  <th className="text-left p-3 font-semibold">Clicks</th>
                  <th className="text-left p-3 font-semibold">CTR</th>
                  <th className="text-left p-3 font-semibold">CPC</th>
                  <th className="text-left p-3 font-semibold">Conversions</th>
                  <th className="text-left p-3 font-semibold">Conv. Rate</th>
                  <th className="text-left p-3 font-semibold">ROAS</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((keyword, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="p-3 font-medium">{keyword.keyword}</td>
                    <td className="p-3">{keyword.matchType}</td>
                    <td className="p-3">{keyword.impressions}</td>
                    <td className="p-3">{keyword.clicks}</td>
                    <td className="p-3">{keyword.ctr}</td>
                    <td className="p-3">{keyword.cpc}</td>
                    <td className="p-3">{keyword.conversions}</td>
                    <td className="p-3">{keyword.convRate}</td>
                    <td className="p-3">{keyword.roas}</td>
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
            totalItems={keywordData.length}
            itemsPerPage={10}
          />
        </div>

        {/* Export Functionality */}
        <div className="bg-card rounded-lg shadow-sm border p-6 print:hidden">
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Export Report</h2>
          <ExportButtons reportTitle="Keyword Performance Report" />
        </div>

        {/* Match Type Performance Analysis */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Match Type Performance Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2" style={{ color: primaryColor }}>Best Converting Match Type</h3>
              <p className="text-2xl font-bold text-foreground" id="best-match-type" data-id="best_match_type">Exact Match</p>
              <p className="text-sm text-muted-foreground">Avg Conv. Rate: 2.02%</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2" style={{ color: primaryColor }}>Highest Volume Keyword</h3>
              <p className="text-lg font-bold text-foreground" id="top-volume-keyword" data-id="top_volume_keyword">discount athletic shoes</p>
              <p className="text-sm text-muted-foreground">567,890 impressions</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2" style={{ color: primaryColor }}>Best ROAS Keyword</h3>
              <p className="text-lg font-bold text-foreground" id="best-roas-keyword" data-id="best_roas_keyword">+affordable +sneakers</p>
              <p className="text-sm text-muted-foreground">5.1x ROAS</p>
            </div>
          </div>
        </div>

        {/* Negative Keywords Suggestions */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Negative Keyword Recommendations</h2>
          <div className="bg-muted rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2">Suggested Negative Keywords:</h3>
            <div className="flex flex-wrap gap-2" id="negative-keywords" data-id="negative_keywords_list">
              <span className="bg-card px-3 py-1 rounded-full text-sm border">free</span>
              <span className="bg-card px-3 py-1 rounded-full text-sm border">cheap</span>
              <span className="bg-card px-3 py-1 rounded-full text-sm border">used</span>
              <span className="bg-card px-3 py-1 rounded-full text-sm border">wholesale</span>
              <span className="bg-card px-3 py-1 rounded-full text-sm border">bulk</span>
              <span className="bg-card px-3 py-1 rounded-full text-sm border">second hand</span>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Keyword Strategy Recommendations</h2>
          <Textarea 
            defaultValue="Based on keyword performance analysis: 1) Exact match keywords show the highest conversion rates and should receive increased budget allocation, 2) 'Modified broad match' keyword '+affordable +sneakers' delivers exceptional ROAS and warrants similar keyword expansion, 3) Implement suggested negative keywords to reduce wasted spend on irrelevant traffic, 4) Consider adding more long-tail exact match variations of top-performing keywords, 5) Pause or reduce bids on low-performing broad match terms with ROAS below 2.5x."
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
        async function loadKeywordPerformanceData() {
          try {
            const response = await fetch('/api/keyword-performance');
            const data = await response.json();
            
            // Update summary metrics
            document.getElementById('total-keywords').textContent = data.totalKeywords;
            document.getElementById('total-impressions').textContent = data.totalImpressions;
            document.getElementById('avg-cpc').textContent = data.avgCpc;
            document.getElementById('total-conversions').textContent = data.totalConversions;
            
            // Update analysis insights
            document.getElementById('best-match-type').textContent = data.bestMatchType;
            document.getElementById('top-volume-keyword').textContent = data.topVolumeKeyword;
            document.getElementById('best-roas-keyword').textContent = data.bestRoasKeyword;
            
            // Update keyword table
            data.keywords.forEach((keyword, index) => {
              document.querySelector(`[data-id="keyword_${index + 1}"]`).textContent = keyword.keyword;
              document.querySelector(`[data-id="match_type_${index + 1}"]`).textContent = keyword.matchType;
              document.querySelector(`[data-id="impressions_${index + 1}"]`).textContent = keyword.impressions;
              // ... update other metrics
            });
            
            // Update negative keywords suggestions
            const negativeKeywordsContainer = document.getElementById('negative-keywords');
            negativeKeywordsContainer.innerHTML = data.negativeKeywords.map(keyword => 
              `<span class="bg-card px-3 py-1 rounded-full text-sm border">${keyword}</span>`
            ).join('');
            
            // Render keywords chart
            renderKeywordsChart(data.chartData);
          } catch (error) {
            console.error('Error loading keyword performance data:', error);
          }
        }
        
        // Call on page load
        document.addEventListener('DOMContentLoaded', loadKeywordPerformanceData);
      </script>
      */}
    </div>
  );
};

export default KeywordPerformance;