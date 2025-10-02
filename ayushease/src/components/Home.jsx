import React from "react";
import { ChevronDown } from "lucide-react";
import meditate from "../assets/meditate.png";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b">
        <div className="text-xl font-bold">AYUSHEASE</div>
        <nav className="flex gap-6 items-center">
          <a href="/" className="hover:text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">About</a>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-green-600">
              Services <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition">
              <div className="p-3">
                <h3 className="font-semibold text-sm mb-2">AYUSH Sectors</h3>
                <ul className="text-sm space-y-1">
                  <li>Ayurveda</li>
                  <li>Yoga & Naturopathy</li>
                  <li>Unani</li>
                  <li>Siddha</li>
                  <li>Homeopathy</li>
                </ul>
                <h3 className="font-semibold text-sm mt-3 mb-2">Schemes</h3>
                <ul className="text-sm space-y-1">
                  <li>AYUSH Export Promotion Scheme</li>
                  <li>AYUSH Startup Innovation Fund</li>
                  <li>AYUSH R&D Support Program</li>
                  <li>AYUSH Infrastructure Development Scheme</li>
                  <li>AYUSH Global Outreach Program</li>
                </ul>
              </div>
            </div>
          </div>

          <a href="#" className="hover:text-green-600">Contact</a>
          <a href="/login">
            <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">
              Login/Register
            </button>
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-8 py-12 gap-8">
        <img
          src={meditate} 
          alt="Meditation"
          className="rounded-lg w-full md:w-1/3"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold leading-snug">
            Empowering AYUSH Startups
          </h1>
          <p className="text-gray-600">
            AYUSHEASE is your one-stop platform for seamless registration
            and tracking of your AYUSH startup. We simplify the process,
            ensuring compliance and accelerating your journey to success.
          </p>
          <div className="flex gap-4">
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Get Started
            </button>
            <button className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 py-8">
        <div className="bg-gray-100 p-6 rounded text-center">
          <h2 className="text-2xl font-bold">500+</h2>
          <p>Startups Registered</p>
        </div>
        <div className="bg-gray-100 p-6 rounded text-center">
          <h2 className="text-2xl font-bold">300+</h2>
          <p>Approvals Granted</p>
        </div>
        <div className="bg-gray-100 p-6 rounded text-center">
          <h2 className="text-2xl font-bold">1000+</h2>
          <p>Active Users</p>
        </div>
      </section>

      {/* Why AYUSHEASE */}
      <section className="px-8 py-12">
        <h2 className="text-2xl font-bold mb-4">Why AYUSHEASE?</h2>
        <h3 className="text-xl font-semibold mb-2">Explore the Benefits of AYUSHEASE</h3>
        <p className="text-gray-600 mb-8">
          AYUSHEASE offers a comprehensive suite of features designed to support
          AYUSH startups at every stage of their development. From streamlined
          registration to ongoing tracking and support, we’ve got you covered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 border rounded-lg">
            <h4 className="font-semibold">Simplified Registration</h4>
            <p className="text-sm text-gray-600">
              Our intuitive platform simplifies the registration process, reducing paperwork.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h4 className="font-semibold">Expert Guidance</h4>
            <p className="text-sm text-gray-600">
              Access expert resources to navigate complexities of AYUSH sector.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h4 className="font-semibold">Compliance Assurance</h4>
            <p className="text-sm text-gray-600">
              Ensure regulatory compliance with up-to-date tools.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h4 className="font-semibold">Community Support</h4>
            <p className="text-sm text-gray-600">
              Connect with AYUSH entrepreneurs, mentors, and investors.
            </p>
          </div>
        </div>
      </section>

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
