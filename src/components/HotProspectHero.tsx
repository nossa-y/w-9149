
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HotProspectHero = () => {
  const scrollToChatInterface = () => {
    const chatSection = document.getElementById('chat-interface');
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openCalendlyDemo = () => {
    window.open('https://calendly.com/nossa-iyamu1/anax-demo-with-nossa-iyamu', '_blank');
  };

  return (
    <motion.div 
      className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent)] opacity-70"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent)] opacity-50"></div>
      
      <div className="banner-container h-screen relative flex items-center justify-center">
        <div className="banner-overlay">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 border border-white/20">
                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                AI-Powered Sales Development
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Stop wasting time on
                <span className="block text-gray-300">
                  repetitive sales tasks
                </span>
              </h2>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                One simple AI chatbot handles prospecting, cold emails, and calls. 
                <span className="block mt-2 font-semibold text-white">No dashboards. No complexity. Just results.</span>
              </p>

              {/* CTA Buttons - Same size and dimensions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                  onClick={scrollToChatInterface}
                  className="w-full sm:w-64 h-14 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Try the Agent Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <button 
                  onClick={openCalendlyDemo}
                  className="w-full sm:w-64 h-14 px-8 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                >
                  Book a Demo
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">10x</div>
                  <div className="text-gray-400 text-sm">Faster Prospecting</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">85%</div>
                  <div className="text-gray-400 text-sm">Time Saved</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">3x</div>
                  <div className="text-gray-400 text-sm">More Meetings</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HotProspectHero;
