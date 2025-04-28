
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-b from-blue-start to-blue-end w-full min-h-screen">
        <Navigation />
        <HeroSection />
      </div>
      <HowItWorks />
    </div>
  );
};

export default Index;
