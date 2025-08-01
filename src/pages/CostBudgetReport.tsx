import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ExportButtons from "@/components/ExportButtons";
import { usePagination } from '@/hooks/usePagination';
import PaginationControls from '@/components/PaginationControls';

const CostBudgetReport = () => {
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [logoUrl, setLogoUrl] = useState('');

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
                Cost & Budget Tracking Report
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
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Total Spend</h3>
            <p className="text-3xl font-bold text-foreground" id="total-spend" data-id="total_spend">$45,678</p>
          </div>
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Planned Budget</h3>
            <p className="text-3xl font-bold text-foreground" id="planned-budget" data-id="planned_budget">$50,000</p>
          </div>
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Budget Used</h3>
            <p className="text-3xl font-bold text-foreground" id="budget-used" data-id="budget_used_percentage">91.4%</p>
          </div>
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Cost per Conversion</h3>
            <p className="text-3xl font-bold text-foreground" id="cost-per-conversion" data-id="cost_per_conversion">$23.45</p>
          </div>
        </div>

        {/* Budget Progress Visualization */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Budget vs Actual Spend</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Current Progress</span>
                <span className="text-sm font-medium" id="progress-percentage" data-id="budget_progress_percentage">91.4%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-6 overflow-hidden">
                <div 
                  className="h-6 rounded-full transition-all duration-300"
                  style={{ 
                    width: '91.4%', 
                    backgroundColor: primaryColor 
                  }}
                  id="progress-bar"
                  data-id="budget_progress_bar"
                ></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground" id="remaining-budget" data-id="remaining_budget">$4,322</p>
                <p className="text-sm text-muted-foreground">Remaining Budget</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground" id="avg-daily-spend" data-id="avg_daily_spend">$1,473</p>
                <p className="text-sm text-muted-foreground">Avg Daily Spend</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground" id="days-remaining" data-id="days_remaining">3</p>
                <p className="text-sm text-muted-foreground">Days Remaining</p>
              </div>
            </div>
          </div>
        </div>

        {/* Budget Alert */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4" id="budget-alert" data-id="budget_alert_section">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-yellow-600 text-xl">⚠️</span>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Budget Alert</h3>
              <p className="mt-1 text-sm text-yellow-700" contentEditable="true" suppressContentEditableWarning={true} id="alert-message" data-id="budget_alert_message">
                You've used 91.4% of your monthly budget with 3 days remaining. Consider adjusting daily spend to stay within budget.
              </p>
            </div>
          </div>
        </div>

        {/* Daily Spend Trend Chart */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Daily Spend Trend</h2>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground" id="daily-spend-chart" data-id="daily_spend_trend_chart">
            {/* API Integration: Replace with dynamic chart data */}
            <div className="text-center">
              <p className="text-lg font-medium">Daily Spend Trend Chart</p>
              <p className="text-sm">Chart will be populated with API data</p>
            </div>
          </div>
        </div>

        {/* Campaign Cost Breakdown */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Campaign Cost Breakdown</h2>
          <div className="overflow-x-auto">
            {/* API Integration Ready - Table with data-id attributes */}
            <table className="w-full border-collapse" id="campaign-costs-table" data-id="campaign_costs_table">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Campaign</th>
                  <th className="text-left p-3 font-semibold">Budget</th>
                  <th className="text-left p-3 font-semibold">Spend</th>
                  <th className="text-left p-3 font-semibold">% Used</th>
                  <th className="text-left p-3 font-semibold">Avg CPC</th>
                  <th className="text-left p-3 font-semibold">Cost/Conv</th>
                  <th className="text-left p-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="p-3 font-medium">{item.campaign}</td>
                    <td className="p-3">{item.budget}</td>
                    <td className="p-3">{item.spend}</td>
                    <td className="p-3">{item.used}</td>
                    <td className="p-3">{item.cpc}</td>
                    <td className="p-3">{item.costConv}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.status === 'On Track' ? 'bg-green-100 text-green-800' :
                        item.status === 'Under Budget' ? 'bg-green-100 text-green-800' :
                        item.status === 'Monitor' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
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
            totalItems={costData.length}
            itemsPerPage={10}
          />
        </div>

        {/* Cost Efficiency Analysis */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Cost Efficiency Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2" style={{ color: primaryColor }}>Most Efficient Campaign</h3>
              <p className="text-lg font-bold text-foreground" id="most-efficient-campaign" data-id="most_efficient_campaign">Brand Keywords Campaign</p>
              <p className="text-sm text-muted-foreground">$18.50 cost per conversion</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2" style={{ color: primaryColor }}>Highest Spend</h3>
              <p className="text-lg font-bold text-foreground" id="highest-spend-campaign" data-id="highest_spend_campaign">Product Category - Running</p>
              <p className="text-sm text-muted-foreground">$18,789 total spend</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2" style={{ color: primaryColor }}>Budget Optimization</h3>
              <p className="text-lg font-bold text-foreground" id="optimization-opportunity" data-id="optimization_opportunity">$1,010</p>
              <p className="text-sm text-muted-foreground">Potential reallocation</p>
            </div>
          </div>
        </div>

        {/* Budget Observations */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Budget Observations & Recommendations</h2>
          <Textarea 
            defaultValue="Current budget utilization shows strong performance across most campaigns. Key observations: 1) Brand Keywords Campaign delivers the lowest cost per conversion at $18.50 and should receive additional budget allocation, 2) Competitor Terms campaign is exceeding budget with high cost per conversion ($35.80) - consider reducing bids or pausing underperforming keywords, 3) Display Remarketing is under-utilizing budget with good efficiency - increase daily budget by 25%, 4) Overall account pacing suggests need for daily spend adjustment to prevent budget exhaustion before month-end."
            className="min-h-32 w-full"
            id="budget-observations"
            data-id="budget_observations"
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
        async function loadCostBudgetData() {
          try {
            const response = await fetch('/api/cost-budget-tracking');
            const data = await response.json();
            
            // Update summary metrics
            document.getElementById('total-spend').textContent = data.totalSpend;
            document.getElementById('planned-budget').textContent = data.plannedBudget;
            document.getElementById('budget-used').textContent = data.budgetUsedPercentage;
            document.getElementById('cost-per-conversion').textContent = data.costPerConversion;
            
            // Update progress bar
            const progressBar = document.getElementById('progress-bar');
            progressBar.style.width = data.budgetUsedPercentage;
            document.getElementById('progress-percentage').textContent = data.budgetUsedPercentage;
            
            // Update budget details
            document.getElementById('remaining-budget').textContent = data.remainingBudget;
            document.getElementById('avg-daily-spend').textContent = data.avgDailySpend;
            document.getElementById('days-remaining').textContent = data.daysRemaining;
            
            // Update campaign costs table
            data.campaigns.forEach((campaign, index) => {
              document.querySelector(`[data-id="campaign_${index + 1}"]`).textContent = campaign.name;
              document.querySelector(`[data-id="budget_${index + 1}"]`).textContent = campaign.budget;
              document.querySelector(`[data-id="spend_${index + 1}"]`).textContent = campaign.spend;
              // ... update other metrics
            });
            
            // Update efficiency analysis
            document.getElementById('most-efficient-campaign').textContent = data.mostEfficientCampaign;
            document.getElementById('highest-spend-campaign').textContent = data.highestSpendCampaign;
            document.getElementById('optimization-opportunity').textContent = data.optimizationOpportunity;
            
            // Update budget alert if needed
            if (data.budgetAlert) {
              document.getElementById('alert-message').textContent = data.budgetAlert.message;
            }
            
            // Render daily spend chart
            renderDailySpendChart(data.dailySpendData);
          } catch (error) {
            console.error('Error loading cost & budget data:', error);
          }
        }
        
        // Call on page load
        document.addEventListener('DOMContentLoaded', loadCostBudgetData);
      </script>
      */}
    </div>
  );
};

export default CostBudgetReport;