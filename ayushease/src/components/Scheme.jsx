import React, { useState, useEffect } from "react";

export default function GovernmentSchemeNavigator() {
  const [schemes, setSchemes] = useState([]);
  const [filteredSchemes, setFilteredSchemes] = useState([]);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [filters, setFilters] = useState({
    category: "all",
    eligibility: "all",
    state: "all",
    search: ""
  });
  const [applicationProgress, setApplicationProgress] = useState({});
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  // Sample government schemes data
  const schemeData = [
    {
      id: 1,
      name: "AYUSH Startup Challenge",
      category: "funding",
      ministry: "Ministry of AYUSH",
      description: "Financial support and mentorship for innovative AYUSH startups with unique business models",
      eligibility: ["Startups registered in India", "AYUSH-based products/services", "Less than 5 years old"],
      benefits: ["Up to ₹25 Lakhs funding", "Mentorship support", "Incubation support", "Market access"],
      deadline: "2024-12-31",
      status: "active",
      states: ["All India"],
      documents: ["Business Plan", "Company Registration", "Product Details", "Financial Projections"],
      website: "https://ayush.gov.in",
      contact: "startup-ayush@gov.in"
    },
    {
      id: 2,
      name: "National AYUSH Mission",
      category: "infrastructure",
      ministry: "Ministry of AYUSH",
      description: "Support for establishing AYUSH healthcare facilities and infrastructure development",
      eligibility: ["AYUSH practitioners", "Healthcare institutions", "State governments"],
      benefits: ["Infrastructure grants", "Equipment support", "Training programs", "Subsidies"],
      deadline: "2024-11-30",
      status: "active",
      states: ["All India"],
      documents: ["Clinic/Hospital registration", "Infrastructure plan", "Qualification certificates"],
      website: "https://nam.ayush.gov.in",
      contact: "nam-support@ayush.gov.in"
    },
    {
      id: 3,
      name: "AYUSH Export Promotion",
      category: "export",
      ministry: "Ministry of Commerce & Industry",
      description: "Financial assistance for AYUSH product exports and international market development",
      eligibility: ["Export-ready AYUSH companies", "Minimum 2 years in business", "Valid export license"],
      benefits: ["Export subsidies", "Market development assistance", "Quality certification support", "Trade fair participation"],
      deadline: "2024-10-15",
      status: "active",
      states: ["All India"],
      documents: ["Export license", "Business registration", "Product catalog", "Export history"],
      website: "https://commerce.gov.in",
      contact: "export-ayush@commerce.gov.in"
    },
    {
      id: 4,
      name: "Maharashtra AYUSH Cluster",
      category: "cluster",
      ministry: "Maharashtra State Government",
      description: "Development of AYUSH manufacturing clusters with common infrastructure facilities",
      eligibility: ["MSME AYUSH units", "Manufacturing companies", "Located in Maharashtra"],
      benefits: ["Land allocation", "Infrastructure subsidy", "Power tariff benefits", "Quality testing lab"],
      deadline: "2024-09-20",
      status: "active",
      states: ["Maharashtra"],
      documents: ["MSME registration", "Manufacturing license", "Project report", "Land documents"],
      website: "https://maharashtra.gov.in",
      contact: "ayushcluster@maharashtra.gov.in"
    },
    {
      id: 5,
      name: "Kerala Traditional Medicine Grant",
      category: "research",
      ministry: "Kerala Health Department",
      description: "Research grants for traditional medicine practitioners and research institutions",
      eligibility: ["Registered practitioners", "Research institutions", "Universities"],
      benefits: ["Research funding", "Clinical trial support", "Publication assistance", "IPR support"],
      deadline: "2024-08-31",
      status: "active",
      states: ["Kerala"],
      documents: ["Research proposal", "Practitioner registration", "Institutional affiliation"],
      website: "https://keralahealth.gov.in",
      contact: "traditionalmed@kerala.gov.in"
    },
    {
      id: 6,
      name: "AYUSH Technology Innovation",
      category: "innovation",
      ministry: "Department of Science & Technology",
      description: "Support for technology innovation and digital solutions in AYUSH sector",
      eligibility: ["Tech startups", "Research institutions", "Individual innovators"],
      benefits: ["R&D grants", "Prototype development", "Patent filing support", "Industry collaboration"],
      deadline: "2024-12-15",
      status: "upcoming",
      states: ["All India"],
      documents: ["Innovation details", "Technical feasibility", "Market potential", "Team credentials"],
      website: "https://dst.gov.in",
      contact: "tech-innovation@dst.gov.in"
    }
  ];

  const categories = [
    { value: "all", label: "All Categories", icon: "📋" },
    { value: "funding", label: "Funding", icon: "💰" },
    { value: "infrastructure", label: "Infrastructure", icon: "🏢" },
    { value: "export", label: "Export", icon: "🌍" },
    { value: "cluster", label: "Cluster Development", icon: "🏭" },
    { value: "research", label: "Research", icon: "🔬" },
    { value: "innovation", label: "Innovation", icon: "💡" }
  ];

  const states = [
    "All India", "Maharashtra", "Kerala", "Tamil Nadu", "Karnataka", 
    "Delhi", "Gujarat", "Rajasthan", "Uttar Pradesh", "West Bengal"
  ];

  useEffect(() => {
    setSchemes(schemeData);
    setFilteredSchemes(schemeData);
  }, []);

  useEffect(() => {
    filterSchemes();
  }, [filters, schemes]);

  const filterSchemes = () => {
    let filtered = schemes;

    if (filters.category !== "all") {
      filtered = filtered.filter(scheme => scheme.category === filters.category);
    }

    if (filters.state !== "all") {
      filtered = filtered.filter(scheme => 
        scheme.states.includes("All India") || scheme.states.includes(filters.state)
      );
    }

    if (filters.search) {
      filtered = filtered.filter(scheme =>
        scheme.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        scheme.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        scheme.ministry.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    setFilteredSchemes(filtered);
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const calculateDeadline = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const startApplication = (schemeId) => {
    setApplicationProgress(prev => ({
      ...prev,
      [schemeId]: { step: 1, progress: 25 }
    }));
    setShowApplicationModal(true);
  };

  const getStatusBadge = (scheme) => {
    const daysLeft = calculateDeadline(scheme.deadline);
    
    if (scheme.status === "upcoming") {
      return { text: "Upcoming", color: "bg-blue-100 text-blue-700" };
    }
    
    if (daysLeft < 0) {
      return { text: "Expired", color: "bg-red-100 text-red-700" };
    } else if (daysLeft <= 30) {
      return { text: `Closing in ${daysLeft} days`, color: "bg-amber-100 text-amber-700" };
    } else {
      return { text: "Active", color: "bg-green-100 text-green-700" };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🏛️</span>
            <span>Government Scheme Navigator</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 bg-clip-text text-transparent leading-tight">
            Find Your Perfect Scheme
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover and apply for government schemes tailored for AYUSH startups. 
            Get funding, infrastructure support, and regulatory assistance in one place.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { number: "50+", label: "Active Schemes", icon: "📋" },
            { number: "₹500Cr+", label: "Total Funding", icon: "💰" },
            { number: "15+", label: "Ministries", icon: "🏛️" },
            { number: "95%", label: "Success Rate", icon: "🎯" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-emerald-600 mb-1">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filters Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 border border-emerald-100">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search schemes by name, ministry, or keywords..."
                  className="w-full px-4 py-3 pl-12 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  value={filters.search}
                  onChange={(e) => handleFilterChange("search", e.target.value)}
                />
                <div className="absolute left-4 top-3 text-emerald-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                value={filters.category}
                onChange={(e) => handleFilterChange("category", e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* State Filter */}
            <div>
              <select
                className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                value={filters.state}
                onChange={(e) => handleFilterChange("state", e.target.value)}
              >
                <option value="all">All States</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Quick Category Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleFilterChange("category", category.value)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                filters.category === category.value
                  ? "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-lg"
                  : "border-emerald-200 bg-white text-gray-600 hover:border-emerald-300"
              }`}
            >
              <span>{category.icon}</span>
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Schemes Grid */}
        <div className="grid gap-6 mb-12">
          {filteredSchemes.map((scheme) => {
            const statusBadge = getStatusBadge(scheme);
            const daysLeft = calculateDeadline(scheme.deadline);
            
            return (
              <div
                key={scheme.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-emerald-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    {/* Scheme Info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-gray-800">{scheme.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusBadge.color}`}>
                          {statusBadge.text}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">{scheme.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <span>🏛️</span>
                          <span>{scheme.ministry}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span>📍</span>
                          <span>{scheme.states.join(", ")}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span>⏰</span>
                          <span>Deadline: {scheme.deadline}</span>
                        </div>
                      </div>

                      {/* Benefits Preview */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {scheme.benefits.slice(0, 3).map((benefit, index) => (
                          <span
                            key={index}
                            className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {benefit}
                          </span>
                        ))}
                        {scheme.benefits.length > 3 && (
                          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                            +{scheme.benefits.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 min-w-[200px]">
                      <button
                        onClick={() => setSelectedScheme(scheme)}
                        className="w-full bg-emerald-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => startApplication(scheme.id)}
                        disabled={scheme.status === "upcoming" || daysLeft < 0}
                        className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                          scheme.status === "upcoming" || daysLeft < 0
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-gradient-to-r from-emerald-600 to-green-500 text-white hover:from-emerald-700 hover:to-green-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        }`}
                      >
                        {scheme.status === "upcoming" ? "Coming Soon" : daysLeft < 0 ? "Expired" : "Apply Now"}
                      </button>
                      
                      {applicationProgress[scheme.id] && (
                        <div className="text-center">
                          <div className="text-sm text-emerald-600 font-medium">
                            Application Started ({applicationProgress[scheme.id].progress}%)
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div 
                              className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${applicationProgress[scheme.id].progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results Message */}
        {filteredSchemes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No schemes found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters or search criteria.</p>
            <button
              onClick={() => setFilters({ category: "all", eligibility: "all", state: "all", search: "" })}
              className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-500 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Need Personalized Assistance?</h2>
            <p className="text-emerald-100 text-xl mb-8 max-w-2xl mx-auto">
              Our experts can help you identify the best schemes and guide you through the application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-emerald-50">
                Book Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300">
                Download Scheme Guide
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scheme Detail Modal */}
      {selectedScheme && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedScheme.name}</h2>
                  <p className="text-emerald-600 font-semibold">{selectedScheme.ministry}</p>
                </div>
                <button
                  onClick={() => setSelectedScheme(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Scheme Details</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{selectedScheme.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Eligibility Criteria</h4>
                      <ul className="space-y-2">
                        {selectedScheme.eligibility.map((item, index) => (
                          <li key={index} className="flex items-center space-x-2 text-gray-600">
                            <span className="text-emerald-500">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Required Documents</h4>
                      <ul className="space-y-2">
                        {selectedScheme.documents.map((doc, index) => (
                          <li key={index} className="flex items-center space-x-2 text-gray-600">
                            <span className="text-emerald-500">📄</span>
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Benefits & Support</h3>
                  <div className="space-y-3 mb-6">
                    {selectedScheme.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                        <span className="text-emerald-600">🎁</span>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-800 mb-4">Contact Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-emerald-600">🌐</span>
                        <a href={selectedScheme.website} className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          Official Website
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-emerald-600">📧</span>
                        <span className="text-gray-600">{selectedScheme.contact}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-emerald-600">⏰</span>
                        <span className="text-gray-600">Deadline: {selectedScheme.deadline}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => startApplication(selectedScheme.id)}
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-green-500 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-emerald-700 hover:to-green-600"
                >
                  Start Application
                </button>
                <button
                  onClick={() => setSelectedScheme(null)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-bold hover:border-gray-400 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Modal */}
      {showApplicationModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-emerald-600">📝</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Application Started!</h3>
              <p className="text-gray-600 mb-6">
                We've saved your progress. Continue your application in the dashboard.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => setShowApplicationModal(false)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-gray-400 transition-colors duration-300"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowApplicationModal(false);
                    navigate('/dashboard');
                  }}
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-green-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-emerald-700 hover:to-green-600"
                >
                  Go to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
