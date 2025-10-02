import React from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}>

      <header className="flex items-center border-b border-[#f0f5f0] px-10 py-3">
        <h2 className="text-lg font-bold text-[#111811]">AYUSHEASE</h2>
      </header>

      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col w-[512px] py-5">
          <h2 className="text-[28px] font-bold text-center pb-3 pt-5">Forgot password</h2>
          <p className="text-base text-center pb-3">Enter the email or mobile number associated with your account</p>

          <div className="px-4 py-3">
            <input placeholder="Email or Mobile"
              className="form-input w-full rounded-lg bg-[#f0f5f0] h-14 p-3" />
          </div>

          <div className="px-4 py-3">
            <button className="w-full bg-[#0df20d] h-10 rounded-lg font-bold text-sm">Send Reset Link</button>
          </div>

          <p className="text-center text-sm underline text-[#608a60]">
            <Link to="/">Back to Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
