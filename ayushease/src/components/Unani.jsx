import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UnaniInfo() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("what-is");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    { id: "what-is", label: "What is Unani?", icon: "🌿" },
    { id: "principles", label: "Core Principles", icon: "⚖️" },
    { id: "benefits", label: "Benefits", icon: "💫" },
    { id: "video", label: "Video Guide", icon: "🎬" },
    { id: "startup", label: "For Startups", icon: "🚀" }
  ];

  const principles = [
    {
      title: "Four Humors",
      description: "Blood (Dam), Phlegm (Balgham), Yellow bile (Safra), Black bile (Sauda)",
      icon: "🩸",
      color: "from-red-100 to-red-50"
    },
    {
      title: "Mizaj (Temperament)",
      description: "Each individual has a unique temperament influencing their health",
      icon: "⚖️",
      color: "from-blue-100 to-blue-50"
    },
    {
      title: "Tadbeer (Regimen)",
      description: "Lifestyle and dietary adjustments for treatment and prevention",
      icon: "📋",
      color: "from-green-100 to-green-50"
    },
    {
      title: "Ilaj bil Ghiza",
      description: "Use of specific diets for curing diseases",
      icon: "🍎",
      color: "from-amber-100 to-amber-50"
    },
    {
      title: "Ilaj bil Dawa",
      description: "Treatment with herbal medicines and natural substances",
      icon: "🌿",
      color: "from-emerald-100 to-emerald-50"
    }
  ];

  const benefits = [
    { text: "Holistic approach to health, focusing on prevention and cure", icon: "🔄" },
    { text: "Uses natural remedies with minimal side effects", icon: "🌱" },
    { text: "Effective for chronic diseases and lifestyle disorders", icon: "❤️" },
    { text: "Emphasizes dietary and lifestyle balance", icon: "⚖️" },
    { text: "Improves overall well-being and immune function", icon: "🛡️" },
    { text: "Personalized treatment based on individual temperament", icon: "🎯" },
    { text: "Cost-effective compared to conventional medicine", icon: "💰" }
  ];

  const stats = [
    { number: "2000+", label: "Years of History", icon: "📜" },
    { number: "50+", label: "Countries Practiced", icon: "🌍" },
    { number: "1000+", label: "Herbal Formulations", icon: "💊" },
    { number: "Millions", label: "People Served", icon: "👥" }
  ];

  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col bg-gradient-to-br from-green-25 via-amber-25 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Enhanced Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-green-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div 
              className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-green-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent animate-gradient"
              onClick={() => navigate("/")}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-amber-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">A</span>
                </div>
                <span>AYUSHEASE</span>
              </div>
            </div>
            
            <nav className="hidden md:flex gap-8 items-center">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <a 
                  key={item}
                  href={`/${item === 'Home' ? '' : item.toLowerCase()}`} 
                  className="text-gray-700 hover:text-green-600 font-medium transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button 
                onClick={() => navigate("/login")}
                className="bg-gradient-to-r from-green-600 to-amber-500 text-white px-6 py-2.5 rounded-full hover:from-green-700 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105 font-semibold"
              >
                Login/Register
              </button>
            </nav>
            
            {/* Mobile menu button */}
            <button className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-green-50 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-12 relative z-10">
        {/* Hero Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🌿</span>
            <span>Traditional Healing System</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-700 via-amber-600 to-emerald-700 bg-clip-text text-transparent leading-tight">
            Unani Medicine
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover the ancient healing system that combines Greek, Arab, and Persian wisdom 
            to promote holistic health and well-being through natural balance.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate("/register")}
              className="bg-gradient-to-r from-green-600 to-amber-500 text-white px-8 py-4 rounded-full hover:from-green-700 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-lg font-semibold"
            >
              Start Your Journey
            </button>
            <button
              onClick={() => setActiveSection("video")}
              className="border-2 border-green-200 text-green-700 px-8 py-4 rounded-full hover:border-green-300 hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-1 text-lg font-semibold flex items-center space-x-2"
            >
              <span>🎬</span>
              <span>Watch Introduction</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center overflow-x-auto gap-3 mb-16 pb-4 scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-6 py-4 rounded-2xl whitespace-nowrap transition-all duration-300 flex items-center space-x-2 border-2 ${
                activeSection === section.id
                  ? "bg-gradient-to-r from-green-600 to-amber-500 text-white shadow-2xl border-transparent transform -translate-y-1"
                  : "bg-white/80 text-gray-700 hover:bg-green-50 hover:text-green-600 border-green-100 hover:border-green-200 backdrop-blur-sm"
              }`}
            >
              <span className="text-lg">{section.icon}</span>
              <span className="font-semibold">{section.label}</span>
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto">
          {/* What is Unani Medicine */}
          {(activeSection === "what-is" || !activeSection) && (
            <section className="mb-20">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 transform transition-all duration-500 hover:shadow-2xl border border-green-100">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-amber-400 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <span className="text-2xl text-white">🌿</span>
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-gray-800">What is Unani Medicine?</h2>
                    <p className="text-gray-600 mt-2">Ancient wisdom for modern wellness</p>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Unani medicine is a traditional system of healing and health maintenance observed in South Asia,
                      based on the teachings of ancient Greek physicians like Hippocrates and Galen, later developed 
                      by Arab and Persian scholars.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      It focuses on balancing the body's four humors—blood, phlegm, yellow bile, and black bile—
                      to maintain health and treat illness through natural and holistic approaches.
                    </p>
                    <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-2xl p-6 border border-green-200">
                      <h3 className="font-semibold text-lg mb-4 text-gray-800">Key Historical Figures</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {["Hippocrates", "Galen", "Avicenna", "Al-Razi"].map((figure) => (
                          <div key={figure} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <span className="text-green-600 text-sm">✦</span>
                            </div>
                            <span className="font-medium text-gray-700">{figure}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-amber-100 rounded-2xl p-8 border border-green-200">
                    <h3 className="font-bold text-2xl mb-6 text-center text-gray-800">The Four Humors</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { humor: "Blood", element: "Air", quality: "Hot & Moist", icon: "🩸" },
                        { humor: "Phlegm", element: "Water", quality: "Cold & Moist", icon: "💧" },
                        { humor: "Yellow Bile", element: "Fire", quality: "Hot & Dry", icon: "🔥" },
                        { humor: "Black Bile", element: "Earth", quality: "Cold & Dry", icon: "🌑" }
                      ].map((item) => (
                        <div key={item.humor} className="bg-white rounded-xl p-4 text-center shadow-sm border border-green-100">
                          <div className="text-2xl mb-2">{item.icon}</div>
                          <div className="font-bold text-gray-800">{item.humor}</div>
                          <div className="text-sm text-gray-600">{item.element}</div>
                          <div className="text-xs text-green-600 font-medium">{item.quality}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Core Principles */}
          {activeSection === "principles" && (
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Core Principles of Unani Medicine</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  The foundational concepts that guide Unani healing practices and treatments
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {principles.map((principle, index) => (
                  <div 
                    key={principle.title}
                    className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-green-500 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500 to-amber-400 rounded-full filter blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                    <div className="text-4xl mb-4 relative z-10">{principle.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 relative z-10">{principle.title}</h3>
                    <p className="text-gray-600 leading-relaxed relative z-10">{principle.description}</p>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Benefits */}
          {activeSection === "benefits" && (
            <section className="mb-20">
              <div className="bg-gradient-to-r from-green-600 to-amber-500 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>
                
                <div className="text-center mb-12 relative z-10">
                  <h2 className="text-4xl font-bold mb-4">Benefits of Unani Medicine</h2>
                  <p className="text-green-100 text-xl max-w-2xl mx-auto">
                    Experience holistic healing with time-tested natural approaches
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 relative z-10">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-white/20 rounded-2xl p-6 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <span className="text-xl">{benefit.icon}</span>
                      </div>
                      <p className="text-lg font-medium">{benefit.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Video Section */}
          {activeSection === "video" && (
            <section className="mb-20">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-green-100">
                <div className="bg-gradient-to-r from-green-600 to-amber-500 p-8 text-white text-center">
                  <h2 className="text-4xl font-bold mb-2">Introduction to Unani Medicine</h2>
                  <p className="text-green-100 text-lg">Watch and learn about this ancient healing system</p>
                </div>
                <div className="p-8">
                  <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
                    <iframe
                      className="w-full h-64 md:h-96"
                      src="https://www.youtube.com/embed/cJMRDlKCowU"
                      title="Unani Medicine Introduction"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
                    {[
                      { title: "Historical Roots", desc: "Greek, Arab & Persian influences" },
                      { title: "Modern Relevance", desc: "Applications in today's world" },
                      { title: "Practical Benefits", desc: "Real-world healing applications" }
                    ].map((item, index) => (
                      <div key={index} className="p-4">
                        <h3 className="font-semibold text-lg mb-2 text-gray-800">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Startup Section */}
          {activeSection === "startup" && (
            <section className="mb-20">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto border border-green-100 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-amber-400"></div>
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-amber-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl text-white">🚀</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Unani & AYUSHEASE</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-8 max-w-2xl mx-auto">
                  AYUSHEASE supports Unani startups by simplifying registration, ensuring compliance with 
                  regulatory standards, and providing expert guidance tailored to this unique healthcare tradition. 
                  Join our network to access resources, funding, and a strong community.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {[
                    { icon: "📝", title: "Easy Registration", desc: "Streamlined documentation process", color: "from-blue-500 to-cyan-500" },
                    { icon: "🛡️", title: "Compliance", desc: "Regulatory guidance & support", color: "from-green-500 to-emerald-500" },
                    { icon: "💰", title: "Funding Support", desc: "Access to investors & grants", color: "from-amber-500 to-orange-500" }
                  ].map((feature) => (
                    <div key={feature.title} className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                        <span className="text-2xl text-white">{feature.icon}</span>
                      </div>
                      <h4 className="font-bold text-lg mb-2 text-gray-800">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate("/register")}
                  className="bg-gradient-to-r from-green-600 to-amber-500 text-white px-12 py-4 rounded-full hover:from-green-700 hover:to-amber-600 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 text-lg font-bold group relative overflow-hidden"
                >
                  <span className="relative z-10">Register Your Unani Startup</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </section>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-green-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-amber-400"></div>
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-amber-400 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-amber-400 bg-clip-text text-transparent">
                  AYUSHEASE
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Empowering traditional medicine startups with modern solutions, regulatory guidance, and community support.
              </p>
              <div className="flex space-x-4">
                {["🐦", "📘", "📸", "💼"].map((icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-green-500 hover:to-amber-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="text-lg">{icon}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
              <ul className="space-y-4">
                {["Home", "About", "Services", "Contact", "Login"].map((link) => (
                  <li key={link}>
                    <a 
                      href={`/${link === 'Home' ? '' : link.toLowerCase()}`} 
                      className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Traditional Systems</h3>
              <ul className="space-y-4">
                {["Ayurveda", "Unani", "Siddha", "Homeopathy", "Yoga & Naturopathy"].map((system) => (
                  <li key={system}>
                    <a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center space-x-2 group">
                      <span className="w-2 h-2 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span>{system}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Stay Updated</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <div className="flex flex-col space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 bg-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-gray-700 transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-green-600 to-amber-500 px-6 py-3 rounded-xl hover:from-green-700 hover:to-amber-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl font-semibold">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-gray-400">
                © 2024 AYUSHEASE. All rights reserved. | Healing the future, traditionally.
              </div>
              <div className="flex space-x-6">
                {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((item) => (
                  <a 
                    key={item} 
                    href="#" 
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
