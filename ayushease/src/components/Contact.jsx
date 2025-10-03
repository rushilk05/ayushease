import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("Thank you for reaching out! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b">
        <div className="text-xl font-bold">AYUSHEASE</div>
        <nav className="flex gap-6 items-center">
          <a href="/" className="hover:text-green-600">
            Home
          </a>
          <a href="#" className="hover:text-green-600">
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

      {/* Contact Form Section */}
      <main className="flex-grow px-8 py-12 max-w-3xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Have questions or need support? Fill out the form below and we'll
          respond as soon as possible.
        </p>

        {submitStatus && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
            {submitStatus}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <label className="flex flex-col text-gray-700 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </label>

          <label className="flex flex-col text-gray-700 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </label>

          <label className="flex flex-col text-gray-700 font-semibold">
            Message
            <textarea
              name="message"
              rows="6"
              className="mt-2 p-3 border border-gray-300 rounded resize-y focus:outline-none focus:ring-2 focus:ring-green-600"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-green-600 text-white py-3 rounded font-semibold transition-colors ${
              isSubmitting ? "opacity-60 cursor-not-allowed" : "hover:bg-green-700"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="mt-12 text-gray-600">
          <h2 className="font-semibold text-lg mb-2">Contact Information</h2>
          <p>Email: support@ayushease.in</p>
          <p>Phone: +91-9876543210</p>
          <p>Address: 123 Wellness Street, Ayurveda Nagar, India</p>
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
