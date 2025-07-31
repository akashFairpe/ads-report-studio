import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Google Ads PPC Reports Dashboard</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Professional, customizable PPC reports for Google Ads performance analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📊 Account Performance
              </CardTitle>
              <CardDescription>
                Comprehensive account-level overview with key metrics, trends, and campaign snapshots
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Key performance metrics summary</li>
                <li>• Performance trend charts</li>
                <li>• Top performing campaigns table</li>
                <li>• Insights & recommendations</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/account-performance">View Report</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎯 Campaign Performance
              </CardTitle>
              <CardDescription>
                Detailed campaign analysis with funnel metrics, device insights, and creative performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Campaign funnel overview</li>
                <li>• Device & demographic breakdowns</li>
                <li>• Creative performance analysis</li>
                <li>• Daily performance tracking</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/campaign-performance">View Report</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🔍 Ad Group Performance
              </CardTitle>
              <CardDescription>
                Ad group level analysis with keyword breakdowns and quality score insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Ad group performance comparison</li>
                <li>• Top keywords by ad group</li>
                <li>• Creative performance by ad group</li>
                <li>• Quality score analysis</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/ad-group-performance">View Report</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                👥 Demographic Performance
              </CardTitle>
              <CardDescription>
                Performance analysis by age, gender, and demographic segments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Age group performance analysis</li>
                <li>• Gender demographic insights</li>
                <li>• Cross-demographic comparisons</li>
                <li>• Targeting recommendations</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/demographic-performance">View Report</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🌍 Geographic Performance
              </CardTitle>
              <CardDescription>
                Regional and location-based performance insights and trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Country/region performance map</li>
                <li>• Top performing locations</li>
                <li>• Geographic trend analysis</li>
                <li>• Location-based optimization</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/geographic-performance">View Report</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📱 Device Performance
              </CardTitle>
              <CardDescription>
                Mobile, desktop, and tablet performance comparison and analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Cross-device performance metrics</li>
                <li>• Traffic distribution analysis</li>
                <li>• Device-specific trends</li>
                <li>• Mobile optimization insights</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/device-performance">View Report</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                ⏰ Dayparting Performance
              </CardTitle>
              <CardDescription>
                Hour-by-hour and day-of-week performance analysis for optimal ad scheduling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Performance by hour of day</li>
                <li>• Day-of-week analysis</li>
                <li>• Peak performance windows</li>
                <li>• Bid adjustment recommendations</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/dayparting-performance">View Report</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📝 Ad Performance
              </CardTitle>
              <CardDescription>
                Individual ad creative analysis with CTR, conversion tracking, and optimization insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Top performing ad creatives</li>
                <li>• Ad type comparison analysis</li>
                <li>• Creative performance metrics</li>
                <li>• A/B testing recommendations</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/ad-performance">View Report</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🔑 Keyword Performance
              </CardTitle>
              <CardDescription>
                Comprehensive keyword analysis with match types, negative keywords, and bid optimization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Top keywords by conversions</li>
                <li>• Match type performance analysis</li>
                <li>• Negative keyword suggestions</li>
                <li>• Keyword expansion opportunities</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/keyword-performance">View Report</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🔍 Search Term Report
              </CardTitle>
              <CardDescription>
                Detailed analysis of actual search queries triggering your ads with performance insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Search term performance analysis</li>
                <li>• Negative keyword recommendations</li>
                <li>• Search query optimization</li>
                <li>• Irrelevant traffic identification</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/search-term-report">View Report</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                💰 Cost & Budget Tracking
              </CardTitle>
              <CardDescription>
                Comprehensive budget monitoring with spend analysis and cost efficiency metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Budget vs actual spend tracking</li>
                <li>• Daily cost trend analysis</li>
                <li>• Campaign cost breakdown</li>
                <li>• Cost efficiency optimization</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/cost-budget-report">View Report</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📈 Pacing Report
              </CardTitle>
              <CardDescription>
                Budget pacing analysis with spending projections and campaign optimization recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Budget pacing health monitoring</li>
                <li>• Spend projection analysis</li>
                <li>• Campaign-level pacing status</li>
                <li>• Automated adjustment recommendations</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/pacing-report">View Report</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎯 Conversion Tracking
              </CardTitle>
              <CardDescription>
                Comprehensive conversion tracking with attribution model analysis and optimization insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Conversion action breakdowns</li>
                <li>• Attribution model comparison</li>
                <li>• Conversion trend analysis</li>
                <li>• CPA optimization insights</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/conversion-tracking-report">View Report</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                💸 ROAS Report
              </CardTitle>
              <CardDescription>
                Return on Ad Spend analysis with campaign profitability and revenue optimization insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Campaign ROAS performance</li>
                <li>• Revenue trend analysis</li>
                <li>• Top/bottom performer identification</li>
                <li>• Profitability optimization</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/roas-report">View Report</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🧪 Ad Variation Performance
              </CardTitle>
              <CardDescription>
                A/B testing results with statistical significance and creative optimization recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• A/B test performance comparison</li>
                <li>• Statistical significance analysis</li>
                <li>• Winning creative identification</li>
                <li>• Testing strategy recommendations</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/ad-variation-performance-report">View Report</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                ⭐ Quality Score Analysis
              </CardTitle>
              <CardDescription>
                In-depth quality score analysis with keyword optimization and landing page recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Quality score by keyword analysis</li>
                <li>• Expected CTR performance review</li>
                <li>• Landing page experience insights</li>
                <li>• Ad relevance optimization tips</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/quality-score-analysis-report">View Report</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                ⚔️ Auction Insights
              </CardTitle>
              <CardDescription>
                Competitive analysis with auction insights, impression share, and outranking data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Competitor impression share analysis</li>
                <li>• Overlap rate and outranking metrics</li>
                <li>• Top of page rate comparison</li>
                <li>• Competitive strategy recommendations</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/auction-insights-report">View Report</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🛍️ Shopping Campaign Performance
              </CardTitle>
              <CardDescription>
                E-commerce focused analysis with product performance, ROAS, and merchandising insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Product group performance analysis</li>
                <li>• Top/bottom performing SKUs</li>
                <li>• Brand performance comparison</li>
                <li>• Merchandising optimization tips</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/shopping-campaign-performance-report">View Report</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-muted rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Report Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h3 className="font-medium mb-2">🎨 Customizable Branding</h3>
                <p className="text-muted-foreground">Upload logos, select fonts, and customize colors for branded reports</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">✏️ Editable Content</h3>
                <p className="text-muted-foreground">Click to edit titles, insights, and recommendations directly in the browser</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">🖨️ Export Ready</h3>
                <p className="text-muted-foreground">Optimized for PDF export and Google Docs with proper formatting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
