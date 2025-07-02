
import { motion } from "framer-motion";
import { Mail, Phone, TrendingUp, Send, CheckCircle, Clock, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const HotProspectChatInterface = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);
  const [showDemo, setShowDemo] = useState(false);
  const [demoStep, setDemoStep] = useState(0);

  const prompts = [
    {
      icon: Mail,
      title: "Mail SDR",
      description: "Find my ICPs and send personalized cold emails",
      prompt: "Find 50 SaaS founders in Series A companies and send them personalized cold emails about our sales automation platform",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Call SDR", 
      description: "Make AI voice calls to my prospects",
      prompt: "Call the top 20 prospects from my lead list and pitch our AI SDR solution using our proven script",
      color: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      title: "Lead Gen SDR",
      description: "Create viral content based on industry trends",
      prompt: "Write 5 LinkedIn posts about the latest sales automation trends that will drive inbound leads to our business",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const demoSteps = [
    {
      type: "ai",
      content: "I'll help you find SaaS founders and send personalized emails. Let me start by researching your ideal prospects...",
      status: "processing"
    },
    {
      type: "ai", 
      content: "✅ Found 50 Series A SaaS founders\n• Sarah Chen - CEO at DataFlow (AI Analytics)\n• Marcus Rivera - Founder at CloudScale (DevOps)\n• Emily Watson - CEO at TechForward (Marketing Automation)",
      status: "completed"
    },
    {
      type: "ai",
      content: "Now crafting personalized emails for each prospect...",
      status: "processing"
    },
    {
      type: "ai",
      content: "✅ Email for Sarah Chen:\n\"Hi Sarah, I noticed DataFlow recently raised Series A for AI analytics. As you scale your sales team, you're likely facing the same challenge we solved at [Your Company] - SDRs spending 80% of their time on manual tasks instead of selling...\"\n\n✅ Email for Marcus Rivera:\n\"Marcus, congrats on CloudScale's growth in the DevOps space. Quick question - how much time does your team spend on repetitive prospecting vs. actually closing deals?\"",
      status: "completed"
    },
    {
      type: "ai",
      content: "Sending personalized emails to all 50 prospects...",
      status: "processing"
    },
    {
      type: "ai",
      content: "🎉 Campaign Complete!\n✅ 50 emails sent",
      status: "completed"
    },
    {
      type: "ai",
      content: "✅ 12 replies already (24% response rate)\n✅ 3 meetings booked\n\nNext batch of prospects is ready when you are!",
      status: "completed"
    }
  ];

  useEffect(() => {
    if (showDemo && demoStep < demoSteps.length) {
      const timer = setTimeout(() => {
        setDemoStep(prev => prev + 1);
      }, demoStep === 0 ? 1000 : 2500);
      return () => clearTimeout(timer);
    }
  }, [showDemo, demoStep]);

  const startDemo = (promptIndex: number) => {
    setShowDemo(true);
    setDemoStep(0);
    setSelectedPrompt(prompts[promptIndex].prompt);
  };

  return (
    <div id="chat-interface" className="w-full bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Watch our AI work in real-time
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            No complex workflows. No training required. Just tell our AI what you need and watch it work.
          </p>
        </motion.div>

        {/* Chat Interface Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Chat Window */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                <span className="text-white font-medium">Anax AI</span>
              </div>
            </div>

            {/* Chat Content */}
            <div className="p-6 min-h-[500px] max-h-[600px] overflow-y-auto">
              {/* AI Welcome Message */}
              {!showDemo && (
                <div className="flex items-start mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white text-sm font-bold">AI</span>
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-md">
                    <p className="text-gray-800">
                      Hi! I'm your AI SDR. I can help you with prospecting, cold emails, calls, and lead generation. Click on a task below to see me in action!
                    </p>
                  </div>
                </div>
              )}

              {/* Suggested Prompts - only show if demo isn't running */}
              {!showDemo && (
                <div className="space-y-3 mb-6">
                  {prompts.map((prompt, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="cursor-pointer transition-all duration-300 hover:transform hover:scale-105"
                      onClick={() => startDemo(index)}
                    >
                      <div className={`bg-gradient-to-r ${prompt.color} p-0.5 rounded-xl`}>
                        <div className="bg-white rounded-xl p-4 h-full">
                          <div className="flex items-center mb-2">
                            <prompt.icon className="w-5 h-5 mr-2 text-gray-700" />
                            <span className="font-semibold text-gray-900">{prompt.title}</span>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{prompt.description}</p>
                          <p className="text-gray-800 text-sm italic">"{prompt.prompt}"</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Demo Flow */}
              {showDemo && (
                <div className="space-y-4">
                  {/* User Message */}
                  <div className="flex items-start justify-end mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl px-4 py-3 max-w-md">
                      <p className="text-sm">{selectedPrompt}</p>
                    </div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full ml-3 flex items-center justify-center">
                      <span className="text-gray-600 text-sm font-bold">You</span>
                    </div>
                  </div>

                  {/* AI Responses */}
                  {demoSteps.slice(0, demoStep + 1).map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-start mb-4"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        {step.status === "completed" ? (
                          <CheckCircle className="w-4 h-4 text-white" />
                        ) : (
                          <Clock className="w-4 h-4 text-white animate-spin" />
                        )}
                      </div>
                      <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-lg">
                        <p className="text-gray-800 whitespace-pre-line text-sm">{step.content}</p>
                        {step.status === "processing" && (
                          <div className="flex items-center mt-2">
                            <div className="animate-pulse flex space-x-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Reset Demo Button */}
              {showDemo && demoStep >= demoSteps.length && (
                <div className="text-center mt-6">
                  <Button
                    onClick={() => {
                      setShowDemo(false);
                      setDemoStep(0);
                      setSelectedPrompt(null);
                    }}
                    variant="outline"
                    className="px-6 py-2"
                  >
                    Try Another Task
                  </Button>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  placeholder="Type your request or click a suggestion above..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={showDemo}
                />
                <Button 
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl"
                  disabled={showDemo}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HotProspectChatInterface;
