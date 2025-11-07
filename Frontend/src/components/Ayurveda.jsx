import React from "react";
import { Play, Star, Users, Shield, Zap, Heart, ArrowRight, CheckCircle, Award, Clock } from "lucide-react";

export default function AyurvedaService() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Certified",
      description: "GMP, ISO, and FSSAI certifications"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Tracking",
      description: "Expedited approval process"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Network",
      description: "Connect with Ayurveda practitioners"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Holistic Support",
      description: "End-to-end business guidance"
    }
  ];

  const processes = [
    {
      step: "01",
      title: "Consultation",
      description: "Free initial consultation with our Ayurveda experts"
    },
    {
      step: "02",
      title: "Documentation",
      description: "Assistance with all required documents and certifications"
    },
    {
      step: "03",
      title: "Registration",
      description: "Streamlined registration with regulatory bodies"
    },
    {
      step: "04",
      title: "Growth",
      description: "Ongoing support for business expansion"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Ancient Wisdom • Modern Solutions
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-green-700 to-amber-600 bg-clip-text text-transparent mb-6">
            Ayurveda Startup Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Embrace the ancient wisdom of Ayurveda with modern entrepreneurial spirit. 
            We provide comprehensive support for Ayurveda startups to thrive in today's market 
            while maintaining authenticity and compliance.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Introduction Card */}
            <div className="bg-white rounded-2xl p-8 border border-green-100 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Ayurveda?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayurveda, the "Science of Life," is one of the world's oldest holistic healing systems 
                developed in India over 3,000 years ago. It's based on the belief that health and wellness 
                depend on a delicate balance between the mind, body, and spirit.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <div className="text-2xl font-bold text-amber-600">5000+</div>
                  <div className="text-sm text-amber-700">Years of Tradition</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="text-2xl font-bold text-green-600">$10B+</div>
                  <div className="text-sm text-green-700">Global Market</div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-green-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Process Timeline */}
            <div className="bg-white rounded-2xl p-8 border border-green-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Our 4-Step Process</h3>
              <div className="space-y-6">
                {processes.map((process, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-amber-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {process.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-lg mb-2">{process.title}</h4>
                      <p className="text-gray-600">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Video & Benefits */}
          <div className="space-y-8">
            {/* Video Section */}
            <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Understanding Ayurveda</h3>
              <p className="text-gray-600 mb-6">
                Watch this comprehensive introduction to Ayurveda and learn how this ancient science 
                can transform modern healthcare and wellness.
              </p>
              
              {/* Video Container */}
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-black aspect-video mb-4">
                <iframe
                  src="https://www.youtube.com/embed/XozF9VBLEfU"
                  title="Understanding Ayurveda"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>15:42 minutes</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>4.8/5</span>
                </div>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Ayurveda?</h3>
              <div className="space-y-4">
                {[
                  "Natural and sustainable healing approach",
                  "Growing global demand for herbal products",
                  "Strong government support and schemes",
                  "Proven effectiveness for chronic conditions",
                  "Integration with modern wellness trends"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-200" />
                    <span className="text-green-50">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services List */}
            <div className="bg-white rounded-2xl p-8 border border-green-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Ayurveda Services</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Product Registration",
                    description: "FSSAI, AYUSH, and international certifications"
                  },
                  {
                    title: "Clinic Setup",
                    description: "Complete guidance for Ayurveda clinics and spas"
                  },
                  {
                    title: "Manufacturing Support",
                    description: "GMP compliance and production facility setup"
                  },
                  {
                    title: "Export Guidance",
                    description: "International market entry and compliance"
                  },
                  {
                    title: "IP Protection",
                    description: "Patent and trademark registration for formulations"
                  }
                ].map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-green-300 transition-colors duration-300 group">
                    <div>
                      <h4 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Ayurveda Journey?
          </h2>
          <p className="text-amber-100 text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of successful Ayurveda entrepreneurs who have transformed their passion into profitable businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Start Registration
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300 transform hover:scale-105">
              Book Consultation
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-amber-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">45 Days</div>
              <div className="text-sm">Average Processing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm">Expert Support</div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-green-100 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="Dr. Priya Sharma"
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-green-200"
              />
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "AYUSHEASE made our Ayurveda product registration seamless. Their expertise in AYUSH compliance saved us months of work!"
              </p>
              <h4 className="font-semibold text-gray-800">Dr. Priya Sharma</h4>
              <p className="text-green-600 text-sm">Founder, HerbalAyur</p>
            </div>
            <div className="text-center p-6">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Rajesh Kumar"
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-amber-200"
              />
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "The guidance on international exports was invaluable. We're now shipping to 5 countries thanks to AYUSHEASE!"
              </p>
              <h4 className="font-semibold text-gray-800">Rajesh Kumar</h4>
              <p className="text-amber-600 text-sm">CEO, Nature's Wisdom</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
