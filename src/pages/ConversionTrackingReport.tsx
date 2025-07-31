import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import ExportButtons from "@/components/ExportButtons";

const ConversionTrackingReport = () => {
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [primaryColor, setPrimaryColor] = useState('#2563eb');
  const [logoUrl, setLogoUrl] = useState('');

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
                  <tr className="border-b">
                    <td className="p-2" data-field="action_type">Form Submissions</td>
                    <td className="text-right p-2" data-field="conversions">687</td>
                    <td className="text-right p-2" data-field="conversion_rate">4.12%</td>
                    <td className="text-right p-2" data-field="cost_per_conversion">$18.75</td>
                    <td className="text-right p-2" data-field="conversion_value">$45,230</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2" data-field="action_type">Phone Calls</td>
                    <td className="text-right p-2" data-field="conversions">324</td>
                    <td className="text-right p-2" data-field="conversion_rate">2.89%</td>
                    <td className="text-right p-2" data-field="cost_per_conversion">$32.40</td>
                    <td className="text-right p-2" data-field="conversion_value">$28,980</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2" data-field="action_type">Purchases</td>
                    <td className="text-right p-2" data-field="conversions">236</td>
                    <td className="text-right p-2" data-field="conversion_rate">2.31%</td>
                    <td className="text-right p-2" data-field="cost_per_conversion">$28.90</td>
                    <td className="text-right p-2" data-field="conversion_value">$67,420</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
                  <tr className="border-b">
                    <td className="p-2" data-field="model">Last Click</td>
                    <td className="text-right p-2" data-field="conversions">1,247</td>
                    <td className="text-right p-2" data-field="value">$141,630</td>
                    <td className="text-right p-2" data-field="cost_per_conv">$24.50</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2" data-field="model">First Click</td>
                    <td className="text-right p-2" data-field="conversions">1,089</td>
                    <td className="text-right p-2" data-field="value">$128,940</td>
                    <td className="text-right p-2" data-field="cost_per_conv">$28.05</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2" data-field="model">Linear</td>
                    <td className="text-right p-2" data-field="conversions">1,156</td>
                    <td className="text-right p-2" data-field="value">$135,890</td>
                    <td className="text-right p-2" data-field="cost_per_conv">$26.42</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2" data-field="model">Data-Driven</td>
                    <td className="text-right p-2" data-field="conversions">1,203</td>
                    <td className="text-right p-2" data-field="value">$139,245</td>
                    <td className="text-right p-2" data-field="cost_per_conv">$25.38</td>
                  </tr>
                </tbody>
              </table>
            </div>
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