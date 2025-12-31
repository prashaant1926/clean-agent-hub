import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { DataFactorySection } from "@/components/DataFactorySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SkillsSection />
      <DataFactorySection />
    </div>
  );
};

export default Index;
