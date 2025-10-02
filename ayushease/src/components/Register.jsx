import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}>

      <header className="flex items-center justify-between border-b border-[#f0f5f0] px-10 py-3">
        <h2 className="text-lg font-bold text-[#111811]">AYUSHEASE</h2>
        <Link to="/" className="px-4 py-2 bg-[#f0f5f0] rounded-lg font-bold text-sm">Login</Link>
      </header>

      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col w-[512px] py-5">
          <h2 className="text-[28px] font-bold text-center pb-3 pt-5">Create Your Account</h2>
          <p className="text-base text-center pb-3">Join our community of health enthusiasts.</p>

          <div className="px-4 py-3">
            <input placeholder="Full Name" className="w-full bg-[#f0f5f0] rounded-lg h-14 p-3" />
          </div>

          <div className="px-4 py-3">
            <input placeholder="Email ID" className="w-full bg-[#f0f5f0] rounded-lg h-14 p-3" />
          </div>

          <div className="px-4 py-3">
            <input placeholder="Mobile Number" className="w-full bg-[#f0f5f0] rounded-lg h-14 p-3" />
          </div>

          <div className="px-4 py-3">
            <select className="w-full bg-[#f0f5f0] rounded-lg h-14 p-3">
              <option value="">Select AYUSH System</option>
              <option value="ayurveda">Ayurveda</option>
              <option value="yoga">Yoga</option>
              <option value="unani">Unani</option>
              <option value="siddha">Siddha</option>
              <option value="soaw-rigpa">Sowa-Rigpa</option>
              <option value="homeopathy">Homeopathy</option>
            </select>
          </div>

          <div className="px-4 py-3">
            <input type="password" placeholder="Password" className="w-full bg-[#f0f5f0] rounded-lg h-14 p-3" />
          </div>

          <div className="px-4 py-3">
            <input type="password" placeholder="Confirm Password" className="w-full bg-[#f0f5f0] rounded-lg h-14 p-3" />
          </div>

          <div className="px-4 py-3">
            <label className="flex gap-2 items-center">
              <input type="checkbox" className="h-5 w-5" />
              <span>I agree to Terms of Service & Privacy Policy</span>
            </label>
          </div>

          <div className="px-4 py-3">
            <button className="w-full bg-[#0df20d] h-10 rounded-lg font-bold text-sm">Register</button>
          </div>

          <p className="text-center text-sm underline text-[#608a60]">
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
