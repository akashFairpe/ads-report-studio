import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import ExportButtons from "@/components/ExportButtons";
import { usePagination } from '@/hooks/usePagination';
import PaginationControls from '@/components/PaginationControls';

const ConversionTrackingReport = () => {
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [primaryColor, setPrimaryColor] = useState('#2563eb');
  const [logoUrl, setLogoUrl] = useState('');

  // Sample conversion actions data for pagination
  const conversionActionsData = [
    { actionType: 'Form Submissions', conversions: '687', conversionRate: '4.12%', costPerConversion: '$18.75', conversionValue: '$45,230' },
    { actionType: 'Phone Calls', conversions: '324', conversionRate: '2.89%', costPerConversion: '$32.40', conversionValue: '$28,980' },
    { actionType: 'Purchases', conversions: '236', conversionRate: '2.31%', costPerConversion: '$28.90', conversionValue: '$67,420' },
    { actionType: 'Newsletter Signups', conversions: '189', conversionRate: '3.45%', costPerConversion: '$15.67', conversionValue: '$12,890' },
    { actionType: 'Download Brochure', conversions: '145', conversionRate: '2.78%', costPerConversion: '$22.10', conversionValue: '$8,945' },
    { actionType: 'Quote Requests', conversions: '123', conversionRate: '1.89%', costPerConversion: '$45.67', conversionValue: '$34,567' },
    { actionType: 'Video Views (3+ min)', conversions: '98', conversionRate: '5.23%', costPerConversion: '$12.34', conversionValue: '$5,678' },
    { actionType: 'Demo Requests', conversions: '87', conversionRate: '1.67%', costPerConversion: '$67.89', conversionValue: '$56,789' },
    { actionType: 'App Downloads', conversions: '76', conversionRate: '3.12%', costPerConversion: '$19.45', conversionValue: '$7,234' },
    { actionType: 'Chat Initiations', conversions: '65', conversionRate: '2.34%', costPerConversion: '$25.67', conversionValue: '$4,567' },
    { actionType: 'Webinar Registrations', conversions: '54', conversionRate: '1.45%', costPerConversion: '$34.78', conversionValue: '$12,345' },
    { actionType: 'Product Page Views', conversions: '43', conversionRate: '6.78%', costPerConversion: '$8.90', conversionValue: '$2,345' }
  ];

  // Sample attribution models data for pagination
  const attributionModelsData = [
    { model: 'Last Click', conversions: '1,247', value: '$141,630', costPerConv: '$24.50' },
    { model: 'First Click', conversions: '1,089', value: '$128,940', costPerConv: '$28.05' },
    { model: 'Linear', conversions: '1,156', value: '$135,890', costPerConv: '$26.42' },
    { model: 'Data-Driven', conversions: '1,203', value: '$139,245', costPerConv: '$25.38' },
    { model: 'Time Decay', conversions: '1,178', value: '$133,567', costPerConv: '$27.12' },
    { model: 'Position Based', conversions: '1,134', value: '$131,245', costPerConv: '$28.90' }
  ];

  const {
    currentPage: conversionPage,
    paginatedData: paginatedConversions,
    exportData: exportConversions,
    totalPages: conversionTotalPages,
    hasNextPage: conversionHasNext,
    hasPrevPage: conversionHasPrev,
    showAll: conversionShowAll,
    goToNextPage: conversionNextPage,
    goToPrevPage: conversionPrevPage,
    toggleShowAll: conversionToggleShowAll,
    resetPagination: conversionResetPagination
  } = usePagination(conversionActionsData, 10);

  const {
    currentPage: attributionPage,
    paginatedData: paginatedAttributions,
    exportData: exportAttributions,
    totalPages: attributionTotalPages,
    hasNextPage: attributionHasNext,
    hasPrevPage: attributionHasPrev,
    showAll: attributionShowAll,
    goToNextPage: attributionNextPage,
    goToPrevPage: attributionPrevPage,
    toggleShowAll: attributionToggleShowAll,
    resetPagination: attributionResetPagination
  } = usePagination(attributionModelsData, 10);

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
            Conversion Tracking Performance Report
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
            <CardTitle style={{ color: primaryColor }}>Conversion Overview</CardTitle>
          </CardHeader>
          <CardContent>
            {/* API-ready metric cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold" id="total_conversions" data-metric="total_conversions">1,247</div>
                <div className="text-sm text-muted-foreground">Total Conversions</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold" id="conversion_rate" data-metric="conversion_rate">3.42%</div>
                <div className="text-sm text-muted-foreground">Conversion Rate</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold" id="cost_per_acquisition" data-metric="cost_per_acquisition">$24.50</div>
                <div className="text-sm text-muted-foreground">Cost Per Acquisition</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold" id="assisted_conversions" data-metric="assisted_conversions">892</div>
                <div className="text-sm text-muted-foreground">Assisted Conversions</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conversion Actions Table */}
        <Card style={{ pageBreakInside: 'avoid' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Conversion Actions Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            {/* API-ready table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" id="conversion_actions_table">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-semibold">Action Type</th>
                    <th className="text-right p-2 font-semibold">Conversions</th>
                    <th className="text-right p-2 font-semibold">Conversion Rate</th>
                    <th className="text-right p-2 font-semibold">Cost/Conv</th>
                    <th className="text-right p-2 font-semibold">Conv. Value</th>
                  </tr>
                </thead>
                <tbody id="conversion_actions_data" data-table="conversion_actions">
                  {paginatedConversions.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2" data-field="action_type">{item.actionType}</td>
                      <td className="text-right p-2" data-field="conversions">{item.conversions}</td>
                      <td className="text-right p-2" data-field="conversion_rate">{item.conversionRate}</td>
                      <td className="text-right p-2" data-field="cost_per_conversion">{item.costPerConversion}</td>
                      <td className="text-right p-2" data-field="conversion_value">{item.conversionValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <PaginationControls
              currentPage={conversionPage}
              totalPages={conversionTotalPages}
              hasNextPage={conversionHasNext}
              hasPrevPage={conversionHasPrev}
              showAll={conversionShowAll}
              onNextPage={conversionNextPage}
              onPrevPage={conversionPrevPage}
              onToggleShowAll={conversionToggleShowAll}
              totalItems={conversionActionsData.length}
              itemsPerPage={10}
            />
          </CardContent>
        </Card>

        {/* Conversions Over Time Chart */}
        <Card style={{ pageBreakInside: 'avoid' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Conversions Trend</CardTitle>
          </CardHeader>
          <CardContent>
            {/* API-ready chart container */}
            <div className="h-64 bg-muted rounded flex items-center justify-center" id="conversions_chart" data-chart="conversions_over_time">
              <p className="text-muted-foreground">📈 Conversions Over Time Chart</p>
              {/* Chart will be injected here via API */}
            </div>
          </CardContent>
        </Card>

        {/* Attribution Model Comparison */}
        <Card style={{ pageBreakInside: 'avoid' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Attribution Model Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" id="attribution_comparison_table">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-semibold">Attribution Model</th>
                    <th className="text-right p-2 font-semibold">Conversions</th>
                    <th className="text-right p-2 font-semibold">Conv. Value</th>
                    <th className="text-right p-2 font-semibold">Cost/Conv</th>
                  </tr>
                </thead>
                <tbody id="attribution_data" data-table="attribution_models">
                  {paginatedAttributions.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2" data-field="model">{item.model}</td>
                      <td className="text-right p-2" data-field="conversions">{item.conversions}</td>
                      <td className="text-right p-2" data-field="value">{item.value}</td>
                      <td className="text-right p-2" data-field="cost_per_conv">{item.costPerConv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <PaginationControls
              currentPage={attributionPage}
              totalPages={attributionTotalPages}
              hasNextPage={attributionHasNext}
              hasPrevPage={attributionHasPrev}
              showAll={attributionShowAll}
              onNextPage={attributionNextPage}
              onPrevPage={attributionPrevPage}
              onToggleShowAll={attributionToggleShowAll}
              totalItems={attributionModelsData.length}
              itemsPerPage={10}
            />
          </CardContent>
        </Card>

        {/* Insights & Recommendations */}
        <Card style={{ pageBreakBefore: 'auto' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Analysis & Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              className="w-full min-h-[200px] resize-none border-none bg-transparent p-0 focus-visible:ring-0"
              id="insights_recommendations"
              defaultValue="Key Insights:
• Form submissions show the highest conversion rate at 4.12%, indicating strong landing page performance
• Data-driven attribution model reveals 25.38 cost per conversion, suggesting optimization potential
• Phone call conversions have higher individual value but lower volume

Recommendations:
• Increase budget allocation to form submission campaigns
• Implement data-driven attribution for more accurate conversion tracking
• A/B test phone call ad copy to improve conversion rates
• Set up enhanced conversions for better tracking accuracy"
            />
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground border-t pt-4" style={{ pageBreakBefore: 'avoid' }}>
          <p>
            <span contentEditable="true" suppressContentEditableWarning={true} id="footer_text">
              Powered by AdSpyder Analytics | Professional PPC Management
            </span>
          </p>
          <p className="mt-2">Page <span className="page-counter">1</span></p>
        </div>
      </div>

      {/* API Integration Example (commented out) */}
      {/*
      <script>
        // Example API integration for dynamic data injection
        async function loadConversionData() {
          try {
            const response = await fetch('/api/conversion-tracking', {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            
            // Update summary metrics
            document.getElementById('total_conversions').textContent = data.totalConversions;
            document.getElementById('conversion_rate').textContent = data.conversionRate + '%';
            document.getElementById('cost_per_acquisition').textContent = '$' + data.costPerAcquisition;
            document.getElementById('assisted_conversions').textContent = data.assistedConversions;
            
            // Update conversion actions table
            const tbody = document.getElementById('conversion_actions_data');
            tbody.innerHTML = data.conversionActions.map(action => `
              <tr class="border-b">
                <td class="p-2">${action.type}</td>
                <td class="text-right p-2">${action.conversions}</td>
                <td class="text-right p-2">${action.rate}%</td>
                <td class="text-right p-2">$${action.cost}</td>
                <td class="text-right p-2">$${action.value}</td>
              </tr>
            `).join('');
          } catch (error) {
            console.error('Failed to load conversion data:', error);
          }
        }
      </script>
      */}
    </div>
  );
};

export default ConversionTrackingReport;