import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AccountPerformance from "./pages/AccountPerformance";
import CampaignPerformance from "./pages/CampaignPerformance";
import AdGroupPerformance from "./pages/AdGroupPerformance";
import DemographicPerformance from "./pages/DemographicPerformance";
import GeographicPerformance from "./pages/GeographicPerformance";
import DevicePerformance from "./pages/DevicePerformance";
import DaypartingPerformance from "./pages/DaypartingPerformance";
import AdPerformance from "./pages/AdPerformance";
import KeywordPerformance from "./pages/KeywordPerformance";
import SearchTermReport from "./pages/SearchTermReport";
import CostBudgetReport from "./pages/CostBudgetReport";
import PacingReport from "./pages/PacingReport";
import ConversionTrackingReport from "./pages/ConversionTrackingReport";
import ROASReport from "./pages/ROASReport";
import AdVariationPerformanceReport from "./pages/AdVariationPerformanceReport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/account-performance" element={<AccountPerformance />} />
          <Route path="/campaign-performance" element={<CampaignPerformance />} />
          <Route path="/ad-group-performance" element={<AdGroupPerformance />} />
          <Route path="/demographic-performance" element={<DemographicPerformance />} />
          <Route path="/geographic-performance" element={<GeographicPerformance />} />
          <Route path="/device-performance" element={<DevicePerformance />} />
          <Route path="/dayparting-performance" element={<DaypartingPerformance />} />
          <Route path="/ad-performance" element={<AdPerformance />} />
          <Route path="/keyword-performance" element={<KeywordPerformance />} />
          <Route path="/search-term-report" element={<SearchTermReport />} />
          <Route path="/cost-budget-report" element={<CostBudgetReport />} />
          <Route path="/pacing-report" element={<PacingReport />} />
          <Route path="/conversion-tracking-report" element={<ConversionTrackingReport />} />
          <Route path="/roas-report" element={<ROASReport />} />
          <Route path="/ad-variation-performance-report" element={<AdVariationPerformanceReport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
