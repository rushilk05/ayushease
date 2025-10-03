import React from "react";

function Dashboard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl text-center border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-600 mb-6">
          You are successfully logged in. From here you can manage your profile, 
          check updates, and access features of the portal.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Profile
          </button>
          <button className="px-6 py-2 border border-gray-300 text-gray-800 bg-white rounded hover:bg-gray-100">
            Settings
          </button>
          <button className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
