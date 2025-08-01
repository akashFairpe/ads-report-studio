import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import ExportButtons from "@/components/ExportButtons";
import { usePagination } from '@/hooks/usePagination';
import { useBranding } from '@/hooks/useBranding';
import PaginationControls from '@/components/PaginationControls';

const ROASReport = () => {
  const {
    selectedFont,
    setSelectedFont,
    primaryColor,
    setPrimaryColor,
    logoUrl,
    handleLogoUpload,
    reportStyle
  } = useBranding();

  // Sample ROAS data for pagination
  const roasData = [
    { campaign: 'Premium Product Launch', adSpend: '$45,230', revenue: '$198,750', roas: '4.39x', status: 'Excellent' },
    { campaign: 'Brand Awareness', adSpend: '$32,100', revenue: '$124,890', roas: '3.89x', status: 'Good' },
    { campaign: 'Retargeting Campaign', adSpend: '$28,470', revenue: '$97,320', roas: '3.42x', status: 'Good' },
    { campaign: 'Competitor Keywords', adSpend: '$20,000', revenue: '$66,290', roas: '3.31x', status: 'Average' },
    { campaign: 'Search Network - General', adSpend: '$18,567', revenue: '$55,701', roas: '3.00x', status: 'Average' },
    { campaign: 'Shopping Campaigns', adSpend: '$25,890', revenue: '$72,492', roas: '2.80x', status: 'Below Average' },
    { campaign: 'Display Network', adSpend: '$15,234', revenue: '$32,295', roas: '2.12x', status: 'Poor' },
    { campaign: 'Video Advertising', adSpend: '$12,456', revenue: '$33,231', roas: '2.67x', status: 'Below Average' },
    { campaign: 'Mobile App Ads', adSpend: '$9,876', revenue: '$26,349', roas: '2.67x', status: 'Below Average' },
    { campaign: 'Local Services', adSpend: '$8,234', revenue: '$18,927', roas: '2.30x', status: 'Poor' },
    { campaign: 'Performance Max', adSpend: '$22,345', revenue: '$78,207', roas: '3.50x', status: 'Good' },
    { campaign: 'YouTube Shorts', adSpend: '$6,789', revenue: '$12,561', roas: '1.85x', status: 'Poor' }
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
  } = usePagination(roasData, 10);


  return (
    <div className="min-h-screen bg-background" style={reportStyle}>
      {/* Branding Controls */}
      <div className="bg-card border-b p-4 print:hidden">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4">
          <div>
            <Label htmlFor="logo-upload">Company Logo</Label>
            <Input id="logo-upload" type="file" accept="image/*" onChange={handleLogoUpload} className="w-48" />
          </div>
          <div>
            <Label>Font Family</Label>
            <Select value={selectedFont} onValueChange={setSelectedFont}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Inter">Inter</SelectItem>
                <SelectItem value="Roboto">Roboto</SelectItem>
                <SelectItem value="Lato">Lato</SelectItem>
                <SelectItem value="Open Sans">Open Sans</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="color-picker">Primary Color</Label>
            <Input
              id="color-picker"
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="w-16 h-10"
            />
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="text-center border-b pb-6" style={{ pageBreakAfter: 'avoid' }}>
          {logoUrl && (
            <img 
              src={logoUrl} 
              alt="Company Logo" 
              className="mx-auto mb-4 max-h-16 object-contain"
              id="company_logo"
            />
          )}
          <h1 
            className="text-3xl font-bold mb-2"
            contentEditable="true"
            suppressContentEditableWarning={true}
            style={{ color: primaryColor }}
            id="report_title"
          >
            Return on Ad Spend (ROAS) Report
          </h1>
          <div className="text-lg text-muted-foreground space-y-1">
            <p>
              Client: <span contentEditable="true" suppressContentEditableWarning={true} id="client_name" className="font-medium">AdSpyder Analytics</span>
            </p>
            <p>
              Report Period: <span contentEditable="true" suppressContentEditableWarning={true} id="date_range" className="font-medium">January 1, 2024 - January 31, 2024</span>
            </p>
          </div>
        </div>

        {/* Summary Metrics */}
        <Card>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>ROAS Overview</CardTitle>
          </CardHeader>
          <CardContent>
            {/* API-ready metric cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold" id="total_revenue" data-metric="total_revenue">$487,250</div>
                <div className="text-sm text-muted-foreground">Total Revenue</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold" id="total_cost" data-metric="total_cost">$125,800</div>
                <div className="text-sm text-muted-foreground">Total Ad Spend</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-green-600" id="overall_roas" data-metric="overall_roas">3.87x</div>
                <div className="text-sm text-muted-foreground">Overall ROAS</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold" id="avg_order_value" data-metric="avg_order_value">$127.45</div>
                <div className="text-sm text-muted-foreground">Avg Order Value</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ROAS by Campaign Table */}
        <Card style={{ pageBreakInside: 'avoid' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Campaign ROAS Performance</CardTitle>
          </CardHeader>
          <CardContent>
            {/* API-ready table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" id="campaign_roas_table">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-semibold">Campaign</th>
                    <th className="text-right p-2 font-semibold">Ad Spend</th>
                    <th className="text-right p-2 font-semibold">Revenue</th>
                    <th className="text-right p-2 font-semibold">ROAS</th>
                    <th className="text-right p-2 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody id="campaign_roas_data" data-table="campaign_roas">
                  {paginatedData.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2" data-field="campaign_name">{item.campaign}</td>
                      <td className="text-right p-2" data-field="ad_spend">{item.adSpend}</td>
                      <td className="text-right p-2" data-field="revenue">{item.revenue}</td>
                      <td className={`text-right p-2 font-bold ${
                        parseFloat(item.roas) >= 3.5 ? 'text-green-600' : 
                        parseFloat(item.roas) >= 3.0 ? 'text-orange-600' : 'text-red-600'
                      }`} data-field="roas">{item.roas}</td>
                      <td className="text-right p-2">
                        <span className={`px-2 py-1 rounded text-xs ${
                          item.status === 'Excellent' ? 'bg-green-100 text-green-800' :
                          item.status === 'Good' ? 'bg-green-100 text-green-800' :
                          item.status === 'Average' ? 'bg-yellow-100 text-yellow-800' :
                          item.status === 'Below Average' ? 'bg-orange-100 text-orange-800' :
                          'bg-red-100 text-red-800'
                        }`}>{item.status}</span>
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
              totalItems={roasData.length}
              itemsPerPage={10}
            />
          </CardContent>
        </Card>

        {/* ROAS Trend Chart */}
        <Card style={{ pageBreakInside: 'avoid' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>ROAS Trend Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            {/* API-ready chart container */}
            <div className="h-64 bg-muted rounded flex items-center justify-center" id="roas_trend_chart" data-chart="roas_over_time">
              <p className="text-muted-foreground">📈 ROAS Trend Chart</p>
              {/* Chart will be injected here via API */}
            </div>
          </CardContent>
        </Card>

        {/* Top & Bottom Performers */}
        <div className="grid md:grid-cols-2 gap-6" style={{ pageBreakInside: 'avoid' }}>
          <Card>
            <CardHeader>
              <CardTitle style={{ color: primaryColor }}>Top Performers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3" id="top_performers" data-section="top_performers">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span className="font-medium" data-field="campaign">Premium Product Launch</span>
                  <span className="text-green-600 font-bold" data-field="roas">4.39x ROAS</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span className="font-medium" data-field="campaign">Brand Awareness</span>
                  <span className="text-green-600 font-bold" data-field="roas">3.89x ROAS</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span className="font-medium" data-field="campaign">Retargeting Campaign</span>
                  <span className="text-green-600 font-bold" data-field="roas">3.42x ROAS</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle style={{ color: primaryColor }}>Underperforming Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3" id="underperformers" data-section="underperformers">
                <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                  <span className="font-medium" data-field="campaign">Generic Keywords</span>
                  <span className="text-red-600 font-bold" data-field="roas">1.85x ROAS</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                  <span className="font-medium" data-field="campaign">Display Network</span>
                  <span className="text-orange-600 font-bold" data-field="roas">2.12x ROAS</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                  <span className="font-medium" data-field="campaign">Mobile App Ads</span>
                  <span className="text-yellow-600 font-bold" data-field="roas">2.67x ROAS</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Strategic Insights */}
        <Card style={{ pageBreakBefore: 'auto' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Strategic Analysis & Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              className="w-full min-h-[200px] resize-none border-none bg-transparent p-0 focus-visible:ring-0"
              id="strategic_insights"
              defaultValue="Key Performance Insights:
• Overall ROAS of 3.87x exceeds industry benchmark of 3.0x, indicating strong campaign profitability
• Premium Product Launch campaign delivers exceptional 4.39x ROAS, suggesting high-value audience targeting
• Brand Awareness campaigns maintain profitable 3.89x ROAS while building long-term value
• Generic keyword campaigns underperform at 1.85x ROAS and require optimization

Strategic Recommendations:
• Reallocate 20% budget from underperforming generic keywords to Premium Product Launch
• Implement negative keyword strategy to improve generic campaign efficiency
• Expand retargeting audiences based on successful 3.42x ROAS performance
• A/B test ad creatives for Display Network to improve 2.12x ROAS
• Set automated bid adjustments based on ROAS thresholds"
            />
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground border-t pt-4" style={{ pageBreakBefore: 'avoid' }}>
          <p>
            <span contentEditable="true" suppressContentEditableWarning={true} id="footer_text">
              Powered by AdSpyder Analytics | Maximizing Your Advertising ROI
            </span>
          </p>
          <p className="mt-2">Page <span className="page-counter">1</span></p>
        </div>
      </div>

      {/* API Integration Example (commented out) */}
      {/*
      <script>
        // Example API integration for dynamic ROAS data injection
        async function loadROASData() {
          try {
            const response = await fetch('/api/roas-report', {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            
            // Update summary metrics
            document.getElementById('total_revenue').textContent = '$' + data.totalRevenue.toLocaleString();
            document.getElementById('total_cost').textContent = '$' + data.totalCost.toLocaleString();
            document.getElementById('overall_roas').textContent = data.overallRoas + 'x';
            document.getElementById('avg_order_value').textContent = '$' + data.avgOrderValue;
            
            // Update campaign ROAS table
            const tbody = document.getElementById('campaign_roas_data');
            tbody.innerHTML = data.campaigns.map(campaign => `
              <tr class="border-b">
                <td class="p-2">${campaign.name}</td>
                <td class="text-right p-2">$${campaign.spend.toLocaleString()}</td>
                <td class="text-right p-2">$${campaign.revenue.toLocaleString()}</td>
                <td class="text-right p-2 font-bold ${campaign.roas >= 3 ? 'text-green-600' : 'text-orange-600'}">${campaign.roas}x</td>
                <td class="text-right p-2">
                  <span class="${campaign.status.color} px-2 py-1 rounded text-xs">${campaign.status.text}</span>
                </td>
              </tr>
            `).join('');
          } catch (error) {
            console.error('Failed to load ROAS data:', error);
          }
        }
      </script>
      */}
    </div>
  );
};

export default ROASReport;