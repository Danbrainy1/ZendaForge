import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { RealProjectsShowcase } from "@/components/home/RealProjectsShowcase";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { InteractiveQuoteEstimator } from "@/components/home/InteractiveQuoteEstimator";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <RealProjectsShowcase />
      <ServicesPreview />
      <IndustriesSection />
      <WhyChooseUs />
      <InteractiveQuoteEstimator />
      <Testimonials />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
