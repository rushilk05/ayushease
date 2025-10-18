import React from "react";
import { ShieldCheck, FileText, Link2, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const complianceSteps = [
  {
    icon: <FileText size={28} className="text-green-600" />,
    title: "Document Checklist",
    description:
      "Prepare and organize all necessary documents for AYUSH registration and regulatory compliance.",
  },
  {
    icon: <ShieldCheck size={28} className="text-green-600" />,
    title: "Regulatory Guidelines",
    description:
      "Access official guidelines to ensure your startup meets AYUSH norms and standards.",
  },
  {
    icon: <Link2 size={28} className="text-green-600" />,
    title: "Digital Tools",
    description:
      "Use our platform tools to verify compliance status and track updates online efficiently.",
  },
  {
    icon: <AlertTriangle size={28} className="text-green-600" />,
    title: "Risk & Alerts",
    description:
      "Receive alerts about non-compliance risks or missing documents before submission.",
  },
];

export default function ComplianceAssistance() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 px-6 py-12 font-sans text-gray-800">
      {/* Header */}
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-700 mb-4">
          Compliance Assistance
        </h1>
        <p className="text-gray-700 text-lg">
          Navigate regulatory requirements for AYUSH startups with ease. Our platform helps you
          stay compliant and avoid unnecessary delays.
        </p>
      </header>

      {/* Steps / Benefits Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
        {complianceSteps.map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
          >
            <div className="mb-4 flex justify-center">{icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-green-800">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        ))}
      </section>

      {/* Compliance Checklist Example */}
      <section className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md mb-12">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Compliance Checklist</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Business Registration Certificate</li>
          <li>Founder & Team KYC Documents</li>
          <li>Startup Innovation Fund Eligibility (if applicable)</li>
          <li>AYUSH Sector-specific Licenses</li>
          <li>Documentation for Research & Development Activities</li>
        </ul>
      </section>

      {/* Call-to-Action */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to Verify Compliance?
        </h2>
        <button
          onClick={() => navigate("/register")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow transition-all"
        >
          Start Registration
        </button>
      </section>
    </div>
  );
}
