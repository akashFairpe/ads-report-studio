import React from 'react';
import { useBranding } from '@/hooks/useBranding';
import { usePagination } from "@/hooks/usePagination";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChartContainer } from "@/components/ui/chart";
import ExportButtons from "@/components/ExportButtons";
import PaginationControls from "@/components/PaginationControls";

const AccountPerformance = () => {
  const {
    selectedFont,
    setSelectedFont,
    primaryColor,
    setPrimaryColor,
    logoUrl,
    handleLogoUpload,
    reportStyle
  } = useBranding();

  // Sample campaign data with more entries for pagination demonstration
  const campaignData = [
    { id: 1, name: "Search - Brand Terms", impressions: "45,632", clicks: "3,421", ctr: "7.49%", cost: "$8,025", conversions: "421", roas: "525%" },
    { id: 2, name: "Search - Product Terms", impressions: "89,156", clicks: "4,235", ctr: "4.75%", cost: "$9,912", conversions: "398", roas: "402%" },
    { id: 3, name: "Display - Remarketing", impressions: "67,890", clicks: "2,156", ctr: "3.18%", cost: "$5,434", conversions: "189", roas: "348%" },
    { id: 4, name: "Shopping - All Products", impressions: "43,111", clicks: "2,644", ctr: "6.13%", cost: "$5,775", conversions: "226", roas: "392%" },
    { id: 5, name: "Search - Competitor Terms", impressions: "52,340", clicks: "2,890", ctr: "5.52%", cost: "$7,234", conversions: "312", roas: "431%" },
    { id: 6, name: "Display - Interest Targeting", impressions: "78,920", clicks: "1,987", ctr: "2.52%", cost: "$4,567", conversions: "156", roas: "342%" },
    { id: 7, name: "Video - YouTube Ads", impressions: "134,567", clicks: "3,456", ctr: "2.57%", cost: "$6,789", conversions: "287", roas: "423%" },
    { id: 8, name: "Search - Long Tail Keywords", impressions: "29,876", clicks: "1,678", ctr: "5.61%", cost: "$3,234", conversions: "189", roas: "584%" },
    { id: 9, name: "Shopping - Electronics", impressions: "38,765", clicks: "2,134", ctr: "5.50%", cost: "$4,567", conversions: "203", roas: "445%" },
    { id: 10, name: "Display - Custom Audiences", impressions: "56,789", clicks: "1,789", ctr: "3.15%", cost: "$3,890", conversions: "167", roas: "429%" },
    { id: 11, name: "Search - Location Based", impressions: "41,234", clicks: "2,456", ctr: "5.96%", cost: "$5,123", conversions: "234", roas: "456%" },
    { id: 12, name: "Video - Product Demos", impressions: "89,456", clicks: "2,678", ctr: "2.99%", cost: "$4,234", conversions: "178", roas: "421%" },
    { id: 13, name: "Shopping - Fashion", impressions: "34,567", clicks: "1,987", ctr: "5.75%", cost: "$3,456", conversions: "156", roas: "451%" },
    { id: 14, name: "Search - Seasonal Terms", impressions: "67,890", clicks: "3,234", ctr: "4.76%", cost: "$6,789", conversions: "289", roas: "426%" },
    { id: 15, name: "Display - Lookalike Audiences", impressions: "45,678", clicks: "1,567", ctr: "3.43%", cost: "$3,789", conversions: "134", roas: "354%" },
  ];

  const {
    paginatedData,
    currentPage,
    totalPages,
    hasNextPage,
    hasPrevPage,
    showAll,
    goToNextPage,
    goToPrevPage,
    toggleShowAll,
  } = usePagination(campaignData, 10);

  return (
    <div className="min-h-screen bg-background" style={reportStyle}>
      <style>{`
        .branding-controls {
          background: #f8fafc;
          padding: 20px;
          margin-bottom: 20px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }
        
        .branding-row {
          display: flex;
          gap: 20px;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .branding-item {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        
        .report-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 30px 0;
          border-bottom: 2px solid #e5e7eb;
          margin-bottom: 30px;
        }
        
        .logo-section img {
          max-height: 60px;
          max-width: 200px;
        }
        
        .report-title {
          text-align: center;
          flex-grow: 1;
        }
        
        .report-title h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 5px;
        }
        
        .report-meta {
          text-align: right;
          font-size: 14px;
          color: #6b7280;
        }
        
        .overview-metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .chart-placeholder {
          background: #f9fafb;
          border: 2px dashed #d1d5db;
          border-radius: 8px;
          padding: 40px;
          text-align: center;
          color: #6b7280;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-style: italic;
        }
        
        .report-footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: #6b7280;
        }
        
        [contenteditable="true"] {
          border: 1px dashed transparent;
          padding: 4px;
          border-radius: 4px;
          transition: all 0.2s ease;
        }
        
        [contenteditable="true"]:hover {
          border-color: #3b82f6;
          background-color: rgba(59, 130, 246, 0.05);
        }
        
        [contenteditable="true"]:focus {
          outline: 2px solid #3b82f6;
          border-color: #3b82f6;
          background-color: rgba(59, 130, 246, 0.05);
        }
        
        @media (max-width: 768px) {
          .report-header {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }
          
          .branding-row {
            flex-direction: column;
            align-items: stretch;
          }
          
          .overview-metrics {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Branding Controls */}
      <div className="branding-controls">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4 text-foreground">Report Branding Controls</h2>
          <div className="branding-row">
            <div className="branding-item">
              <Label htmlFor="logo-upload">Company Logo</Label>
              <Input 
                type="file" 
                id="logo-upload"
                accept="image/*" 
                onChange={handleLogoUpload} 
              />
            </div>
            <div className="branding-item">
              <Label htmlFor="font-select">Font Family</Label>
              <Select value={selectedFont} onValueChange={setSelectedFont}>
                <SelectTrigger>
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
              <Label htmlFor="primary-color">Primary Color</Label>
              <Input 
                type="color" 
                id="primary-color"
                value={primaryColor} 
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="h-10"
              />
            </div>
            <ExportButtons reportTitle="Account Performance Report" />
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4">
        {/* Report Header */}
        <header className="report-header">
          <div className="logo-section">
            {logoUrl && <img src={logoUrl} alt="Company Logo" />}
          </div>
          <div className="report-title">
            <h1 contentEditable={true} suppressContentEditableWarning={true}>
              Account Performance Summary
            </h1>
            <div contentEditable={true} suppressContentEditableWarning={true}>
              Google Ads Performance Report
            </div>
          </div>
          <div className="report-meta">
            <div><strong>Client:</strong> <span contentEditable={true} suppressContentEditableWarning={true}>ABC Company</span></div>
            <div><strong>Period:</strong> <span contentEditable={true} suppressContentEditableWarning={true}>Jan 1 - Jan 31, 2024</span></div>
            <div><strong>Analyst:</strong> <span contentEditable={true} suppressContentEditableWarning={true}>John Smith</span></div>
          </div>
        </header>

        {/* Key Metrics Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-6 text-foreground" style={{ color: primaryColor }}>
            📊 Key Performance Metrics
          </h2>
          <div className="overview-metrics">
            <Card>
              <CardContent className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">12,456</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Total Clicks</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">245,789</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Impressions</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">5.07%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Click-Through Rate</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">$2.34</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Avg. Cost Per Click</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">1,234</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Conversions</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">$29,146</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Total Cost</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">425%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Return on Ad Spend</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">9.91%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Impression Share</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Trend Charts */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-6 text-foreground" style={{ color: primaryColor }}>
            📈 Performance Trends
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="chart-placeholder">
                [Trend Chart: Spend vs Conversions Over Time]<br />
                {/* API Integration Point: Replace with chart library data */}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Campaign Snapshot Table */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-6 text-foreground" style={{ color: primaryColor }}>
            🎯 Top Performing Campaigns
          </h2>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Campaign Name</TableHead>
                    <TableHead>Impressions</TableHead>
                    <TableHead>Clicks</TableHead>
                    <TableHead>CTR</TableHead>
                    <TableHead>Cost</TableHead>
                    <TableHead>Conversions</TableHead>
                    <TableHead>ROAS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedData.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell className="font-medium">{campaign.name}</TableCell>
                      <TableCell>{campaign.impressions}</TableCell>
                      <TableCell>{campaign.clicks}</TableCell>
                      <TableCell>{campaign.ctr}</TableCell>
                      <TableCell>{campaign.cost}</TableCell>
                      <TableCell>{campaign.conversions}</TableCell>
                      <TableCell>{campaign.roas}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
            showAll={showAll}
            onNextPage={goToNextPage}
            onPrevPage={goToPrevPage}
            onToggleShowAll={toggleShowAll}
            totalItems={campaignData.length}
            itemsPerPage={10}
          />
        </section>

        {/* Insights & Notes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>💡 Key Insights & Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div contentEditable={true} suppressContentEditableWarning={true}>
              <p className="mb-4"><strong>Performance Highlights:</strong></p>
              <ul className="mb-4 ml-6 list-disc">
                <li>Brand campaigns continue to deliver the highest ROAS at 525%, significantly above account average</li>
                <li>Overall conversion rate improved by 12% compared to previous period</li>
                <li>Cost per acquisition decreased by 8% while maintaining conversion volume</li>
              </ul>
              
              <p className="mb-4"><strong>Areas for Optimization:</strong></p>
              <ul className="ml-6 list-disc">
                <li>Display remarketing campaigns show opportunity for bid optimization</li>
                <li>Product search terms could benefit from negative keyword expansion</li>
                <li>Shopping campaigns performing well but could expand product coverage</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🚀 Recommendations & Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <div contentEditable={true} suppressContentEditableWarning={true}>
              <ol className="ml-6 list-decimal space-y-2">
                <li><strong>Increase Budget Allocation:</strong> Shift 15% more budget to brand campaigns given superior ROAS performance</li>
                <li><strong>Expand Keyword Coverage:</strong> Add 50+ new product-related keywords based on search term analysis</li>
                <li><strong>Optimize Display Targeting:</strong> Refine audience segments for remarketing campaigns to improve CTR</li>
                <li><strong>Landing Page Testing:</strong> A/B test product landing pages to improve conversion rates further</li>
                <li><strong>Competitor Analysis:</strong> Monitor competitive landscape for new keyword opportunities</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="report-footer">
          <div contentEditable={true} suppressContentEditableWarning={true}>
            <strong>Report prepared by:</strong> <span contentEditable={true} suppressContentEditableWarning={true}>Digital Marketing Agency</span><br />
            <span contentEditable={true} suppressContentEditableWarning={true}>contact@agency.com | (555) 123-4567</span><br />
            <span contentEditable={true} suppressContentEditableWarning={true}>Generated on: January 31, 2024</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AccountPerformance;