import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Sample mentors data
const mentors = [
  {
    name: "Dr. Anjali Mehta",
    expertise: "Ayurveda",
    role: "Senior Mentor",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Rohit Sharma",
    expertise: "Yoga & Naturopathy",
    role: "Mentor",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Pooja Desai",
    expertise: "Homeopathy",
    role: "Mentor",
    img: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    name: "Amit Singh",
    expertise: "Unani",
    role: "Senior Mentor",
    img: "https://randomuser.me/api/portraits/men/48.jpg",
  },
];

export default function Mentorship() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredMentors = mentors.filter(
    (mentor) =>
      mentor.name.toLowerCase().includes(search.toLowerCase()) ||
      mentor.expertise.toLowerCase().includes(search.toLowerCase()) ||
      mentor.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-50 px-6 py-12 font-sans text-gray-800">
      {/* Header */}
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-700 mb-4">Mentorship</h1>
        <p className="text-gray-700 text-lg">
          Access experienced mentors in the AYUSH sector to guide you through your startup journey.
        </p>
      </header>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search mentors by name, expertise or role..."
          className="w-full max-w-md p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Mentor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
        {filteredMentors.map((mentor, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
          >
            <img
              src={mentor.img}
              alt={mentor.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold mb-1 text-green-800">{mentor.name}</h3>
            <p className="text-gray-600 text-sm mb-1">{mentor.role}</p>
            <p className="text-gray-500 text-xs mb-4">{mentor.expertise}</p>
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded font-semibold"
              onClick={() => alert(`Requesting mentorship from ${mentor.name}...`)}
            >
              Connect
            </button>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <section className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Looking for Mentorship?</h2>
        <p className="text-gray-700 mb-6">
          Join AYUSHEASE, create your profile, and start connecting with experienced mentors today.
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
