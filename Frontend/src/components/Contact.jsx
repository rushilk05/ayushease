import React, { useState } from "react";
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  User, 
  Shield,
  CheckCircle,
  Sparkles,
  ChevronDown
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    startupType: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [activeField, setActiveField] = useState("");

  const startupTypes = [
    "Ayurveda Products",
    "Yoga & Wellness Center",
    "Unani Medicine",
    "Siddha Practice",
    "Homeopathy Clinic",
    "Wellness Startup",
    "Other"
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "+91-9876543210",
      subtext: "Mon-Sat, 9AM-6PM",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "support@ayushease.com",
      subtext: "We reply within 2 hours",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      description: "AYUSH Bhawan, Delhi",
      subtext: "Book appointment recommended",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Live Chat",
      description: "24/7 Available",
      subtext: "Instant connect with experts",
      color: "from-orange-500 to-red-500"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ 
      name: "", 
      email: "", 
      phone: "", 
      subject: "", 
      message: "", 
      startupType: "" 
    });

    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus(""), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-cyan-50 font-sans text-gray-800">
      {/* Enhanced Navbar */}
      <header className="fixed w-full bg-white/95 backdrop-blur-xl shadow-sm border-b border-green-100 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            AYUSHEASE
          </div>
          <nav className="hidden lg:flex gap-8 items-center">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative text-gray-600 hover:text-green-700 font-medium transition-all duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="/login"
              className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-2.5 rounded-xl hover:from-green-700 hover:to-green-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Login / Register
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full text-lg font-medium mb-6">
              <MessageCircle className="w-5 h-5" />
              Get In Touch With Experts
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 to-green-700 bg-clip-text text-transparent mb-6">
              Let's Start Your AYUSH Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have questions about AYUSH registration, compliance, or growing your wellness business? 
              Our expert team is here to guide you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 border border-green-100 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Send className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
                  <p className="text-gray-600">We typically respond within 2 hours</p>
                </div>
              </div>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-800">Message Sent Successfully!</p>
                    <p className="text-green-700 text-sm">Our team will contact you shortly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      className={`w-full p-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 ${
                        activeField === "name" 
                          ? "border-green-500 ring-green-100 bg-green-50" 
                          : "border-gray-200 focus:border-green-400 focus:ring-green-50"
                      }`}
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus("name")}
                      onBlur={handleBlur}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={`w-full p-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 ${
                        activeField === "email" 
                          ? "border-green-500 ring-green-100 bg-green-50" 
                          : "border-gray-200 focus:border-green-400 focus:ring-green-50"
                      }`}
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={handleBlur}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className={`w-full p-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 ${
                        activeField === "phone" 
                          ? "border-green-500 ring-green-100 bg-green-50" 
                          : "border-gray-200 focus:border-green-400 focus:ring-green-50"
                      }`}
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => handleFocus("phone")}
                      onBlur={handleBlur}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Startup Type</label>
                    <div className="relative">
                      <select
                        name="startupType"
                        className={`w-full p-4 border-2 rounded-xl appearance-none transition-all duration-300 focus:outline-none focus:ring-4 ${
                          activeField === "startupType" 
                            ? "border-green-500 ring-green-100 bg-green-50" 
                            : "border-gray-200 focus:border-green-400 focus:ring-green-50"
                        }`}
                        value={formData.startupType}
                        onChange={handleChange}
                        onFocus={() => handleFocus("startupType")}
                        onBlur={handleBlur}
                      >
                        <option value="">Select your startup type</option>
                        {startupTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className={`w-full p-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 ${
                      activeField === "subject" 
                        ? "border-green-500 ring-green-100 bg-green-50" 
                        : "border-gray-200 focus:border-green-400 focus:ring-green-50"
                    }`}
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus("subject")}
                    onBlur={handleBlur}
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message *</label>
                  <textarea
                    name="message"
                    rows="6"
                    className={`w-full p-4 border-2 rounded-xl resize-y transition-all duration-300 focus:outline-none focus:ring-4 ${
                      activeField === "message" 
                        ? "border-green-500 ring-green-100 bg-green-50" 
                        : "border-gray-200 focus:border-green-400 focus:ring-green-50"
                    }`}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    required
                    placeholder="Tell us about your AYUSH startup needs, challenges, or questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 ${
                    isSubmitting ? "opacity-60 cursor-not-allowed" : "hover:from-green-700 hover:to-green-600"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 text-sm text-gray-500 justify-center">
                  <Shield className="w-4 h-4" />
                  <span>Your information is secure and encrypted</span>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center mb-4`}>
                      {method.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{method.title}</h3>
                    <p className="text-gray-700 font-medium">{method.description}</p>
                    <p className="text-sm text-gray-600 mt-1">{method.subtext}</p>
                  </div>
                ))}
              </div>

              {/* Office Hours & Support */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Office Hours & Support</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-green-400">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-green-400">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium">Emergency Support</span>
                    <span>24/7 Available</span>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-8 border border-green-100 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Contact AYUSHEASE?</h3>
                <div className="space-y-4">
                  {[
                    "Expert guidance from AYUSH industry veterans",
                    "Fast response time - typically under 2 hours",
                    "Comprehensive support for all AYUSH sectors",
                    "Proven track record with 500+ startups",
                    "Free initial consultation for all inquiries"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-green-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                AYUSHEASE
              </div>
              <p className="text-green-200 leading-relaxed">
                Empowering AYUSH startups with seamless registration, compliance tracking, and growth acceleration.
              </p>
            </div>
            {["Company", "Resources", "Support", "Legal"].map((section, index) => (
              <div key={section}>
                <h4 className="font-bold text-lg mb-4 text-white">{section}</h4>
                <ul className="space-y-2 text-green-200">
                  {[
                    ["About Us", "Team", "Careers"],
                    ["Documentation", "Blog", "Webinars"],
                    ["Help Center", "Contact", "Status"],
                    ["Privacy", "Terms", "Cookies"]
                  ][index].map((item) => (
                    <li key={item} className="hover:text-white transition-colors duration-300 cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-green-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-green-300 mb-4 md:mb-0">
              © 2024 AYUSHEASE. All rights reserved.
            </div>
            <div className="flex gap-6">
              {["🐦", "📘", "📸"].map((icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors duration-300 cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
