import React from "react";

function Dashboard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">
          Welcome to Your Dashboard 🚀
        </h1>
        <p className="text-gray-700 mb-6">
          You are successfully logged in. From here you can manage your profile, 
          check updates, and access features of the portal.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Profile
          </button>
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Settings
          </button>
          <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
