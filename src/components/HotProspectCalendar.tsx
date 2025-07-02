
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Building } from "lucide-react";

const HotProspectCalendar = () => {
  const meetings = [
    { time: "9:00 AM", name: "Sarah Chen", company: "DataFlow", industry: "AI Analytics", day: "Today" },
    { time: "11:30 AM", name: "Marcus Rivera", company: "CloudScale", industry: "DevOps", day: "Today" },
    { time: "2:00 PM", name: "Emily Watson", company: "TechForward", industry: "Marketing Automation", day: "Today" },
    { time: "10:00 AM", name: "David Kim", company: "ScaleUp", industry: "E-commerce", day: "Tomorrow" },
    { time: "1:00 PM", name: "Lisa Park", company: "FinanceFlow", industry: "FinTech", day: "Tomorrow" },
    { time: "3:30 PM", name: "Alex Johnson", company: "HealthTech", industry: "Healthcare", day: "Tomorrow" },
  ];

  const todayMeetings = meetings.filter(m => m.day === "Today");
  const tomorrowMeetings = meetings.filter(m => m.day === "Tomorrow");

  return (
    <div className="w-full bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your calendar, filled with qualified prospects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Stop chasing unqualified leads. Our AI finds and books meetings with prospects who actually need what you're selling.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Google Calendar Style Header */}
          <div className="bg-white border border-gray-300 rounded-t-lg shadow-sm">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">December 2024</h3>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-sm">6 meetings</span>
                </div>
                <div className="flex space-x-1">
                  <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
                    <span className="text-gray-600">‹</span>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
                    <span className="text-gray-600">›</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Content */}
          <div className="bg-white border-l border-r border-b border-gray-300 rounded-b-lg shadow-sm">
            {/* Today */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center mb-3 pb-2 border-b border-gray-100">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <h4 className="text-base font-medium text-gray-900">Today • December 27</h4>
              </div>
              <div className="space-y-4">
                {todayMeetings.map((meeting, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-center p-3 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg hover:bg-blue-100 transition-colors mb-2"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full mr-3 text-white text-xs font-medium">
                      {meeting.time.split(':')[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-semibold text-gray-900">{meeting.name}</h5>
                          <div className="flex items-center text-gray-600 text-sm mt-1">
                            <Building className="w-4 h-4 mr-1" />
                            <span>{meeting.company} • {meeting.industry}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">{meeting.time}</div>
                          <div className="text-xs text-gray-500">30 min • Video call</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tomorrow */}
            <div className="p-4">
              <div className="flex items-center mb-3 pb-2 border-b border-gray-100">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                <h4 className="text-base font-medium text-gray-900">Tomorrow • December 28</h4>
              </div>
              <div className="space-y-4">
                {tomorrowMeetings.map((meeting, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-center p-3 border-l-4 border-gray-400 bg-gray-50 rounded-r-lg hover:bg-gray-100 transition-colors mb-2"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full mr-3 text-white text-xs font-medium">
                      {meeting.time.split(':')[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-semibold text-gray-900">{meeting.name}</h5>
                          <div className="flex items-center text-gray-600 text-sm mt-1">
                            <Building className="w-4 h-4 mr-1" />
                            <span>{meeting.company} • {meeting.industry}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">{meeting.time}</div>
                          <div className="text-xs text-gray-500">30 min • Video call</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Calendar Footer */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">All prospects pre-qualified</span> — no more wasted time on bad-fit calls
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HotProspectCalendar;
