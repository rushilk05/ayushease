import React from "react";

export default function AyurvedaService() {
  return (
    <section className="px-8 py-12 max-w-4xl mx-auto w-full bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-green-600 mb-6">Ayurveda Service</h2>
      
      <p className="text-gray-700 mb-6 leading-relaxed">
        Ayurveda is one of the world's oldest holistic healing systems. At AYUSHEASE,
        we support Ayurveda startups with streamlined registration, expert guidance,
        and compliance assurance to help you grow your business sustainably and
        authentically.
      </p>
      
      <ul className="list-disc list-inside text-gray-600 space-y-3 mb-6">
        <li>Guidance on Ayurveda product registration and certifications</li>
        <li>Compliance with national and international Ayurveda standards</li>
        <li>Access to expert mentors and practitioners in the Ayurveda field</li>
        <li>Support with funding schemes specifically designed for Ayurveda startups</li>
      </ul>

      <a
        href="/services/ayurveda"
        className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded hover:bg-green-700 transition"
      >
        Learn More
      </a>
    </section>
  );
}
