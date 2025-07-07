
import { motion } from "framer-motion";
import { Mail, Phone, TrendingUp, Clock, DollarSign, Zap } from "lucide-react";

const HotProspectFeatures = () => {
  const features = [
    {
      icon: Mail,
      title: "Mail SDR Agent",
      description: "Fetches your ICPs, writes personalized cold emails, and shows each step in real-time",
      details: ["Auto-find qualified prospects", "Personalized email writing", "Real-time progress tracking", "High deliverability rates"]
    },
    {
      icon: Phone,
      title: "Call SDR Agent", 
      description: "Gets ICP phone numbers and launches AI voice calls on your behalf",
      details: ["Prospect phone discovery", "AI voice conversations", "Call script optimization", "Meeting booking automation"]
    },
    {
      icon: TrendingUp,
      title: "Lead Gen SDR Agent",
      description: "Creates viral LinkedIn and X posts based on trending industry news",
      details: ["Trend analysis & research", "Viral content creation", "Multi-platform posting", "Inbound lead generation"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "10x Faster",
      description: "Complete prospecting tasks in minutes, not hours"
    },
    {
      icon: DollarSign,
      title: "Startup Friendly Pricing",
      description: "Affordable plans designed for growing businesses"
    },
    {
      icon: Zap,
      title: "Zero Setup",
      description: "No dashboards, workflows, or complex configurations"
    }
  ];

  return (
    <div className="w-full bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Three AI agents that handle everything
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Each agent specializes in a different part of your sales process. 
            Just tell them what you need and watch them work.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 text-base leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Why founders choose Anax
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Built specifically for busy founders and lean sales teams who need results, not complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HotProspectFeatures;
