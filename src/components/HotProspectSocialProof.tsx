
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const HotProspectSocialProof = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, TechFlow",
      content: "Anax replaced our entire SDR team. We're booking 3x more meetings with half the effort.",
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

  return (
    <div className="w-full bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What founders are saying
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how other founders are using Anax to automate their sales process
          </p>
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
      </div>
    </div>
  );
};

export default HotProspectSocialProof;
