import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  Target, 
  Users, 
  Shield, 
  Zap, 
  Heart, 
  Award, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Rocket,
  Leaf,
  Calendar,
  Play,
  Pause,
  Quote,
  MapPin,
  Eye,
  Users as UsersIcon,
  ThumbsUp,
  Clock
} from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const values = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Trust & Reliability",
      description: "Built on years of expertise in AYUSH sector regulations",
      color: "from-blue-500 to-cyan-500",
      features: ["Verified Experts", "Secure Platform", "Data Protection"]
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Innovation First",
      description: "AI-powered solutions for complex processes",
      color: "from-purple-500 to-pink-500",
      features: ["Smart Automation", "Real-time Tracking", "AI Assistance"]
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Community Driven",
      description: "Largest network of AYUSH entrepreneurs",
      color: "from-green-500 to-emerald-500",
      features: ["Mentor Network", "Peer Learning", "Collaborative Growth"]
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Impact Focused",
      description: "Measuring success by your growth",
      color: "from-orange-500 to-red-500",
      features: ["Success Metrics", "Growth Tracking", "Impact Reports"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Founder, HerbalAyur",
      content: "AYUSHEASE transformed our Ayurveda startup journey. The platform saved us 3 months of paperwork and connected us with perfect mentors.",
      avatar: "https://i.pravatar.cc/150?img=32",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "CEO, YogaFlow",
      content: "The compliance guidance was exceptional. We navigated complex regulations effortlessly and got approvals in record time.",
      avatar: "https://i.pravatar.cc/150?img=12",
      rating: 5
    },
    {
      name: "Anjali Patel",
      role: "Director, HomeoCare",
      content: "Community support and expert network made all the difference. We scaled from clinic to chain with AYUSHEASE.",
      avatar: "https://i.pravatar.cc/150?img=44",
      rating: 5
    }
  ];

  const stats = [
    { icon: <UsersIcon className="w-6 h-6" />, number: "1000+", label: "Startups Empowered", change: "+45%" },
    { icon: <Award className="w-6 h-6" />, number: "98%", label: "Success Rate", change: "+5%" },
    { icon: <ThumbsUp className="w-6 h-6" />, number: "4.9/5", label: "Satisfaction Score", change: "+0.3" },
    { icon: <Clock className="w-6 h-6" />, number: "45 Days", label: "Avg. Registration", change: "-60%" }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Enhanced Navbar */}
      <header className="fixed w-full bg-white/95 backdrop-blur-xl shadow-lg border-b border-emerald-100 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent cursor-pointer flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            AYUSHEASE
          </div>
          <nav className="hidden lg:flex gap-8 items-center">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`relative font-medium transition-all duration-300 group ${
                  item === "About" 
                    ? "text-emerald-700 font-semibold" 
                    : "text-slate-600 hover:text-emerald-700"
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-600 transition-all duration-300 ${
                  item === "About" ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </a>
            ))}
            <a
              href="/login"
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-2.5 rounded-xl hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
            >
              Login / Register
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-lg font-medium mb-8 animate-pulse">
            <Sparkles className="w-5 h-5" />
            Pioneering AYUSH Innovation Since 2020
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-slate-800 via-emerald-700 to-cyan-600 bg-clip-text text-transparent mb-6">
            Redefining AYUSH Entrepreneurship
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            We're not just a platform; we're a movement. Transforming traditional healing practices 
            into modern, scalable businesses through technology, community, and innovation.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-emerald-600 mb-1">{stat.number}</div>
                <div className="text-sm text-slate-600 mb-1">{stat.label}</div>
                <div className="text-xs text-emerald-500 font-medium">{stat.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {[
              { id: "mission", label: "Our Mission", icon: <Target className="w-5 h-5" /> },
              { id: "vision", label: "Our Vision", icon: <Globe className="w-5 h-5" /> },
              { id: "story", label: "Our Story", icon: <Rocket className="w-5 h-5" /> },
              { id: "impact", label: "Our Impact", icon: <TrendingUp className="w-5 h-5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-emerald-600 to-cyan-500 text-white shadow-2xl"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-emerald-300 shadow-lg"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-12 border border-emerald-100 shadow-2xl">
            {activeTab === "mission" && (
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Mission</h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                  To democratize AYUSH entrepreneurship by building the most comprehensive digital ecosystem 
                  that simplifies complex processes, ensures regulatory compliance, and accelerates growth 
                  for wellness startups worldwide.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Voices of Success</h2>
          <p className="text-xl text-slate-600 mb-12">What our AYUSH entrepreneurs say</p>
          
          <div className="relative bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-3xl p-8 border border-emerald-200 shadow-2xl">
            <Quote className="w-12 h-12 text-emerald-300 absolute -top-6 left-1/2 transform -translate-x-1/2" />
            
            <div className="flex items-center justify-between mb-8">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 bg-white rounded-full border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isPlaying ? <Pause className="w-5 h-5 text-emerald-600" /> : <Play className="w-5 h-5 text-emerald-600" />}
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index ? 'bg-emerald-600' : 'bg-emerald-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg mb-6"
              />
              <div className="flex mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl text-slate-700 italic mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div>
                <div className="font-bold text-slate-800 text-lg">{testimonials[currentTestimonial].name}</div>
                <div className="text-emerald-600">{testimonials[currentTestimonial].role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-emerald-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                AYUSHEASE
              </div>
              <p className="text-emerald-200 leading-relaxed">
                Building the future of AYUSH entrepreneurship through innovation and community.
              </p>
            </div>
            {["Company", "Resources", "Support", "Connect"].map((section, index) => (
              <div key={section}>
                <h4 className="font-bold text-lg mb-4 text-white">{section}</h4>
                <ul className="space-y-2 text-emerald-200">
                  {[
                    ["About Us", "Team", "Careers", "Press"],
                    ["Blog", "Webinars", "Case Studies", "Research"],
                    ["Help Center", "Contact", "Status", "Docs"],
                    ["Twitter", "LinkedIn", "Instagram", "YouTube"]
                  ][index].map((item) => (
                    <li key={item} className="hover:text-white transition-colors duration-300 cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-emerald-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-emerald-300 mb-4 md:mb-0">
              © 2024 AYUSHEASE. Empowering wellness entrepreneurs worldwide.
            </div>
            <div className="flex gap-6">
              {["🐦", "💼", "📷", "🎬"].map((icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors duration-300 cursor-pointer hover:scale-110"
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
