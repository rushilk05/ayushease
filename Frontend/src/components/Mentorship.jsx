import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Sample mentors data
const mentors = [
  {
    id: 1,
    name: "Dr. Anjali Mehta",
    expertise: "Ayurveda",
    role: "Senior Mentor",
    experience: "15+ years",
    rating: 4.9,
    students: 234,
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    availability: "Available",
    specialties: ["Herbal Medicine", "Panchakarma", "Lifestyle Counseling"],
    bio: "Specialized in traditional Ayurvedic treatments with modern integrative approaches."
  },
  {
    id: 2,
    name: "Rohit Sharma",
    expertise: "Yoga & Naturopathy",
    role: "Mentor",
    experience: "8+ years",
    rating: 4.7,
    students: 156,
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    availability: "Available",
    specialties: ["Ashtanga Yoga", "Therapeutic Yoga", "Naturopathic Diet"],
    bio: "Passionate about integrating yoga with naturopathy for holistic wellness."
  },
  {
    id: 3,
    name: "Pooja Desai",
    expertise: "Homeopathy",
    role: "Mentor",
    experience: "12+ years",
    rating: 4.8,
    students: 189,
    img: "https://randomuser.me/api/portraits/women/67.jpg",
    availability: "Limited",
    specialties: ["Chronic Diseases", "Pediatric Homeopathy", "Mental Health"],
    bio: "Expert in classical homeopathy with focus on chronic and lifestyle disorders."
  },
  {
    id: 4,
    name: "Dr. Amit Singh",
    expertise: "Unani",
    role: "Senior Mentor",
    experience: "18+ years",
    rating: 4.9,
    students: 278,
    img: "https://randomuser.me/api/portraits/men/48.jpg",
    availability: "Available",
    specialties: ["Ilaj-bil-Tadbeer", "Regimental Therapy", "Herbal Formulations"],
    bio: "Renowned Unani practitioner with expertise in traditional healing methods."
  },
  {
    id: 5,
    name: "Dr. Priya Nair",
    expertise: "Siddha",
    role: "Senior Mentor",
    experience: "14+ years",
    rating: 4.8,
    students: 167,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    availability: "Available",
    specialties: ["Varma Therapy", "Herbal Medicine", "Detoxification"],
    bio: "Expert in Siddha medicine with focus on traditional Tamil healing practices."
  },
  {
    id: 6,
    name: "Rajesh Kumar",
    expertise: "AYUSH Business",
    role: "Business Mentor",
    experience: "10+ years",
    rating: 4.6,
    students: 198,
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    availability: "Available",
    specialties: ["Startup Guidance", "Regulatory Compliance", "Market Strategy"],
    bio: "Helping AYUSH entrepreneurs build successful and sustainable businesses."
  }
];

const expertiseFilters = ["All", "Ayurveda", "Yoga & Naturopathy", "Homeopathy", "Unani", "Siddha", "AYUSH Business"];

export default function Mentorship() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState("All");
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch = 
      mentor.name.toLowerCase().includes(search.toLowerCase()) ||
      mentor.expertise.toLowerCase().includes(search.toLowerCase()) ||
      mentor.role.toLowerCase().includes(search.toLowerCase()) ||
      mentor.specialties.some(spec => spec.toLowerCase().includes(search.toLowerCase()));
    
    const matchesExpertise = selectedExpertise === "All" || mentor.expertise === selectedExpertise;
    
    return matchesSearch && matchesExpertise;
  });

  const handleConnect = (mentor) => {
    setSelectedMentor(mentor);
    setShowModal(true);
  };

  const sendConnectionRequest = () => {
    alert(`Connection request sent to ${selectedMentor.name}! They will contact you within 24 hours.`);
    setShowModal(false);
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
            <span>👥</span>
            <span>Expert Guidance for Your AYUSH Journey</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 bg-clip-text text-transparent leading-tight">
            Find Your Mentor
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Connect with experienced AYUSH practitioners and business experts who can guide you through 
            your startup journey, regulatory compliance, and traditional medicine practice.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { number: "50+", label: "Expert Mentors", icon: "👨‍⚕️" },
            { number: "1000+", label: "Startups Guided", icon: "🚀" },
            { number: "4.8/5", label: "Average Rating", icon: "⭐" },
            { number: "24h", label: "Response Time", icon: "⚡" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-emerald-600 mb-1">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-12 border border-emerald-100">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search mentors by name, expertise, or specialty..."
                className="w-full px-4 py-3 pl-12 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="absolute left-4 top-3 text-emerald-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Expertise Filter */}
            <div>
              <select
                className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                value={selectedExpertise}
                onChange={(e) => setSelectedExpertise(e.target.value)}
              >
                {expertiseFilters.map((expertise) => (
                  <option key={expertise} value={expertise}>
                    {expertise === "All" ? "All Expertise Areas" : expertise}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-emerald-100 overflow-hidden group"
            >
              {/* Mentor Header */}
              <div className="relative">
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    mentor.availability === "Available" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-amber-100 text-amber-700"
                  }`}>
                    {mentor.availability}
                  </span>
                </div>
                
                <div className="p-6 text-center">
                  <div className="relative inline-block">
                    <img
                      src={mentor.img}
                      alt={mentor.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-emerald-100 group-hover:border-emerald-200 transition-colors duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      ⭐ {mentor.rating}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{mentor.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-1">{mentor.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{mentor.expertise}</p>
                  
                  <div className="flex justify-center space-x-4 text-sm text-gray-500 mb-4">
                    <span>{mentor.experience}</span>
                    <span>•</span>
                    <span>{mentor.students} students</span>
                  </div>
                </div>
              </div>

              {/* Specialties */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  {mentor.specialties.slice(0, 2).map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                  {mentor.specialties.length > 2 && (
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                      +{mentor.specialties.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bio */}
              <div className="px-6 pb-4">
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {mentor.bio}
                </p>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6">
                <button
                  onClick={() => handleConnect(mentor)}
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 hover:from-emerald-700 hover:to-green-600"
                >
                  Connect with Mentor
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredMentors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No mentors found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria or browse all mentors.</p>
            <button
              onClick={() => { setSearch(""); setSelectedExpertise("All"); }}
              className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300"
            >
              Show All Mentors
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-500 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-emerald-100 text-xl mb-8 max-w-2xl mx-auto">
              Join AYUSHEASE today and get personalized mentorship from industry experts. 
              Transform your AYUSH startup vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/register")}
                className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-emerald-50"
              >
                Join Now - It's Free
              </button>
              <button
                onClick={() => navigate("/about")}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Connection Modal */}
      {showModal && selectedMentor && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300 scale-100">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <img
                  src={selectedMentor.img}
                  alt={selectedMentor.name}
                  className="w-full h-full rounded-full object-cover border-4 border-emerald-100"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Connect with {selectedMentor.name}</h3>
              <p className="text-emerald-600 font-semibold mb-4">{selectedMentor.role} • {selectedMentor.expertise}</p>
              
              <p className="text-gray-600 mb-6">
                Send a connection request to {selectedMentor.name}. They will review your profile and 
                contact you within 24 hours to schedule your first mentorship session.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-gray-400 transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={sendConnectionRequest}
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-green-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-emerald-700 hover:to-green-600"
                >
                  Send Request
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
