
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-full p-5 flex justify-between items-center z-10 relative">
      <div className="flex items-center">
        <div className="flex items-center mr-8">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-blue-start rounded-full transform -translate-x-1"></div>
          </div>
          <span className="ml-2 text-white font-medium text-lg">MobusEngine</span>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-200">About Us</Link>
          <Link to="/plans" className="text-white hover:text-gray-200">Plans</Link>
          <Link to="/testimonials" className="text-white hover:text-gray-200">Testimonials</Link>
          <Link to="/privacy" className="text-white hover:text-gray-200">Privacy Policy</Link>
          <div className="relative group">
            <button className="text-white hover:text-gray-200 flex items-center">
              More
              <span className="ml-1">▼</span>
            </button>
          </div>
        </div>
      </div>
      
      <Button className="bg-white text-blue-start hover:bg-gray-100 font-medium rounded-full px-6">
        Get Started
      </Button>
    </nav>
  );
};

export default Navigation;
