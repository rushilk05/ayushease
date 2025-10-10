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
import AyushRegistration from "./components/AyushRegistration";





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
      <Route path="/ayushRegistration" element={<AyushRegistration/>} />

    </Routes>
  );
}

export default App;
