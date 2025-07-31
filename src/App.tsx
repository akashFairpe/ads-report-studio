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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
