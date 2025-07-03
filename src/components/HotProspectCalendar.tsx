
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

  // Updated calendar days - Monday to Friday only with proper spacing
  const calendarDays = [
    { day: 23, dayName: 'Mon', isToday: false, meetings: 2 },
    { day: 24, dayName: 'Tue', isToday: false, meetings: 1 },
    { day: 25, dayName: 'Wed', isToday: true, meetings: 3 },
    { day: 26, dayName: 'Thu', isToday: false, meetings: 3 },
    { day: 27, dayName: 'Fri', isToday: false, meetings: 0 },
  ];

  return (
    <div className="w-full bg-white py-8 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your calendar, filled with qualified prospects
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Stop chasing unqualified leads. Our AI finds and books meetings with prospects who actually need what you're selling.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Google Calendar Style Interface - Mobile Responsive */}
          <div className="bg-white rounded-lg sm:rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Calendar Header */}
            <div className="bg-white border-b border-gray-200 px-3 sm:px-6 py-3 sm:py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mr-2 sm:mr-4">December 2024</h3>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Button variant="ghost" size="sm" className="p-1 sm:p-2">
                      <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-1 sm:p-2">
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Button variant="outline" size="sm" className="hidden sm:flex items-center text-xs sm:text-sm">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Week
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2">
                    <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Create</span>
                    <span className="sm:hidden">+</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Mini Calendar View - Fixed to prevent wrapping */}
            <div className="p-3 sm:p-6 border-b border-gray-100">
              <div className="flex justify-between items-center mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-gray-500">
                <div className="text-center flex-1">Sun</div>
                <div className="text-center flex-1">Mon</div>
                <div className="text-center flex-1">Tue</div>
                <div className="text-center flex-1">Wed</div>
                <div className="text-center flex-1">Thu</div>
                <div className="text-center flex-1">Fri</div>
                <div className="text-center flex-1">Sat</div>
              </div>
              <div className="flex justify-between items-center">
                {/* Empty cell for Sunday */}
                <div className="flex-1 flex justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10"></div>
                </div>
                {/* Weekday cells */}
                {calendarDays.map((date, index) => (
                  <div key={index} className="flex-1 flex justify-center">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 flex flex-col items-center justify-center rounded-md sm:rounded-lg text-xs sm:text-sm cursor-pointer transition-colors ${
                        date.isToday
                          ? 'bg-blue-600 text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span className="font-medium">{date.day}</span>
                      {date.meetings > 0 && (
                        <div className={`w-1 h-1 rounded-full mt-0.5 ${
                          date.isToday ? 'bg-white' : 'bg-blue-500'
                        }`} />
                      )}
                    </div>
                  </div>
                ))}
                {/* Empty cell for Saturday */}
                <div className="flex-1 flex justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10"></div>
                </div>
              </div>
            </div>

            {/* Today's Schedule - Mobile Responsive */}
            <div className="p-3 sm:p-6 border-b border-gray-100">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-600 rounded-full mr-2 sm:mr-3"></div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">Today - December 25</h4>
                <span className="ml-auto text-xs sm:text-sm text-gray-500">{todayMeetings.length} meetings</span>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {todayMeetings.map((meeting, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-center p-3 sm:p-4 bg-blue-50 rounded-lg sm:rounded-xl border-l-4 border-blue-600 hover:bg-blue-100 transition-colors cursor-pointer"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-gray-900 text-sm sm:text-base">{meeting.name}</h5>
                          <div className="flex items-center text-gray-600 text-xs sm:text-sm mt-1">
                            <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                            <span className="truncate">{meeting.company} • {meeting.industry}</span>
                          </div>
                        </div>
                        <div className="text-left sm:text-right mt-2 sm:mt-0 sm:ml-4">
                          <div className="text-xs sm:text-sm font-medium text-gray-900">{meeting.time}</div>
                          <div className="text-xs text-gray-500">{meeting.duration}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tomorrow's Schedule - Mobile Responsive */}
            <div className="p-3 sm:p-6">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full mr-2 sm:mr-3"></div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">Tomorrow - December 26</h4>
                <span className="ml-auto text-xs sm:text-sm text-gray-500">{tomorrowMeetings.length} meetings</span>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {tomorrowMeetings.map((meeting, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-center p-3 sm:p-4 bg-green-50 rounded-lg sm:rounded-xl border-l-4 border-green-500 hover:bg-green-100 transition-colors cursor-pointer"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-gray-900 text-sm sm:text-base">{meeting.name}</h5>
                          <div className="flex items-center text-gray-600 text-xs sm:text-sm mt-1">
                            <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                            <span className="truncate">{meeting.company} • {meeting.industry}</span>
                          </div>
                        </div>
                        <div className="text-left sm:text-right mt-2 sm:mt-0 sm:ml-4">
                          <div className="text-xs sm:text-sm font-medium text-gray-900">{meeting.time}</div>
                          <div className="text-xs text-gray-500">{meeting.duration}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Calendar Footer - Mobile Responsive */}
            <div className="bg-gray-50 px-3 sm:px-6 py-3 sm:py-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <p className="text-gray-600 text-xs sm:text-sm">
                  <span className="font-semibold text-gray-900">All prospects pre-qualified</span> — no more wasted time on bad-fit calls
                </p>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  <span>5 meetings this week</span>
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
