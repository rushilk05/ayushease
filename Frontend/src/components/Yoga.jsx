import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function YogaInfo() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("what-is");
  const [isVisible, setIsVisible] = useState(false);
  const [currentYogaType, setCurrentYogaType] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const yogaTypes = [
    {
      name: "Hatha Yoga",
      description: "Focuses on physical postures and breathing exercises. Perfect for beginners to learn basic poses and alignment.",
      icon: "🕉️",
      difficulty: "Beginner",
      duration: "60-90 min",
      benefits: ["Foundation building", "Stress reduction", "Improved flexibility"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Vinyasa Yoga",
      description: "Dynamic flow connecting breath with movement. Creates a dance-like sequence of poses.",
      icon: "🌊",
      difficulty: "Intermediate",
      duration: "60-75 min",
      benefits: ["Cardiovascular health", "Strength building", "Fluid movement"],
      color: "from-emerald-600 to-green-500"
    },
    {
      name: "Ashtanga Yoga",
      description: "Rigorous style following a set sequence of postures. A powerful, physically demanding practice.",
      icon: "🔥",
      difficulty: "Advanced",
      duration: "90-120 min",
      benefits: ["Discipline", "Detoxification", "Mental focus"],
      color: "from-emerald-700 to-green-600"
    },
    {
      name: "Bikram Yoga",
      description: "Practiced in a heated room with specific postures. Promotes deep stretching and detoxification.",
      icon: "🌡️",
      difficulty: "Intermediate",
      duration: "90 min",
      benefits: ["Deep detox", "Enhanced flexibility", "Calorie burning"],
      color: "from-emerald-500 to-lime-500"
    },
    {
      name: "Kundalini Yoga",
      description: "Focuses on awakening spiritual energy through breath, meditation, and specific kriyas.",
      icon: "🐍",
      difficulty: "All Levels",
      duration: "60-90 min",
      benefits: ["Spiritual awakening", "Energy balance", "Mental clarity"],
      color: "from-emerald-600 to-cyan-500"
    },
    {
      name: "Yin Yoga",
      description: "Slow-paced with long-held passive poses targeting deep connective tissues and joints.",
      icon: "🌙",
      difficulty: "Beginner",
      duration: "45-75 min",
      benefits: ["Joint health", "Deep relaxation", "Meditative state"],
      color: "from-emerald-400 to-teal-400"
    }
  ];

  // Auto-rotate yoga types
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentYogaType((prev) => (prev + 1) % yogaTypes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const sections = [
    { id: "what-is", label: "What is Yoga?", icon: "🧘" },
    { id: "benefits", label: "Benefits", icon: "💫" },
    { id: "types", label: "Yoga Types", icon: "🌈" },
    { id: "video", label: "Video Guide", icon: "🎬" },
    { id: "startup", label: "For Startups", icon: "🚀" }
  ];

  const benefits = [
    { text: "Improves flexibility and strength", icon: "💪", color: "from-emerald-500 to-teal-500" },
    { text: "Reduces stress and anxiety", icon: "😌", color: "from-emerald-600 to-green-500" },
    { text: "Enhances concentration and mental clarity", icon: "🎯", color: "from-emerald-700 to-green-600" },
    { text: "Supports cardiovascular health", icon: "❤️", color: "from-emerald-500 to-lime-500" },
    { text: "Promotes better breathing and lung capacity", icon: "🌬️", color: "from-emerald-600 to-cyan-500" },
    { text: "Boosts immunity and overall vitality", icon: "🛡️", color: "from-emerald-400 to-teal-400" }
  ];

  const stats = [
    { number: "5000+", label: "Years Old", icon: "📜" },
    { number: "300M+", label: "Practitioners Worldwide", icon: "🌍" },
    { number: "100+", label: "Yoga Styles", icon: "🌈" },
    { number: "85%", label: "Report Reduced Stress", icon: "😊" }
  ];

  const nextYogaType = () => {
    setCurrentYogaType((prev) => (prev + 1) % yogaTypes.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevYogaType = () => {
    setCurrentYogaType((prev) => (prev - 1 + yogaTypes.length) % yogaTypes.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToYogaType = (index) => {
    setCurrentYogaType(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-green-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Enhanced Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-emerald-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div 
              className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"
              onClick={() => navigate("/")}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
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
                  className="text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button 
                onClick={() => navigate("/login")}
                className="bg-gradient-to-r from-emerald-600 to-green-500 text-white px-6 py-2.5 rounded-full hover:from-emerald-700 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
              >
                Login/Register
              </button>
            </nav>
            
            {/* Mobile menu button */}
            <button className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-emerald-50 transition-colors">
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
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🧘</span>
            <span>Ancient Practice for Modern Life</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 bg-clip-text text-transparent leading-tight">
            The Art of Yoga
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover the transformative power of yoga - an ancient Indian practice that harmonizes mind, body, and spirit 
            through physical postures, breathing techniques, and meditation.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate("/register")}
              className="bg-gradient-to-r from-emerald-600 to-green-500 text-white px-8 py-4 rounded-full hover:from-emerald-700 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-lg font-semibold"
            >
              Start Your Yoga Journey
            </button>
            <button
              onClick={() => setActiveSection("video")}
              className="border-2 border-emerald-200 text-emerald-700 px-8 py-4 rounded-full hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 transform hover:-translate-y-1 text-lg font-semibold flex items-center space-x-2"
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
                  ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-2xl border-transparent transform -translate-y-1"
                  : "bg-white/80 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 border-emerald-100 hover:border-emerald-200 backdrop-blur-sm"
              }`}
            >
              <span className="text-lg">{section.icon}</span>
              <span className="font-semibold">{section.label}</span>
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto">
          {/* What is Yoga */}
          {(activeSection === "what-is" || !activeSection) && (
            <section className="mb-20">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 transform transition-all duration-500 hover:shadow-2xl border border-emerald-100">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <span className="text-2xl text-white">🧘</span>
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-gray-800">What is Yoga?</h2>
                    <p className="text-emerald-600 mt-2">Union of mind, body, and spirit</p>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Yoga is an ancient Indian practice that combines physical postures (asanas), breathing techniques (pranayama), 
                      meditation, and ethical principles aimed at improving physical, mental, and spiritual well-being.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      It promotes harmony between mind and body, helping practitioners achieve balance, health, and inner peace 
                      through disciplined practice and self-awareness.
                    </p>
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200">
                      <h3 className="font-semibold text-lg mb-4 text-gray-800">The Eight Limbs of Yoga</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {["Yama", "Niyama", "Asana", "Pranayama", "Pratyahara", "Dharana", "Dhyana", "Samadhi"].map((limb) => (
                          <div key={limb} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-emerald-100">
                            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                              <span className="text-emerald-600 text-sm">✦</span>
                            </div>
                            <span className="font-medium text-gray-700">{limb}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl p-8 border border-emerald-200">
                    <h3 className="font-bold text-2xl mb-6 text-center text-gray-800">Yoga Philosophy</h3>
                    <div className="space-y-4">
                      {[
                        { principle: "Ahimsa", meaning: "Non-violence", icon: "🕊️" },
                        { principle: "Santosha", meaning: "Contentment", icon: "😊" },
                        { principle: "Svadhyaya", meaning: "Self-study", icon: "📚" },
                        { principle: "Ishvara Pranidhana", meaning: "Surrender", icon: "🙏" }
                      ].map((item) => (
                        <div key={item.principle} className="bg-white rounded-xl p-4 flex items-center space-x-4 shadow-sm border border-emerald-100">
                          <div className="text-2xl">{item.icon}</div>
                          <div className="flex-1">
                            <div className="font-bold text-gray-800">{item.principle}</div>
                            <div className="text-sm text-emerald-600">{item.meaning}</div>
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
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Benefits of Yoga</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Transform your life through regular yoga practice
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-emerald-500 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full filter blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                    <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-4 relative z-10`}>
                      <span className="text-xl text-white">{benefit.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 relative z-10">{benefit.text}</h3>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Yoga Types Carousel */}
          {activeSection === "types" && (
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Discover Yoga Styles</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Explore different yoga practices to find what resonates with you
                </p>
              </div>

              {/* Main Carousel */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-emerald-100 mb-8">
                <div className="relative">
                  {/* Yoga Type Card */}
                  <div className="text-center p-6">
                    <div className={`w-24 h-24 bg-gradient-to-r ${yogaTypes[currentYogaType].color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-500`}>
                      <span className="text-4xl text-white">{yogaTypes[currentYogaType].icon}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-800 mb-4 transition-all duration-500">
                      {yogaTypes[currentYogaType].name}
                    </h3>
                    
                    <div className="flex justify-center items-center space-x-4 mb-6">
                      <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold">
                        {yogaTypes[currentYogaType].difficulty}
                      </span>
                      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                        {yogaTypes[currentYogaType].duration}
                      </span>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-6 transition-all duration-500">
                      {yogaTypes[currentYogaType].description}
                    </p>

                    {/* Benefits */}
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200 max-w-md mx-auto">
                      <h4 className="font-semibold text-lg mb-3 text-gray-800">Key Benefits</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {yogaTypes[currentYogaType].benefits.map((benefit, index) => (
                          <span 
                            key={index}
                            className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-emerald-200 transition-all duration-300 hover:scale-105"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevYogaType}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-emerald-200 flex items-center justify-center hover:bg-emerald-50 hover:scale-110 transition-all duration-300"
                  >
                    <span className="text-2xl text-emerald-600">←</span>
                  </button>
                  <button
                    onClick={nextYogaType}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-emerald-200 flex items-center justify-center hover:bg-emerald-50 hover:scale-110 transition-all duration-300"
                  >
                    <span className="text-2xl text-emerald-600">→</span>
                  </button>
                </div>
              </div>

              {/* Progress Dots */}
              <div className="flex justify-center space-x-3 mb-8">
                {yogaTypes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToYogaType(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentYogaType 
                        ? 'bg-emerald-500 scale-125' 
                        : 'bg-emerald-200 hover:bg-emerald-300'
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play Toggle */}
              <div className="text-center">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-emerald-200 hover:bg-emerald-50 transition-all duration-300 flex items-center space-x-2 mx-auto"
                >
                  <span className={`w-3 h-3 rounded-full ${isAutoPlaying ? 'bg-emerald-500' : 'bg-red-400'}`}></span>
                  <span className="text-gray-700 font-medium">
                    {isAutoPlaying ? 'Auto-rotating' : 'Paused'} - Click to {isAutoPlaying ? 'Pause' : 'Play'}
                  </span>
                </button>
              </div>

              {/* All Types Grid (Mini View) */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">All Yoga Styles</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {yogaTypes.map((type, index) => (
                    <button
                      key={index}
                      onClick={() => goToYogaType(index)}
                      className={`p-4 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                        index === currentYogaType
                          ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg scale-105'
                          : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-emerald-50 shadow-md'
                      }`}
                    >
                      <div className="text-2xl mb-2">{type.icon}</div>
                      <div className="font-semibold text-sm">{type.name}</div>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Video Section */}
          {activeSection === "video" && (
            <section className="mb-20">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-emerald-100">
                <div className="bg-gradient-to-r from-emerald-600 to-green-500 p-8 text-white text-center">
                  <h2 className="text-4xl font-bold mb-2">Introduction to Yoga</h2>
                  <p className="text-emerald-100 text-lg">Discover the essence of yoga practice</p>
                </div>
                <div className="p-8">
                  <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
                    <iframe
                      className="w-full h-64 md:h-96"
                      src="https://www.youtube.com/embed/zEAd2z1knwc"
                      title="Yoga Introduction"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
                    {[
                      { title: "Beginner Friendly", desc: "Perfect for starting your journey" },
                      { title: "Expert Guidance", desc: "Learn from experienced instructors" },
                      { title: "Holistic Approach", desc: "Mind, body and spirit connection" }
                    ].map((item, index) => (
                      <div key={index} className="p-4">
                        <h3 className="font-semibold text-lg mb-2 text-gray-800">{item.title}</h3>
                        <p className="text-emerald-600">{item.desc}</p>
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
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto border border-emerald-100 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-green-500"></div>
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl text-white">🚀</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Yoga & AYUSHEASE</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-8 max-w-2xl mx-auto">
                  AYUSHEASE is dedicated to empowering Yoga startups by providing a streamlined registration process, 
                  expert guidance, and compliance assurance tailored specifically to the Yoga sector. We help startups 
                  thrive by connecting them with resources, funding schemes, and a vibrant community.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {[
                    { icon: "📝", title: "Easy Registration", desc: "Streamlined documentation process", color: "from-emerald-500 to-teal-500" },
                    { icon: "🛡️", title: "Compliance", desc: "Regulatory guidance & support", color: "from-emerald-600 to-green-500" },
                    { icon: "💰", title: "Funding Support", desc: "Access to investors & grants", color: "from-emerald-700 to-green-600" }
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
                  className="bg-gradient-to-r from-emerald-600 to-green-500 text-white px-12 py-4 rounded-full hover:from-emerald-700 hover:to-green-600 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 text-lg font-bold group relative overflow-hidden"
                >
                  <span className="relative z-10">Register Your Yoga Startup</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-green-500"></div>
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  AYUSHEASE
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Empowering yoga and wellness startups with modern solutions, regulatory guidance, and community support.
              </p>
              <div className="flex space-x-4">
                {["🐦", "📘", "📸", "💼"].map((icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
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
                      className="text-gray-400 hover:text-emerald-400 transition-all duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-2 h-2 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Wellness Systems</h3>
              <ul className="space-y-4">
                {["Yoga", "Ayurveda", "Meditation", "Pranayama", "Wellness Retreats"].map((system) => (
                  <li key={system}>
                    <a href="#" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 flex items-center space-x-2 group">
                      <span className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span>{system}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Stay Updated</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for yoga insights and startup opportunities.
              </p>
              <div className="flex flex-col space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 bg-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-gray-700 transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-emerald-600 to-green-500 px-6 py-3 rounded-xl hover:from-emerald-700 hover:to-green-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl font-semibold">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-gray-400">
                © 2024 AYUSHEASE. All rights reserved. | Empowering wellness, nurturing growth.
              </div>
              <div className="flex space-x-6">
                {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((item) => (
                  <a 
                    key={item} 
                    href="#" 
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
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
