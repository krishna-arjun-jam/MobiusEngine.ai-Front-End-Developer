
import { Button } from "@/components/ui/button";
import { ArrowRight, BookText } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full px-8 md:px-16 lg:px-24 mt-8 md:mt-12">
      <div className="w-full md:w-1/2">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Land job interviews <br />
          <span className="text-blue-200">10x faster</span>
        </h1>
        
        <p className="text-white/90 mt-6 max-w-md">
          Custom-built resumes that match your goals, keywords, and
          recruiter expectations.
        </p>
        
        <Button className="mt-8 bg-white text-blue-start hover:bg-gray-100 rounded-full px-6 py-6 font-medium flex items-center">
          Get Started 
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
        <div className="relative">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs">
            <img
              src="/lovable-uploads/7af24a80-ca71-4a0d-abc7-134facc536ce.png"
              alt="2024/2025 Hiring Trends Guide"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <BookText className="w-6 h-6 text-blue-500" />
          </div>
          <div className="absolute -bottom-10 right-16 text-white text-xs font-medium">
            Download Free E-Book
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
