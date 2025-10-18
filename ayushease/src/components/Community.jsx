import React from "react";
import { Users, MessageCircle, Coffee, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const communityFeatures = [
  {
    icon: <Users size={28} className="text-green-600" />,
    title: "Networking",
    description:
      "Connect with fellow AYUSH entrepreneurs to share experiences, challenges, and solutions.",
    route: "/networking", // <-- link to Networking page
  },
  {
    icon: <MessageCircle size={28} className="text-green-600" />,
    title: "Discussion Forums",
    description:
      "Participate in forums to ask questions, get guidance, and collaborate on ideas.",
  },
  {
    icon: <Coffee size={28} className="text-green-600" />,
    title: "Mentorship",
    description:
      "Get guidance from experienced mentors who have successfully navigated the AYUSH startup ecosystem.",
      route: "/mentorship"
  },
  {
    icon: <Star size={28} className="text-green-600" />,
    title: "Investor Connections",
    description:
      "Find potential investors and funding opportunities tailored to AYUSH startups.",
  },
];

export default function CommunitySupport() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 px-6 py-12 font-sans text-gray-800">
      {/* Header */}
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-700 mb-4">
          Community Support
        </h1>
        <p className="text-gray-700 text-lg">
          Join the AYUSHEASE community to connect with peers, mentors, and investors. Collaborate,
          learn, and grow your AYUSH startup with guidance from experts.
        </p>
      </header>

      {/* Community Features */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
        {communityFeatures.map(({ icon, title, description, route }, idx) => (
          <div
            key={idx}
            className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center ${
              route ? "cursor-pointer" : ""
            }`}
            onClick={() => route && navigate(route)}
          >
            <div className="mb-4 flex justify-center">{icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-green-800">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        ))}
      </section>

      {/* Call-to-Action / Join Community */}
      <section className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Ready to Join the Community?
        </h2>
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
