import React, { useState } from "react";
import { 
  UserCheck, 
  BookOpen, 
  Heart, 
  Leaf, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Target, 
  Users, 
  Shield,
  Star,
  Clock,
  Award,
  Video,
  MessageCircle,
  Calendar,
  Zap,
  CheckCircle
} from "lucide-react";

const guidanceData = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Holistic Approach",
    content: "Understand the balance between mind, body, and spirit as taught by AYUSH masters. This includes therapies that address physical, mental, and emotional well-being holistically.",
    features: ["Mind-Body Balance", "Emotional Wellness", "Spiritual Harmony", "Complete Healing"],
    color: "from-blue-500 to-cyan-500",
    experts: 3,
    duration: "2-4 weeks"
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Natural Remedies",
    content: "Learn about herbal formulations and natural treatments recommended by AYUSH experts, focusing on plant-based medicines that promote health without side effects.",
    features: ["Herbal Formulations", "Zero Side Effects", "Ancient Recipes", "Modern Validation"],
    color: "from-green-500 to-emerald-500",
    experts: 5,
    duration: "1-3 months"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Lifestyle Guidance",
    content: "Adopt healthy lifestyle practices including diet, exercise, and meditation techniques that have been refined over centuries to maintain balance and prevent illness.",
    features: ["Daily Routines", "Seasonal Practices", "Diet Plans", "Exercise Regimens"],
    color: "from-pink-500 to-rose-500",
    experts: 4,
    duration: "Ongoing"
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "Personalized Care",
    content: "Receive personalized recommendations based on your body constitution (Prakriti) and health goals, ensuring treatments are tailored uniquely to you.",
    features: ["Prakriti Analysis", "Custom Plans", "Progress Tracking", "Adjustable Protocols"],
    color: "from-purple-500 to-indigo-500",
    experts: 6,
    duration: "Personalized"
  }
];

const experts = [
  {
    name: "Dr. Priya Sharma",
    specialization: "Ayurveda Specialist",
    experience: "15+ years",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 4.9,
    consultations: 1200
  },
  {
    name: "Dr. Rajesh Kumar",
    specialization: "Yoga & Naturopathy",
    experience: "12+ years",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 4.8,
    consultations: 950
  },
  {
    name: "Dr. Anjali Patel",
    specialization: "Herbal Medicine",
    experience: "18+ years",
    avatar: "https://i.pravatar.cc/150?img=44",
    rating: 5.0,
    consultations: 1500
  }
];

export default function ExpertGuidance() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedExpert, setSelectedExpert] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-cyan-50">
      {/* Header Section */}
      <div className="pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full text-lg font-medium mb-8">
            <Sparkles className="w-5 h-5" />
            Master AYUSH Wisdom
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-700 to-cyan-600 bg-clip-text text-transparent mb-6">
            Expert AYUSH Guidance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Connect with certified AYUSH practitioners and unlock ancient wisdom combined with modern scientific validation. 
            Transform your health journey with personalized, holistic guidance.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            {[
              { label: "Certified Experts", value: "50+" },
              { label: "Years Experience", value: "15+" },
              { label: "Happy Clients", value: "10K+" },
              { label: "Success Rate", value: "98%" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Guidance Sections */}
          <div className="lg:col-span-2 space-y-6">
            {guidanceData.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border-2 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  activeIndex === index 
                    ? "border-green-400 shadow-2xl" 
                    : "border-gray-200 shadow-lg hover:shadow-xl"
                }`}
                onClick={() => toggleIndex(index)}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h2>
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users className="w-4 h-4" />
                            <span>{item.experts} experts</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>{item.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-green-600">
                      {activeIndex === index ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </div>
                  </div>

                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">{item.content}</p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {item.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <button className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                          <Video className="w-4 h-4" />
                          Book Consultation
                        </button>
                        <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-green-400 hover:text-green-700 transition-all duration-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar - Experts & Features */}
          <div className="space-y-8">
            {/* Available Experts */}
            <div className="bg-white rounded-2xl p-8 border border-green-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-green-600" />
                Our Experts
              </h3>
              <div className="space-y-6">
                {experts.map((expert, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-green-300 transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedExpert(expert)}
                  >
                    <img
                      src={expert.avatar}
                      alt={expert.name}
                      className="w-16 h-16 rounded-xl border-2 border-green-200 group-hover:border-green-400 transition-colors duration-300"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                        {expert.name}
                      </h4>
                      <p className="text-green-600 text-sm mb-1">{expert.specialization}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-600">
                        <span>{expert.experience}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>{expert.rating}</span>
                        </div>
                        <span>{expert.consultations} consults</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 bg-green-100 text-green-700 py-3 rounded-xl font-semibold hover:bg-green-200 transition-colors duration-300 flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                View All Experts
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
              <div className="space-y-4">
                <button className="w-full bg-white text-cyan-600 py-4 rounded-xl font-semibold hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                  <Video className="w-5 h-5" />
                  Free Initial Consultation
                </button>
                <button className="w-full border-2 border-white text-white py-4 rounded-xl font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Schedule Session
                </button>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl p-8 border border-green-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-green-600" />
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                {[
                  "Certified AYUSH practitioners",
                  "Personalized treatment plans",
                  "Ancient wisdom + modern science",
                  "Continuous progress monitoring",
                  "24/7 expert support available"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Health?
          </h2>
          <p className="text-green-100 text-xl mb-8 max-w-2xl mx-auto">
            Join thousands who have discovered the power of AYUSH with our expert guidance. 
            Start your journey to holistic wellness today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <UserCheck className="w-5 h-5" />
              Begin Your Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105">
              Download Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
