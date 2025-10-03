import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Login() {
  const navigate=useNavigate()
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}>

      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between border-b border-[#f0f5f0] px-10 py-3">
          <div className="flex items-center gap-4 text-[#111811]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                  fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-lg font-bold">AYUSHEASE</h2>
          </div>
        </header>

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col w-[512px] max-w-[512px] py-5">
            <h2 className="text-[28px] font-bold text-center pb-3 pt-5">Welcome back</h2>
            <p className="text-base text-center pb-3">Please enter your credentials to access your account.</p>

            <div className="px-4 py-3">
              <label className="flex flex-col">
                <p className="font-medium pb-2">Email or Mobile</p>
                <input placeholder="Enter your email or mobile"
                  className="form-input w-full rounded-lg border border-[#dbe6db] h-14 p-3" />
              </label>
            </div>

            <div className="px-4 py-3">
              <label className="flex flex-col">
                <p className="font-medium pb-2">Password</p>
                <input type="password" placeholder="Enter your password"
                  className="form-input w-full rounded-lg border border-[#dbe6db] h-14 p-3" />
              </label>
            </div>

            <Link to="/forgot-password" className="text-[#608a60] text-sm underline text-center block">
              Forgot Password?
            </Link>

            <div className="px-4 py-3">
              <button className="w-full bg-[#0df20d] h-12 rounded-lg font-bold" onClick={()=>
                navigate('/')
              }>Login</button>
            </div>

            <p className="text-center text-sm underline text-[#608a60]">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
