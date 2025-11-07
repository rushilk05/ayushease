import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errorMsg, setErrorMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setIsLoading(true)

    if (!formData.email || !formData.password) {
      setErrorMsg('Email and password are required')
      setIsLoading(false)
      return
    }

    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', {
        email: formData.email,
        password: formData.password
      })

      if (response.status === 200) {
        // Store token in localStorage
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        navigate('/dashboard')
      }
    } catch (error) {
      setErrorMsg(error.response?.data?.error || 'Login failed. Please check your credentials.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-white flex items-center justify-center p-4"
      style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative w-full max-w-md">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              AYUSHEASE
            </h1>
          </div>
          <p className="text-emerald-700 text-sm">Traditional Medicine, Modern Solutions</p>
        </header>

        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-green-500 p-6 text-white text-center">
            <h2 className="text-2xl font-bold">Welcome Back</h2>
            <p className="text-emerald-100 mt-1">Please enter your credentials to access your account</p>
          </div>

          {/* Card Body */}
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              {/* Email/Mobile Field */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email or Mobile
                </label>
                <div className="relative">
                  <input 
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email or mobile"
                    className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    required
                  />
                  <div className="absolute right-3 top-3 text-emerald-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    required
                  />
                  <div className="absolute right-3 top-3 text-emerald-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {errorMsg && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                  {errorMsg}
                </div>
              )}

              {/* Forgot Password */}
              <div className="text-right mb-6">
                <Link 
                  to="/forgot-password" 
                  className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors duration-300"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-500 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 hover:from-emerald-700 hover:to-green-600 mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>

              {/* Register Link */}
              <div className="text-center">
                <p className="text-gray-600 text-sm">
                  Don't have an account?{' '}
                  <Link 
                    to="/register" 
                    className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-300"
                  >
                    Create Account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            © 2024 AYUSHEASE. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/privacy" className="text-gray-500 hover:text-emerald-600 text-sm transition-colors">Privacy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-emerald-600 text-sm transition-colors">Terms</Link>
            <Link to="/contact" className="text-gray-500 hover:text-emerald-600 text-sm transition-colors">Contact</Link>
          </div>
        </footer>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

export default Login
