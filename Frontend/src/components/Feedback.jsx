import React, { useState } from "react";

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "general",
    rating: 0,
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingClick = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating: rating,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setShowSuccess(true);
    setIsSubmitting(false);
    
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: "", email: "", category: "general", rating: 0, message: "" });
    }, 3000);
  };

  const categories = [
    { value: "general", label: "General Feedback", icon: "💬" },
    { value: "feature", label: "Feature Request", icon: "💡" },
    { value: "bug", label: "Bug Report", icon: "🐛" },
    { value: "suggestion", label: "Improvement Suggestion", icon: "✨" },
    { value: "support", label: "Support Request", icon: "🛟" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-white py-12 px-4">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-lg font-medium mb-6">
            <span>🌟</span>
            <span>Share Your Experience</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 bg-clip-text text-transparent">
            We Value Your Feedback
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your insights help us improve AYUSHEASE and serve the traditional medicine community better. 
            Every suggestion brings us closer to excellence.
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white p-6 rounded-2xl shadow-2xl mb-8 text-center transform transition-all duration-500 animate-bounce-in">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎉</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Thank You, {formData.name}!</h3>
                <p className="text-emerald-100">Your feedback has been received. We appreciate your contribution!</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-emerald-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      />
                      <div className="absolute right-3 top-3 text-emerald-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      />
                      <div className="absolute right-3 top-3 text-emerald-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Selection */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Feedback Category *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {categories.map((category) => (
                      <button
                        key={category.value}
                        type="button"
                        onClick={() => handleChange({ target: { name: 'category', value: category.value } })}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                          formData.category === category.value
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-lg'
                            : 'border-emerald-200 bg-white text-gray-600 hover:border-emerald-300'
                        }`}
                      >
                        <div className="text-2xl mb-1">{category.icon}</div>
                        <div className="text-xs font-medium">{category.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rating System */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    How would you rate your experience? {formData.rating > 0 && `(${formData.rating}/5)`}
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingClick(star)}
                        className={`text-3xl transition-all duration-300 transform hover:scale-110 ${
                          star <= formData.rating
                            ? 'text-amber-500'
                            : 'text-gray-300 hover:text-amber-300'
                        }`}
                      >
                        {star <= formData.rating ? '⭐' : '☆'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Your Feedback *
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    required
                    placeholder="Tell us about your experience, suggestions, or any issues you encountered. Your detailed feedback helps us improve..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 shadow-lg hover:shadow-xl'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>📬</span>
                      <span>Submit Feedback</span>
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-6">
            {/* Why Feedback Matters */}
            <div className="bg-gradient-to-br from-emerald-500 to-green-500 text-white rounded-2xl p-6 shadow-2xl">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Why Your Feedback Matters</h3>
              <ul className="space-y-2 text-emerald-100">
                <li className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>Helps us improve user experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>Guides new feature development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>Identifies areas for improvement</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>Supports traditional medicine community</span>
                </li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 shadow-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-emerald-600">⏱️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Response Time</h3>
              <p className="text-gray-600 text-sm">
                We typically respond to all feedback within 24-48 hours. For urgent matters, 
                please contact our support team directly.
              </p>
            </div>

            {/* Statistics */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Community Impact</h3>
              <div className="space-y-3">
                {[
                  { stat: "500+", label: "Feedback Received" },
                  { stat: "95%", label: "Positive Response" },
                  { stat: "24h", label: "Average Response Time" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-emerald-600 font-bold text-lg">{item.stat}</span>
                    <span className="text-gray-600 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Your privacy is important to us. We never share your personal information with third parties.
          </p>
        </div>
      </div>

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
        @keyframes bounce-in {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );   
}
