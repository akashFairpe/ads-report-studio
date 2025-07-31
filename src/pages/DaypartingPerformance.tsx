import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const DaypartingPerformance = () => {
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [logoUrl, setLogoUrl] = useState('');

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLogoUrl(url);
    }
  };

  const applyFont = (font: string) => {
    document.documentElement.style.setProperty('--report-font', font);
  };

  React.useEffect(() => {
    applyFont(selectedFont);
  }, [selectedFont]);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
  }, [primaryColor]);

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: `var(--report-font, ${selectedFont})` }}>
      {/* Branding Controls */}
      <div className="bg-card border-b p-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-semibold mb-4 text-card-foreground">Report Branding Controls</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-card-foreground">Company Logo</label>
              <Input type="file" accept="image/*" onChange={handleLogoUpload} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-card-foreground">Font Family</label>
              <select 
                value={selectedFont} 
                onChange={(e) => setSelectedFont(e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              >
                <option value="Inter">Inter</option>
                <option value="Roboto">Roboto</option>
                <option value="Lato">Lato</option>
                <option value="Open Sans">Open Sans</option>
                <option value="Poppins">Poppins</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-card-foreground">Primary Color</label>
              <Input 
                type="color" 
                value={primaryColor} 
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="h-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="bg-card rounded-lg shadow-sm border p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              {logoUrl && (
                <img src={logoUrl} alt="Company Logo" className="h-16 mb-4" id="company-logo" />
              )}
              <h1 
                contentEditable="true" 
                className="text-3xl font-bold mb-2 outline-none"
                style={{ color: primaryColor }}
                suppressContentEditableWarning={true}
                id="report-title"
              >
                Dayparting Performance Report
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Client:</strong> 
                  <span contentEditable="true" className="ml-2 outline-none" suppressContentEditableWarning={true} id="client-name">
                    Example Client Name
                  </span>
                </div>
                <div>
                  <strong>Date Range:</strong> 
                  <span contentEditable="true" className="ml-2 outline-none" suppressContentEditableWarning={true} id="date-range">
                    March 1 - 31, 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* API Integration Ready - Add data-id attributes for dynamic data injection */}
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Total Impressions</h3>
            <p className="text-3xl font-bold text-foreground" id="total-impressions" data-id="total_impressions">2,456,789</p>
          </div>
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Total Clicks</h3>
            <p className="text-3xl font-bold text-foreground" id="total-clicks" data-id="total_clicks">45,123</p>
          </div>
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Peak Hour</h3>
            <p className="text-3xl font-bold text-foreground" id="peak-hour" data-id="peak_hour">2:00 PM</p>
          </div>
          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Best Day</h3>
            <p className="text-3xl font-bold text-foreground" id="best-day" data-id="best_day">Tuesday</p>
          </div>
        </div>

        {/* Performance by Hour Chart */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Performance by Hour of Day</h2>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground" id="hourly-chart" data-id="hourly_performance_chart">
            {/* API Integration: Replace with dynamic chart data */}
            <div className="text-center">
              <p className="text-lg font-medium">Hourly Performance Chart</p>
              <p className="text-sm">Chart will be populated with API data</p>
            </div>
          </div>
        </div>

        {/* Performance by Day of Week */}
        <div className="bg-card rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Performance by Day of Week</h2>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground" id="daily-chart" data-id="daily_performance_chart">
            <div className="text-center">
              <p className="text-lg font-medium">Daily Performance Chart</p>
              <p className="text-sm">Chart will be populated with API data</p>
            </div>
          </div>
        </div>

        {/* Detailed Performance Table */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Detailed Performance Breakdown</h2>
          <div className="overflow-x-auto">
            {/* API Integration Ready - Table with data-id attributes */}
            <table className="w-full border-collapse" id="performance-table" data-id="detailed_performance_table">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Time Period</th>
                  <th className="text-left p-3 font-semibold">Impressions</th>
                  <th className="text-left p-3 font-semibold">Clicks</th>
                  <th className="text-left p-3 font-semibold">CTR</th>
                  <th className="text-left p-3 font-semibold">CPC</th>
                  <th className="text-left p-3 font-semibold">Conversions</th>
                  <th className="text-left p-3 font-semibold">Conv. Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-3" data-id="period_1">00:00 - 06:00</td>
                  <td className="p-3" data-id="impressions_1">45,123</td>
                  <td className="p-3" data-id="clicks_1">567</td>
                  <td className="p-3" data-id="ctr_1">1.26%</td>
                  <td className="p-3" data-id="cpc_1">$1.23</td>
                  <td className="p-3" data-id="conversions_1">12</td>
                  <td className="p-3" data-id="conv_rate_1">2.12%</td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-3" data-id="period_2">06:00 - 12:00</td>
                  <td className="p-3" data-id="impressions_2">156,789</td>
                  <td className="p-3" data-id="clicks_2">2,345</td>
                  <td className="p-3" data-id="ctr_2">1.50%</td>
                  <td className="p-3" data-id="cpc_2">$1.15</td>
                  <td className="p-3" data-id="conversions_2">45</td>
                  <td className="p-3" data-id="conv_rate_2">1.92%</td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-3" data-id="period_3">12:00 - 18:00</td>
                  <td className="p-3" data-id="impressions_3">234,567</td>
                  <td className="p-3" data-id="clicks_3">4,567</td>
                  <td className="p-3" data-id="ctr_3">1.95%</td>
                  <td className="p-3" data-id="cpc_3">$1.08</td>
                  <td className="p-3" data-id="conversions_3">89</td>
                  <td className="p-3" data-id="conv_rate_3">1.95%</td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-3" data-id="period_4">18:00 - 24:00</td>
                  <td className="p-3" data-id="impressions_4">189,234</td>
                  <td className="p-3" data-id="clicks_4">3,456</td>
                  <td className="p-3" data-id="ctr_4">1.83%</td>
                  <td className="p-3" data-id="cpc_4">$1.19</td>
                  <td className="p-3" data-id="conversions_4">67</td>
                  <td className="p-3" data-id="conv_rate_4">1.94%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-card rounded-lg shadow-sm border p-6" style={{ pageBreakBefore: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>Recommendations & Insights</h2>
          <Textarea 
            defaultValue="Based on the dayparting analysis, we recommend increasing bid adjustments during peak performance hours (12:00-18:00) and considering budget reallocation from low-performing overnight periods. Tuesday and Wednesday show consistently higher conversion rates and should be prioritized for promotional campaigns."
            className="min-h-32 w-full"
            id="recommendations"
            data-id="analyst_recommendations"
          />
        </div>

        {/* Footer */}
        <div className="bg-card rounded-lg shadow-sm border p-6 text-center" style={{ pageBreakBefore: 'auto' }}>
          <div className="flex justify-between items-center">
            <div>
              {logoUrl && <img src={logoUrl} alt="Company Logo" className="h-8" />}
            </div>
            <div className="text-sm text-muted-foreground">
              <span contentEditable="true" suppressContentEditableWarning={true} id="footer-text">
                Powered by AdSpyder | Page 1 of 1
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* API Integration Script Template */}
      {/*
      <script>
        // Sample API integration for dynamic data injection
        async function loadDaypartingData() {
          try {
            const response = await fetch('/api/dayparting-performance');
            const data = await response.json();
            
            // Update metrics
            document.getElementById('total-impressions').textContent = data.totalImpressions;
            document.getElementById('total-clicks').textContent = data.totalClicks;
            document.getElementById('peak-hour').textContent = data.peakHour;
            document.getElementById('best-day').textContent = data.bestDay;
            
            // Update table data
            data.timeSlots.forEach((slot, index) => {
              document.querySelector(`[data-id="period_${index + 1}"]`).textContent = slot.period;
              document.querySelector(`[data-id="impressions_${index + 1}"]`).textContent = slot.impressions;
              document.querySelector(`[data-id="clicks_${index + 1}"]`).textContent = slot.clicks;
              // ... update other metrics
            });
            
            // Render charts
            renderHourlyChart(data.hourlyData);
            renderDailyChart(data.dailyData);
          } catch (error) {
            console.error('Error loading dayparting data:', error);
          }
        }
        
        // Call on page load
        document.addEventListener('DOMContentLoaded', loadDaypartingData);
      </script>
      */}
    </div>
  );
};

export default DaypartingPerformance;