import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const AdVariationPerformanceReport = () => {
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
            Ad Variation Performance Report (A/B Testing)
          </h1>
          <div className="text-lg text-muted-foreground space-y-1">
            <p>
              Client: <span contentEditable="true" suppressContentEditableWarning={true} id="client_name" className="font-medium">AdSpyder Analytics</span>
            </p>
            <p>
              Test Period: <span contentEditable="true" suppressContentEditableWarning={true} id="date_range" className="font-medium">January 1, 2024 - January 31, 2024</span>
            </p>
          </div>
        </div>

        {/* Test Summary */}
        <Card>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>A/B Test Overview</CardTitle>
          </CardHeader>
          <CardContent>
            {/* API-ready metric cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold" id="test_variants" data-metric="test_variants">4</div>
                <div className="text-sm text-muted-foreground">Test Variants</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold" id="test_duration" data-metric="test_duration">30 Days</div>
                <div className="text-sm text-muted-foreground">Test Duration</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-green-600" id="winning_variant" data-metric="winning_variant">Variant B</div>
                <div className="text-sm text-muted-foreground">Winning Ad</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold" id="confidence_level" data-metric="confidence_level">95.2%</div>
                <div className="text-sm text-muted-foreground">Confidence Level</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ad Variations Performance Table */}
        <Card style={{ pageBreakInside: 'avoid' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Ad Variation Performance</CardTitle>
          </CardHeader>
          <CardContent>
            {/* API-ready table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" id="ad_variations_table">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-semibold">Variant</th>
                    <th className="text-left p-2 font-semibold">Headline/Creative</th>
                    <th className="text-right p-2 font-semibold">Impressions</th>
                    <th className="text-right p-2 font-semibold">CTR</th>
                    <th className="text-right p-2 font-semibold">Conversions</th>
                    <th className="text-right p-2 font-semibold">CPC</th>
                    <th className="text-center p-2 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody id="ad_variations_data" data-table="ad_variations">
                  <tr className="border-b">
                    <td className="p-2 font-medium" data-field="variant">Variant A</td>
                    <td className="p-2" data-field="headline">"Transform Your Business Today"</td>
                    <td className="text-right p-2" data-field="impressions">45,230</td>
                    <td className="text-right p-2" data-field="ctr">2.34%</td>
                    <td className="text-right p-2" data-field="conversions">287</td>
                    <td className="text-right p-2" data-field="cpc">$2.45</td>
                    <td className="text-center p-2">
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Control</span>
                    </td>
                  </tr>
                  <tr className="border-b bg-green-50">
                    <td className="p-2 font-medium" data-field="variant">Variant B</td>
                    <td className="p-2" data-field="headline">"Unlock Growth in 30 Days"</td>
                    <td className="text-right p-2" data-field="impressions">44,890</td>
                    <td className="text-right p-2 font-bold text-green-600" data-field="ctr">3.12%</td>
                    <td className="text-right p-2 font-bold text-green-600" data-field="conversions">398</td>
                    <td className="text-right p-2" data-field="cpc">$2.28</td>
                    <td className="text-center p-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Winner</span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium" data-field="variant">Variant C</td>
                    <td className="p-2" data-field="headline">"Boost Revenue Fast"</td>
                    <td className="text-right p-2" data-field="impressions">43,670</td>
                    <td className="text-right p-2" data-field="ctr">2.78%</td>
                    <td className="text-right p-2" data-field="conversions">324</td>
                    <td className="text-right p-2" data-field="cpc">$2.67</td>
                    <td className="text-center p-2">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Competitor</span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium" data-field="variant">Variant D</td>
                    <td className="p-2" data-field="headline">"Start Your Success Journey"</td>
                    <td className="text-right p-2" data-field="impressions">44,120</td>
                    <td className="text-right p-2" data-field="ctr">2.01%</td>
                    <td className="text-right p-2" data-field="conversions">245</td>
                    <td className="text-right p-2" data-field="cpc">$2.89</td>
                    <td className="text-center p-2">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Underperform</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Performance Comparison Chart */}
        <Card style={{ pageBreakInside: 'avoid' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>CTR & Conversion Rate Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            {/* API-ready chart container */}
            <div className="h-64 bg-muted rounded flex items-center justify-center" id="performance_comparison_chart" data-chart="performance_comparison">
              <p className="text-muted-foreground">📊 Performance Comparison Chart</p>
              {/* Chart will be injected here via API */}
            </div>
          </CardContent>
        </Card>

        {/* Winning Ad Showcase */}
        <Card style={{ pageBreakInside: 'avoid' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Winning Ad Creative</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 border-2 border-green-500 rounded-lg bg-green-50" id="winning_ad_preview" data-section="winning_ad">
                  <div className="text-xs text-muted-foreground mb-2">Ad Preview</div>
                  <h3 className="text-lg font-bold text-green-700" data-field="winning_headline">Unlock Growth in 30 Days</h3>
                  <p className="text-sm text-gray-700 mt-2" data-field="winning_description">
                    Join thousands of businesses that doubled their revenue with our proven system. Start your free trial today.
                  </p>
                  <Button 
                    size="sm" 
                    className="mt-3"
                    style={{ backgroundColor: primaryColor }}
                    data-field="winning_cta"
                  >
                    Get Started Free
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Performance Highlights</h4>
                  <ul className="text-sm space-y-1" id="winning_ad_stats" data-section="winning_stats">
                    <li data-field="improvement_ctr">• 33% higher CTR than control</li>
                    <li data-field="improvement_conversions">• 39% more conversions</li>
                    <li data-field="improvement_cpc">• 7% lower cost per click</li>
                    <li data-field="statistical_significance">• 95.2% statistical significance</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Key Success Factors</h4>
                  <ul className="text-sm space-y-1" id="success_factors" data-section="success_factors">
                    <li data-field="factor_1">• Specific timeframe (30 days)</li>
                    <li data-field="factor_2">• Action-oriented language</li>
                    <li data-field="factor_3">• Clear benefit statement</li>
                    <li data-field="factor_4">• Strong call-to-action</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strategic Insights */}
        <Card style={{ pageBreakBefore: 'auto' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Test Results & Strategic Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              className="w-full min-h-[200px] resize-none border-none bg-transparent p-0 focus-visible:ring-0"
              id="test_insights"
              defaultValue="A/B Test Results Summary:
• Variant B ('Unlock Growth in 30 Days') emerged as the clear winner with 95.2% confidence
• 33% improvement in CTR compared to the control group indicates stronger audience resonance
• 39% increase in conversions demonstrates superior conversion optimization
• Lower CPC of $2.28 vs $2.45 suggests better quality score and relevance

Key Learnings:
• Specific timeframes (30 days) create urgency and set clear expectations
• Action-oriented verbs like 'unlock' perform better than generic terms like 'transform'
• Benefit-focused messaging outperforms feature-focused copy
• Shorter, punchier headlines drive higher engagement

Next Steps & Recommendations:
• Implement Variant B as the new control for all similar campaigns
• Test additional time-based urgency variations (7 days, 14 days, 60 days)
• Apply 'unlock' terminology to other product lines
• Create variations testing different benefit statements
• A/B test landing page headlines to match winning ad copy"
            />
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground border-t pt-4" style={{ pageBreakBefore: 'avoid' }}>
          <p>
            <span contentEditable="true" suppressContentEditableWarning={true} id="footer_text">
              Powered by AdSpyder Analytics | Data-Driven Ad Optimization
            </span>
          </p>
          <p className="mt-2">Page <span className="page-counter">1</span></p>
        </div>
      </div>

      {/* API Integration Example (commented out) */}
      {/*
      <script>
        // Example API integration for dynamic ad variation data injection
        async function loadAdVariationData() {
          try {
            const response = await fetch('/api/ad-variation-performance', {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            
            // Update test summary metrics
            document.getElementById('test_variants').textContent = data.testVariants;
            document.getElementById('test_duration').textContent = data.testDuration;
            document.getElementById('winning_variant').textContent = data.winningVariant;
            document.getElementById('confidence_level').textContent = data.confidenceLevel + '%';
            
            // Update variations table
            const tbody = document.getElementById('ad_variations_data');
            tbody.innerHTML = data.variations.map(variant => `
              <tr class="border-b ${variant.isWinner ? 'bg-green-50' : ''}">
                <td class="p-2 font-medium">${variant.name}</td>
                <td class="p-2">${variant.headline}</td>
                <td class="text-right p-2">${variant.impressions.toLocaleString()}</td>
                <td class="text-right p-2 ${variant.isWinner ? 'font-bold text-green-600' : ''}">${variant.ctr}%</td>
                <td class="text-right p-2 ${variant.isWinner ? 'font-bold text-green-600' : ''}">${variant.conversions}</td>
                <td class="text-right p-2">$${variant.cpc}</td>
                <td class="text-center p-2">
                  <span class="${variant.status.color} px-2 py-1 rounded text-xs">${variant.status.text}</span>
                </td>
              </tr>
            `).join('');
          } catch (error) {
            console.error('Failed to load ad variation data:', error);
          }
        }
      </script>
      */}
    </div>
  );
};

export default AdVariationPerformanceReport;