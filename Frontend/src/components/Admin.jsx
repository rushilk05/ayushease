import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
  CheckCircle, XCircle, Eye, LogOut, Users, Clock, CheckSquare, XSquare,
  FileText, Bell, TrendingUp, AlertCircle
} from 'lucide-react';

export default function Admin() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(null);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Dashboard data
  const [stats, setStats] = useState(null);
  const [pendingStartups, setPendingStartups] = useState([]);
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState(''); // 'approve' or 'reject'
  const [comments, setComments] = useState('');
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const adminData = localStorage.getItem('admin');
    
    if (token && adminData) {
      setIsLoggedIn(true);
      setAdmin(JSON.parse(adminData));
      fetchDashboardData(token);
    }
  }, []);

  const fetchDashboardData = async (token) => {
    try {
      const [statsRes, pendingRes, notifRes] = await Promise.all([
        axios.get('http://localhost:5001/api/admin/dashboard/stats', {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get('http://localhost:5001/api/admin/startups/pending', {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get('http://localhost:5001/api/admin/notifications', {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);

      setStats(statsRes.data);
      setPendingStartups(pendingRes.data.startups);
      setNotifications(notifRes.data.notifications);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5001/api/admin/login', loginData);
      
      if (response.status === 200) {
        localStorage.setItem('adminToken', response.data.token);
        localStorage.setItem('admin', JSON.stringify(response.data.admin));
        setIsLoggedIn(true);
        setAdmin(response.data.admin);
        fetchDashboardData(response.data.token);
      }
    } catch (error) {
      setErrorMsg(error.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('admin');
    setIsLoggedIn(false);
    setAdmin(null);
    navigate('/');
  };

  const handleViewStartup = async (startupId) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(`http://localhost:5001/api/admin/startups/${startupId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSelectedStartup(response.data);
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching startup details:', error);
    }
  };

  const handleApprove = () => {
    setActionType('approve');
    setComments('');
  };

  const handleReject = () => {
    setActionType('reject');
    setComments('');
  };

  const submitAction = async () => {
    if (actionType === 'reject' && !comments.trim()) {
      setErrorMsg('Comments are required for rejection');
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const endpoint = actionType === 'approve' ? 'approve' : 'reject';
      const response = await axios.post(
        `http://localhost:5001/api/admin/startups/${selectedStartup._id}/${endpoint}`,
        { comments: comments.trim() },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200) {
        setShowModal(false);
        setSelectedStartup(null);
        setActionType('');
        setComments('');
        fetchDashboardData(token);
        alert(`Startup ${actionType === 'approve' ? 'approved' : 'rejected'} successfully!`);
      }
    } catch (error) {
      setErrorMsg(error.response?.data?.error || 'Action failed');
    } finally {
      setLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h1>
            <p className="text-gray-600">AYUSHEASE Administration Panel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome, {admin?.name}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Startups</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalStartups}</p>
                </div>
                <Users className="text-blue-600" size={32} />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Pending</p>
                  <p className="text-3xl font-bold text-yellow-600">{stats.pendingStartups}</p>
                </div>
                <Clock className="text-yellow-600" size={32} />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Approved</p>
                  <p className="text-3xl font-bold text-green-600">{stats.approvedStartups}</p>
                </div>
                <CheckSquare className="text-green-600" size={32} />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Rejected</p>
                  <p className="text-3xl font-bold text-red-600">{stats.rejectedStartups}</p>
                </div>
                <XSquare className="text-red-600" size={32} />
              </div>
            </div>
          </div>
        )}

        {/* Pending Startups */}
        <div className="bg-white rounded-xl shadow mb-8">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <AlertCircle className="text-yellow-600" size={24} />
              Pending Approvals ({pendingStartups.length})
            </h2>
          </div>

          <div className="p-6">
            {pendingStartups.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No pending startups</p>
            ) : (
              <div className="space-y-4">
                {pendingStartups.map((startup) => (
                  <div
                    key={startup._id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900">{startup.startupName}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Founder: {startup.founderName} | {startup.email}
                        </p>
                        <p className="text-sm text-gray-600">
                          AYUSH System: {startup.ayushSystem} | Registered: {new Date(startup.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <button
                        onClick={() => handleViewStartup(startup._id)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                      >
                        <Eye size={18} />
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl shadow">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Bell className="text-blue-600" size={24} />
              Recent Notifications
            </h2>
          </div>
          <div className="p-6">
            {notifications.slice(0, 5).map((notif) => (
              <div key={notif._id} className="border-b border-gray-200 py-3 last:border-0">
                <p className="font-semibold text-gray-900">{notif.title}</p>
                <p className="text-sm text-gray-600">{notif.message}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(notif.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Startup Details and Actions */}
      {showModal && selectedStartup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b sticky top-0 bg-white">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Startup Details</h2>
                <button
                  onClick={() => {
                    setShowModal(false);
                    setSelectedStartup(null);
                    setActionType('');
                    setComments('');
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <XCircle size={24} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {actionType ? (
                <div>
                  <h3 className="font-semibold text-lg mb-4">
                    {actionType === 'approve' ? 'Approve Startup' : 'Reject Startup'}
                  </h3>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Comments {actionType === 'reject' && '(Required)'}
                  </label>
                  <textarea
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder={actionType === 'approve' ? 'Optional comments...' : 'Please provide reason for rejection...'}
                  />
                  {errorMsg && (
                    <p className="text-red-600 text-sm mt-2">{errorMsg}</p>
                  )}
                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={submitAction}
                      disabled={loading || (actionType === 'reject' && !comments.trim())}
                      className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                        actionType === 'approve'
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-red-600 hover:bg-red-700 text-white'
                      } disabled:opacity-50`}
                    >
                      {loading ? 'Processing...' : actionType === 'approve' ? 'Confirm Approval' : 'Confirm Rejection'}
                    </button>
                    <button
                      onClick={() => {
                        setActionType('');
                        setComments('');
                        setErrorMsg('');
                      }}
                      className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Startup Name</p>
                      <p className="font-semibold">{selectedStartup.startupName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">AYUSH System</p>
                      <p className="font-semibold">{selectedStartup.ayushSystem}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Founder Name</p>
                      <p className="font-semibold">{selectedStartup.founderName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-semibold">{selectedStartup.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-semibold">{selectedStartup.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Registration Number</p>
                      <p className="font-semibold">{selectedStartup.registrationNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Establishment Date</p>
                      <p className="font-semibold">{new Date(selectedStartup.establishmentDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Team Size</p>
                      <p className="font-semibold">{selectedStartup.teamSize}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Business Model</p>
                      <p className="font-semibold">{selectedStartup.businessModel}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-600">Address</p>
                      <p className="font-semibold">{selectedStartup.address}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-600">Description</p>
                      <p className="font-semibold">{selectedStartup.description}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4 border-t">
                    <button
                      onClick={handleApprove}
                      className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
                    >
                      <CheckCircle size={18} />
                      Approve
                    </button>
                    <button
                      onClick={handleReject}
                      className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
                    >
                      <XCircle size={18} />
                      Reject
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}









