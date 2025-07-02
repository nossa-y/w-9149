
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Building, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const HotProspectCalendar = () => {
  const meetings = [
    { time: "9:00 AM", name: "Sarah Chen", company: "DataFlow", industry: "AI Analytics", day: "Today", duration: "30 min" },
    { time: "11:30 AM", name: "Marcus Rivera", company: "CloudScale", industry: "DevOps", day: "Today", duration: "45 min" },
    { time: "2:00 PM", name: "Emily Watson", company: "TechForward", industry: "Marketing Automation", day: "Today", duration: "30 min" },
    { time: "10:00 AM", name: "David Kim", company: "ScaleUp", industry: "E-commerce", day: "Tomorrow", duration: "30 min" },
    { time: "1:00 PM", name: "Lisa Park", company: "FinanceFlow", industry: "FinTech", day: "Tomorrow", duration: "45 min" },
    { time: "3:30 PM", name: "Alex Johnson", company: "HealthTech", industry: "Healthcare", day: "Tomorrow", duration: "30 min" },
  ];

  const todayMeetings = meetings.filter(m => m.day === "Today");
  const tomorrowMeetings = meetings.filter(m => m.day === "Tomorrow");

  const calendarDays = [
    { day: 27, isToday: true, meetings: 3 },
    { day: 28, isToday: false, meetings: 3 },
    { day: 29, isToday: false, meetings: 0 },
    { day: 30, isToday: false, meetings: 2 },
    { day: 31, isToday: false, meetings: 1 },
    { day: 1, isToday: false, meetings: 0 },
    { day: 2, isToday: false, meetings: 1 },
  ];

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
          className="max-w-5xl mx-auto"
        >
          {/* Google Calendar Style Interface */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Calendar Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h3 className="text-xl font-semibold text-gray-900 mr-4">December 2024</h3>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="p-2">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Week
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Create
                  </Button>
                </div>
              </div>
            </div>

            {/* Mini Calendar View */}
            <div className="p-6 border-b border-gray-100">
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((date, index) => (
                  <div
                    key={index}
                    className={`aspect-square flex flex-col items-center justify-center rounded-lg text-sm cursor-pointer transition-colors ${
                      date.isToday
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="font-medium">{date.day}</span>
                    {date.meetings > 0 && (
                      <div className={`w-1 h-1 rounded-full mt-1 ${
                        date.isToday ? 'bg-white' : 'bg-blue-500'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <h4 className="text-lg font-semibold text-gray-900">Today - December 27</h4>
                <span className="ml-auto text-sm text-gray-500">{todayMeetings.length} meetings</span>
              </div>
              <div className="space-y-3">
                {todayMeetings.map((meeting, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-center p-4 bg-blue-50 rounded-xl border-l-4 border-blue-600 hover:bg-blue-100 transition-colors cursor-pointer"
                  >
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
                          <div className="text-xs text-gray-500">{meeting.duration}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tomorrow's Schedule */}
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h4 className="text-lg font-semibold text-gray-900">Tomorrow - December 28</h4>
                <span className="ml-auto text-sm text-gray-500">{tomorrowMeetings.length} meetings</span>
              </div>
              <div className="space-y-3">
                {tomorrowMeetings.map((meeting, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-center p-4 bg-green-50 rounded-xl border-l-4 border-green-500 hover:bg-green-100 transition-colors cursor-pointer"
                  >
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
                          <div className="text-xs text-gray-500">{meeting.duration}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Calendar Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold text-gray-900">All prospects pre-qualified</span> — no more wasted time on bad-fit calls
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  <span>6 meetings this week</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HotProspectCalendar;
