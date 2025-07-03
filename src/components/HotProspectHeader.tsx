
import { Button } from "@/components/ui/button";

const HotProspectHeader = () => {
  const openCalendlyDemo = () => {
    window.open('https://calendly.com/nossa-iyamu1/anax-demo-with-nossa-iyamu', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Anax
            </h1>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={openCalendlyDemo}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HotProspectHeader;
