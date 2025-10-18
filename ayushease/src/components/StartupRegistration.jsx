import React, { useState } from "react";
import { Building2, Mail, Phone, User, Lock } from "lucide-react";

export default function StartupRegistration() {
  const [formData, setFormData] = useState({
    founderName: "",
    startupName: "",
    email: "",
    phone: "",
    ayushSystem: "",
  });

  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRegistered(true);
  };

  // Mock DigiLocker Connect
  const handleDigiLockerConnect = () => {
    alert("Redirecting to DigiLocker for verification...");
    // In real implementation, you'd redirect to DigiLocker API here.
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white px-6 py-12">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8 border border-green-100">
        <h1 className="text-3xl font-extrabold text-green-700 mb-2 text-center">
          AYUSH Startup Registration
        </h1>
        <p className="text-gray-600 text-center mb-8 text-sm">
          Register your startup seamlessly through DigiLocker verification.
        </p>

        {!isRegistered ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Founder Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Founder Name
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3">
                <User className="text-green-600" size={18} />
                <input
                  type="text"
                  name="founderName"
                  placeholder="Enter your full name"
                  value={formData.founderName}
                  onChange={handleChange}
                  required
                  className="w-full p-2 outline-none"
                />
              </div>
            </div>

            {/* Startup Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Startup Name
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3">
                <Building2 className="text-green-600" size={18} />
                <input
                  type="text"
                  name="startupName"
                  placeholder="Enter your startup name"
                  value={formData.startupName}
                  onChange={handleChange}
                  required
                  className="w-full p-2 outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3">
                <Mail className="text-green-600" size={18} />
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 outline-none"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3">
                <Phone className="text-green-600" size={18} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-2 outline-none"
                />
              </div>
            </div>

            {/* AYUSH Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                AYUSH Category
              </label>
              <select
                name="ayushSystem"
                value={formData.ayushSystem}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400"
              >
                <option value="">Select AYUSH System</option>
                <option value="Ayurveda">Ayurveda</option>
                <option value="Yoga">Yoga</option>
                <option value="Unani">Unani</option>
                <option value="Siddha">Siddha</option>
                <option value="Homeopathy">Homeopathy</option>
              </select>
            </div>

            {/* DigiLocker Connect */}
            <button
              type="button"
              onClick={handleDigiLockerConnect}
              className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow transition-all"
            >
              <Lock size={18} />
              Connect with DigiLocker
            </button>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow transition-all"
            >
              Complete Registration
            </button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-green-700 font-semibold text-xl">
              ✅ Registration Successful!
            </h2>
            <p className="text-gray-600">
              Your startup details have been submitted. DigiLocker verification pending.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

