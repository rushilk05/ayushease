import React from "react";
import { useNavigate } from "react-router-dom";

export default function SiddhaInfo() {
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
        <h1 className="text-4xl font-bold mb-6">All About Siddha</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">What is Siddha Medicine?</h2>
          <p className="text-gray-700 leading-relaxed">
            Siddha is one of the oldest systems of medicine originating from South India. 
            Rooted in Tamil culture, it emphasizes holistic healing through herbs, minerals, 
            diet, lifestyle practices, and spiritual discipline. Siddha medicine aims to 
            maintain balance between the body’s three humors—<em>Vatham</em>, <em>Pitham</em>, and <em>Kapham</em>—
            to promote long-term health and well-being.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Benefits of Siddha</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Effective in treating chronic illnesses</li>
            <li>Uses natural herbs and minerals for holistic healing</li>
            <li>Focuses on prevention and lifestyle management</li>
            <li>Supports detoxification and rejuvenation</li>
            <li>Balances mind, body, and spirit</li>
            <li>Cost-effective and accessible healthcare option</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Key Practices in Siddha</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Herbal Medicine:</strong> Extensive use of plant-based remedies.</li>
            <li><strong>Mineral Medicine:</strong> Incorporates purified minerals and metals.</li>
            <li><strong>Diet & Lifestyle:</strong> Prescribes food and daily regimens to maintain balance.</li>
            <li><strong>Yoga & Meditation:</strong> Supports spiritual and mental well-being.</li>
            <li><strong>Varmam Therapy:</strong> Healing through pressure points and energy channels.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Siddha & AYUSHEASE</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            AYUSHEASE supports Siddha-based startups by simplifying the registration process, 
            ensuring compliance with traditional medicine standards, and providing expert guidance. 
            We connect Siddha entrepreneurs with government schemes, funding opportunities, and a 
            thriving AYUSH community to help them scale their ventures effectively.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Register Your Siddha Startup
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
