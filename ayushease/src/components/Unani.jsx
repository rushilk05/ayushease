import React from "react";
import { useNavigate } from "react-router-dom";

export default function UnaniInfo() {
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
          <a href="/" className="hover:text-green-600">
            Home
          </a>
          <a href="/about" className="hover:text-green-600">
            About
          </a>
          <a href="/services" className="hover:text-green-600">
            Services
          </a>
          <a href="/contact" className="hover:text-green-600">
            Contact
          </a>
          <a href="/login">
            <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">
              Login/Register
            </button>
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-8 py-12 max-w-4xl mx-auto flex-grow">
        <h1 className="text-4xl font-bold mb-6">Understanding Unani Medicine</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">What is Unani Medicine?</h2>
          <p className="text-gray-700 leading-relaxed">
            Unani medicine is a traditional system of healing and health maintenance observed in South Asia,
            based on the teachings of ancient Greek physicians like Hippocrates and Galen, later developed by Arab and Persian scholars.
            It focuses on balancing the body's four humors—blood, phlegm, yellow bile, and black bile—to maintain health and treat illness.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Core Principles of Unani</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Four Humors:</strong> Blood (Dam), Phlegm (Balgham), Yellow bile (Safra), Black bile (Sauda).</li>
            <li><strong>Mizaj (Temperament):</strong> Each individual has a unique temperament influencing their health.</li>
            <li><strong>Tadbeer (Regimen):</strong> Lifestyle and dietary adjustments are essential for treatment and prevention.</li>
            <li><strong>Ilaj bil Ghiza (Dietotherapy):</strong> Use of specific diets for curing diseases.</li>
            <li><strong>Ilaj bil Dawa (Pharmacotherapy):</strong> Treatment with herbal medicines and natural substances.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Benefits of Unani Medicine</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Holistic approach to health, focusing on prevention and cure.</li>
            <li>Uses natural remedies with minimal side effects.</li>
            <li>Effective for chronic diseases and lifestyle disorders.</li>
            <li>Emphasizes dietary and lifestyle balance.</li>
            <li>Improves overall well-being and immune function.</li>
          </ul>
        </section>

        {/* YouTube Video Embed */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Watch: Introduction to Unani Medicine</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 md:h-96 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/cJMRDlKCowU"
              title="Unani Medicine Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Unani & AYUSHEASE</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            AYUSHEASE supports Unani startups by simplifying registration, ensuring compliance with regulatory standards,
            and providing expert guidance tailored to this unique healthcare tradition. Join our network to access resources, funding, and a strong community.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Register Your Unani Startup
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
