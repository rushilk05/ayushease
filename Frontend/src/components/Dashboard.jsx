import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { 
  User, 
  Settings, 
  LogOut, 
  Bell, 
  Search, 
  TrendingUp, 
  FileText, 
  Shield,
  MessageCircle,
  HelpCircle,
  BarChart3,
  Users,
  Award,
  PlusCircle,
  Edit,
  Mail,
  Phone,
  Building2
} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [startup, setStartup] = useState(null);
  const [userType, setUserType] = useState(null); // 'user' or 'startup'
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      // Check for regular user
      const userData = localStorage.getItem("user");
      const userToken = localStorage.getItem("token");

      // Check for startup
      const startupData = localStorage.getItem("startup");
      const startupToken = localStorage.getItem("token");

      if (userData && userToken) {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        setUserType("user");
        fetchUserNotifications(parsedUser.email);
      } else if (startupData && startupToken) {
        const parsedStartup = JSON.parse(startupData);
        setStartup(parsedStartup);
        setUserType("startup");
        fetchStartupNotifications(parsedStartup.email);
        fetchStartupProfile(startupToken, parsedStartup.id);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error checking auth:", error);
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  const fetchUserNotifications = async (email) => {
    try {
      const response = await axios.get(
        `http://localhost:5001/api/notifications/startup/${email}`
      );
      setNotifications(response.data.notifications || []);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const fetchStartupNotifications = async (email) => {
    try {
      const response = await axios.get(
        `http://localhost:5001/api/notifications/startup/${email}`
      );
      setNotifications(response.data.notifications || []);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const fetchStartupProfile = async (token) => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/startup/profile",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setStartup(response.data);
    } catch (error) {
      console.error("Error fetching startup profile:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("startup");
    navigate("/");
  };

  const getDisplayName = () => {
    if (userType === "user" && user) {
      return user.fullName;
    } else if (userType === "startup" && startup) {
      return startup.founderName || startup.startupName;
    }
    return "User";
  };

  const getEmail = () => {
    if (userType === "user" && user) {
      return user.email;
    } else if (userType === "startup" && startup) {
      return startup.email;
    }
    return "";
  };

  const getMobile = () => {
    if (userType === "user" && user) {
      return user.mobile;
    } else if (userType === "startup" && startup) {
      return startup.phone;
    }
    return "";
  };

  const getAyushSystem = () => {
    if (userType === "user" && user) {
      return user.ayushSystem;
    } else if (userType === "startup" && startup) {
      return startup.ayushSystem;
    }
    return "";
  };

  const getVerificationStatus = () => {
    if (userType === "startup" && startup) {
      return startup.verificationStatus || "pending";
    }
    return null;
  };

  const calculateRegistrationProgress = () => {
    if (userType === "startup" && startup) {
      const requiredFields = [
        "founderName",
        "startupName",
        "email",
        "phone",
        "ayushSystem",
        "registrationNumber",
        "establishmentDate",
        "address",
        "teamSize",
        "businessModel",
        "description",
        "password",
      ];

      let filled = 0;
      requiredFields.forEach((f) => {
        if (startup[f] && startup[f] !== "") filled++;
      });

      if (getVerificationStatus() === "approved") return 100;
      return Math.round((filled / requiredFields.length) * 100);
    } else if (userType === "user") {
      return 0;
    }
    return 0;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-700";
      case "rejected":
        return "bg-red-100 text-red-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const unreadNotifications = notifications.filter((n) => !n.read).length;

  // ---------- Tab Content Renderers ----------
  const OverviewTab = () => (
    <>
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-white mb-8 shadow-lg">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {getDisplayName()}!
            </h1>
            <p className="text-emerald-100 text-lg mb-4">
              {userType === "startup"
                ? `Your startup "${startup?.startupName}" is ${
                    getVerificationStatus() === "approved"
                      ? "approved and active"
                      : getVerificationStatus() === "rejected"
                      ? "rejected"
                      : "pending review"
                  }.`
                : `Manage your AYUSH profile and explore our services.`}
            </p>
            {userType === "user" && (
              <Link
                to="/startupregistration"
                className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all inline-flex items-center gap-2"
              >
                <PlusCircle size={20} />
                Register Your Startup
              </Link>
            )}
            {userType === "startup" && getVerificationStatus() === "pending" && (
              <p className="text-emerald-100 text-sm mt-2">
                Your application is under review. We'll notify you once it's
                processed.
              </p>
            )}
          </div>
          <div className="bg-white/20 p-4 rounded-xl">
            <Award size={48} className="text-white" />
          </div>
        </div>
      </div>

      {/* Quick Registration Section - Only for regular users */}
      {userType === "user" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <PlusCircle className="text-emerald-600" size={24} />
            Quick Registration
          </h2>
          <p className="text-gray-600 mb-6">
            Complete your AYUSH startup registration in just a few simple steps.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/startupregistration"
              className="border-2 border-dashed border-emerald-300 rounded-xl p-6 hover:border-emerald-500 hover:bg-emerald-50 transition-all text-center"
            >
              <Building2 className="text-emerald-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">
                Startup Registration
              </h3>
              <p className="text-sm text-gray-600">Register your AYUSH startup</p>
            </Link>
            <Link
              to="/complianceassistant"
              className="border-2 border-dashed border-blue-300 rounded-xl p-6 hover:border-blue-500 hover:bg-blue-50 transition-all text-center"
            >
              <Shield className="text-blue-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">
                Compliance Assistant
              </h3>
              <p className="text-sm text-gray-600">Get help with compliance</p>
            </Link>
            <Link
              to="/expertguidance"
              className="border-2 border-dashed border-purple-300 rounded-xl p-6 hover:border-purple-500 hover:bg-purple-50 transition-all text-center"
            >
              <Users className="text-purple-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-sm text-gray-600">Connect with experts</p>
            </Link>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <TrendingUp className="text-emerald-600" size={24} />
            <span className="text-sm font-medium text-emerald-600">
              {userType === "startup" && getVerificationStatus() === "approved"
                ? "Active"
                : "In Progress"}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {calculateRegistrationProgress()}%
          </h3>
          <p className="text-gray-600 text-sm">Registration Status</p>
          {userType === "startup" && (
            <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-emerald-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${calculateRegistrationProgress()}%` }}
              ></div>
            </div>
          )}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <FileText className="text-blue-600" size={24} />
            <span className="text-sm font-medium text-blue-600">Active</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {notifications.length}
          </h3>
          <p className="text-gray-600 text-sm">Notifications</p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <Shield className="text-green-600" size={24} />
            <span className="text-sm font-medium text-green-600">Good</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {userType === "startup" && getVerificationStatus() === "approved"
              ? "100%"
              : "85%"}
          </h3>
          <p className="text-gray-600 text-sm">Compliance Score</p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <MessageCircle className="text-purple-600" size={24} />
            <span className="text-sm font-medium text-purple-600">Open</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">0</h3>
          <p className="text-gray-600 text-sm">Support Tickets</p>
        </div>
      </div>

      {/* Profile Information + Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
              <button className="text-emerald-600 hover:text-emerald-700 flex items-center gap-2">
                <Edit size={18} />
                Edit
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Full Name</p>
                <p className="font-semibold text-gray-900">{getDisplayName()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <p className="font-semibold text-gray-900">{getEmail()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Mobile/Phone</p>
                <p className="font-semibold text-gray-900">{getMobile()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">AYUSH System</p>
                <p className="font-semibold text-gray-900 capitalize">
                  {getAyushSystem()}
                </p>
              </div>
              {userType === "startup" && startup && (
                <>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Startup Name</p>
                    <p className="font-semibold text-gray-900">
                      {startup.startupName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Verification Status</p>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        getVerificationStatus()
                      )}`}
                    >
                      {getVerificationStatus()?.toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Business Model</p>
                    <p className="font-semibold text-gray-900">
                      {startup.businessModel}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Team Size</p>
                    <p className="font-semibold text-gray-900">{startup.teamSize}</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Notifications */}
          {notifications.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Bell className="text-emerald-600" size={24} />
                  Notifications
                </h2>
                <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {notifications.slice(0, 5).map((notif) => (
                  <div
                    key={notif._id}
                    className={`p-4 rounded-lg border ${
                      notif.read
                        ? "bg-gray-50 border-gray-200"
                        : "bg-emerald-50 border-emerald-200"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{notif.title}</p>
                        <p className="text-sm text-gray-600 mt-1">{notif.message}</p>
                        <p className="text-xs text-gray-500 mt-2">
                          {new Date(notif.createdAt).toLocaleString()}
                        </p>
                      </div>
                      {!notif.read && (
                        <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link
                to="/startupregistration"
                className="flex items-center gap-3 p-3 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-all"
              >
                <Building2 className="text-emerald-600" size={20} />
                <span className="font-medium text-gray-900">Register Startup</span>
              </Link>
              <Link
                to="/complianceassistant"
                className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all"
              >
                <Shield className="text-blue-600" size={20} />
                <span className="font-medium text-gray-900">Compliance Check</span>
              </Link>
              <Link
                to="/expertguidance"
                className="flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-all"
              >
                <Users className="text-purple-600" size={20} />
                <span className="font-medium text-gray-900">Expert Guidance</span>
              </Link>
              <Link
                to="/scheme"
                className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-all"
              >
                <Award className="text-green-600" size={20} />
                <span className="font-medium text-gray-900">View Schemes</span>
              </Link>
            </div>
          </div>

          {/* Support Card */}
          <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl p-6 text-white">
            <h3 className="font-bold text-lg mb-3">Need Help?</h3>
            <p className="text-emerald-100 text-sm mb-4">
              Our support team is here to help you with any questions.
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
            <Link
              to="/contact"
              className="w-full bg-white text-emerald-600 py-2 rounded-lg font-semibold mt-4 hover:bg-emerald-50 transition-all block text-center"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  const ProfileTab = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <User size={22} className="text-emerald-600" /> Profile
      </h2>
      <p className="text-gray-600 mb-6">
        View your personal and (if applicable) startup profile details.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-gray-600 mb-1">Name</p>
          <p className="font-semibold text-gray-900">{getDisplayName()}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Email</p>
          <p className="font-semibold text-gray-900">{getEmail()}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Phone</p>
          <p className="font-semibold text-gray-900">{getMobile()}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">AYUSH System</p>
          <p className="font-semibold text-gray-900 capitalize">
            {getAyushSystem()}
          </p>
        </div>
        {userType === "startup" && startup && (
          <>
            <div>
              <p className="text-sm text-gray-600 mb-1">Startup</p>
              <p className="font-semibold text-gray-900">{startup.startupName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Verification</p>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                  getVerificationStatus()
                )}`}
              >
                {getVerificationStatus()?.toUpperCase()}
              </span>
            </div>
          </>
        )}
      </div>
      <div className="mt-6">
        <Link
          to={userType === "startup" ? "/startupregistration" : "/profile/edit"}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
        >
          <Edit size={18} />
          Edit Details
        </Link>
      </div>
    </div>
  );

  const DocumentsTab = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <FileText size={22} className="text-blue-600" /> Documents
      </h2>
      <p className="text-gray-600 mb-6">
        Upload and manage your registration/compliance documents.
      </p>
      <div className="border-2 border-dashed rounded-xl p-6 text-center">
        <p className="text-gray-700 mb-2">No documents uploaded yet.</p>
        <Link
          to="/documents"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          <PlusCircle size={18} />
          Go to Documents
        </Link>
      </div>
    </div>
  );

  const ComplianceTab = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Shield size={22} className="text-green-600" /> Compliance
      </h2>
      <p className="text-gray-600 mb-6">
        Track your compliance progress and get guidance.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 rounded-lg border">
          <p className="text-sm text-gray-600 mb-1">Compliance Score</p>
          <p className="text-2xl font-bold">
            {userType === "startup" && getVerificationStatus() === "approved"
              ? "100%"
              : "85%"}
          </p>
        </div>
        <div className="p-4 rounded-lg border">
          <p className="text-sm text-gray-600 mb-1">Registration Progress</p>
          <p className="text-2xl font-bold">{calculateRegistrationProgress()}%</p>
        </div>
      </div>
      <Link
        to="/complianceassistant"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 mt-6"
      >
        Get Compliance Help
      </Link>
    </div>
  );

  const SupportTab = () => (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <HelpCircle size={22} className="text-purple-600" /> Support
        </h2>
        <p className="text-gray-600 mb-6">
          Have a question? Reach out to us or browse help resources.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
        >
          Contact Support
        </Link>
      </div>
      <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl p-6 text-white">
        <h3 className="font-bold text-lg mb-3">Need Help?</h3>
        <p className="text-emerald-100 text-sm mb-4">
          Our support team is here to help you with any questions.
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
      </div>
    </div>
  );

  const SettingsTab = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Settings size={22} className="text-gray-700" /> Settings
      </h2>
      <p className="text-gray-600 mb-6">
        Manage preferences for your account.
      </p>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <p className="font-medium text-gray-900">Email Notifications</p>
            <p className="text-sm text-gray-600">
              Receive important updates on your email.
            </p>
          </div>
          <button className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200">
            Toggle
          </button>
        </div>
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <p className="font-medium text-gray-900">Two-Factor Auth</p>
            <p className="text-sm text-gray-600">
              Add an extra layer of security to your account.
            </p>
          </div>
          <button className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200">
            Configure
          </button>
        </div>
      </div>
    </div>
  );

  const renderTab = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab />;
      case "profile":
        return <ProfileTab />;
      case "documents":
        return <DocumentsTab />;
      case "compliance":
        return <ComplianceTab />;
      case "support":
        return <SupportTab />;
      case "settings":
        return <SettingsTab />;
      default:
        return <OverviewTab />;
    }
  };

  // ---------- UI ----------
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
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-64"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:text-emerald-600 transition-colors">
                <Bell size={20} />
                {unreadNotifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {unreadNotifications}
                  </span>
                )}
              </button>

              {/* User Menu */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <User className="text-emerald-600" size={20} />
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-gray-700 block">
                    {getDisplayName()}
                  </span>
                  <span className="text-xs text-gray-500">{getEmail()}</span>
                </div>
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
              { id: "settings", label: "Settings", icon: <Settings size={20} /> },
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

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-600 hover:bg-red-50 hover:text-red-700 transition-all mt-8"
            >
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">{renderTab()}</main>
      </div>
    </div>
  );
}

export default Dashboard;
