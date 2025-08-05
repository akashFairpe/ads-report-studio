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

const ShoppingCampaignPerformanceReport = () => {
  const {
    selectedFont,
    setSelectedFont,
    primaryColor,
    setPrimaryColor,
    logoUrl,
    handleLogoUpload,
    reportStyle
  } = useBranding();

  // Sample product groups data for pagination
  const productGroupsData = [
    { productGroup: 'Running Shoes', impressions: '125,670', clicks: '4,589', ctr: '3.65%', cpc: '$0.89', conversions: '187', revenue: '$18,750', roas: '4.2x' },
    { productGroup: 'Athletic Apparel', impressions: '98,234', clicks: '3,456', ctr: '3.52%', cpc: '$0.76', conversions: '145', revenue: '$14,500', roas: '3.8x' },
    { productGroup: 'Sports Equipment', impressions: '87,543', clicks: '2,987', ctr: '3.41%', cpc: '$1.12', conversions: '98', revenue: '$9,800', roas: '3.1x' },
    { productGroup: 'Fitness Accessories', impressions: '76,432', clicks: '2,345', ctr: '3.07%', cpc: '$0.95', conversions: '76', revenue: '$7,600', roas: '2.9x' }
  ];

  // Sample brand performance data for pagination  
  const brandData = [
    { brand: 'Nike', impressions: '145,890', clicks: '5,234', ctr: '3.59%', cpc: '$0.92', conversions: '234', revenue: '$23,400', roas: '4.1x' },
    { brand: 'Adidas', impressions: '123,456', clicks: '4,567', ctr: '3.70%', cpc: '$0.87', conversions: '198', revenue: '$19,800', roas: '3.9x' },
    { brand: 'Under Armour', impressions: '98,765', clicks: '3,456', ctr: '3.50%', cpc: '$1.05', conversions: '145', revenue: '$14,500', roas: '3.2x' },
    { brand: 'Puma', impressions: '76,543', clicks: '2,876', ctr: '3.76%', cpc: '$0.98', conversions: '123', revenue: '$12,300', roas: '3.6x' }
  ];

  const {
    currentPage: groupsPage,
    paginatedData: paginatedGroups,
    totalPages: groupsTotalPages,
    hasNextPage: groupsHasNext,
    hasPrevPage: groupsHasPrev,
    showAll: groupsShowAll,
    goToNextPage: groupsNextPage,
    goToPrevPage: groupsPrevPage,
    toggleShowAll: groupsToggleShowAll
  } = usePagination(productGroupsData, 10);

  const {
    currentPage: brandsPage,
    paginatedData: paginatedBrands,
    totalPages: brandsTotalPages,
    hasNextPage: brandsHasNext,
    hasPrevPage: brandsHasPrev,
    showAll: brandsShowAll,
    goToNextPage: brandsNextPage,
    goToPrevPage: brandsPrevPage,
    toggleShowAll: brandsToggleShowAll
  } = usePagination(brandData, 10);


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
          <ExportButtons reportTitle="Shopping Campaign Performance Report" />
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
            Shopping Campaign Performance Report
          </h1>
          <div className="report-meta">
            <p>
              Store: <span contentEditable="true" suppressContentEditableWarning={true} id="store_name">AdSpyder E-commerce</span>
            </p>
            <p>
              Report Period: <span contentEditable="true" suppressContentEditableWarning={true} id="date_range">January 1, 2024 - January 31, 2024</span>
            </p>
          </div>
        </div>

        {/* Shopping Overview Metrics */}
        <Card>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Shopping Campaign Overview</CardTitle>
          </CardHeader>
          <CardContent>
            {/* API-ready metric cards */}
            <div className="overview-metrics">
              <div className="metric-card">
                <div className="metric-value" id="total_impressions" data-metric="total_impressions">2.4M</div>
                <div className="metric-label">Impressions</div>
              </div>
              <div className="metric-card">
                <div className="metric-value" id="total_clicks" data-metric="total_clicks">48,750</div>
                <div className="metric-label">Clicks</div>
              </div>
              <div className="metric-card">
                <div className="metric-value" id="ctr" data-metric="ctr">2.03%</div>
                <div className="metric-label">CTR</div>
              </div>
              <div className="metric-card">
                <div className="metric-value" id="conversions" data-metric="conversions">1,247</div>
                <div className="metric-label">Conversions</div>
              </div>
              <div className="metric-card">
                <div className="metric-value" id="revenue" data-metric="revenue">$156,890</div>
                <div className="metric-label">Revenue</div>
              </div>
              <div className="metric-card">
                <div className="metric-value" id="roas" data-metric="roas" style={{ color: '#16a34a' }}>4.23x</div>
                <div className="metric-label">ROAS</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Product Groups */}
        <Card style={{ pageBreakInside: 'avoid' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Top Performing Product Groups</CardTitle>
          </CardHeader>
          <CardContent>
            {/* API-ready table */}
            <div style={{ overflowX: 'auto' }}>
              <table className="table" id="product_groups_table">
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left' }}>Product Group</th>
                    <th style={{ textAlign: 'right' }}>Impressions</th>
                    <th style={{ textAlign: 'right' }}>Clicks</th>
                    <th style={{ textAlign: 'right' }}>CTR</th>
                    <th style={{ textAlign: 'right' }}>Conversions</th>
                    <th style={{ textAlign: 'right' }}>Revenue</th>
                    <th style={{ textAlign: 'right' }}>ROAS</th>
                  </tr>
                </thead>
                <tbody id="product_groups_data" data-table="product_groups">
                  {paginatedGroups.map((item, index) => (
                    <tr key={index}>
                      <td data-field="product_group" style={{ fontWeight: 'bold' }}>{item.productGroup}</td>
                      <td style={{ textAlign: 'right' }} data-field="impressions">{item.impressions}</td>
                      <td style={{ textAlign: 'right' }} data-field="clicks">{item.clicks}</td>
                      <td style={{ textAlign: 'right' }} data-field="ctr">{item.ctr}</td>
                      <td style={{ textAlign: 'right' }} data-field="conversions">{item.conversions}</td>
                      <td style={{ textAlign: 'right' }} data-field="revenue">{item.revenue}</td>
                      <td style={{ 
                        textAlign: 'right', 
                        fontWeight: 'bold',
                        color: parseFloat(item.roas) >= 4.0 ? '#16a34a' : 
                               parseFloat(item.roas) >= 3.0 ? '#2563eb' : '#ea580c'
                      }} data-field="roas">{item.roas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <PaginationControls
              currentPage={groupsPage}
              totalPages={groupsTotalPages}
              hasNextPage={groupsHasNext}
              hasPrevPage={groupsHasPrev}
              showAll={groupsShowAll}
              onNextPage={groupsNextPage}
              onPrevPage={groupsPrevPage}
              onToggleShowAll={groupsToggleShowAll}
              totalItems={productGroupsData.length}
              itemsPerPage={10}
            />
          </CardContent>
        </Card>

        {/* Performance Trend Chart */}
        <Card style={{ pageBreakInside: 'avoid' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Shopping Performance Trend by Category</CardTitle>
          </CardHeader>
          <CardContent>
            {/* API-ready chart container */}
            <div className="chart-placeholder" id="performance_trend_chart" data-chart="shopping_performance_trend">
              <p>📈 Shopping Performance by Category Chart</p>
              {/* Chart will be injected here via API */}
            </div>
          </CardContent>
        </Card>

        {/* Top & Bottom Performing Products */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', pageBreakInside: 'avoid' }}>
          <Card>
            <CardHeader>
              <CardTitle style={{ color: primaryColor }}>Top Performing SKUs</CardTitle>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} id="top_performing_skus" data-section="top_skus">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: '#f0fdf4', borderRadius: '8px' }}>
                  <div>
                    <div style={{ fontWeight: 'bold' }} data-field="product_name">iPhone 15 Pro Max 256GB</div>
                    <div style={{ fontSize: '12px', color: '#6b7280' }} data-field="sku">SKU: APL-IP15PM-256</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#16a34a', fontWeight: 'bold' }} data-field="revenue">$12,450</div>
                    <div style={{ fontSize: '12px', color: '#16a34a' }} data-field="roas">5.2x ROAS</div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: '#f0fdf4', borderRadius: '8px' }}>
                  <div>
                    <div style={{ fontWeight: 'bold' }} data-field="product_name">Ergonomic Office Chair</div>
                    <div style={{ fontSize: '12px', color: '#6b7280' }} data-field="sku">SKU: FUR-EOC-001</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#16a34a', fontWeight: 'bold' }} data-field="revenue">$8,920</div>
                    <div style={{ fontSize: '12px', color: '#16a34a' }} data-field="roas">4.8x ROAS</div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: '#f0fdf4', borderRadius: '8px' }}>
                  <div>
                    <div style={{ fontWeight: 'bold' }} data-field="product_name">Nike Air Max Sneakers</div>
                    <div style={{ fontSize: '12px', color: '#6b7280' }} data-field="sku">SKU: NIKE-AM-BLK</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#16a34a', fontWeight: 'bold' }} data-field="revenue">$6,780</div>
                    <div style={{ fontSize: '12px', color: '#16a34a' }} data-field="roas">4.1x ROAS</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle style={{ color: primaryColor }}>Underperforming Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} id="underperforming_skus" data-section="low_skus">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: '#fef2f2', borderRadius: '8px' }}>
                  <div>
                    <div style={{ fontWeight: 'bold' }} data-field="product_name">Generic Phone Case</div>
                    <div style={{ fontSize: '12px', color: '#6b7280' }} data-field="sku">SKU: ACC-GPC-001</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#dc2626', fontWeight: 'bold' }} data-field="revenue">$234</div>
                    <div style={{ fontSize: '12px', color: '#dc2626' }} data-field="roas">0.8x ROAS</div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: '#fff7ed', borderRadius: '8px' }}>
                  <div>
                    <div style={{ fontWeight: 'bold' }} data-field="product_name">Basic Desk Lamp</div>
                    <div style={{ fontSize: '12px', color: '#6b7280' }} data-field="sku">SKU: LIT-BDL-WHT</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#ea580c', fontWeight: 'bold' }} data-field="revenue">$567</div>
                    <div style={{ fontSize: '12px', color: '#ea580c' }} data-field="roas">1.2x ROAS</div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: '#fefce8', borderRadius: '8px' }}>
                  <div>
                    <div style={{ fontWeight: 'bold' }} data-field="product_name">Travel Mug Set</div>
                    <div style={{ fontSize: '12px', color: '#6b7280' }} data-field="sku">SKU: KIT-TMS-BLU</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#eab308', fontWeight: 'bold' }} data-field="revenue">$890</div>
                    <div style={{ fontSize: '12px', color: '#eab308' }} data-field="roas">1.9x ROAS</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Brand Performance Analysis */}
        <Card style={{ pageBreakInside: 'avoid' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Performance by Brand</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ overflowX: 'auto' }}>
               <table className="table" id="brand_performance_table">
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left' }}>Brand</th>
                    <th style={{ textAlign: 'right' }}>Impressions</th>
                    <th style={{ textAlign: 'right' }}>Clicks</th>
                    <th style={{ textAlign: 'right' }}>CTR</th>
                    <th style={{ textAlign: 'right' }}>CPC</th>
                    <th style={{ textAlign: 'right' }}>Conversions</th>
                    <th style={{ textAlign: 'right' }}>Revenue</th>
                    <th style={{ textAlign: 'right' }}>ROAS</th>
                  </tr>
                </thead>
                <tbody id="brand_performance_data" data-table="brand_performance">
                  {paginatedBrands.map((item, index) => (
                    <tr key={index}>
                      <td style={{ fontWeight: 'bold' }} data-field="brand_name">{item.brand}</td>
                      <td style={{ textAlign: 'right' }} data-field="impressions">{item.impressions}</td>
                      <td style={{ textAlign: 'right' }} data-field="clicks">{item.clicks}</td>
                      <td style={{ textAlign: 'right' }} data-field="ctr">{item.ctr}</td>
                      <td style={{ textAlign: 'right' }} data-field="cpc">{item.cpc}</td>
                      <td style={{ textAlign: 'right' }} data-field="conversions">{item.conversions}</td>
                      <td style={{ textAlign: 'right' }} data-field="revenue">{item.revenue}</td>
                      <td style={{ 
                        textAlign: 'right', 
                        fontWeight: 'bold',
                        color: parseFloat(item.roas) >= 4.0 ? '#16a34a' : 
                               parseFloat(item.roas) >= 3.0 ? '#2563eb' : '#ea580c'
                      }} data-field="roas">{item.roas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <PaginationControls
              currentPage={brandsPage}
              totalPages={brandsTotalPages}
              hasNextPage={brandsHasNext}
              hasPrevPage={brandsHasPrev}
              showAll={brandsShowAll}
              onNextPage={brandsNextPage}
              onPrevPage={brandsPrevPage}
              onToggleShowAll={brandsToggleShowAll}
              totalItems={brandData.length}
              itemsPerPage={10}
            />
          </CardContent>
        </Card>

        {/* Merchandising Insights */}
        <Card style={{ pageBreakBefore: 'auto' }}>
          <CardHeader>
            <CardTitle style={{ color: primaryColor }}>Merchandising Insights & Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              className="w-full min-h-[200px] resize-none border-none bg-transparent p-0 focus-visible:ring-0"
              id="merchandising_insights"
              defaultValue="Shopping Campaign Performance Summary:
• Overall ROAS of 4.23x significantly exceeds industry benchmark of 3.0x
• Electronics category leads performance with smartphones driving 44% of total revenue
• Premium brands (Apple, Nike) consistently outperform with higher ROAS and lower CPC
• Product diversity across 4 major categories provides good risk distribution

Category Performance Insights:
• Electronics > Smartphones: Highest ROAS (4.85x) with strong demand for premium models
• Home & Garden > Furniture: Solid 3.94x ROAS with higher average order values
• Fashion > Athletic Wear: Consistent performer with seasonal growth potential
• Beauty > Skincare: Lower ROAS (2.89x) indicates need for optimization

Product-Level Optimizations:
1. Inventory & Bidding Strategy:
   • Increase bids for top-performing SKUs (iPhone 15 Pro Max, Ergonomic Chair)
   • Consider negative keywords for underperforming generic products
   • Implement dynamic remarketing for high-value categories

2. Product Feed Optimization:
   • Enhance product titles with brand names and key attributes
   • Optimize product images for mobile shopping experience
   • Add promotional text for seasonal or discounted items

3. Budget Allocation:
   • Reallocate 25% budget from underperforming Beauty category to Electronics
   • Increase campaign priority for premium brand products
   • Test Smart Shopping campaigns for broader reach

4. Seasonal Strategy:
   • Prepare for holiday season with increased electronics inventory
   • Plan athletic wear promotions around fitness trends
   • Monitor competitor pricing for dynamic bid adjustments"
            />
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="report-footer">
          <p>
            <span contentEditable="true" suppressContentEditableWarning={true} id="footer_text">
              Powered by AdSpyder Analytics | E-commerce Growth Solutions
            </span>
          </p>
          <p>Page <span className="page-counter">1</span></p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCampaignPerformanceReport;