import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ExportButtons from "@/components/ExportButtons";
import { usePagination } from '@/hooks/usePagination';
import PaginationControls from '@/components/PaginationControls';

const PacingReport = () => {
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [logoUrl, setLogoUrl] = useState('');

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
                Pacing Report
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

        {/* Pacing Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* API Integration Ready - Add data-id attributes for dynamic data injection */}
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Monthly Budget</h3>
            <p className="text-3xl font-bold text-foreground" id="monthly-budget" data-id="monthly_budget">$50,000</p>
          </div>
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Days Passed</h3>
            <p className="text-3xl font-bold text-foreground" id="days-passed" data-id="days_passed">28/31</p>
          </div>
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Current Spend</h3>
            <p className="text-3xl font-bold text-foreground" id="current-spend" data-id="current_spend">$45,678</p>
          </div>
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Pacing Rate</h3>
            <p className="text-3xl font-bold text-foreground" id="pacing-rate" data-id="pacing_rate">101.2%</p>
          </div>
        </div>

        {/* Pacing Health Indicator */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Pacing Health Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg bg-yellow-50 border border-yellow-200" id="pacing-status" data-id="pacing_health_status">
              <div className="text-4xl mb-2">⚠️</div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Slightly Over Paced</h3>
              <p className="text-sm text-yellow-700">Spending 1.2% faster than optimal</p>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Expected Spend</span>
                  <span className="text-sm font-medium" id="expected-spend" data-id="expected_spend">$45,161</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="h-3 bg-gray-400 rounded-full"
                    style={{ width: '90.3%' }}
                    data-id="expected_spend_bar"
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Actual Spend</span>
                  <span className="text-sm font-medium" id="actual-spend" data-id="actual_spend">$45,678</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="h-3 rounded-full"
                    style={{ 
                      width: '91.4%', 
                      backgroundColor: primaryColor 
                    }}
                    data-id="actual_spend_bar"
                  ></div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2" style={{ color: primaryColor }}>Projected End Spend</h3>
              <p className="text-2xl font-bold text-foreground" id="projected-spend" data-id="projected_end_spend">$50,600</p>
              <p className="text-sm text-muted-foreground">+$600 over budget</p>
            </div>
          </div>
        </div>

        {/* Pacing Timeline Visualization */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Monthly Spend Progression</h2>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground" id="pacing-timeline" data-id="pacing_timeline_chart">
            {/* API Integration: Replace with dynamic chart data */}
            <div className="text-center">
              <p className="text-lg font-medium">Pacing Timeline Chart</p>
              <p className="text-sm">Chart will be populated with API data showing daily spend vs expected pace</p>
            </div>
          </div>
        </div>

        {/* Campaign Pacing Breakdown */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Campaign Pacing Status</h2>
          <div className="overflow-x-auto">
            {/* API Integration Ready - Table with data-id attributes */}
            <table className="w-full border-collapse" id="campaign-pacing-table" data-id="campaign_pacing_table">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Campaign</th>
                  <th className="text-left p-3 font-semibold">Budget</th>
                  <th className="text-left p-3 font-semibold">Spend</th>
                  <th className="text-left p-3 font-semibold">Expected</th>
                  <th className="text-left p-3 font-semibold">Pacing %</th>
                  <th className="text-left p-3 font-semibold">Status</th>
                  <th className="text-left p-3 font-semibold">Action Needed</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="p-3 font-medium">{item.campaign}</td>
                    <td className="p-3">{item.budget}</td>
                    <td className="p-3">{item.spend}</td>
                    <td className="p-3">{item.expected}</td>
                    <td className="p-3">{item.pacing}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs flex items-center ${
                        item.status === 'On Pace' ? 'bg-green-100 text-green-800' :
                        item.status === 'Over Pace' ? 'bg-yellow-100 text-yellow-800' :
                        item.status === 'High Risk' ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        <span className={`w-2 h-2 rounded-full mr-1 ${
                          item.status === 'On Pace' ? 'bg-green-500' :
                          item.status === 'Over Pace' ? 'bg-yellow-500' :
                          item.status === 'High Risk' ? 'bg-red-500' :
                          'bg-blue-500'
                        }`}></span>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">{item.action}</td>
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
            totalItems={pacingData.length}
            itemsPerPage={10}
          />
        </div>

        {/* Pacing Adjustment Recommendations */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Pacing Adjustment Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-red-600">Immediate Actions Required</h3>
              <div className="space-y-3" id="immediate-actions" data-id="immediate_actions_list">
                <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-medium text-red-800">Competitor Terms Campaign</h4>
                  <p className="text-sm text-red-700 mt-1">Reduce daily budget by 15% or pause underperforming keywords to prevent overspend.</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-medium text-yellow-800">Product Category - Running</h4>
                  <p className="text-sm text-yellow-700 mt-1">Monitor closely and consider 10% bid reduction if pacing continues above 104%.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-blue-600">Optimization Opportunities</h3>
              <div className="space-y-3" id="optimization-opportunities" data-id="optimization_opportunities_list">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-800">Display Remarketing</h4>
                  <p className="text-sm text-blue-700 mt-1">Increase daily budget by 15% to maximize impression share with remaining budget.</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-800">Brand Keywords Campaign</h4>
                  <p className="text-sm text-green-700 mt-1">Well-paced campaign - consider allocating budget from over-paced campaigns.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Recommendations */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Strategic Pacing Recommendations</h2>
          <Textarea 
            defaultValue="Current pacing analysis reveals the account is running 1.2% over the optimal pace, projected to exceed budget by $600. Immediate action required: 1) Reduce Competitor Terms campaign budget by 15% due to 106.9% pacing rate and high cost per conversion, 2) Monitor Product Category - Running campaign and implement 10% bid reduction if overpacing continues, 3) Reallocate budget from over-paced campaigns to Display Remarketing which is under-pacing at 88.4%, 4) Implement automated bid adjustments to maintain optimal pacing through month-end, 5) Consider pausing lowest-performing keywords in over-paced campaigns to preserve budget for high-value conversions."
            className="min-h-32 w-full"
            id="strategic-recommendations"
            data-id="strategic_pacing_recommendations"
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
        async function loadPacingData() {
          try {
            const response = await fetch('/api/pacing-report');
            const data = await response.json();
            
            // Update summary metrics
            document.getElementById('monthly-budget').textContent = data.monthlyBudget;
            document.getElementById('days-passed').textContent = `${data.daysPassed}/${data.totalDays}`;
            document.getElementById('current-spend').textContent = data.currentSpend;
            document.getElementById('pacing-rate').textContent = data.pacingRate;
            
            // Update pacing health status
            const pacingStatus = document.getElementById('pacing-status');
            pacingStatus.className = `text-center p-4 rounded-lg ${data.pacingHealthColor}`;
            pacingStatus.querySelector('h3').textContent = data.pacingHealthStatus;
            
            // Update spend bars
            document.getElementById('expected-spend').textContent = data.expectedSpend;
            document.getElementById('actual-spend').textContent = data.actualSpend;
            document.getElementById('projected-spend').textContent = data.projectedEndSpend;
            
            // Update progress bars
            document.querySelector('[data-id="expected_spend_bar"]').style.width = data.expectedSpendPercentage;
            document.querySelector('[data-id="actual_spend_bar"]').style.width = data.actualSpendPercentage;
            
            // Update campaign pacing table
            data.campaigns.forEach((campaign, index) => {
              document.querySelector(`[data-id="campaign_name_${index + 1}"]`).textContent = campaign.name;
              document.querySelector(`[data-id="campaign_budget_${index + 1}"]`).textContent = campaign.budget;
              document.querySelector(`[data-id="campaign_spend_${index + 1}"]`).textContent = campaign.spend;
              document.querySelector(`[data-id="campaign_expected_${index + 1}"]`).textContent = campaign.expected;
              document.querySelector(`[data-id="campaign_pacing_${index + 1}"]`).textContent = campaign.pacingPercentage;
              // ... update status and actions
            });
            
            // Update recommendations
            updatePacingRecommendations(data.immediateActions, data.optimizationOpportunities);
            
            // Render pacing timeline chart
            renderPacingChart(data.pacingTimelineData);
          } catch (error) {
            console.error('Error loading pacing data:', error);
          }
        }
        
        // Call on page load
        document.addEventListener('DOMContentLoaded', loadPacingData);
      </script>
      */}
    </div>
  );
};

export default PacingReport;