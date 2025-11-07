// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import About from "./components/About";
import Ayurveda from "./components/Ayurveda";
import Yoga from "./components/Yoga";
import Unani from "./components/Unani";
import Siddha from "./components/Siddha";
import Homeopathy from "./components/Homeopathy";
import Feedback from "./components/Feedback";
import Expertguidance from "./components/Expertguidance";
import StartupRegistration from "./components/StartupRegistration";
import Complianceassistant from "./components/Complianceassistant";
import Community from "./components/Community";
import Networking from "./components/Networking";
import Mentorship from "./components/Mentorship";
import Scheme from "./components/Scheme";
import Virtualclinic from "./components/Virtualclinic";
import Admin from "./components/Admin";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />   {/* Homepage */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/ayurveda" element={<Ayurveda/>} />
      <Route path="/yoga" element={<Yoga/>} />
      <Route path="/unani" element={<Unani/>} />
      <Route path="/siddha" element={<Siddha/>} />
      <Route path="/homeopathy" element={<Homeopathy/>} />
      <Route path="/feedback" element={<Feedback/>} />
      <Route path="/expertguidance" element={<Expertguidance/>} />
      <Route path="/complianceassistant" element={<Complianceassistant/>} />
      <Route path="/community" element={<Community/>} />
      <Route path="/startupregistration" element={<StartupRegistration/>} />

      <Route path="/networking" element={<Networking/>} />
      <Route path="/mentorship" element={<Mentorship/>} />
      <Route path="/scheme" element={<Scheme/>} />
      <Route path="/virtualclinic" element={<Virtualclinic/>} />
      <Route path="/admin" element={<Admin/>} />





    </Routes>
  );
}

export default App;
