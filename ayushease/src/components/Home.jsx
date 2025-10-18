import React from "react";
import { ChevronDown } from "lucide-react";
import { Player } from "@lottiefiles/react-lottie-player";
import meditate from "../assets/meditate.png";
import { useNavigate } from "react-router-dom";

const benefits = [
  {
    title: "Simplified Registration",
    description:
      "Our intuitive platform simplifies the registration process, reducing paperwork.",
    animation: "https://assets10.lottiefiles.com/packages/lf20_0yfsb3a1.json",
    route: "/ayushRegistration"
  },
  {
    title: "Expert Guidance",
    description:
      "Access expert resources to navigate complexities of AYUSH sector.",
    animation: "https://assets10.lottiefiles.com/packages/lf20_t9gkkhz4.json",
    route: "/expertguidance"
  },
  {
    title: "Compliance Assurance",
    description:
      "Ensure regulatory compliance with up-to-date tools.",
    animation: "https://assets10.lottiefiles.com/packages/lf20_3vbOcw.json"
  },
  {
    title: "Community Support",
    description:
      "Connect with AYUSH entrepreneurs, mentors, and investors.",
    animation: "https://assets10.lottiefiles.com/packages/lf20_1pxqjqps.json"
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b bg-white shadow-sm">
        <div className="text-xl font-bold text-green-700">AYUSHEASE</div>
        <nav className="flex gap-6 items-center">
          <a href="/" className="hover:text-green-600">Home</a>
          <a href="/About" className="hover:text-green-600">About</a>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-green-600">
              Services <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition">
              <div className="p-3">
                <h3 className="font-semibold text-sm mb-2">AYUSH Sectors</h3>
                <ul className="text-sm space-y-1 cursor-pointer">
                  <li onClick={() => navigate("/ayurveda")}>Ayurveda</li>
                  <li onClick={() => navigate("/yoga")}>Yoga & Naturopathy</li>
                  <li onClick={() => navigate("/unani")}>Unani</li>
                  <li onClick={() => navigate("/siddha")}>Siddha</li>
                  <li onClick={() => navigate("/homeopathy")}>Homeopathy</li>
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

          <a href="/feedback" className="hover:text-green-600">Feedback</a>
          <a href="/contact" className="hover:text-green-600">Contact</a>
          <a href="/login">
            <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">
              Login/Register
            </button>
          </a>
        </nav>
      </header>

      {/* Hero Section with Meditation Image */}
      <section className="flex flex-col md:flex-row items-center px-8 py-12 gap-8">
        <img src={meditate} alt="Meditation" className="rounded-lg w-full md:w-1/3" />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold leading-snug">Empowering AYUSH Startups</h1>
          <p className="text-gray-600">
            AYUSHEASE is your one-stop platform for seamless registration and tracking of your
            AYUSH startup. We simplify the process, ensuring compliance and accelerating your
            journey to success.
          </p>
          <div className="flex gap-4">
            <button
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>
            <button
              className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100"
              onClick={() => navigate("/about")}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 py-8 bg-gray-50">
        <div className="bg-white p-6 rounded text-center shadow">
          <h2 className="text-2xl font-bold text-green-700">500+</h2>
          <p>Startups Registered</p>
        </div>
        <div className="bg-white p-6 rounded text-center shadow">
          <h2 className="text-2xl font-bold text-green-700">300+</h2>
          <p>Approvals Granted</p>
        </div>
        <div className="bg-white p-6 rounded text-center shadow">
          <h2 className="text-2xl font-bold text-green-700">1000+</h2>
          <p>Active Users</p>
        </div>
      </section>

      {/* Why AYUSHEASE with Lottie Animations */}
      <section className="px-8 py-12 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Why AYUSHEASE?</h2>
        <h3 className="text-xl font-semibold mb-8 text-center text-gray-700">
          Explore the Benefits of AYUSHEASE
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map(({ title, description, animation, route }, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
              onClick={() => route && navigate(route)}
            >
              <Player
                autoplay
                loop
                src={animation}
                style={{ height: "100px", width: "100px" }}
              />
              <h4 className="font-semibold text-lg mb-2 text-gray-900">{title}</h4>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-between items-center px-8 py-6 border-t text-sm text-gray-600 bg-gray-100">
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
