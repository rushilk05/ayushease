import React, { useState } from "react";
import { 
  User, 
  Settings, 
  LogOut, 
  Bell, 
  Search, 
  TrendingUp, 
  FileText, 
  Shield,
  Calendar,
  MessageCircle,
  HelpCircle,
  BarChart3,
  Users,
  Award,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [notifications, setNotifications] = useState(3);

  // Mock data for dashboard
  const stats = [
    { 
      title: "Application Progress", 
      value: "75%", 
      change: "+12%", 
      icon: <TrendingUp className="text-emerald-600" size={24} />,
      color: "bg-emerald-50 border-emerald-200"
    },
    { 
      title: "Pending Tasks", 
      value: "3", 
      change: "-2", 
      icon: <FileText className="text-blue-600" size={24} />,
      color: "bg-blue-50 border-blue-200"
    },
    { 
      title: "Compliance Score", 
      value: "88%", 
      change: "+5%", 
      icon: <Shield className="text-green-600" size={24} />,
      color: "bg-green-50 border-green-200"
    },
    { 
      title: "Support Tickets", 
      value: "1", 
      change: "Active", 
      icon: <MessageCircle className="text-purple-600" size={24} />,
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const recentActivities = [
    { action: "Document submitted", time: "2 hours ago", status: "completed", icon: <CheckCircle2 className="text-emerald-600" size={16} /> },
    { action: "Compliance review", time: "1 day ago", status: "in-progress", icon: <Clock className="text-blue-600" size={16} /> },
    { action: "Verification required", time: "2 days ago", status: "pending", icon: <AlertCircle className="text-amber-600" size={16} /> },
    { action: "Profile updated", time: "3 days ago", status: "completed", icon: <CheckCircle2 className="text-emerald-600" size={16} /> }
  ];

  const quickActions = [
    { title: "Update Profile", icon: <User size={20} />, color: "bg-emerald-500 hover:bg-emerald-600" },
    { title: "Check Compliance", icon: <Shield size={20} />, color: "bg-blue-500 hover:bg-blue-600" },
    { title: "View Documents", icon: <FileText size={20} />, color: "bg-green-500 hover:bg-green-600" },
    { title: "Get Support", icon: <HelpCircle size={20} />, color: "bg-purple-500 hover:bg-purple-600" }
  ];

  const upcomingTasks = [
    { task: "Submit financial documents", due: "Tomorrow", priority: "high" },
    { task: "Schedule compliance call", due: "In 3 days", priority: "medium" },
    { task: "Review guidelines update", due: "Next week", priority: "low" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Award className="text-white" size={20} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">AYUSHEASE</h1>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-64"
                />
              </div>
              
              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:text-emerald-600 transition-colors">
                <Bell size={20} />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
              
              {/* User Menu */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <User className="text-emerald-600" size={16} />
                </div>
                <span className="text-sm font-medium text-gray-700">Welcome, Founder!</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen border-r border-gray-200">
          <nav className="p-6 space-y-2">
            {[
              { id: "overview", label: "Dashboard Overview", icon: <BarChart3 size={20} /> },
              { id: "profile", label: "My Profile", icon: <User size={20} /> },
              { id: "documents", label: "Documents", icon: <FileText size={20} /> },
              { id: "compliance", label: "Compliance", icon: <Shield size={20} /> },
              { id: "support", label: "Support", icon: <HelpCircle size={20} /> },
              { id: "team", label: "Team Members", icon: <Users size={20} /> },
              { id: "calendar", label: "Calendar", icon: <Calendar size={20} /> },
              { id: "settings", label: "Settings", icon: <Settings size={20} /> }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                  activeTab === item.id
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-600 hover:bg-red-50 hover:text-red-700 transition-all mt-8">
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-white mb-8 shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back, Founder!</h1>
                <p className="text-emerald-100 text-lg mb-4">
                  Your AYUSH startup registration is 75% complete. Continue where you left off.
                </p>
                <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all flex items-center gap-2">
                  Continue Application
                  <ArrowUpRight size={20} />
                </button>
              </div>
              <div className="bg-white/20 p-4 rounded-xl">
                <Award size={48} className="text-white" />
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className={`${stat.color} border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow`}>
                <div className="flex justify-between items-start mb-4">
                  {stat.icon}
                  <span className={`text-sm font-medium ${
                    stat.change.startsWith('+') ? 'text-emerald-600' : 
                    stat.change.startsWith('-') ? 'text-red-600' : 'text-blue-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className={`${action.color} text-white p-4 rounded-xl transition-all transform hover:scale-105 flex items-center gap-3 font-semibold`}
                    >
                      {action.icon}
                      {action.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
                  <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      {activity.icon}
                      <div className="flex-1">
                        <p className="text-gray-900 font-medium">{activity.action}</p>
                        <p className="text-gray-500 text-sm">{activity.time}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        activity.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                        activity.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {activity.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Tasks */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Tasks</h2>
                <div className="space-y-4">
                  {upcomingTasks.map((task, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{task.task}</p>
                        <p className="text-sm text-gray-500">Due: {task.due}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        task.priority === 'high' ? 'bg-red-100 text-red-700' :
                        task.priority === 'medium' ? 'bg-amber-100 text-amber-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Card */}
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3">Need Help?</h3>
                <p className="text-emerald-100 text-sm mb-4">
                  Our support team is here to help you with any questions about your AYUSH registration.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>support@ayushease.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>+91 1800-AYUSH</span>
                  </div>
                </div>
                <button className="w-full bg-white text-emerald-600 py-2 rounded-lg font-semibold mt-4 hover:bg-emerald-50 transition-all">
                  Contact Support
                </button>
              </div>

              {/* Profile Summary */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Profile Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Startup Name:</span>
                    <span className="font-medium">AyurWell Innovations</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">AYUSH System:</span>
                    <span className="font-medium">Ayurveda</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Registration:</span>
                    <span className="font-medium text-emerald-600">In Progress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
