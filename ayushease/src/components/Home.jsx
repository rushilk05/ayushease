import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Sparkles, Target, Users, CheckCircle, MessageCircle, X, Send, Phone, Mail, MapPin, Clock, Download, ArrowRight, Star, Shield, Zap, Heart, Building } from "lucide-react";
import { Player } from "@lottiefiles/react-lottie-player";
import meditate from "../assets/meditate.png";
import { useNavigate } from "react-router-dom";

const benefits = [
  {
    title: "Simplified Registration",
    description: "Our intuitive platform simplifies the registration process, reducing paperwork.",
    animation: "https://assets10.lottiefiles.com/packages/lf20_0yfsb3a1.json",
    route: "/startupRegistration",
    icon: <CheckCircle className="w-6 h-6 text-green-600" />
  },
  {
    title: "Government Schemes",
    description: "Discover and apply for government schemes tailored for AYUSH startups.",
    animation: "https://assets10.lottiefiles.com/packages/lf20_t9gkkhz4.json",
    route: "/schemes",
    icon: <Building className="w-6 h-6 text-green-600" />
  },
  {
    title: "Compliance Assurance",
    description: "Ensure regulatory compliance with up-to-date tools.",
    animation: "https://assets10.lottiefiles.com/packages/lf20_3vbOcw.json",
    route: "/complianceassistant",
    icon: <Target className="w-6 h-6 text-green-600" />
  },
  {
    title: "Community Support",
    description: "Connect with AYUSH entrepreneurs, mentors, and investors.",
    animation: "https://assets10.lottiefiles.com/packages/lf20_1pxqjqps.json",
    route: "/community",
    icon: <Sparkles className="w-6 h-6 text-green-600" />
  },
];

// Chatbot messages and quick replies
const quickReplies = [
  "How to register?",
  "Government schemes",
  "Talk to expert",
  "Status check",
  "Compliance help"
];

const botResponses = {
  "default": "Hello! I'm your AYUSHEASE assistant. How can I help you with your AYUSH startup journey today?",
  "How to register?": "The registration process is simple:\n\n1. Click 'Get Started' on our homepage\n2. Choose your AYUSH sector\n3. Fill the digital form\n4. Upload required documents\n5. Track your application status\n\nWould you like me to guide you through any specific step?",
  "Government schemes": "We have various government schemes available:\n\n💰 AYUSH Startup Challenge\n🏢 National AYUSH Mission\n🌍 AYUSH Export Promotion\n🔬 Research Grants\n\nClick the 'Explore Schemes' button to discover all available opportunities!",
  "Talk to expert": "I can connect you with our AYUSH experts! Our experts are available:\n\n🕒 Mon-Sat: 9 AM - 6 PM\n💬 Live chat & video calls\n📞 Priority support for registered users\n\nWould you like to schedule a callback?",
  "Status check": "To check your application status:\n\n1. Login to your dashboard\n2. Go to 'My Applications'\n3. View real-time status\n4. Get notifications for updates\n\nIf you're facing issues, I can help escalate!",
  "Compliance help": "We provide comprehensive compliance support:\n\n✅ Regular compliance checks\n✅ Document verification\n✅ Audit preparation\n✅ Regulatory updates\n\nLet me know which compliance area you need help with!"
};

export default function Home() {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);

  // Scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with welcome message
  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      setMessages([{ text: botResponses.default, isBot: true, timestamp: new Date() }]);
    }
  }, [isChatOpen]);

  const handleQuickReply = (reply) => {
    // Add user message
    const userMessage = { text: reply, isBot: false, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Bot response after delay
    setTimeout(() => {
      const botResponse = { 
        text: botResponses[reply] || "I understand you're asking about: " + reply + ". Let me connect you with the right resources.", 
        isBot: true, 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = { text: inputMessage, isBot: false, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Bot response after delay
    setTimeout(() => {
      const botResponse = { 
        text: `I understand you're asking about: "${inputMessage}". Our team will get back to you shortly. Meanwhile, you can check our FAQ section or use the quick replies below for instant help.`, 
        isBot: true, 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-white to-green-50 min-h-screen">
      {/* Enhanced Navbar */}
      <header className="fixed w-full bg-white/95 backdrop-blur-xl shadow-sm border-b border-green-100 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform flex items-center gap-2"
            onClick={() => navigate("/")}
          >
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            AYUSHEASE
          </div>
          <nav className="hidden lg:flex gap-8 items-center">
            {["Home", "About", "Feedback", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`)}
                className="relative text-gray-600 hover:text-green-700 font-medium transition-all duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-600 hover:text-green-700 transition font-medium group">
                Services <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 mt-4 w-80 bg-white/95 backdrop-blur-xl border border-green-100 rounded-2xl shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible invisible transition-all duration-300 z-50">
                <div className="p-6">
                  <h3 className="font-semibold text-sm mb-3 text-gray-500 uppercase tracking-wide">AYUSH Sectors</h3>
                  <ul className="text-sm space-y-2 cursor-pointer">
                    {[
                      { name: "Ayurveda", route: "/ayurveda" },
                      { name: "Yoga & Naturopathy", route: "/yoga" },
                      { name: "Unani", route: "/unani" },
                      { name: "Siddha", route: "/siddha" },
                      { name: "Homeopathy", route: "/homeopathy" },
                    ].map((sector) => (
                      <li
                        key={sector.name}
                        onClick={() => navigate(sector.route)}
                        className="hover:text-green-600 transition py-2 px-3 rounded-lg hover:bg-green-50 flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        {sector.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-2.5 rounded-xl hover:from-green-700 hover:to-green-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Login / Register
            </button>
          </nav>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Empowering AYUSH Entrepreneurs
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-800 to-green-700 bg-clip-text text-transparent">
                Streamline Your AYUSH Startup Journey
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                AYUSHEASE is your comprehensive platform for seamless registration, compliance tracking, 
                and growth acceleration in the AYUSH sector. Transform your vision into reality with our expert-guided ecosystem.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-xl hover:from-green-700 hover:to-green-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center justify-center gap-2"
                onClick={() => navigate("/register")}
              >
                <Sparkles className="w-5 h-5" />
                Start Your Journey
              </button>
              <button
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-green-500 hover:text-green-700 transition-all duration-300 font-semibold hover:scale-105 transform"
                onClick={() => navigate("/about")}
              >
                Discover More
              </button>
            </div>
            
            {/* New Government Scheme Button */}
            <div className="pt-4">
              <button
                onClick={() => navigate("/scheme")}
                className="group bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Building className="w-5 h-5" />
                Explore Government Schemes
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-gray-500 mt-2 text-center sm:text-left">
                Discover funding, grants, and support programs for your AYUSH startup
              </p>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8">
              {[
                { icon: <Shield className="w-5 h-5" />, text: "Secure & Verified" },
                { icon: <Zap className="w-5 h-5" />, text: "Fast Processing" },
                { icon: <Heart className="w-5 h-5" />, text: "24/7 Support" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600">
                  {item.icon}
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={meditate} alt="Meditation" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-100 rounded-2xl rotate-12"></div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-green-200 rounded-2xl -rotate-12"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { count: "500+", label: "Startups Registered", color: "from-green-500 to-green-400" },
              { count: "300+", label: "Approvals Granted", color: "from-blue-500 to-blue-400" },
              { count: "50+", label: "Govt Schemes", color: "from-purple-500 to-purple-400" },
              { count: "1000+", label: "Active Users", color: "from-orange-500 to-orange-400" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {index === 2 ? (
                    <Building className="w-8 h-8 text-white" />
                  ) : (
                    <Target className="w-8 h-8 text-white" />
                  )}
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                  {stat.count}
                </h2>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Government Scheme Highlight Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Building className="w-4 h-4" />
                Government Support
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-700 bg-clip-text text-transparent mb-6">
                Unlock Government Schemes for Your AYUSH Startup
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Access exclusive funding, grants, and support programs from various government ministries. 
                From startup challenges to export promotions, discover schemes that can accelerate your growth.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "AYUSH Startup Challenge - Up to ₹25 Lakhs funding",
                  "National AYUSH Mission - Infrastructure support",
                  "Export Promotion - International market access",
                  "Research Grants - Innovation funding"
                ].map((scheme, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{scheme}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/scheme")}
                className="group bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center gap-3"
              >
                <Building className="w-5 h-5" />
                Explore All Schemes
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-2xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Building className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Scheme Navigator</h3>
                  <p className="text-gray-600 mb-6">
                    Find the perfect government scheme for your AYUSH startup with our intelligent matching system.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { icon: "🔍", text: "Smart Search & Filtering" },
                      { icon: "⚡", text: "Quick Application Process" },
                      { icon: "📊", text: "Real-time Status Tracking" },
                      { icon: "🎯", text: "Personalized Recommendations" }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <span className="text-2xl">{feature.icon}</span>
                        <span className="text-gray-700 font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-green-700 bg-clip-text text-transparent mb-4">
              Why Choose AYUSHEASE?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how our platform transforms your AYUSH startup journey with comprehensive support and innovative solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map(({ title, description, animation, route, icon }, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-green-100 shadow-sm hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 cursor-pointer"
                onClick={() => route && navigate(route)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors duration-300">
                    <Player autoplay loop src={animation} style={{ height: "60px", width: "60px" }} />
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    {icon}
                    <h4 className="font-bold text-xl text-gray-800">{title}</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                  <div className="mt-6 text-green-600 font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of your existing sections remain the same */}
      {/* Enhanced Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-gray-800 to-green-700 bg-clip-text text-transparent mb-16">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rohit Sharma",
                startup: "AyurHealth",
                quote: "AYUSHEASE helped me secure a government grant that accelerated my startup growth!",
                avatar: "https://i.pravatar.cc/150?img=3",
                rating: 5
              },
              {
                name: "Meera Patel",
                startup: "YogaFlow",
                quote: "The scheme navigator helped me discover funding opportunities I didn't know existed!",
                avatar: "https://i.pravatar.cc/150?img=5",
                rating: 5
              },
              {
                name: "Amit Joshi",
                startup: "HomeoCare",
                quote: "Thanks to government schemes found on AYUSHEASE, I expanded to 3 new cities!",
                avatar: "https://i.pravatar.cc/150?img=8",
                rating: 5
              },
            ].map(({ name, startup, quote, avatar, rating }, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={avatar}
                    alt={name}
                    className="w-16 h-16 rounded-2xl border-4 border-green-200 group-hover:border-green-400 transition-colors duration-300"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
                    <p className="text-green-600 font-semibold">{startup}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic relative">
                  <span className="text-4xl text-green-300 absolute -top-2 -left-2">"</span>
                  {quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-green-700 bg-clip-text text-transparent mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about government schemes? Our support team is here to help you with any inquiries about AYUSH registration, compliance, and funding opportunities.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Phone className="w-5 h-5" />, text: "+91-9876543210", subtext: "Mon-Sat, 9AM-6PM" },
                  { icon: <Mail className="w-5 h-5" />, text: "schemes@ayushease.com", subtext: "Scheme-specific queries" },
                  { icon: <MapPin className="w-5 h-5" />, text: "AYUSH Bhawan, Delhi", subtext: "Visit our office" },
                  { icon: <Clock className="w-5 h-5" />, text: "24/7 Chat Support", subtext: "Instant answers anytime" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{contact.text}</p>
                      <p className="text-sm text-gray-600">{contact.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Download Resources</h3>
              <div className="space-y-4">
                {[
                  "Government Scheme Guide PDF",
                  "Compliance Checklist",
                  "AYUSH Sector Overview",
                  "Funding Application Templates"
                ].map((resource, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-green-400 transition-colors duration-300 group">
                    <span className="font-medium text-gray-700">{resource}</span>
                    <button className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors duration-300">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp-like Chat Bot */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isChatOpen ? 'scale-100' : 'scale-0'}`}>
        <div className="bg-white rounded-2xl shadow-2xl w-96 h-[600px] flex flex-col border border-green-200">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">AYUSHEASE Assistant</h3>
                <p className="text-green-100 text-sm">Online • Usually replies instantly</p>
              </div>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:text-green-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 ${
                      message.isBot
                        ? 'bg-white border border-green-200 rounded-tl-none'
                        : 'bg-green-500 text-white rounded-tr-none'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-2 ${message.isBot ? 'text-gray-500' : 'text-green-100'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-green-200 rounded-2xl rounded-tl-none p-4">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 text-sm px-3 py-2 rounded-full transition-all duration-300 border border-transparent hover:border-green-300"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Message Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-300"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Enhanced Floating Chat Button */}
      <div 
        className={`fixed bottom-6 right-6 bg-gradient-to-r from-green-600 to-green-500 text-white w-16 h-16 rounded-2xl flex justify-center items-center shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer group z-40 ${isChatOpen ? 'scale-0' : 'scale-100 hover:scale-110'}`}
        onClick={() => setIsChatOpen(true)}
      >
        <div className="relative">
          <MessageCircle className="w-7 h-7" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-300 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"></div>
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
                    ["Government Schemes", "Blog", "Webinars"],
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
