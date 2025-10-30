import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SiddhaInfo() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("what-is");
  const [isVisible, setIsVisible] = useState(false);
  const [currentPractice, setCurrentPractice] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const practices = [
    {
      name: "Herbal Medicine",
      description: "Extensive use of plant-based remedies and formulations derived from ancient Tamil texts",
      icon: "🌿",
      benefits: ["Natural healing", "Minimal side effects", "Traditional wisdom"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Mineral Medicine",
      description: "Incorporates purified minerals and metals through specialized alchemical processes",
      icon: "💎",
      benefits: ["Potent formulations", "Purified elements", "Ancient alchemy"],
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Diet & Lifestyle",
      description: "Prescribes specific food regimens and daily routines to maintain dosha balance",
      icon: "🍚",
      benefits: ["Preventive care", "Holistic approach", "Daily wellness"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Yoga & Meditation",
      description: "Integrates spiritual practices for mental clarity and physical well-being",
      icon: "🧘",
      benefits: ["Mental peace", "Spiritual growth", "Physical harmony"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Varmam Therapy",
      description: "Healing through precise pressure points and energy channels in the body",
      icon: "🎯",
      benefits: ["Energy balance", "Pain relief", "Quick healing"],
      color: "from-red-500 to-rose-500"
    }
  ];

  // Auto-rotate practices
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentPractice((prev) => (prev + 1) % practices.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const sections = [
    { id: "what-is", label: "What is Siddha?", icon: "🌿" },
    { id: "benefits", label: "Benefits", icon: "💫" },
    { id: "practices", label: "Key Practices", icon: "🔬" },
    { id: "humors", label: "Three Humors", icon: "⚖️" },
    { id: "startup", label: "For Startups", icon: "🚀" }
  ];

  const benefits = [
    { text: "Effective in treating chronic illnesses", icon: "❤️", color: "from-red-500 to-pink-500" },
    { text: "Uses natural herbs and minerals for holistic healing", icon: "🌱", color: "from-green-500 to-emerald-500" },
    { text: "Focuses on prevention and lifestyle management", icon: "🛡️", color: "from-blue-500 to-cyan-500" },
    { text: "Supports detoxification and rejuvenation", icon: "🌀", color: "from-purple-500 to-violet-500" },
    { text: "Balances mind, body, and spirit", icon: "⚖️", color: "from-amber-500 to-orange-500" },
    { text: "Cost-effective and accessible healthcare", icon: "💰", color: "from-emerald-500 to-teal-500" }
  ];

  const humors = [
    {
      name: "Vatham",
      element: "Air & Ether",
      qualities: "Dry, Cold, Light",
      functions: "Movement, Nervous System",
      color: "from-blue-400 to-cyan-400"
    },
    {
      name: "Pitham",
      element: "Fire & Water",
      qualities: "Hot, Sharp, Liquid",
      functions: "Metabolism, Digestion",
      color: "from-red-400 to-orange-400"
    },
    {
      name: "Kapham",
      element: "Earth & Water",
      qualities: "Heavy, Cold, Soft",
      functions: "Structure, Lubrication",
      color: "from-green-400 to-emerald-400"
    }
  ];

  const stats = [
    { number: "5000+", label: "Years Old", icon: "📜" },
    { number: "1000+", label: "Herbal Formulations", icon: "🌿" },
    { number: "Traditional", label: "Tamil Origin", icon: "🏺" },
    { number: "Holistic", label: "Healing Approach", icon: "🔄" }
  ];

  const nextPractice = () => {
    setCurrentPractice((prev) => (prev + 1) % practices.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevPractice = () => {
    setCurrentPractice((prev) => (prev - 1 + practices.length) % practices.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPractice = (index) => {
    setCurrentPractice(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Enhanced Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-amber-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div 
              className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
              onClick={() => navigate("/")}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
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
                  className="text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button 
                onClick={() => navigate("/login")}
                className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-6 py-2.5 rounded-full hover:from-amber-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
              >
                Login/Register
              </button>
            </nav>
            
            {/* Mobile menu button */}
            <button className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-amber-50 transition-colors">
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
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🌿</span>
            <span>Ancient Tamil Healing System</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-700 via-orange-600 to-red-700 bg-clip-text text-transparent leading-tight">
            Siddha Medicine
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover one of the world's oldest medical systems - a holistic approach to health 
            that balances mind, body, and spirit through natural remedies and spiritual wisdom.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate("/register")}
              className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-8 py-4 rounded-full hover:from-amber-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-lg font-semibold"
            >
              Explore Siddha Healing
            </button>
            <button
              onClick={() => setActiveSection("practices")}
              className="border-2 border-amber-200 text-amber-700 px-8 py-4 rounded-full hover:border-amber-300 hover:bg-amber-50 transition-all duration-300 transform hover:-translate-y-1 text-lg font-semibold flex items-center space-x-2"
            >
              <span>🔬</span>
              <span>View Practices</span>
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
                  ? "bg-gradient-to-r from-amber-600 to-orange-500 text-white shadow-2xl border-transparent transform -translate-y-1"
                  : "bg-white/80 text-gray-700 hover:bg-amber-50 hover:text-amber-600 border-amber-100 hover:border-amber-200 backdrop-blur-sm"
              }`}
            >
              <span className="text-lg">{section.icon}</span>
              <span className="font-semibold">{section.label}</span>
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto">
          {/* What is Siddha */}
          {(activeSection === "what-is" || !activeSection) && (
            <section className="mb-20">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 transform transition-all duration-500 hover:shadow-2xl border border-amber-100">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <span className="text-2xl text-white">🌿</span>
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-gray-800">What is Siddha Medicine?</h2>
                    <p className="text-amber-600 mt-2">Ancient Wisdom for Modern Healing</p>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Siddha is one of the oldest systems of medicine originating from South India. 
                      Rooted in Tamil culture, it emphasizes holistic healing through herbs, minerals, 
                      diet, lifestyle practices, and spiritual discipline.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Siddha medicine aims to maintain balance between the body's three humors—
                      <strong> Vatham</strong>, <strong>Pitham</strong>, and <strong>Kapham</strong>—
                      to promote long-term health and well-being through natural and sustainable approaches.
                    </p>
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                      <h3 className="font-semibold text-lg mb-4 text-gray-800">Core Principles</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {["Natural Healing", "Holistic Approach", "Prevention Focus", "Spiritual Balance"].map((principle) => (
                          <div key={principle} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-amber-100">
                            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                              <span className="text-amber-600 text-sm">✦</span>
                            </div>
                            <span className="font-medium text-gray-700">{principle}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 border border-amber-200">
                    <h3 className="font-bold text-2xl mb-6 text-center text-gray-800">Historical Significance</h3>
                    <div className="space-y-4">
                      {[
                        { era: "Ancient Origins", detail: "5000+ years of tradition", icon: "🏺" },
                        { era: "Tamil Roots", detail: "South Indian heritage", icon: "📜" },
                        { era: "Spiritual Foundation", detail: "Connection to yoga", icon: "🕉️" },
                        { era: "Modern Relevance", detail: "Growing global recognition", icon: "🌍" }
                      ].map((item) => (
                        <div key={item.era} className="bg-white rounded-xl p-4 flex items-center space-x-4 shadow-sm border border-amber-100">
                          <div className="text-2xl">{item.icon}</div>
                          <div className="flex-1">
                            <div className="font-bold text-gray-800">{item.era}</div>
                            <div className="text-sm text-amber-600">{item.detail}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Benefits */}
          {activeSection === "benefits" && (
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Benefits of Siddha</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Experience holistic healing through ancient Tamil wisdom
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-amber-500 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full filter blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                    <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-4 relative z-10`}>
                      <span className="text-xl text-white">{benefit.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 relative z-10">{benefit.text}</h3>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Key Practices Carousel */}
          {activeSection === "practices" && (
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Key Practices in Siddha</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Discover the diverse healing methods of Siddha medicine
                </p>
              </div>

              {/* Main Carousel */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-amber-100 mb-8">
                <div className="relative">
                  {/* Practice Card */}
                  <div className="text-center p-6">
                    <div className={`w-24 h-24 bg-gradient-to-r ${practices[currentPractice].color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-500`}>
                      <span className="text-4xl text-white">{practices[currentPractice].icon}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-800 mb-4 transition-all duration-500">
                      {practices[currentPractice].name}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-6 transition-all duration-500">
                      {practices[currentPractice].description}
                    </p>

                    {/* Benefits */}
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 max-w-md mx-auto">
                      <h4 className="font-semibold text-lg mb-3 text-gray-800">Key Advantages</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {practices[currentPractice].benefits.map((benefit, index) => (
                          <span 
                            key={index}
                            className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-amber-200 transition-all duration-300 hover:scale-105"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevPractice}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-amber-200 flex items-center justify-center hover:bg-amber-50 hover:scale-110 transition-all duration-300"
                  >
                    <span className="text-2xl text-amber-600">←</span>
                  </button>
                  <button
                    onClick={nextPractice}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-amber-200 flex items-center justify-center hover:bg-amber-50 hover:scale-110 transition-all duration-300"
                  >
                    <span className="text-2xl text-amber-600">→</span>
                  </button>
                </div>
              </div>

              {/* Progress Dots */}
              <div className="flex justify-center space-x-3 mb-8">
                {practices.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPractice(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentPractice 
                        ? 'bg-amber-500 scale-125' 
                        : 'bg-amber-200 hover:bg-amber-300'
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play Toggle */}
              <div className="text-center">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-amber-200 hover:bg-amber-50 transition-all duration-300 flex items-center space-x-2 mx-auto"
                >
                  <span className={`w-3 h-3 rounded-full ${isAutoPlaying ? 'bg-amber-500' : 'bg-red-400'}`}></span>
                  <span className="text-gray-700 font-medium">
                    {isAutoPlaying ? 'Auto-rotating' : 'Paused'} - Click to {isAutoPlaying ? 'Pause' : 'Play'}
                  </span>
                </button>
              </div>
            </section>
          )}

          {/* Three Humors */}
          {activeSection === "humors" && (
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">The Three Humors (Mukkuttram)</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Fundamental principles governing health and disease in Siddha medicine
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {humors.map((humor, index) => (
                  <div 
                    key={humor.name}
                    className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-100 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full filter blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                    <div className={`w-16 h-16 bg-gradient-to-r ${humor.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                      <span className="text-2xl text-white">⚖️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">{humor.name}</h3>
                    <div className="space-y-3 text-center">
                      <div>
                        <div className="font-semibold text-amber-600">Element</div>
                        <div className="text-gray-700">{humor.element}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-amber-600">Qualities</div>
                        <div className="text-gray-700">{humor.qualities}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-amber-600">Functions</div>
                        <div className="text-gray-700">{humor.functions}</div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Startup Section */}
          {activeSection === "startup" && (
            <section className="mb-20">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto border border-amber-100 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 to-orange-500"></div>
                <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl text-white">🚀</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Siddha & AYUSHEASE</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-8 max-w-2xl mx-auto">
                  AYUSHEASE supports Siddha-based startups by simplifying the registration process, 
                  ensuring compliance with traditional medicine standards, and providing expert guidance. 
                  We connect Siddha entrepreneurs with government schemes, funding opportunities, and a 
                  thriving AYUSH community to help them scale their ventures effectively.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {[
                    { icon: "📝", title: "Easy Registration", desc: "Streamlined documentation process", color: "from-amber-500 to-orange-500" },
                    { icon: "🛡️", title: "Compliance", desc: "Traditional medicine standards", color: "from-amber-600 to-orange-600" },
                    { icon: "💰", title: "Funding Support", desc: "Access to AYUSH schemes", color: "from-amber-700 to-orange-700" }
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
                  className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-12 py-4 rounded-full hover:from-amber-700 hover:to-orange-600 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 text-lg font-bold group relative overflow-hidden"
                >
                  <span className="relative z-10">Register Your Siddha Startup</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-amber-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  AYUSHEASE
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Empowering traditional medicine startups with modern solutions and regulatory guidance.
              </p>
              <div className="flex space-x-4">
                {["🐦", "📘", "📸", "💼"].map((icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
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
                      className="text-gray-400 hover:text-amber-400 transition-all duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-2 h-2 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Traditional Systems</h3>
              <ul className="space-y-4">
                {["Siddha", "Ayurveda", "Unani", "Homeopathy", "Yoga"].map((system) => (
                  <li key={system}>
                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-300 flex items-center space-x-2 group">
                      <span className="w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span>{system}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Stay Updated</h3>
              <p className="text-gray-400 mb-4">
                Subscribe for Siddha medicine insights and startup opportunities.
              </p>
              <div className="flex flex-col space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 bg-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-gray-700 transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-amber-600 to-orange-500 px-6 py-3 rounded-xl hover:from-amber-700 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl font-semibold">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-gray-400">
                © 2024 AYUSHEASE. All rights reserved. | Preserving tradition, enabling innovation.
              </div>
              <div className="flex space-x-6">
                {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((item) => (
                  <a 
                    key={item} 
                    href="#" 
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm"
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
      `}</style>
    </div>
  );
}
