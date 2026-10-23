import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { DivisionsMatrix } from "@/components/home/DivisionsMatrix";
import { SynergySection } from "@/components/home/SynergySection";
import { RealProjectsShowcase } from "@/components/home/RealProjectsShowcase";
import { FounderSpotlight } from "@/components/home/FounderSpotlight";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <DivisionsMatrix />
      <SynergySection />
      <RealProjectsShowcase />
      <FounderSpotlight />
      <Testimonials />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
