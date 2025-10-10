import React, { useState } from "react";
import { UserCheck, BookOpen, Heart, Leaf, ChevronDown, ChevronUp } from "lucide-react";

const guidanceData = [
  {
    icon: <BookOpen size={28} className="text-green-600" />,
    title: "Holistic Approach",
    content:
      "Understand the balance between mind, body, and spirit as taught by AYUSH masters. This includes therapies that address physical, mental, and emotional well-being holistically.",
  },
  {
    icon: <Leaf size={28} className="text-green-600" />,
    title: "Natural Remedies",
    content:
      "Learn about herbal formulations and natural treatments recommended by AYUSH experts, focusing on plant-based medicines that promote health without side effects.",
  },
  {
    icon: <Heart size={28} className="text-green-600" />,
    title: "Lifestyle Guidance",
    content:
      "Adopt healthy lifestyle practices including diet, exercise, and meditation techniques that have been refined over centuries to maintain balance and prevent illness.",
  },
  {
    icon: <UserCheck size={28} className="text-green-600" />,
    title: "Personalized Care",
    content:
      "Receive personalized recommendations based on your body constitution (Prakriti) and health goals, ensuring treatments are tailored uniquely to you.",
  },
];

export default function ExpertGuidance() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-6 py-12 flex flex-col items-center">
      <header className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-700 mb-4">Expert Guidance on AYUSH</h1>
        <p className="text-gray-700 text-lg">
          Dive deep into the wisdom of AYUSH masters and unlock practical, personalized guidance to
          empower your health journey.
        </p>
      </header>

      <section className="w-full max-w-4xl space-y-6">
        {guidanceData.map(({ icon, title, content }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer select-none"
            onClick={() => toggleIndex(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleIndex(idx);
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div>{icon}</div>
                <h2 className="text-xl font-semibold text-green-800">{title}</h2>
              </div>
              <div>
                {activeIndex === idx ? (
                  <ChevronUp size={24} className="text-green-600" />
                ) : (
                  <ChevronDown size={24} className="text-green-600" />
                )}
              </div>
            </div>

            <div
              className={`mt-4 text-gray-700 text-sm transition-all duration-300 ease-in-out ${
                activeIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {content}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
