import React, { useState } from "react";
import { Building2, Mail, Phone, User, Lock, Upload, FileText, CheckCircle, ArrowLeft, Eye, EyeOff, Calendar, MapPin, Users, Target } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function StartupRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    founderName: "",
    startupName: "",
    email: "",
    phone: "",
    ayushSystem: "",
    registrationNumber: "",
    establishmentDate: "",
    address: "",
    teamSize: "",
    businessModel: "",
    description: "",
    password: "",
    confirmPassword: ""
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [uploadedDocs, setUploadedDocs] = useState([]);
  const [verificationProgress, setVerificationProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const businessModels = [
    "Product Manufacturing",
    "Service Provider",
    "Clinic/Hospital",
    "Wellness Center",
    "E-commerce",
    "Research & Development",
    "Education & Training",
    "Consultation Services"
  ];

  const teamSizes = [
    "1-5 employees",
    "6-15 employees",
    "16-50 employees",
    "51-200 employees",
    "200+ employees"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newDocs = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      type: file.type,
      size: file.size,
      file: file
    }));
    setUploadedDocs(prev => [...prev, ...newDocs]);
  };

  const removeDocument = (id) => {
    setUploadedDocs(prev => prev.filter(doc => doc.id !== id));
  };

  const handleDigiLockerConnect = () => {
    // Simulate DigiLocker verification process
    setVerificationProgress(30);
    setTimeout(() => setVerificationProgress(60), 1000);
    setTimeout(() => setVerificationProgress(100), 2000);
    setTimeout(() => {
      alert("DigiLocker verification completed successfully!");
    }, 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setErrorMsg("");
      setIsLoading(true);

      // Validate passwords match
      if (formData.password !== formData.confirmPassword) {
        setErrorMsg("Passwords do not match");
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.post('http://localhost:5001/api/startup/register', {
          founderName: formData.founderName,
          startupName: formData.startupName,
          email: formData.email,
          phone: formData.phone,
          ayushSystem: formData.ayushSystem,
          registrationNumber: formData.registrationNumber,
          establishmentDate: formData.establishmentDate,
          address: formData.address,
          teamSize: formData.teamSize,
          businessModel: formData.businessModel,
          description: formData.description,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          digiLockerVerified: verificationProgress === 100
        });

        if (response.status === 201) {
          // Store token in localStorage
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('startup', JSON.stringify(response.data.startup));
          setIsRegistered(true);
        }
      } catch (error) {
        setErrorMsg(error.response?.data?.error || 'Registration failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const ProgressBar = ({ current, total }) => (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
      <div 
        className="bg-green-600 h-2 rounded-full transition-all duration-500"
        style={{ width: `${(current / total) * 100}%` }}
      ></div>
    </div>
  );

  const StepIndicator = ({ current, total }) => (
    <div className="flex justify-between items-center mb-8">
      {[1, 2, 3].map(step => (
        <div key={step} className="flex flex-col items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
            step === current 
              ? 'bg-green-600 border-green-600 text-white' 
              : step < current 
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 text-gray-500'
          }`}>
            {step < current ? <CheckCircle size={20} /> : step}
          </div>
          <span className="text-xs mt-2 text-gray-600">
            {step === 1 ? 'Basic Info' : step === 2 ? 'Business Details' : 'Documents'}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            AYUSH Startup Registration
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join India's premier AYUSH startup ecosystem with seamless registration and verification
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8">
            {!isRegistered ? (
              <>
                <ProgressBar current={currentStep} total={3} />
                <StepIndicator current={currentStep} total={3} />

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Basic Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <User className="text-green-600" />
                        Founder Information
                      </h2>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Founder Name *
                          </label>
                          <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500">
                            <User className="text-green-600" size={18} />
                            <input
                              type="text"
                              name="founderName"
                              placeholder="Enter your full name"
                              value={formData.founderName}
                              onChange={handleChange}
                              required
                              className="w-full p-3 outline-none bg-transparent"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500">
                            <Mail className="text-green-600" size={18} />
                            <input
                              type="email"
                              name="email"
                              placeholder="you@example.com"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full p-3 outline-none bg-transparent"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500">
                            <Phone className="text-green-600" size={18} />
                            <input
                              type="tel"
                              name="phone"
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="w-full p-3 outline-none bg-transparent"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Create Password *
                          </label>
                          <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500">
                            <Lock className="text-green-600" size={18} />
                            <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              placeholder="Create strong password"
                              value={formData.password}
                              onChange={handleChange}
                              required
                              className="w-full p-3 outline-none bg-transparent"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Confirm Password *
                          </label>
                          <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500">
                            <Lock className="text-green-600" size={18} />
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              name="confirmPassword"
                              placeholder="Confirm your password"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              required
                              className="w-full p-3 outline-none bg-transparent"
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end pt-4">
                        <button
                          type="button"
                          onClick={nextStep}
                          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all flex items-center gap-2"
                        >
                          Next Step
                          <ArrowLeft className="rotate-180" size={18} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Business Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Building2 className="text-green-600" />
                        Business Information
                      </h2>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Startup Name *
                          </label>
                          <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500">
                            <Building2 className="text-green-600" size={18} />
                            <input
                              type="text"
                              name="startupName"
                              placeholder="Enter your startup name"
                              value={formData.startupName}
                              onChange={handleChange}
                              required
                              className="w-full p-3 outline-none bg-transparent"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            AYUSH System *
                          </label>
                          <select
                            name="ayushSystem"
                            value={formData.ayushSystem}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          >
                            <option value="">Select AYUSH System</option>
                            <option value="Ayurveda">Ayurveda</option>
                            <option value="Yoga">Yoga & Naturopathy</option>
                            <option value="Unani">Unani</option>
                            <option value="Siddha">Siddha</option>
                            <option value="Homeopathy">Homeopathy</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Registration Number *
                          </label>
                          <input
                            type="text"
                            name="registrationNumber"
                            placeholder="Company registration number"
                            value={formData.registrationNumber}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Establishment Date *
                          </label>
                          <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500">
                            <Calendar className="text-green-600" size={18} />
                            <input
                              type="date"
                              name="establishmentDate"
                              value={formData.establishmentDate}
                              onChange={handleChange}
                              required
                              className="w-full p-3 outline-none bg-transparent"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Team Size *
                          </label>
                          <select
                            name="teamSize"
                            value={formData.teamSize}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          >
                            <option value="">Select team size</option>
                            {teamSizes.map(size => (
                              <option key={size} value={size}>{size}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Business Model *
                          </label>
                          <select
                            name="businessModel"
                            value={formData.businessModel}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          >
                            <option value="">Select business model</option>
                            {businessModels.map(model => (
                              <option key={model} value={model}>{model}</option>
                            ))}
                          </select>
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Business Address *
                          </label>
                          <div className="flex items-start border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500">
                            <MapPin className="text-green-600 mt-3" size={18} />
                            <textarea
                              name="address"
                              placeholder="Enter complete business address"
                              value={formData.address}
                              onChange={handleChange}
                              required
                              rows="3"
                              className="w-full p-3 outline-none bg-transparent resize-none"
                            />
                          </div>
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Business Description *
                          </label>
                          <textarea
                            name="description"
                            placeholder="Describe your startup, products, services, and mission..."
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
                          />
                        </div>
                      </div>

                      <div className="flex justify-between pt-4">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="border border-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2"
                        >
                          <ArrowLeft size={18} />
                          Previous
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all flex items-center gap-2"
                        >
                          Next Step
                          <ArrowLeft className="rotate-180" size={18} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Documents & Verification */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <FileText className="text-green-600" />
                        Documents & Verification
                      </h2>

                      {/* DigiLocker Integration */}
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                        <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                          <Lock size={18} />
                          Digital Verification
                        </h3>
                        <p className="text-blue-800 text-sm mb-4">
                          Connect with DigiLocker for instant verification of your business documents and identity.
                        </p>
                        
                        {verificationProgress > 0 && verificationProgress < 100 && (
                          <div className="mb-4">
                            <div className="flex justify-between text-sm text-blue-800 mb-1">
                              <span>Verifying documents...</span>
                              <span>{verificationProgress}%</span>
                            </div>
                            <div className="w-full bg-blue-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${verificationProgress}%` }}
                              ></div>
                            </div>
                          </div>
                        )}

                        <button
                          type="button"
                          onClick={handleDigiLockerConnect}
                          disabled={verificationProgress > 0}
                          className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all ${
                            verificationProgress > 0
                              ? 'bg-blue-400 cursor-not-allowed'
                              : 'bg-blue-600 hover:bg-blue-700 shadow'
                          } text-white`}
                        >
                          <Lock size={18} />
                          {verificationProgress === 100 ? 'Verified with DigiLocker' : 
                           verificationProgress > 0 ? 'Verifying...' : 'Connect with DigiLocker'}
                        </button>
                      </div>

                      {/* Document Upload */}
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-green-400 transition-colors">
                        <Upload className="mx-auto text-gray-400 mb-3" size={32} />
                        <h4 className="font-semibold text-gray-700 mb-2">Upload Supporting Documents</h4>
                        <p className="text-gray-500 text-sm mb-4">
                          Upload registration certificate, business plan, and other relevant documents
                        </p>
                        <input
                          type="file"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        />
                        <label
                          htmlFor="file-upload"
                          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg cursor-pointer transition-all"
                        >
                          Choose Files
                        </label>
                      </div>

                      {/* Uploaded Documents List */}
                      {uploadedDocs.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-700">Uploaded Documents</h4>
                          {uploadedDocs.map(doc => (
                            <div key={doc.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                              <div className="flex items-center gap-3">
                                <FileText className="text-green-600" size={18} />
                                <div>
                                  <p className="font-medium text-sm">{doc.name}</p>
                                  <p className="text-xs text-gray-500">{formatFileSize(doc.size)}</p>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeDocument(doc.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      )}

                      {errorMsg && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm mb-4">
                          {errorMsg}
                        </div>
                      )}

                      <div className="flex justify-between pt-4">
                        <button
                          type="button"
                          onClick={prevStep}
                          disabled={isLoading}
                          className="border border-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <ArrowLeft size={18} />
                          Previous
                        </button>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isLoading ? 'Registering...' : 'Complete Registration'}
                          <CheckCircle size={18} />
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </>
            ) : (
              // Success Screen
              <div className="text-center space-y-6 py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Registration Successful!
                </h2>
                <p className="text-gray-600 text-lg max-w-md mx-auto">
                  Your AYUSH startup has been registered successfully. Our team will review your application and contact you within 2-3 business days.
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-md mx-auto">
                  <h4 className="font-semibold text-green-800 mb-3">What's Next?</h4>
                  <ul className="text-sm text-green-700 space-y-2 text-left">
                    <li>• Document verification review</li>
                    <li>• Onboarding call with our team</li>
                    <li>• Access to AYUSH startup ecosystem</li>
                    <li>• Eligibility for government schemes</li>
                  </ul>
                </div>

                <div className="flex gap-4 justify-center pt-4">
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
                  >
                    Go to Dashboard
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-all"
                  >
                    Print Application
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <Users className="mx-auto text-green-600 mb-3" size={24} />
            <h3 className="font-semibold text-gray-900 mb-2">500+ Startups</h3>
            <p className="text-gray-600 text-sm">Registered through our platform</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <Target className="mx-auto text-green-600 mb-3" size={24} />
            <h3 className="font-semibold text-gray-900 mb-2">24-48 Hours</h3>
            <p className="text-gray-600 text-sm">Average verification time</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <CheckCircle className="mx-auto text-green-600 mb-3" size={24} />
            <h3 className="font-semibold text-gray-900 mb-2">100% Secure</h3>
            <p className="text-gray-600 text-sm">DigiLocker verified process</p>
          </div>
        </div>
      </div>
    </div>
  );
}
