import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, ArrowLeft, Shield, CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [step, setStep] = useState(1) // 1: Contact, 2: Verify, 3: Reset, 4: Success
  const [isLoading, setIsLoading] = useState(false)
  const [recoveryMethod, setRecoveryMethod] = useState('email') // 'email' or 'phone'
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [countdown, setCountdown] = useState(0)

  const handleSendCode = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setStep(2)
      setCountdown(30) // 30 seconds countdown for resend
      
      // Start countdown
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }, 1500)
  }

  const handleVerifyCode = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate verification
    setTimeout(() => {
      setIsLoading(false)
      setStep(3)
    }, 1500)
  }

  const handleResetPassword = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate password reset
    setTimeout(() => {
      setIsLoading(false)
      setStep(4)
    }, 1500)
  }

  const handleResendCode = () => {
    if (countdown > 0) return
    
    setCountdown(30)
    // Simulate resend code
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const passwordRequirements = [
    { text: 'At least 8 characters', met: newPassword.length >= 8 },
    { text: 'One uppercase letter', met: /[A-Z]/.test(newPassword) },
    { text: 'One lowercase letter', met: /[a-z]/.test(newPassword) },
    { text: 'One number', met: /[0-9]/.test(newPassword) },
    { text: 'One special character', met: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword) },
  ]

  const allRequirementsMet = passwordRequirements.every(req => req.met)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-green-100">
        <Link to="/" className="flex items-center gap-2">
          <ArrowLeft size={20} className="text-green-600" />
          <h2 className="text-xl font-bold text-green-700">AYUSHEASE</h2>
        </Link>
        <div className="flex items-center gap-2 text-green-600">
          <Shield size={18} />
          <span className="text-sm font-medium">Secure Password Reset</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-8 px-8">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  step === stepNumber 
                    ? 'bg-green-600 border-green-600 text-white' 
                    : step > stepNumber 
                    ? 'bg-green-500 border-green-500 text-white'
                    : 'border-gray-300 text-gray-500'
                }`}>
                  {step > stepNumber ? <CheckCircle size={16} /> : stepNumber}
                </div>
                <span className="text-xs mt-2 text-gray-600 hidden sm:block">
                  {stepNumber === 1 ? 'Contact' : stepNumber === 2 ? 'Verify' : stepNumber === 3 ? 'Reset' : 'Done'}
                </span>
              </div>
            ))}
            <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-gray-200 -translate-y-4 -z-10">
              <div 
                className="h-0.5 bg-green-600 transition-all duration-500"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step 1: Contact Information */}
          {step === 1 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Reset Your Password</h2>
                <p className="text-gray-600">Choose how you'd like to receive the verification code</p>
              </div>

              {/* Recovery Method Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
                <button
                  onClick={() => setRecoveryMethod('email')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    recoveryMethod === 'email'
                      ? 'bg-white text-green-700 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Mail size={16} className="inline mr-2" />
                  Email
                </button>
                <button
                  onClick={() => setRecoveryMethod('phone')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    recoveryMethod === 'phone'
                      ? 'bg-white text-green-700 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Phone size={16} className="inline mr-2" />
                  Phone
                </button>
              </div>

              <form onSubmit={handleSendCode}>
                <div className="space-y-4">
                  {recoveryMethod === 'email' ? (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                          required
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Enter your phone number"
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                          required
                        />
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Code...
                      </>
                    ) : (
                      <>
                        Send Verification Code
                        <ArrowLeft className="rotate-180" size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start gap-3">
                  <Shield className="text-blue-600 mt-0.5 flex-shrink-0" size={16} />
                  <div>
                    <p className="text-sm text-blue-800 font-medium">Security Tip</p>
                    <p className="text-xs text-blue-700">
                      We'll send a 6-digit verification code to your {recoveryMethod}. Make sure you have access to this {recoveryMethod}.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Verification */}
          {step === 2 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Enter Verification Code</h2>
                <p className="text-gray-600">
                  We sent a 6-digit code to your {recoveryMethod === 'email' ? 'email' : 'phone'}
                </p>
                <p className="text-sm text-green-600 font-medium mt-1">
                  {recoveryMethod === 'email' ? email : phone}
                </p>
              </div>

              <form onSubmit={handleVerifyCode}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Verification Code
                    </label>
                    <input
                      type="text"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      placeholder="Enter 6-digit code"
                      className="w-full text-center text-2xl font-mono tracking-widest py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                      maxLength={6}
                      required
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={handleResendCode}
                      disabled={countdown > 0}
                      className="text-sm text-green-600 hover:text-green-700 disabled:text-gray-400"
                    >
                      {countdown > 0 ? `Resend code in ${countdown}s` : 'Resend verification code'}
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || verificationCode.length !== 6}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      'Verify Code'
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 3: Reset Password */}
          {step === 3 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Create New Password</h2>
                <p className="text-gray-600">Your new password must be different from previous passwords</p>
              </div>

              <form onSubmit={handleResetPassword}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                        className="w-full pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm new password"
                        className="w-full pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  {/* Password Requirements */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-700 mb-3">Password Requirements:</p>
                    <div className="space-y-2">
                      {passwordRequirements.map((req, index) => (
                        <div key={index} className="flex items-center gap-2">
                          {req.met ? (
                            <CheckCircle size={16} className="text-green-500" />
                          ) : (
                            <AlertCircle size={16} className="text-gray-400" />
                          )}
                          <span className={`text-sm ${req.met ? 'text-green-600' : 'text-gray-500'}`}>
                            {req.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || !allRequirementsMet || newPassword !== confirmPassword}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Resetting Password...
                      </>
                    ) : (
                      'Reset Password'
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Password Reset Successful!</h2>
              <p className="text-gray-600 mb-6">
                Your password has been reset successfully. You can now login with your new password.
              </p>

              <div className="space-y-3">
                <Link
                  to="/login"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold shadow-lg transition-all block"
                >
                  Back to Login
                </Link>
                
                <Link
                  to="/"
                  className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-semibold transition-all block"
                >
                  Go to Homepage
                </Link>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-start gap-3">
                  <Shield className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                  <div>
                    <p className="text-sm text-green-800 font-medium">Security Updated</p>
                    <p className="text-xs text-green-700">
                      For security reasons, we've logged you out of all other devices. You'll need to login again.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-green-100 px-6 py-4">
        <div className="text-center text-sm text-gray-600">
          <p>Need help? <Link to="/contact" className="text-green-600 hover:text-green-700 font-medium">Contact Support</Link></p>
        </div>
      </footer>
    </div>
  )
}

export default ForgotPassword
