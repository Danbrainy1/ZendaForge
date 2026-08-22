import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { RealProjectsShowcase } from "@/components/home/RealProjectsShowcase";
import { InteractiveDevicePreview } from "@/components/home/InteractiveDevicePreview";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { InteractiveQuoteEstimator } from "@/components/home/InteractiveQuoteEstimator";
import { WebsiteAuditTool } from "@/components/home/WebsiteAuditTool";
import { MaintenanceHostingSection } from "@/components/home/MaintenanceHostingSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <RealProjectsShowcase />
      <InteractiveDevicePreview />
      <BeforeAfterSlider />
      <ServicesPreview />
      <IndustriesSection />
      <InteractiveQuoteEstimator />
      <WebsiteAuditTool />
      <MaintenanceHostingSection />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
