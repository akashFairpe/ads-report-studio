import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px', color: '#2563eb' }}>
            Google Ads PPC Reports Dashboard
          </h1>
          <p style={{ fontSize: '20px', color: '#6b7280', marginBottom: '32px' }}>
            Professional, customizable PPC reports for Google Ads performance analysis
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '24px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {[
            {
              icon: '📊',
              title: 'Account Performance',
              description: 'Comprehensive account-level overview with key metrics, trends, and campaign snapshots',
              features: [
                'Key performance metrics summary',
                'Performance trend charts',
                'Top performing campaigns table',
                'Insights & recommendations'
              ],
              route: '/account-performance'
            },
            {
              icon: '🎯',
              title: 'Campaign Performance',
              description: 'Detailed campaign analysis with funnel metrics, device insights, and creative performance',
              features: [
                'Campaign funnel overview',
                'Device & demographic breakdowns',
                'Creative performance analysis',
                'Daily performance tracking'
              ],
              route: '/campaign-performance'
            },
            {
              icon: '🔍',
              title: 'Ad Group Performance',
              description: 'Ad group level analysis with keyword breakdowns and quality score insights',
              features: [
                'Ad group performance comparison',
                'Top keywords by ad group',
                'Creative performance by ad group',
                'Quality score analysis'
              ],
              route: '/ad-group-performance'
            },
            {
              icon: '👥',
              title: 'Demographic Performance',
              description: 'Performance analysis by age, gender, and demographic segments',
              features: [
                'Age group performance analysis',
                'Gender demographic insights',
                'Cross-demographic comparisons',
                'Targeting recommendations'
              ],
              route: '/demographic-performance'
            },
            {
              icon: '🌍',
              title: 'Geographic Performance',
              description: 'Regional and location-based performance insights and trends',
              features: [
                'Country/region performance map',
                'Top performing locations',
                'Geographic trend analysis',
                'Location-based optimization'
              ],
              route: '/geographic-performance'
            },
            {
              icon: '📱',
              title: 'Device Performance',
              description: 'Mobile, desktop, and tablet performance comparison and analysis',
              features: [
                'Cross-device performance metrics',
                'Traffic distribution analysis',
                'Device-specific trends',
                'Mobile optimization insights'
              ],
              route: '/device-performance'
            },
            {
              icon: '⏰',
              title: 'Dayparting Performance',
              description: 'Hour-by-hour and day-of-week performance analysis for optimal ad scheduling',
              features: [
                'Performance by hour of day',
                'Day-of-week analysis',
                'Peak performance windows',
                'Bid adjustment recommendations'
              ],
              route: '/dayparting-performance'
            },
            {
              icon: '📝',
              title: 'Ad Performance',
              description: 'Individual ad creative analysis with CTR, conversion tracking, and optimization insights',
              features: [
                'Top performing ad creatives',
                'Ad type comparison analysis',
                'Creative performance metrics',
                'A/B testing recommendations'
              ],
              route: '/ad-performance'
            },
            {
              icon: '🔑',
              title: 'Keyword Performance',
              description: 'Comprehensive keyword analysis with match types, negative keywords, and bid optimization',
              features: [
                'Top keywords by conversions',
                'Match type performance analysis',
                'Negative keyword suggestions',
                'Keyword expansion opportunities'
              ],
              route: '/keyword-performance'
            },
            {
              icon: '🔍',
              title: 'Search Term Report',
              description: 'Detailed analysis of actual search queries triggering your ads with performance insights',
              features: [
                'Search term performance analysis',
                'Negative keyword recommendations',
                'Search query optimization',
                'Irrelevant traffic identification'
              ],
              route: '/search-term-report'
            },
            {
              icon: '💰',
              title: 'Cost & Budget Tracking',
              description: 'Comprehensive budget monitoring with spend analysis and cost efficiency metrics',
              features: [
                'Budget vs actual spend tracking',
                'Daily cost trend analysis',
                'Campaign cost breakdown',
                'Cost efficiency optimization'
              ],
              route: '/cost-budget-report'
            },
            {
              icon: '📈',
              title: 'Pacing Report',
              description: 'Budget pacing analysis with spending projections and campaign optimization recommendations',
              features: [
                'Budget pacing health monitoring',
                'Spend projection analysis',
                'Campaign-level pacing status',
                'Automated adjustment recommendations'
              ],
              route: '/pacing-report'
            },
            {
              icon: '🎯',
              title: 'Conversion Tracking',
              description: 'Comprehensive conversion tracking with attribution model analysis and optimization insights',
              features: [
                'Conversion action breakdowns',
                'Attribution model comparison',
                'Conversion trend analysis',
                'CPA optimization insights'
              ],
              route: '/conversion-tracking-report'
            },
            {
              icon: '💸',
              title: 'ROAS Report',
              description: 'Return on Ad Spend analysis with campaign profitability and revenue optimization insights',
              features: [
                'Campaign ROAS performance',
                'Revenue trend analysis',
                'Top/bottom performer identification',
                'Profitability optimization'
              ],
              route: '/roas-report'
            },
            {
              icon: '🧪',
              title: 'Ad Variation Performance',
              description: 'A/B testing results with statistical significance and creative optimization recommendations',
              features: [
                'A/B test performance comparison',
                'Statistical significance analysis',
                'Winning creative identification',
                'Testing strategy recommendations'
              ],
              route: '/ad-variation-performance-report'
            },
            {
              icon: '⭐',
              title: 'Quality Score Analysis',
              description: 'In-depth quality score analysis with keyword optimization and landing page recommendations',
              features: [
                'Quality score by keyword analysis',
                'Expected CTR performance review',
                'Landing page experience insights',
                'Ad relevance optimization tips'
              ],
              route: '/quality-score-analysis-report'
            },
            {
              icon: '⚔️',
              title: 'Auction Insights',
              description: 'Competitive analysis with auction insights, impression share, and outranking data',
              features: [
                'Competitor impression share analysis',
                'Overlap rate and outranking metrics',
                'Top of page rate comparison',
                'Competitive strategy recommendations'
              ],
              route: '/auction-insights-report'
            },
            {
              icon: '🛍️',
              title: 'Shopping Campaign Performance',
              description: 'E-commerce focused analysis with product performance, ROAS, and merchandising insights',
              features: [
                'Product group performance analysis',
                'Top/bottom performing SKUs',
                'Brand performance comparison',
                'Merchandising optimization tips'
              ],
              route: '/shopping-campaign-performance-report'
            }
          ].map((report, index) => (
            <div key={index} className="card" style={{ transition: 'box-shadow 0.3s' }}>
              <div style={{ marginBottom: '16px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>
                  <span style={{ fontSize: '20px' }}>{report.icon}</span>
                  {report.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '8px' }}>
                  {report.description}
                </p>
              </div>
              
              <ul style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px', paddingLeft: '16px' }}>
                {report.features.map((feature, i) => (
                  <li key={i} style={{ marginBottom: '4px' }}>• {feature}</li>
                ))}
              </ul>
              
              <Link to={report.route} style={{ textDecoration: 'none' }}>
                <button className="button button-primary" style={{ width: '100%' }}>
                  View Report
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <div style={{ 
            background: '#f9fafb', 
            borderRadius: '8px', 
            padding: '24px', 
            maxWidth: '1000px', 
            margin: '0 auto' 
          }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Report Features</h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '16px',
              fontSize: '14px'
            }}>
              <div>
                <h3 style={{ fontWeight: '500', marginBottom: '8px' }}>🎨 Customizable Branding</h3>
                <p style={{ color: '#6b7280' }}>Upload logos, select fonts, and customize colors for branded reports</p>
              </div>
              <div>
                <h3 style={{ fontWeight: '500', marginBottom: '8px' }}>✏️ Editable Content</h3>
                <p style={{ color: '#6b7280' }}>Click to edit titles, insights, and recommendations directly in the browser</p>
              </div>
              <div>
                <h3 style={{ fontWeight: '500', marginBottom: '8px' }}>🖨️ Export Ready</h3>
                <p style={{ color: '#6b7280' }}>Optimized for PDF export and Google Docs with proper formatting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;