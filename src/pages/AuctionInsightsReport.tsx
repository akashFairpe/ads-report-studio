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

const AuctionInsightsReport = () => {
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [primaryColor, setPrimaryColor] = useState('#2563eb');
  const [logoUrl, setLogoUrl] = useState('');

  // Sample competitor data for pagination
  const competitorData = [
    { domain: 'competitor-a.com', impressionShare: '23.4%', overlapRate: '18.7%', outrankingShare: '35.2%', positionAboveRate: '28.6%', topOfPageRate: '21.3%' },
    { domain: 'rival-business.com', impressionShare: '19.8%', overlapRate: '15.3%', outrankingShare: '78.9%', positionAboveRate: '19.4%', topOfPageRate: '18.7%' },
    { domain: 'industry-leader.com', impressionShare: '31.2%', overlapRate: '28.9%', outrankingShare: '42.1%', positionAboveRate: '45.8%', topOfPageRate: '29.6%' },
    { domain: 'startup-competitor.com', impressionShare: '12.7%', overlapRate: '9.4%', outrankingShare: '82.3%', positionAboveRate: '12.1%', topOfPageRate: '11.8%' },
    { domain: 'market-challenger.com', impressionShare: '15.6%', overlapRate: '12.8%', outrankingShare: '67.4%', positionAboveRate: '22.3%', topOfPageRate: '16.9%' },
    { domain: 'big-brand-corp.com', impressionShare: '28.9%', overlapRate: '25.7%', outrankingShare: '38.6%', positionAboveRate: '41.2%', topOfPageRate: '27.8%' },
    { domain: 'local-business.com', impressionShare: '8.3%', overlapRate: '6.9%', outrankingShare: '89.5%', positionAboveRate: '9.1%', topOfPageRate: '7.4%' },
    { domain: 'niche-player.com', impressionShare: '6.7%', overlapRate: '5.2%', outrankingShare: '91.2%', positionAboveRate: '7.8%', topOfPageRate: '6.1%' },
    { domain: 'enterprise-solution.com', impressionShare: '22.4%', overlapRate: '19.8%', outrankingShare: '45.7%', positionAboveRate: '33.9%', topOfPageRate: '20.5%' },
    { domain: 'discount-provider.com', impressionShare: '11.9%', overlapRate: '8.7%', outrankingShare: '74.3%', positionAboveRate: '14.6%', topOfPageRate: '10.2%' },
    { domain: 'premium-service.com', impressionShare: '17.8%', overlapRate: '14.6%', outrankingShare: '58.9%', positionAboveRate: '26.7%', topOfPageRate: '15.3%' },
    { domain: 'new-entrant.com', impressionShare: '4.2%', overlapRate: '3.1%', outrankingShare: '95.6%', positionAboveRate: '4.8%', topOfPageRate: '3.9%' }
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
  } = usePagination(competitorData, 10);

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
    <div style={{ ...reportStyle, backgroundColor: 'white', minHeight: '100vh' }}>
      {/* Branding Controls */}
      <div className="branding-controls">
        <div className="branding-row">
          <div className="branding-item">
            <Label htmlFor="logo-upload">Company Logo</Label>
            <Input id="logo-upload" type="file" accept="image/*" onChange={handleLogoUpload} className="w-48" />
          </div>
          <div className="branding-item">
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
          <div className="branding-item">
            <Label htmlFor="color-picker">Primary Color</Label>
            <Input
              id="color-picker"
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="w-16 h-10"
            />
          </div>
          <ExportButtons reportTitle="Auction Insights Report" />
        </div>
      </div>

      {/* Report Content */}
      <div className="container">
        {/* Header */}
        <div className="report-header">
          {logoUrl && (
            <div className="logo-section">
              <img 
                src={logoUrl} 
                alt="Company Logo" 
                id="company_logo"
              />
            </div>
          )}
          <h1 
            className="report-title"
            contentEditable="true"
            suppressContentEditableWarning={true}
            style={{ color: primaryColor }}
            id="report_title"
          >
            Auction Insights Report
          </h1>
          <div className="report-meta">
            <p>
              Campaign: <span contentEditable="true" suppressContentEditableWarning={true} id="campaign_name">Premium Product Launch</span>
            </p>
            <p>
              Report Period: <span contentEditable="true" suppressContentEditableWarning={true} id="date_range">January 1, 2024 - January 31, 2024</span>
            </p>
          </div>
        </div>

        {/* Auction Metrics Overview */}
        <Card>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Competitive Overview</CardTitle>
          </CardHeader>
          <CardContent>
            {/* API-ready metric cards */}
            <div className="overview-metrics">
              <div className="metric-card">
                <div className="metric-value" id="impression_share" data-metric="impression_share">68.5%</div>
                <div className="metric-label">Impression Share</div>
              </div>
              <div className="metric-card">
                <div className="metric-value" id="overlap_rate" data-metric="overlap_rate">42.3%</div>
                <div className="metric-label">Overlap Rate</div>
              </div>
              <div className="metric-card">
                <div className="metric-value" id="outranking_share" data-metric="outranking_share">73.8%</div>
                <div className="metric-label">Outranking Share</div>
              </div>
              <div className="metric-card">
                <div className="metric-value" id="top_of_page_rate" data-metric="top_of_page_rate">45.2%</div>
                <div className="metric-label">Top of Page Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Competitor Analysis Table */}
        <Card style={{ pageBreakInside: 'avoid' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Competitor Performance Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            {/* API-ready table */}
            <div style={{ overflowX: 'auto' }}>
              <table className="table" id="competitor_analysis_table">
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left' }}>Competitor Domain</th>
                    <th style={{ textAlign: 'right' }}>Impression Share</th>
                    <th style={{ textAlign: 'right' }}>Overlap Rate</th>
                    <th style={{ textAlign: 'right' }}>Outranking Share</th>
                    <th style={{ textAlign: 'right' }}>Position Above Rate</th>
                    <th style={{ textAlign: 'right' }}>Top of Page Rate</th>
                  </tr>
                </thead>
                <tbody id="competitor_data" data-table="competitor_metrics">
                  {paginatedData.map((item, index) => (
                    <tr key={index}>
                      <td style={{ fontWeight: 'bold' }} data-field="domain">{item.domain}</td>
                      <td style={{ textAlign: 'right' }} data-field="impression_share">{item.impressionShare}</td>
                      <td style={{ textAlign: 'right' }} data-field="overlap_rate">{item.overlapRate}</td>
                      <td style={{ 
                        textAlign: 'right', 
                        fontWeight: 'bold',
                        color: parseFloat(item.outrankingShare) >= 50 ? '#16a34a' : '#dc2626'
                      }} data-field="outranking_share">{item.outrankingShare}</td>
                      <td style={{ textAlign: 'right' }} data-field="position_above_rate">{item.positionAboveRate}</td>
                      <td style={{ textAlign: 'right' }} data-field="top_of_page_rate">{item.topOfPageRate}</td>
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
              totalItems={competitorData.length}
              itemsPerPage={10}
            />
          </CardContent>
        </Card>

        {/* Impression Share Chart */}
        <Card style={{ pageBreakInside: 'avoid' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Impression Share by Competitor</CardTitle>
          </CardHeader>
          <CardContent>
            {/* API-ready chart container */}
            <div className="chart-placeholder" id="impression_share_chart" data-chart="impression_share_comparison">
              <p>📊 Impression Share Comparison Chart</p>
              {/* Chart will be injected here via API */}
            </div>
          </CardContent>
        </Card>

        {/* Overlap Rate Trend */}
        <Card style={{ pageBreakInside: 'avoid' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Competitive Overlap Trend</CardTitle>
          </CardHeader>
          <CardContent>
            {/* API-ready chart container */}
            <div className="chart-placeholder" id="overlap_trend_chart" data-chart="overlap_rate_trend">
              <p>📈 Overlap Rate Trend Over Time</p>
              {/* Chart will be injected here via API */}
            </div>
          </CardContent>
        </Card>

        {/* Competitive Performance Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', pageBreakInside: 'avoid' }}>
          <Card>
            <CardHeader>
              <CardTitle style={{ color: primaryColor }}>Key Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} id="opportunities" data-section="competitive_opportunities">
                <div style={{ padding: '12px', backgroundColor: '#f0fdf4', borderRadius: '8px' }}>
                  <div style={{ fontWeight: 'bold', color: '#166534' }} data-field="opportunity_title">Strong Against Startup Competitors</div>
                  <div style={{ fontSize: '14px', color: '#15803d', marginTop: '4px' }} data-field="opportunity_desc">82.3% outranking share vs startup-competitor.com</div>
                </div>
                <div style={{ padding: '12px', backgroundColor: '#eff6ff', borderRadius: '8px' }}>
                  <div style={{ fontWeight: 'bold', color: '#1e40af' }} data-field="opportunity_title">Impression Share Growth</div>
                  <div style={{ fontSize: '14px', color: '#1d4ed8', marginTop: '4px' }} data-field="opportunity_desc">31.5% potential increase available in auction</div>
                </div>
                <div style={{ padding: '12px', backgroundColor: '#faf5ff', borderRadius: '8px' }}>
                  <div style={{ fontWeight: 'bold', color: '#7c3aed' }} data-field="opportunity_title">Top of Page Optimization</div>
                  <div style={{ fontSize: '14px', color: '#8b5cf6', marginTop: '4px' }} data-field="opportunity_desc">54.8% room for improvement in premium placements</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle style={{ color: primaryColor }}>Competitive Threats</CardTitle>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} id="threats" data-section="competitive_threats">
                <div style={{ padding: '12px', backgroundColor: '#fef2f2', borderRadius: '8px' }}>
                  <div style={{ fontWeight: 'bold', color: '#991b1b' }} data-field="threat_title">Industry Leader Dominance</div>
                  <div style={{ fontSize: '14px', color: '#dc2626', marginTop: '4px' }} data-field="threat_desc">industry-leader.com outranks us 42.1% of the time</div>
                </div>
                <div style={{ padding: '12px', backgroundColor: '#fff7ed', borderRadius: '8px' }}>
                  <div style={{ fontWeight: 'bold', color: '#c2410c' }} data-field="threat_title">High Competitive Overlap</div>
                  <div style={{ fontSize: '14px', color: '#ea580c', marginTop: '4px' }} data-field="threat_desc">42.3% average overlap rate indicates intense competition</div>
                </div>
                <div style={{ padding: '12px', backgroundColor: '#fefce8', borderRadius: '8px' }}>
                  <div style={{ fontWeight: 'bold', color: '#a16207' }} data-field="threat_title">Position Competition</div>
                  <div style={{ fontSize: '14px', color: '#ca8a04', marginTop: '4px' }} data-field="threat_desc">competitor-a.com appears above us 28.6% of the time</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Strategic Insights */}
        <Card style={{ pageBreakBefore: 'auto' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Competitive Strategy & Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              className="w-full min-h-[200px] resize-none border-none bg-transparent p-0 focus-visible:ring-0"
              id="competitive_strategy"
              defaultValue="Competitive Landscape Analysis:
• Our 68.5% impression share indicates strong market presence but room for growth
• High outranking share (73.8%) demonstrates superior ad quality and bidding strategy
• 42.3% overlap rate suggests we're competing in the right keyword space
• Top of page rate of 45.2% shows opportunity for premium placement improvement

Key Competitive Insights:
• industry-leader.com poses the biggest threat with 31.2% impression share
• We consistently outrank smaller competitors (startup-competitor.com: 82.3% outranking share)
• competitor-a.com shows aggressive bidding with high position above rate
• Our strong quality scores give us an advantage in auction efficiency

Strategic Recommendations:
1. Increase Budget Allocation:
   • Target 75-80% impression share to capture more market presence
   • Focus additional spend on high-converting keywords where we outrank competitors

2. Quality Score Optimization:
   • Maintain current quality score advantages to sustain outranking performance
   • Improve landing page experience to increase top of page rate

3. Competitive Bidding Strategy:
   • Implement dayparting to compete more aggressively during peak hours
   • Use target impression share bidding for critical brand keywords
   • Monitor competitor-a.com bid patterns and adjust accordingly

4. Keyword Expansion:
   • Identify gaps where industry-leader.com dominates but we're absent
   • Test new keyword variations in low-competition segments
   • Implement negative keywords to reduce wasteful overlap"
            />
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="report-footer">
          <p>
            <span contentEditable="true" suppressContentEditableWarning={true} id="footer_text">
              Powered by AdSpyder Analytics | Competitive Intelligence Solutions
            </span>
          </p>
          <p>Page <span className="page-counter">1</span></p>
        </div>
      </div>
    </div>
  );
};

export default AuctionInsightsReport;