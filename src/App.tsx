import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Founder from "./pages/Founder";
import Technologies from "./pages/Technologies";
import EducationalConsult from "./pages/EducationalConsult";
import DataLab from "./pages/DataLab";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Dedicated Division Pages */}
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/educational-consult" element={<EducationalConsult />} />
            <Route path="/education" element={<EducationalConsult />} />
            <Route path="/data-lab" element={<DataLab />} />
            <Route path="/datalab" element={<DataLab />} />
            {/* Unified Company Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/about/founder" element={<Founder />} />
            <Route path="/ceo" element={<Founder />} />
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
