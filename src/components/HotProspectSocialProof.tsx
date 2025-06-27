
import { motion } from "framer-motion";
import { Star, Users, TrendingUp } from "lucide-react";

const HotProspectSocialProof = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, TechFlow",
      content: "HotProspect replaced our entire SDR team. We're booking 3x more meetings with half the effort.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez", 
      role: "VP Sales, CloudScale",
      content: "Finally, an AI tool that actually works. No dashboards, no complexity - just results.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "CEO, DataPrime",
      content: "Our cold email response rates went from 2% to 8% in the first week. Game changer.",
      rating: 5
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Founders using HotProspect"
    },
    {
      icon: TrendingUp,
      number: "250K+",
      label: "Emails sent this month"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Average rating"
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by founders worldwide
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Join hundreds of founders who've automated their sales process with HotProspect
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">TechFlow</div>
            <div className="text-2xl font-bold text-gray-400">CloudScale</div>
            <div className="text-2xl font-bold text-gray-400">DataPrime</div>
            <div className="text-2xl font-bold text-gray-400">StartupX</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HotProspectSocialProof;
