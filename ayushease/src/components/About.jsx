import React from "react";

export default function About() {
  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b">
        <div className="text-xl font-bold">AYUSHEASE</div>
        <nav className="flex gap-6 items-center">
          <a href="/" className="hover:text-green-600">
            Home
          </a>
          <a href="#" className="hover:text-green-600 font-semibold">
            About
          </a>
          <a href="#" className="hover:text-green-600">
            Services
          </a>
          <a href="#" className="hover:text-green-600">
            Contact
          </a>
          <a href="/login">
            <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">
              Login/Register
            </button>
          </a>
        </nav>
      </header>

      {/* About Content */}
      <main className="flex-grow px-8 py-12 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-6">About AYUSHEASE</h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          AYUSHEASE is a dedicated platform designed to empower AYUSH startups
          by providing seamless registration, tracking, and support services.
          Our mission is to simplify the complexities involved in establishing
          and running a successful AYUSH business by offering expert guidance,
          compliance assurance, and community connections.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          To become the leading hub for AYUSH entrepreneurs, fostering
          innovation and growth in Ayurveda, Yoga, Naturopathy, Unani, Siddha,
          and Homeopathy sectors.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
          <li>
            Streamline the registration process and reduce paperwork for
            startups.
          </li>
          <li>Ensure startups remain compliant with regulations.</li>
          <li>Provide access to resources, funding schemes, and mentorship.</li>
          <li>Build a supportive community of AYUSH entrepreneurs and experts.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          AYUSHEASE combines technology with deep sector knowledge to help
          startups focus on what matters most—delivering health and wellness
          solutions to their communities. Our platform is easy to use and
          backed by a team committed to your success.
        </p>

        <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg mt-12">
          <h3 className="text-xl font-semibold mb-2">Get Started with AYUSHEASE</h3>
          <p>
            Ready to take your AYUSH startup to the next level? Register today
            and join the growing network of innovators transforming traditional
            healthcare.
          </p>
          <a
            href="/"
            className="inline-block mt-4 bg-white text-green-600 font-semibold px-6 py-2 rounded hover:bg-gray-100"
          >
            Get Started
          </a>
        </div>
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
