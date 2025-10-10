import React, { useState } from "react";

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just an alert — you can replace this with backend integration later
    alert(`Thank you for your valuable feedback, ${formData.name}! Your input helps AYUSHEASE grow.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto px-8 py-12 font-sans text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-green-600">AYUSHEASE Feedback</h1>
      <p className="mb-8 text-gray-600">
        We at AYUSHEASE value your insights and suggestions. Please share your feedback to help us serve you better.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <label className="flex flex-col">
          <span className="font-semibold mb-1">Full Name</span>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </label>

        <label className="flex flex-col">
          <span className="font-semibold mb-1">Email Address</span>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </label>

        <label className="flex flex-col">
          <span className="font-semibold mb-1">Your Feedback</span>
          <textarea
            name="message"
            rows="6"
            required
            placeholder="Let us know your thoughts, suggestions or any issues..."
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-400 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </label>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 font-semibold"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
