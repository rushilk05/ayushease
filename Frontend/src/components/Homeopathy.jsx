import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeopathyInfo() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Homeopathy Practitioner",
      content: "Homeopathy has transformed how I approach patient care, offering gentle yet effective treatments."
    },
    {
      name: "Rajesh Kumar",
      role: "Patient",
      content: "After years of conventional treatment, homeopathy provided the relief I needed without side effects."
    }
  ];

  const faqs = [
    {
      question: "Is homeopathy scientifically proven?",
      answer: "Yes, numerous studies and clinical trials have demonstrated the effectiveness of homeopathic treatments for various conditions."
    },
    {
      question: "How long does homeopathic treatment take?",
      answer: "Treatment duration varies depending on the condition - acute issues may improve quickly, while chronic conditions require longer treatment."
    },
    {
      question: "Can homeopathy be used with conventional medicine?",
      answer: "Yes, homeopathy can complement conventional treatments, but it's important to consult with qualified practitioners from both fields."
    }
  ];

  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div
            className="text-2xl font-bold cursor-pointer text-green-700"
            onClick={() => navigate("/")}
          >
            AYUSHEASE
          </div>
          <nav className="flex gap-8 items-center">
            <a href="/" className="hover:text-green-600 font-medium transition duration-200">Home</a>
            <a href="/about" className="hover:text-green-600 font-medium transition duration-200">About</a>
            <a href="/services" className="hover:text-green-600 font-medium transition duration-200">Services</a>
            <a href="/contact" className="hover:text-green-600 font-medium transition duration-200">Contact</a>
            <a href="/login">
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200 font-medium shadow-md">
                Login/Register
              </button>
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 py-12 max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">All About Homeopathy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the gentle, holistic approach to healing that has helped millions worldwide
          </p>
        </section>

        {/* Video Section */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Understanding Homeopathy</h2>
          <div className="aspect-w-16 aspect-h-9 bg-black rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/kjAU6EcTjy8"
              title="Homeopathy Explained"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-96 rounded-xl"
            ></iframe>
          </div>
          <p className="text-center text-gray-600 mt-4 text-lg">
            Watch this comprehensive guide to understand the principles and practice of homeopathy
          </p>
        </section>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border">
            {["overview", "principles", "benefits", "faq", "testimonials"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium transition duration-200 ${
                  activeTab === tab
                    ? "bg-green-600 text-white shadow-md"
                    : "text-gray-600 hover:text-green-600 hover:bg-gray-100"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              <section>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">What is Homeopathy?</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                      Homeopathy is a system of alternative medicine developed in the late 18th century 
                      by Dr. Samuel Hahnemann. It is based on the principle of 
                      <strong className="text-green-600"> "like cures like"</strong>, where substances that cause symptoms in a healthy person 
                      are used in highly diluted forms to treat similar symptoms in an unwell person.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Homeopathy emphasizes individualized treatment, aiming to stimulate the body's natural healing ability 
                      through carefully selected remedies that match the patient's unique symptom profile.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h3 className="font-semibold text-green-800 mb-3 text-lg">Key Features</h3>
                    <ul className="space-y-2 text-green-700">
                      <li>• Individualized treatment plans</li>
                      <li>• Natural substance-based remedies</li>
                      <li>• Holistic health approach</li>
                      <li>• Minimal side effects</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* Principles Tab */}
          {activeTab === "principles" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Core Principles of Homeopathy</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h3 className="text-xl font-semibold mb-3 text-blue-800">Law of Similars</h3>
                    <p className="text-blue-700">Treating symptoms with substances that produce similar symptoms in healthy individuals.</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                    <h3 className="text-xl font-semibold mb-3 text-purple-800">Individualization</h3>
                    <p className="text-purple-700">Each patient receives customized treatment based on their unique symptoms and constitution.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                    <h3 className="text-xl font-semibold mb-3 text-orange-800">Minimum Dose</h3>
                    <p className="text-orange-700">Using the smallest possible dose to stimulate healing without causing side effects.</p>
                  </div>
                  <div className="bg-teal-50 p-6 rounded-xl border border-teal-200">
                    <h3 className="text-xl font-semibold mb-3 text-teal-800">Holistic Approach</h3>
                    <p className="text-teal-700">Addressing physical, emotional, and mental aspects of health simultaneously.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === "benefits" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Benefits of Homeopathy</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "🌿", title: "Natural & Safe", desc: "Uses natural substances with minimal side effects" },
                  { icon: "🎯", title: "Targets Root Cause", desc: "Focuses on underlying causes rather than just symptoms" },
                  { icon: "👤", title: "Personalized Care", desc: "Tailored treatments for individual needs" },
                  { icon: "💊", title: "Non-Invasive", desc: "Gentle approach without invasive procedures" },
                  { icon: "🔄", title: "Holistic Healing", desc: "Addresses physical, mental, and emotional health" },
                  { icon: "🤝", title: "Complementary", desc: "Can be used alongside conventional treatments" }
                ].map((benefit, index) => (
                  <div key={index} className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200 text-center shadow-sm">
                    <div className="text-3xl mb-4">{benefit.icon}</div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Tab */}
          {activeTab === "faq" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonials Tab */}
          {activeTab === "testimonials" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">What People Say</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border border-green-200 shadow-sm">
                    <div className="text-green-600 text-4xl mb-4">"</div>
                    <p className="text-gray-700 text-lg mb-4 italic">{testimonial.content}</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-green-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-center text-white shadow-2xl mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Homeopathy Journey?</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Join AYUSHEASE today and get expert guidance for your homeopathy startup with comprehensive support for registration, compliance, and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/register")}
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-200 shadow-lg text-lg"
            >
              Register Your Homeopathy Startup
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition duration-200 text-lg"
            >
              Contact Our Experts
            </button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Homeopathy in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600">Countries Worldwide</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">500M+</div>
              <div className="text-gray-600">People Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600">Years of Practice</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">3000+</div>
              <div className="text-gray-600">Remedies Available</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-400">AYUSHEASE</h3>
              <p className="text-gray-400">
                Empowering homeopathy startups with comprehensive support and guidance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-400">
                <a href="/about" className="block hover:text-green-400 transition duration-200">About Us</a>
                <a href="/services" className="block hover:text-green-400 transition duration-200">Services</a>
                <a href="/contact" className="block hover:text-green-400 transition duration-200">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-green-400 transition duration-200">Terms of Service</a>
                <a href="#" className="block hover:text-green-400 transition duration-200">Privacy Policy</a>
                <a href="#" className="block hover:text-green-400 transition duration-200">Disclaimer</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-2xl hover:text-green-400 transition duration-200">🐦</a>
                <a href="#" className="text-2xl hover:text-green-400 transition duration-200">📘</a>
                <a href="#" className="text-2xl hover:text-green-400 transition duration-200">📸</a>
                <a href="#" className="text-2xl hover:text-green-400 transition duration-200">💼</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AYUSHEASE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
