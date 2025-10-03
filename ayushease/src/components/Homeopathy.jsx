import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomeopathyInfo() {
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
        <h1 className="text-4xl font-bold mb-6">All About Homeopathy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">What is Homeopathy?</h2>
          <p className="text-gray-700 leading-relaxed">
            Homeopathy is a system of alternative medicine developed in the late 18th century 
            by Dr. Samuel Hahnemann. It is based on the principle of 
            <em>“like cures like”</em>, where substances that cause symptoms in a healthy person 
            are used in highly diluted forms to treat similar symptoms in an unwell person. 
            Homeopathy emphasizes individualized treatment, aiming to stimulate the body’s natural healing ability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Benefits of Homeopathy</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Safe, gentle, and non-toxic remedies</li>
            <li>Effective for chronic and recurring conditions</li>
            <li>Focuses on treating the root cause, not just symptoms</li>
            <li>Personalized medicine tailored to each individual</li>
            <li>Minimal side effects compared to conventional drugs</li>
            <li>Can complement other medical treatments</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Core Principles of Homeopathy</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Law of Similars:</strong> Treating “like with like.”</li>
            <li><strong>Minimal Dose:</strong> Remedies are highly diluted for safety and effectiveness.</li>
            <li><strong>Individualization:</strong> Each patient is treated uniquely based on their overall health.</li>
            <li><strong>Holistic Healing:</strong> Addresses physical, emotional, and mental well-being together.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Homeopathy & AYUSHEASE</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            AYUSHEASE empowers Homeopathy startups by streamlining the registration process, 
            ensuring compliance with regulatory standards, and offering expert support. 
            We connect innovators with government schemes, research networks, and a community 
            of practitioners to foster growth in the Homeopathy sector.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Register Your Homeopathy Startup
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
