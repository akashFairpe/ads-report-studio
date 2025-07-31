import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SearchTermReport = () => {
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [logoUrl, setLogoUrl] = useState('');

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
                Search Term Report
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
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Total Search Terms</h3>
            <p className="text-3xl font-bold text-foreground" id="total-search-terms" data-id="total_search_terms">2,847</p>
          </div>
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Total Clicks</h3>
            <p className="text-3xl font-bold text-foreground" id="total-clicks" data-id="total_clicks">156,789</p>
          </div>
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Average CTR</h3>
            <p className="text-3xl font-bold text-foreground" id="avg-ctr" data-id="avg_ctr">3.24%</p>
          </div>
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Total Conversions</h3>
            <p className="text-3xl font-bold text-foreground" id="total-conversions" data-id="total_conversions">4,567</p>
          </div>
        </div>

        {/* Search Term Volume Chart */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Search Term Volume Distribution</h2>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground" id="search-terms-chart" data-id="search_terms_volume_chart">
            {/* API Integration: Replace with dynamic chart data */}
            <div className="text-center">
              <p className="text-lg font-medium">Search Term Volume Chart</p>
              <p className="text-sm">Chart will be populated with API data</p>
            </div>
          </div>
        </div>

        {/* Search Terms Performance Table */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Search Terms Performance Details</h2>
          <div className="overflow-x-auto">
            {/* API Integration Ready - Table with data-id attributes */}
            <table className="w-full border-collapse" id="search-terms-table" data-id="search_terms_performance_table">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Search Term</th>
                  <th className="text-left p-3 font-semibold">Associated Keyword</th>
                  <th className="text-left p-3 font-semibold">Match Type</th>
                  <th className="text-left p-3 font-semibold">Impressions</th>
                  <th className="text-left p-3 font-semibold">Clicks</th>
                  <th className="text-left p-3 font-semibold">CTR</th>
                  <th className="text-left p-3 font-semibold">CPC</th>
                  <th className="text-left p-3 font-semibold">Conversions</th>
                  <th className="text-left p-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-3 font-medium" data-id="search_term_1">best running shoes for marathon</td>
                  <td className="p-3" data-id="keyword_1">running shoes</td>
                  <td className="p-3" data-id="match_type_1">Broad</td>
                  <td className="p-3" data-id="impressions_1">45,678</td>
                  <td className="p-3" data-id="clicks_1">2,234</td>
                  <td className="p-3" data-id="ctr_1">4.89%</td>
                  <td className="p-3" data-id="cpc_1">$0.95</td>
                  <td className="p-3" data-id="conversions_1">187</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">High Performer</span></td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-3 font-medium" data-id="search_term_2">nike air max 270 sale</td>
                  <td className="p-3" data-id="keyword_2">nike air max</td>
                  <td className="p-3" data-id="match_type_2">Phrase</td>
                  <td className="p-3" data-id="impressions_2">23,456</td>
                  <td className="p-3" data-id="clicks_2">1,456</td>
                  <td className="p-3" data-id="ctr_2">6.21%</td>
                  <td className="p-3" data-id="cpc_2">$1.12</td>
                  <td className="p-3" data-id="conversions_2">89</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">High Performer</span></td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-3 font-medium" data-id="search_term_3">cheap athletic shoes</td>
                  <td className="p-3" data-id="keyword_3">athletic shoes</td>
                  <td className="p-3" data-id="match_type_3">Broad</td>
                  <td className="p-3" data-id="impressions_3">78,901</td>
                  <td className="p-3" data-id="clicks_3">789</td>
                  <td className="p-3" data-id="ctr_3">1.00%</td>
                  <td className="p-3" data-id="cpc_3">$0.45</td>
                  <td className="p-3" data-id="conversions_3">12</td>
                  <td className="p-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Review Needed</span></td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-3 font-medium" data-id="search_term_4">free running apps</td>
                  <td className="p-3" data-id="keyword_4">running</td>
                  <td className="p-3" data-id="match_type_4">Broad</td>
                  <td className="p-3" data-id="impressions_4">12,345</td>
                  <td className="p-3" data-id="clicks_4">234</td>
                  <td className="p-3" data-id="ctr_4">1.90%</td>
                  <td className="p-3" data-id="cpc_4">$0.67</td>
                  <td className="p-3" data-id="conversions_4">0</td>
                  <td className="p-3"><span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Consider Negative</span></td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-3 font-medium" data-id="search_term_5">women running shoes size 8</td>
                  <td className="p-3" data-id="keyword_5">women running shoes</td>
                  <td className="p-3" data-id="match_type_5">Phrase</td>
                  <td className="p-3" data-id="impressions_5">34,567</td>
                  <td className="p-3" data-id="clicks_5">1,234</td>
                  <td className="p-3" data-id="ctr_5">3.57%</td>
                  <td className="p-3" data-id="cpc_5">$1.23</td>
                  <td className="p-3" data-id="conversions_5">67</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">High Performer</span></td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-3 font-medium" data-id="search_term_6">running shoes repair</td>
                  <td className="p-3" data-id="keyword_6">running shoes</td>
                  <td className="p-3" data-id="match_type_6">Broad</td>
                  <td className="p-3" data-id="impressions_6">5,678</td>
                  <td className="p-3" data-id="clicks_6">89</td>
                  <td className="p-3" data-id="ctr_6">1.57%</td>
                  <td className="p-3" data-id="cpc_6">$0.89</td>
                  <td className="p-3" data-id="conversions_6">1</td>
                  <td className="p-3"><span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Consider Negative</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Negative Keywords Suggestions */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Negative Keyword Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">High Priority Additions:</h3>
              <div className="space-y-2" id="high-priority-negatives" data-id="high_priority_negative_keywords">
                <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                  <span className="font-medium">free</span>
                  <span className="text-sm text-red-600">234 irrelevant clicks</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                  <span className="font-medium">repair</span>
                  <span className="text-sm text-red-600">89 irrelevant clicks</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                  <span className="font-medium">used</span>
                  <span className="text-sm text-red-600">156 irrelevant clicks</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Consider Adding:</h3>
              <div className="space-y-2" id="medium-priority-negatives" data-id="medium_priority_negative_keywords">
                <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                  <span className="font-medium">cheap</span>
                  <span className="text-sm text-yellow-600">Low conversion rate</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                  <span className="font-medium">wholesale</span>
                  <span className="text-sm text-yellow-600">Wrong target audience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Term Insights */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Search Term Analysis & Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2" style={{ color: primaryColor }}>Best Performing Term</h3>
              <p className="text-lg font-bold text-foreground" id="best-search-term" data-id="best_performing_search_term">nike air max 270 sale</p>
              <p className="text-sm text-muted-foreground">6.21% CTR</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2" style={{ color: primaryColor }}>Most Volume</h3>
              <p className="text-lg font-bold text-foreground" id="highest-volume-term" data-id="highest_volume_search_term">cheap athletic shoes</p>
              <p className="text-sm text-muted-foreground">78,901 impressions</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2" style={{ color: primaryColor }}>Conversion Leader</h3>
              <p className="text-lg font-bold text-foreground" id="top-converting-term" data-id="top_converting_search_term">best running shoes for marathon</p>
              <p className="text-sm text-muted-foreground">187 conversions</p>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Search Term Strategy Recommendations</h2>
          <Textarea 
            defaultValue="Based on search term analysis: 1) Add high-priority negative keywords 'free', 'repair', and 'used' to prevent irrelevant traffic, 2) Create new exact match keywords for top-performing search terms like 'nike air max 270 sale', 3) Consider bid adjustments for broad match keywords triggering low-quality search terms, 4) Expand keyword targeting around 'best running shoes for marathon' theme as it shows strong conversion performance, 5) Review and potentially pause campaigns generating high-volume, low-converting terms like 'cheap athletic shoes'."
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
        async function loadSearchTermData() {
          try {
            const response = await fetch('/api/search-term-performance');
            const data = await response.json();
            
            // Update summary metrics
            document.getElementById('total-search-terms').textContent = data.totalSearchTerms;
            document.getElementById('total-clicks').textContent = data.totalClicks;
            document.getElementById('avg-ctr').textContent = data.avgCtr;
            document.getElementById('total-conversions').textContent = data.totalConversions;
            
            // Update insights
            document.getElementById('best-search-term').textContent = data.bestPerformingTerm;
            document.getElementById('highest-volume-term').textContent = data.highestVolumeTerm;
            document.getElementById('top-converting-term').textContent = data.topConvertingTerm;
            
            // Update search terms table
            data.searchTerms.forEach((term, index) => {
              document.querySelector(`[data-id="search_term_${index + 1}"]`).textContent = term.searchTerm;
              document.querySelector(`[data-id="keyword_${index + 1}"]`).textContent = term.associatedKeyword;
              document.querySelector(`[data-id="match_type_${index + 1}"]`).textContent = term.matchType;
              // ... update other metrics
            });
            
            // Update negative keyword suggestions
            updateNegativeKeywords(data.negativeKeywordSuggestions);
            
            // Render search term volume chart
            renderSearchTermChart(data.chartData);
          } catch (error) {
            console.error('Error loading search term data:', error);
          }
        }
        
        // Call on page load
        document.addEventListener('DOMContentLoaded', loadSearchTermData);
      </script>
      */}
    </div>
  );
};

export default SearchTermReport;