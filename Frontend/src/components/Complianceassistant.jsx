import React, { useState } from "react";
import { 
  ShieldCheck, 
  FileText, 
  Link2, 
  AlertTriangle, 
  Download, 
  CheckCircle, 
  Clock, 
  Search,
  BookOpen,
  MessageCircle,
  ArrowRight,
  Calendar,
  Users,
  Target,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const complianceSteps = [
  {
    icon: <FileText size={28} className="text-green-600" />,
    title: "Document Checklist",
    description: "Prepare and organize all necessary documents for AYUSH registration and regulatory compliance.",
    features: ["Smart document scanner", "Auto-formatting", "Digital signature support"]
  },
  {
    icon: <ShieldCheck size={28} className="text-green-600" />,
    title: "Regulatory Guidelines",
    description: "Access official guidelines to ensure your startup meets AYUSH norms and standards.",
    features: ["Real-time updates", "State-wise regulations", "Expert interpretations"]
  },
  {
    icon: <Link2 size={28} className="text-green-600" />,
    title: "Digital Tools",
    description: "Use our platform tools to verify compliance status and track updates online efficiently.",
    features: ["Compliance dashboard", "Automated reminders", "Progress tracking"]
  },
  {
    icon: <AlertTriangle size={28} className="text-green-600" />,
    title: "Risk & Alerts",
    description: "Receive alerts about non-compliance risks or missing documents before submission.",
    features: ["Risk assessment", "Early warnings", "Remediation guidance"]
  },
];

const complianceChecklist = [
  {
    category: "Business Registration",
    items: [
      { name: "Business Registration Certificate", mandatory: true, status: "pending" },
      { name: "GST Registration Certificate", mandatory: true, status: "pending" },
      { name: "Udyam Registration", mandatory: false, status: "completed" },
      { name: "Startup India Recognition", mandatory: false, status: "pending" }
    ]
  },
  {
    category: "Founder & Team Documents",
    items: [
      { name: "Founder KYC Documents", mandatory: true, status: "completed" },
      { name: "Team Member Details", mandatory: true, status: "pending" },
      { name: "Professional Qualifications", mandatory: false, status: "pending" }
    ]
  },
  {
    category: "AYUSH Specific Licenses",
    items: [
      { name: "AYUSH Manufacturing License", mandatory: true, status: "pending" },
      { name: "Drug License", mandatory: true, status: "pending" },
      { name: "FSSAI License", mandatory: true, status: "completed" },
      { name: "Clinical Establishment License", mandatory: false, status: "pending" }
    ]
  },
  {
    category: "Quality & Compliance",
    items: [
      { name: "Quality Control Protocols", mandatory: true, status: "pending" },
      { name: "GMP Certification", mandatory: false, status: "pending" },
      { name: "Clinical Trial Data", mandatory: false, status: "pending" }
    ]
  }
];

const regulatoryUpdates = [
  {
    title: "New AYUSH Manufacturing Guidelines",
    date: "2024-01-15",
    urgency: "high",
    description: "Updated manufacturing protocols for herbal products"
  },
  {
    title: "Digital Health Initiatives",
    date: "2024-01-10",
    urgency: "medium",
    description: "New compliance requirements for tele-medicine services"
  },
  {
    title: "Export Certification Process",
    date: "2024-01-05",
    urgency: "low",
    description: "Streamlined process for international exports"
  }
];

export default function ComplianceAssistance() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItems, setExpandedItems] = useState({});
  const [progress, setProgress] = useState(25);

  const toggleItem = (categoryIndex, itemIndex) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleStatusChange = (categoryIndex, itemIndex, newStatus) => {
    // In a real app, this would update the backend
    console.log(`Updating status for item ${itemIndex} in category ${categoryIndex} to ${newStatus}`);
    
    // Calculate new progress (mock calculation)
    const totalItems = complianceChecklist.flatMap(cat => cat.items).length;
    const completedItems = complianceChecklist.flatMap(cat => cat.items).filter(item => 
      item.status === "completed"
    ).length + (newStatus === "completed" ? 1 : -1);
    
    setProgress(Math.round((completedItems / totalItems) * 100));
  };

  const downloadChecklist = () => {
    const checklistText = complianceChecklist.map(category => 
      `${category.category}:\n${category.items.map(item => 
        `- ${item.name} (${item.mandatory ? 'Mandatory' : 'Optional'}) - ${item.status}`
      ).join('\n')}`
    ).join('\n\n');
    
    const blob = new Blob([checklistText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ayush-compliance-checklist.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 px-4 py-8 font-sans text-gray-800">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ShieldCheck size={16} />
            AYUSH Regulatory Compliance
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Compliance Assistance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Navigate AYUSH regulatory requirements with confidence. Our intelligent platform ensures 
            you stay compliant while focusing on your core business.
          </p>
        </header>

        {/* Progress Overview */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Compliance Progress</h2>
              <p className="text-gray-600">Track your compliance journey in real-time</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={downloadChecklist}
                className="flex items-center gap-2 border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-all font-semibold"
              >
                <Download size={18} />
                Export Checklist
              </button>
              <button
                onClick={() => navigate("/expert-consultation")}
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all font-semibold"
              >
                <MessageCircle size={18} />
                Expert Help
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="text-2xl font-bold text-green-700 mb-2">{progress}%</div>
              <div className="text-sm text-green-600">Overall Progress</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <div className="text-2xl font-bold text-blue-700 mb-2">
                {complianceChecklist.flatMap(cat => cat.items).filter(item => item.status === "completed").length}
              </div>
              <div className="text-sm text-blue-600">Completed Items</div>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <div className="text-2xl font-bold text-orange-700 mb-2">
                {complianceChecklist.flatMap(cat => cat.items).filter(item => item.mandatory).length}
              </div>
              <div className="text-sm text-orange-600">Mandatory Requirements</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
              <div className="text-2xl font-bold text-purple-700 mb-2">24/7</div>
              <div className="text-sm text-purple-600">Support Available</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-2">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Compliance Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-green-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {complianceSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
              <ul className="space-y-2">
                {step.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle size={14} className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Compliance Checklist */}
          <div className="lg:col-span-2">
            <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Compliance Checklist</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search requirements..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {complianceChecklist.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div 
                      className="bg-gray-50 p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => setActiveCategory(activeCategory === categoryIndex ? -1 : categoryIndex)}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-900">{category.category}</h3>
                        {activeCategory === categoryIndex ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </div>
                    
                    {activeCategory === categoryIndex && (
                      <div className="p-4 space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className={`w-3 h-3 rounded-full ${
                                item.status === "completed" ? "bg-green-500" : "bg-gray-300"
                              }`}></div>
                              <div>
                                <div className="font-medium text-gray-900">{item.name}</div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <span className={`px-2 py-1 rounded-full text-xs ${
                                    item.mandatory 
                                      ? "bg-red-100 text-red-700" 
                                      : "bg-blue-100 text-blue-700"
                                  }`}>
                                    {item.mandatory ? "Mandatory" : "Optional"}
                                  </span>
                                  <span className={`px-2 py-1 rounded-full text-xs ${
                                    item.status === "completed" 
                                      ? "bg-green-100 text-green-700" 
                                      : "bg-yellow-100 text-yellow-700"
                                  }`}>
                                    {item.status === "completed" ? "Completed" : "Pending"}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => handleStatusChange(categoryIndex, itemIndex, 
                                item.status === "completed" ? "pending" : "completed"
                              )}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                item.status === "completed"
                                  ? "bg-green-100 text-green-700 hover:bg-green-200"
                                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                              }`}
                            >
                              {item.status === "completed" ? "Mark Pending" : "Mark Complete"}
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Regulatory Updates & Resources */}
          <div className="space-y-8">
            {/* Regulatory Updates */}
            <section className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="text-orange-500" size={20} />
                Regulatory Updates
              </h2>
              <div className="space-y-4">
                {regulatoryUpdates.map((update, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{update.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs border ${getUrgencyColor(update.urgency)}`}>
                        {update.urgency}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{update.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar size={12} />
                      {new Date(update.date).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Resources */}
            <section className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="text-blue-500" size={20} />
                Quick Resources
              </h2>
              <div className="space-y-3">
                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all">
                  <div className="font-medium text-gray-900">AYUSH Guidelines PDF</div>
                  <div className="text-sm text-gray-500">Latest regulatory handbook</div>
                </button>
                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all">
                  <div className="font-medium text-gray-900">Compliance Webinars</div>
                  <div className="text-sm text-gray-500">Live sessions with experts</div>
                </button>
                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all">
                  <div className="font-medium text-gray-900">Template Library</div>
                  <div className="text-sm text-gray-500">Ready-to-use documents</div>
                </button>
              </div>
            </section>

            {/* Support Card */}
            <section className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white">
              <h2 className="text-xl font-bold mb-3">Need Help?</h2>
              <p className="text-green-100 mb-4">
                Our compliance experts are ready to assist you with any questions.
              </p>
              <button 
                onClick={() => navigate("/expert-help")}
                className="w-full bg-white text-green-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Chat with Expert
              </button>
            </section>
          </div>
        </div>

        {/* Final CTA */}
        <section className="text-center bg-white rounded-2xl shadow-lg p-12 mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Ensure Full Compliance?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of AYUSH startups that have successfully navigated regulatory requirements with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/register")}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-all flex items-center gap-2 text-lg"
            >
              Start Registration
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => navigate("/compliance-demo")}
              className="border border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold transition-all"
            >
              View Demo
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
