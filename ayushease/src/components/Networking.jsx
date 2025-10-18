import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Sample community members for networking
const networkMembers = [
  {
    name: "Dr. Ayesha Sharma",
    role: "AYUSH Mentor",
    sector: "Ayurveda",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ravi Patel",
    role: "Investor",
    sector: "Yoga & Naturopathy",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sneha Kapoor",
    role: "Startup Founder",
    sector: "Homeopathy",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Amit Verma",
    role: "Mentor",
    sector: "Unani",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function Networking() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredMembers = networkMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.role.toLowerCase().includes(search.toLowerCase()) ||
      member.sector.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-50 px-6 py-12 font-sans text-gray-800">
      {/* Header */}
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-700 mb-4">Networking</h1>
        <p className="text-gray-700 text-lg">
          Connect with mentors, investors, and fellow AYUSH startups. Explore opportunities, ask
          questions, and grow your network.
        </p>
      </header>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search mentors, investors or startups..."
          className="w-full max-w-md p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
        {filteredMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold mb-1 text-green-800">{member.name}</h3>
            <p className="text-gray-600 text-sm mb-1">{member.role}</p>
            <p className="text-gray-500 text-xs mb-4">{member.sector}</p>
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded font-semibold"
              onClick={() => alert(`Contacting ${member.name}...`)}
            >
              Connect
            </button>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <section className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Want to Join the Community?</h2>
        <p className="text-gray-700 mb-6">
          Create your profile, participate in discussions, and start connecting with mentors and
          investors today.
        </p>
        <button
          onClick={() => navigate("/register")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow transition-all"
        >
          Get Started
        </button>
      </section>
    </div>
  );
}
