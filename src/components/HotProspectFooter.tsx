
import { ArrowRight } from "lucide-react";

const HotProspectFooter = () => {
  const handleSubscribe = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeSMswKtyYj3wSYLwGk0fdmblK5ksE8rwyGuAhwmcZ9BXcuoQ/viewform', '_blank');
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10 border-b border-gray-700">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Anax</h3>
            <p className="text-gray-300 mb-6">
              The AI-powered SDR platform that handles prospecting, cold emails, and calls. 
              No dashboards, no complexity - just results.
            </p>
            <p className="text-gray-400 text-sm">
              Stop wasting time on repetitive sales tasks. Start prospecting smarter.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Get notified when we launch and receive sales automation tips.
            </p>
            <button 
              onClick={handleSubscribe}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center justify-center"
            >
              Subscribe
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Anax. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default HotProspectFooter;
