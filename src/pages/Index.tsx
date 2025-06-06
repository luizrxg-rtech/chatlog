import Header from "@/components/Header";
import Hero from "@/components/Hero.tsx";
import Features from "@/components/Features.tsx";
import Benefits from "@/components/Benefits.tsx";
import AudienceSection from "@/components/Audience.tsx";
import AgentModels from "@/components/AgentModels.tsx";
import Pricing from "@/components/Pricing.tsx";
import FAQ from "@/components/FAQ.tsx";
import Footer from "@/components/Footer";
import "@/App.css";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <AgentModels />
      <Features />
      <Benefits />
      <AudienceSection />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
