import React from "react";
import { useNavigate } from "react-router-dom";

export default function YogaInfo() {
  const navigate = useNavigate();

  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 border-b">
        <div 
          className="text-xl font-bold cursor-pointer" 
          onClick={() => navigate("/")}
        >
          AYUSHEASE
        </div>
        <nav className="flex gap-6 items-center">
          <a href="/" className="hover:text-green-600">Home</a>
          <a href="/about" className="hover:text-green-600">About</a>
          <a href="/services" className="hover:text-green-600">Services</a>
          <a href="/contact" className="hover:text-green-600">Contact</a>
          <a href="/login">
            <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">
              Login/Register
            </button>
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-8 py-12 max-w-4xl mx-auto flex-grow">
        <h1 className="text-4xl font-bold mb-6">All About Yoga</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">What is Yoga?</h2>
          <p className="text-gray-700 leading-relaxed">
            Yoga is an ancient Indian practice that combines physical postures (asanas), breathing techniques (pranayama), meditation, and ethical principles 
            aimed at improving physical, mental, and spiritual well-being. It promotes harmony between mind and body, helping practitioners achieve balance and health.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Benefits of Yoga</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Improves flexibility and strength</li>
            <li>Reduces stress and anxiety</li>
            <li>Enhances concentration and mental clarity</li>
            <li>Supports cardiovascular health</li>
            <li>Promotes better breathing and lung capacity</li>
            <li>Boosts immunity and overall vitality</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Popular Types of Yoga</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Hatha Yoga:</strong> Focuses on physical postures and breathing exercises.</li>
            <li><strong>Vinyasa Yoga:</strong> Dynamic flow connecting breath with movement.</li>
            <li><strong>Ashtanga Yoga:</strong> A rigorous style following a set sequence of postures.</li>
            <li><strong>Bikram Yoga:</strong> Practiced in a heated room with specific postures.</li>
            <li><strong>Kundalini Yoga:</strong> Focuses on awakening spiritual energy through breath and meditation.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Yoga & AYUSHEASE</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            AYUSHEASE is dedicated to empowering Yoga startups by providing a streamlined registration process, expert guidance, and compliance assurance 
            tailored specifically to the Yoga sector. We help startups thrive by connecting them with resources, funding schemes, and a vibrant community.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Register Your Yoga Startup
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-between items-center px-8 py-6 border-t text-sm text-gray-600">
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="flex gap-4">
          <a href="#">🐦</a>
          <a href="#">📘</a>
          <a href="#">📸</a>
        </div>
      </footer>
    </div>
  );
}
