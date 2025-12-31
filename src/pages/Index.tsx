import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LogoStrip } from "@/components/LogoStrip";
import { ResearchSection } from "@/components/ResearchSection";
import { DataFactorySection } from "@/components/DataFactorySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LogoStrip />
      <ResearchSection />
      <DataFactorySection />
    </div>
  );
};

export default Index;
