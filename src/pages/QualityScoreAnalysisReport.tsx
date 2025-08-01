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

const QualityScoreAnalysisReport = () => {
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [primaryColor, setPrimaryColor] = useState('#2563eb');
  const [logoUrl, setLogoUrl] = useState('');

  // Sample quality score data for pagination
  const qualityScoreData = [
    { keyword: 'digital marketing services', qualityScore: '9', expectedCtr: 'Above average', adRelevance: 'Above average', landingPage: 'Above average', impressions: '45,230' },
    { keyword: 'ppc management', qualityScore: '8', expectedCtr: 'Above average', adRelevance: 'Above average', landingPage: 'Average', impressions: '32,890' },
    { keyword: 'google ads optimization', qualityScore: '6', expectedCtr: 'Average', adRelevance: 'Above average', landingPage: 'Average', impressions: '28,450' },
    { keyword: 'online advertising', qualityScore: '4', expectedCtr: 'Below average', adRelevance: 'Average', landingPage: 'Below average', impressions: '18,670' },
    { keyword: 'search engine marketing', qualityScore: '7', expectedCtr: 'Above average', adRelevance: 'Average', landingPage: 'Above average', impressions: '23,456' },
    { keyword: 'paid search advertising', qualityScore: '8', expectedCtr: 'Above average', adRelevance: 'Above average', landingPage: 'Average', impressions: '19,876' },
    { keyword: 'facebook ads management', qualityScore: '5', expectedCtr: 'Average', adRelevance: 'Below average', landingPage: 'Average', impressions: '15,432' },
    { keyword: 'social media advertising', qualityScore: '6', expectedCtr: 'Average', adRelevance: 'Average', landingPage: 'Average', impressions: '21,098' },
    { keyword: 'conversion rate optimization', qualityScore: '9', expectedCtr: 'Above average', adRelevance: 'Above average', landingPage: 'Above average', impressions: '12,345' },
    { keyword: 'landing page design', qualityScore: '7', expectedCtr: 'Above average', adRelevance: 'Above average', landingPage: 'Average', impressions: '16,789' },
    { keyword: 'ad campaign management', qualityScore: '8', expectedCtr: 'Above average', adRelevance: 'Above average', landingPage: 'Above average', impressions: '14,567' },
    { keyword: 'digital advertising agency', qualityScore: '5', expectedCtr: 'Below average', adRelevance: 'Average', landingPage: 'Below average', impressions: '11,234' }
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
  } = usePagination(qualityScoreData, 10);

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
            Quality Score Analysis Report
          </h1>
          <div className="text-lg text-muted-foreground space-y-1">
            <p>
              Account: <span contentEditable="true" suppressContentEditableWarning={true} id="account_name" className="font-medium">AdSpyder Analytics</span>
            </p>
            <p>
              Report Period: <span contentEditable="true" suppressContentEditableWarning={true} id="date_range" className="font-medium">January 1, 2024 - January 31, 2024</span>
            </p>
          </div>
        </div>

        {/* Quality Score Overview */}
        <Card>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Quality Score Overview</CardTitle>
          </CardHeader>
          <CardContent>
            {/* API-ready metric cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold" id="avg_quality_score" data-metric="avg_quality_score">7.2</div>
                <div className="text-sm text-muted-foreground">Avg Quality Score</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-green-600" id="expected_ctr" data-metric="expected_ctr">Above Avg</div>
                <div className="text-sm text-muted-foreground">Expected CTR</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-yellow-600" id="landing_page_exp" data-metric="landing_page_experience">Average</div>
                <div className="text-sm text-muted-foreground">Landing Page Exp</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-green-600" id="ad_relevance" data-metric="ad_relevance">Above Avg</div>
                <div className="text-sm text-muted-foreground">Ad Relevance</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quality Score by Keyword Table */}
        <Card style={{ pageBreakInside: 'avoid' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Quality Score by Keyword</CardTitle>
          </CardHeader>
          <CardContent>
            {/* API-ready table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" id="quality_score_keywords_table">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-semibold">Keyword</th>
                    <th className="text-center p-2 font-semibold">Quality Score</th>
                    <th className="text-center p-2 font-semibold">Expected CTR</th>
                    <th className="text-center p-2 font-semibold">Ad Relevance</th>
                    <th className="text-center p-2 font-semibold">Landing Page Exp</th>
                    <th className="text-right p-2 font-semibold">Impressions</th>
                  </tr>
                </thead>
                <tbody id="quality_score_data" data-table="quality_score_keywords">
                  {paginatedData.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2" data-field="keyword">{item.keyword}</td>
                      <td className="text-center p-2">
                        <span className={`px-2 py-1 rounded font-bold ${
                          parseInt(item.qualityScore) >= 7 ? 'bg-green-100 text-green-800' :
                          parseInt(item.qualityScore) >= 5 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`} data-field="quality_score">{item.qualityScore}</span>
                      </td>
                      <td className="text-center p-2" data-field="expected_ctr">{item.expectedCtr}</td>
                      <td className="text-center p-2" data-field="ad_relevance">{item.adRelevance}</td>
                      <td className="text-center p-2" data-field="landing_page">{item.landingPage}</td>
                      <td className="text-right p-2" data-field="impressions">{item.impressions}</td>
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
              totalItems={qualityScoreData.length}
              itemsPerPage={10}
            />
          </CardContent>
        </Card>

        {/* Quality Score Trend Chart */}
        <Card style={{ pageBreakInside: 'avoid' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Quality Score Trend Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            {/* API-ready chart container */}
            <div className="h-64 bg-muted rounded flex items-center justify-center" id="quality_score_trend_chart" data-chart="quality_score_trend">
              <p className="text-muted-foreground">📈 Quality Score Trend Chart</p>
              {/* Chart will be injected here via API */}
            </div>
          </CardContent>
        </Card>

        {/* Quality Score Distribution */}
        <Card style={{ pageBreakInside: 'avoid' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Keywords by Quality Score Tier</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4" id="quality_score_distribution" data-section="quality_score_tiers">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600" data-field="low_tier_count">23</div>
                <div className="text-sm text-muted-foreground">Poor (1-3)</div>
                <div className="text-xs text-red-600 mt-1" data-field="low_tier_percentage">12.3% of keywords</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600" data-field="mid_tier_count">87</div>
                <div className="text-sm text-muted-foreground">Average (4-6)</div>
                <div className="text-xs text-yellow-600 mt-1" data-field="mid_tier_percentage">46.5% of keywords</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600" data-field="high_tier_count">77</div>
                <div className="text-sm text-muted-foreground">Excellent (7-10)</div>
                <div className="text-xs text-green-600 mt-1" data-field="high_tier_percentage">41.2% of keywords</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Optimization Recommendations */}
        <Card style={{ pageBreakBefore: 'auto' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Optimization Actions & Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              className="w-full min-h-[200px] resize-none border-none bg-transparent p-0 focus-visible:ring-0"
              id="optimization_insights"
              defaultValue="Quality Score Analysis Summary:
• Average quality score of 7.2 is above industry benchmark of 6.5
• 41.2% of keywords achieve excellent quality scores (7-10)
• Landing page experience shows room for improvement across 58% of keywords
• Expected CTR performance is strong, indicating relevant ad copy

Priority Optimization Actions:
1. Landing Page Experience Improvements:
   • Optimize page load speed for mobile devices
   • Improve mobile responsiveness and user experience
   • Align landing page content with ad messaging

2. Keyword Quality Score Improvements:
   • Pause or restructure keywords with quality scores 1-3 (23 keywords)
   • Create more specific ad groups for broad keywords
   • Implement negative keyword lists to improve relevance

3. Ad Copy Optimization:
   • A/B test headlines for average-performing keywords
   • Include more specific benefit statements
   • Match ad copy language to search intent

Expected Impact:
• 15-20% improvement in average quality score within 60 days
• 10-15% reduction in cost per click
• Improved ad position and impression share"
            />
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground border-t pt-4" style={{ pageBreakBefore: 'avoid' }}>
          <p>
            <span contentEditable="true" suppressContentEditableWarning={true} id="footer_text">
              Powered by AdSpyder Analytics | Quality Score Optimization Experts
            </span>
          </p>
          <p className="mt-2">Page <span className="page-counter">1</span></p>
        </div>
      </div>

      {/* API Integration Example (commented out) */}
      {/*
      <script>
        // Example API integration for dynamic quality score data injection
        async function loadQualityScoreData() {
          try {
            const response = await fetch('/api/quality-score-analysis', {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            
            // Update overview metrics
            document.getElementById('avg_quality_score').textContent = data.avgQualityScore;
            document.getElementById('expected_ctr').textContent = data.expectedCTR;
            document.getElementById('landing_page_exp').textContent = data.landingPageExperience;
            document.getElementById('ad_relevance').textContent = data.adRelevance;
            
            // Update keywords table
            const tbody = document.getElementById('quality_score_data');
            tbody.innerHTML = data.keywords.map(keyword => `
              <tr class="border-b">
                <td class="p-2">${keyword.keyword}</td>
                <td class="text-center p-2">
                  <span class="${keyword.qualityScoreColor} px-2 py-1 rounded font-bold">${keyword.qualityScore}</span>
                </td>
                <td class="text-center p-2">${keyword.expectedCTR}</td>
                <td class="text-center p-2">${keyword.adRelevance}</td>
                <td class="text-center p-2">${keyword.landingPageExperience}</td>
                <td class="text-right p-2">${keyword.impressions.toLocaleString()}</td>
              </tr>
            `).join('');
          } catch (error) {
            console.error('Failed to load quality score data:', error);
          }
        }
      </script>
      */}
    </div>
  );
};

export default QualityScoreAnalysisReport;