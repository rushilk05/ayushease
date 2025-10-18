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
    route: "/startupRegistration",
  },
  {
    title: "Expert Guidance",
    description:
      "Access expert resources to navigate complexities of AYUSH sector.",
    animation: "https://assets10.lottiefiles.com/packages/lf20_t9gkkhz4.json",
    route: "/expertguidance",
  },
  {
    title: "Compliance Assurance",
    description:
      "Ensure regulatory compliance with up-to-date tools.",
    animation: "https://assets10.lottiefiles.com/packages/lf20_3vbOcw.json",
    route: "/complianceassistant",
  },
  {
    title: "Community Support",
    description:
      "Connect with AYUSH entrepreneurs, mentors, and investors.",
    animation: "https://assets10.lottiefiles.com/packages/lf20_1pxqjqps.json",
    route: "/community",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="font-sans text-gray-800 relative">
      {/* Navbar */}
      <header className="fixed w-full bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <div
            className="text-2xl md:text-3xl font-bold text-green-700 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => navigate("/")}
          >
            AYUSHEASE
          </div>
          <nav className="flex gap-6 items-center">
            {["Home", "About", "Feedback", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`)}
                className="relative text-gray-700 hover:text-green-600 font-medium transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </button>
            ))}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition font-medium">
                Services <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible invisible transition-all duration-300">
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-2 text-gray-600">AYUSH Sectors</h3>
                  <ul className="text-sm space-y-1 cursor-pointer">
                    {[
                      { name: "Ayurveda", route: "/ayurveda" },
                      { name: "Yoga & Naturopathy", route: "/yoga" },
                      { name: "Unani", route: "/unani" },
                      { name: "Siddha", route: "/siddha" },
                      { name: "Homeopathy", route: "/homeopathy" },
                    ].map((sector) => (
                      <li
                        key={sector.name}
                        onClick={() => navigate(sector.route)}
                        className="hover:text-green-600 transition"
                      >
                        {sector.name}
                      </li>
                    ))}
                  </ul>
                  <h3 className="font-semibold text-sm mt-4 mb-2 text-gray-600">Schemes</h3>
                  <ul className="text-sm space-y-1">
                    {[
                      "AYUSH Export Promotion Scheme",
                      "AYUSH Startup Innovation Fund",
                      "AYUSH R&D Support Program",
                      "AYUSH Infrastructure Development Scheme",
                      "AYUSH Global Outreach Program",
                    ].map((scheme) => (
                      <li key={scheme} className="hover:text-green-600 transition cursor-pointer">
                        {scheme}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate("/login")}
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition font-medium shadow-md hover:shadow-lg"
            >
              Login / Register
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-8 py-32 md:py-12 gap-8 relative">
        <div className="relative w-full md:w-1/3">
          <img src={meditate} alt="Meditation" className="rounded-xl shadow-lg" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 rounded-xl"></div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Empowering AYUSH Startups
          </h1>
          <p className="text-gray-600 text-lg md:text-base">
            AYUSHEASE is your one-stop platform for seamless registration and tracking of your
            AYUSH startup. We simplify the process, ensuring compliance and accelerating your
            journey to success.
          </p>
          <div className="flex gap-4 mt-4">
            <button
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition transform hover:scale-105 shadow-md hover:shadow-lg"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>
            <button
              className="border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-100 transition transform hover:scale-105"
              onClick={() => navigate("/about")}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-8 bg-gray-50">
        {[
          { count: "500+", label: "Startups Registered" },
          { count: "300+", label: "Approvals Granted" },
          { count: "1000+", label: "Active Users" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-6 rounded-lg text-center shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-green-700">{stat.count}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Benefits Section */}
      <section className="px-8 py-12 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Why AYUSHEASE?</h2>
        <h3 className="text-xl font-semibold mb-8 text-center text-gray-700">
          Explore the Benefits of AYUSHEASE
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map(({ title, description, animation, route }, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
              onClick={() => route && navigate(route)}
            >
              <Player autoplay loop src={animation} style={{ height: "100px", width: "100px" }} />
              <h4 className="font-semibold text-lg mb-2 text-gray-900">{title}</h4>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-8 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-heading">
          What Our Entrepreneurs Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Rohit Sharma",
              startup: "AyurHealth",
              quote:
                "AYUSHEASE made registering my AYUSH startup seamless. The expert guidance saved me weeks of paperwork!",
              avatar: "https://i.pravatar.cc/150?img=3",
            },
            {
              name: "Meera Patel",
              startup: "YogaFlow",
              quote:
                "Thanks to AYUSHEASE, I could focus on growing my business while they handled compliance and registration.",
              avatar: "https://i.pravatar.cc/150?img=5",
            },
            {
              name: "Amit Joshi",
              startup: "HomeoCare",
              quote:
                "The community support and expert guidance on AYUSHEASE is unmatched. Highly recommended for new startups.",
              avatar: "https://i.pravatar.cc/150?img=8",
            },
          ].map(({ name, startup, quote, avatar }, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={avatar}
                  alt={name}
                  className="w-14 h-14 rounded-full border-2 border-green-600"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{name}</h4>
                  <p className="text-green-600 text-sm">{startup}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones Section */}
      <section className="px-8 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-heading">
          Our Milestones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: "🚀", number: "500+", label: "Startups Registered" },
            { icon: "✅", number: "300+", label: "Approvals Granted" },
            { icon: "🌟", number: "1000+", label: "Active Users" },
            { icon: "🤝", number: "50+", label: "Mentor Partnerships" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">{item.number}</h3>
              <p className="text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links & Resources Section */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 font-heading">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-700">
              {[
                "AYUSH Startup Schemes",
                "Events & Workshops",
                "What's New",
                "Archive",
                "Related Links",
                "Notifications",
              ].map((link, i) => (
                <li key={i} className="hover:text-green-600 cursor-pointer transition">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Documents */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 font-heading">
              Resources & Documents
            </h3>
            <ul className="space-y-3 text-gray-700">
              {[
                "Startup Registration Guidelines",
                "Compliance Checklists",
                "Scheme Application Forms",
                "Training & Workshop Materials",
                "Policy Documents",
                "FAQs",
              ].map((resource, i) => (
                <li key={i} className="hover:text-green-600 cursor-pointer transition">
                  {resource}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 bg-green-600 text-white w-14 h-14 rounded-full flex justify-center items-center shadow-lg hover:bg-green-700 transition cursor-pointer">
        💬
      </div>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-between items-center px-8 py-6 border-t text-sm text-gray-600 bg-gray-100">
        <div className="flex gap-6 mb-4 md:mb-0">
          {["About Us", "Contact", "Terms of Service", "Privacy Policy"].map((link) => (
            <a key={link} href="#" className="hover:text-green-600 hover:underline transition">
              {link}
            </a>
          ))}
        </div>
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-green-600 transition">🐦</a>
          <a href="#" className="hover:text-green-600 transition">📘</a>
          <a href="#" className="hover:text-green-600 transition">📸</a>
        </div>
      </footer>
    </div>
  );
}

