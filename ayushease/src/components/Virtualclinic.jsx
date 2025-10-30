import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Video, 
  Calendar, 
  Clock, 
  Star, 
  MapPin, 
  Shield, 
  FileText, 
  MessageCircle, 
  Phone, 
  Mail, 
  Users, 
  Award,
  CheckCircle,
  Zap,
  Heart,
  Stethoscope,
  Pill,
  Activity
} from "lucide-react";

export default function VirtualClinic() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("consult");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [appointmentTime, setAppointmentTime] = useState("");
  const [consultationType, setConsultationType] = useState("video");

  // Sample doctors data
  const doctors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialization: "Ayurveda",
      experience: "12 years",
      rating: 4.9,
      reviews: 234,
      fee: "₹500",
      languages: ["Hindi", "English", "Sanskrit"],
      availability: ["Today", "Tomorrow"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      specialties: ["Panchakarma", "Herbal Medicine", "Lifestyle Disorders"]
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      specialization: "Yoga & Naturopathy",
      experience: "8 years",
      rating: 4.8,
      reviews: 189,
      fee: "₹400",
      languages: ["Hindi", "English"],
      availability: ["Today"],
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      specialties: ["Therapeutic Yoga", "Stress Management", "Diet Therapy"]
    },
    {
      id: 3,
      name: "Dr. Anjali Mehta",
      specialization: "Homeopathy",
      experience: "15 years",
      rating: 4.9,
      reviews: 312,
      fee: "₹600",
      languages: ["Hindi", "English", "Gujarati"],
      availability: ["Tomorrow"],
      image: "https://images.unsplash.com/photo-1594824947933-d0501ba2fe65?w=150&h=150&fit=crop&crop=face",
      specialties: ["Chronic Diseases", "Pediatric Care", "Mental Health"]
    },
    {
      id: 4,
      name: "Dr. Sameer Ahmed",
      specialization: "Unani",
      experience: "10 years",
      rating: 4.7,
      reviews: 167,
      fee: "₹450",
      languages: ["Hindi", "Urdu", "English"],
      availability: ["Today", "Tomorrow"],
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&h=150&fit=crop&crop=face",
      specialties: ["Ilaj-bil-Tadbeer", "Regimental Therapy", "Respiratory Disorders"]
    }
  ];

  const specialties = [
    { name: "Ayurveda", icon: "🌿", doctors: 45 },
    { name: "Yoga Therapy", icon: "🧘", doctors: 32 },
    { name: "Homeopathy", icon: "💊", doctors: 28 },
    { name: "Unani Medicine", icon: "⚗️", doctors: 23 },
    { name: "Siddha", icon: "🔮", doctors: 18 },
    { name: "Naturopathy", icon: "🌱", doctors: 27 }
  ];

  const features = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Consultations",
      description: "HD video calls with AYUSH practitioners from the comfort of your home"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Digital Prescriptions",
      description: "Secure digital prescriptions with herbal formulations and lifestyle advice"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Chat Support",
      description: "24/7 chat support for follow-up questions and medication guidance"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Records",
      description: "Encrypted medical records and treatment history for continuity of care"
    }
  ];

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
  ];

  const startBooking = (doctor) => {
    setSelectedDoctor(doctor);
    setShowBookingModal(true);
    setBookingStep(1);
  };

  const completeBooking = () => {
    // Simulate booking completion
    setTimeout(() => {
      setBookingStep(3);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Stethoscope className="w-4 h-4" />
            <span>Virtual AYUSH Clinic</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-green-600 to-teal-700 bg-clip-text text-transparent leading-tight">
            Traditional Healing, Modern Convenience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Connect with certified AYUSH practitioners through secure video consultations. 
            Get personalized treatment plans, digital prescriptions, and continuous care from the comfort of your home.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { number: "200+", label: "Certified Practitioners", icon: <Users className="w-6 h-6" /> },
            { number: "50K+", label: "Consultations", icon: <Video className="w-6 h-6" /> },
            { number: "4.8/5", label: "Patient Rating", icon: <Star className="w-6 h-6" /> },
            { number: "24/7", label: "Available", icon: <Clock className="w-6 h-6" /> }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4 text-green-600">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Specialties Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Choose Your Specialization</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specialties.map((specialty, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {specialty.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{specialty.name}</h3>
                <p className="text-sm text-gray-600">{specialty.doctors} doctors</p>
              </div>
            ))}
          </div>
        </div>

        {/* Doctors Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Available Practitioners</h2>
            <div className="flex gap-2">
              <button 
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === "consult" 
                    ? "bg-blue-600 text-white shadow-lg" 
                    : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300"
                }`}
                onClick={() => setActiveTab("consult")}
              >
                Video Consult
              </button>
              <button 
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === "chat" 
                    ? "bg-green-600 text-white shadow-lg" 
                    : "bg-white text-gray-600 border border-gray-200 hover:border-green-300"
                }`}
                onClick={() => setActiveTab("chat")}
              >
                Chat Consult
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doctors.map((doctor) => (
              <div 
                key={doctor.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="flex gap-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-20 h-20 rounded-2xl object-cover border-4 border-blue-100"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
                          <p className="text-blue-600 font-semibold">{doctor.specialization}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-green-600">{doctor.fee}</p>
                          <p className="text-sm text-gray-500">per session</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{doctor.rating}</span>
                          <span className="text-gray-500">({doctor.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <Award className="w-4 h-4" />
                          <span>{doctor.experience}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {doctor.specialties.slice(0, 2).map((specialty, index) => (
                          <span
                            key={index}
                            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                        {doctor.specialties.length > 2 && (
                          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                            +{doctor.specialties.length - 2} more
                          </span>
                        )}
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          {doctor.availability.map((day, index) => (
                            <span
                              key={index}
                              className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium"
                            >
                              {day}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={() => startBooking(doctor)}
                          className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl p-12 text-white mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Choose Practitioner", description: "Select from certified AYUSH doctors", icon: "👨‍⚕️" },
                { step: "2", title: "Book Appointment", description: "Pick convenient date & time", icon: "📅" },
                { step: "3", title: "Video Consult", description: "HD video call with your doctor", icon: "🎥" },
                { step: "4", title: "Get Treatment", description: "Digital prescription & follow-up", icon: "💊" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                    {item.icon}
                  </div>
                  <div className="text-2xl font-bold mb-2">{item.step}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-blue-100 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Shield className="w-8 h-8" />,
              title: "100% Secure",
              description: "End-to-end encrypted consultations and medical records"
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Instant Access",
              description: "Connect with doctors within minutes, not days"
            },
            {
              icon: <Heart className="w-8 h-8" />,
              title: "Holistic Care",
              description: "Comprehensive AYUSH treatments with lifestyle guidance"
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-green-600">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedDoctor && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Book Appointment</h2>
                  <p className="text-gray-600">with {selectedDoctor.name}</p>
                </div>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Progress Steps */}
              <div className="flex justify-between mb-8">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      bookingStep >= step 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step}
                    </div>
                    {step < 3 && (
                      <div className={`w-16 h-1 ${
                        bookingStep > step ? 'bg-blue-600' : 'bg-gray-200'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Step 1: Consultation Type */}
              {bookingStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Choose Consultation Type</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { type: "video", label: "Video Call", icon: "🎥", price: selectedDoctor.fee },
                      { type: "audio", label: "Audio Call", icon: "🎧", price: "₹300" },
                      { type: "chat", label: "Chat", icon: "💬", price: "₹200" },
                      { type: "clinic", label: "Clinic Visit", icon: "🏥", price: selectedDoctor.fee }
                    ].map((option) => (
                      <div
                        key={option.type}
                        onClick={() => {
                          setConsultationType(option.type);
                          setBookingStep(2);
                        }}
                        className={`border-2 rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                          consultationType === option.type
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="text-3xl mb-3">{option.icon}</div>
                        <h4 className="font-bold text-gray-800 mb-1">{option.label}</h4>
                        <p className="text-green-600 font-semibold">{option.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Time Selection */}
              {bookingStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Select Time Slot</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => {
                          setAppointmentTime(time);
                          setBookingStep(3);
                        }}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                          appointmentTime === time
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-blue-300 text-gray-700'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {bookingStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Appointment Confirmed!</h3>
                    <p className="text-gray-600 mb-6">
                      Your {consultationType} consultation with {selectedDoctor.name} is scheduled
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Doctor:</span>
                        <span className="font-semibold">{selectedDoctor.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span className="font-semibold">{appointmentTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-semibold capitalize">{consultationType} Consultation</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Fee:</span>
                        <span className="font-semibold text-green-600">{selectedDoctor.fee}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setShowBookingModal(false)}
                      className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-gray-400 transition-colors duration-300"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => navigate('/dashboard')}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-green-600"
                    >
                      Go to Dashboard
                    </button>
                  </div>
                </div>
              )}
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
