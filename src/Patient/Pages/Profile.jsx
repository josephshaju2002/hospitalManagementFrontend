import React, { useState } from "react";
import { FaUser, FaEnvelope, FaCamera, FaLock, FaHeartbeat } from "react-icons/fa";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <>
    <Header/>


    <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      {/* Header */}
      <div className="bg-blue-600 text-white p-8 rounded-xl shadow mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-3">
          <FaUser /> My Profile
        </h1>
        <p className="mt-2 text-lg">Manage your account settings and personal info.</p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6 md:p-10">

        {/* Profile Photo */}
        <div className="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
            alt="Profile"
            className="w-32 h-32 rounded-full shadow"
          />

          <label className="mt-4 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <FaCamera /> Update Photo
            <input type="file" className="hidden" />
          </label>
        </div>

        {/* TABS */}
        <div className="flex justify-center mt-10 border-b">

          {/* Tab 1 */}
          <button
            onClick={() => setActiveTab("details")}
            className={`px-6 py-3 font-semibold ${
              activeTab === "details"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
          >
            Edit Details
          </button>

          {/* Tab 2 */}
          <button
            onClick={() => setActiveTab("password")}
            className={`px-6 py-3 font-semibold ${
              activeTab === "password"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
          >
            Change Password
          </button>

          {/* Tab 3 –– NEW */}
          <button
            onClick={() => setActiveTab("health")}
            className={`px-6 py-3 font-semibold ${
              activeTab === "health"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
          >
            Health Status
          </button>
        </div>

        {/* CONTENT */}
        <div className="mt-8">

          {/* TAB 1: Edit Details */}
          {activeTab === "details" && (
  <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">

    {/* Full Name */}
    <div className="w-full">
      <label className="block font-semibold mb-1">Full Name</label>
      <div className="relative">
        <FaUser className="absolute left-3 top-3 text-gray-500" />
        <input
          type="text"
          className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your name"
        />
      </div>
    </div>

    {/* Email */}
    <div className="w-full">
      <label className="block font-semibold mb-1">Email Address</label>
      <div className="relative">
        <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
        <input
          type="email"
          className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          placeholder="Enter email"
        />
      </div>
    </div>

    {/* Phone */}
    <div className="w-full">
      <label className="block font-semibold mb-1">Phone Number</label>
      <input
        type="text"
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        placeholder="Enter phone number"
      />
    </div>

    {/* Address */}
    <div className="w-full">
      <label className="block font-semibold mb-1">Address</label>
      <input
        type="text"
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        placeholder="Your address"
      />
    </div>

    {/* Save Button */}
    <div className="col-span-1 md:col-span-2 flex justify-end">
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
        Save Changes
      </button>
    </div>

  </form>
)}


          {/* TAB 2: Change Password */}
          {activeTab === "password" && (
            <form className="grid grid-cols-1 gap-6 max-w-lg mx-auto">

              <div>
                <label className="block font-semibold mb-1">Current Password</label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-3 text-gray-500" />
                  <input type="password" className="w-full pl-10 p-3 border rounded-lg" placeholder="Enter current password" />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">New Password</label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-3 text-gray-500" />
                  <input type="password" className="w-full pl-10 p-3 border rounded-lg" placeholder="Enter new password" />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Confirm New Password</label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-3 text-gray-500" />
                  <input type="password" className="w-full pl-10 p-3 border rounded-lg" placeholder="Confirm new password" />
                </div>
              </div>

              <button className="bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700">
                Update Password
              </button>
            </form>
          )}

          {/* TAB 3: HEALTH STATUS (NEW) */}
          {activeTab === "health" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="bg-blue-50 p-5 rounded-lg shadow">
                <p className="font-semibold text-blue-700">Blood Group</p>
                <p className="text-gray-700 mt-1">O+ Positive</p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg shadow">
                <p className="font-semibold text-blue-700">Height</p>
                <p className="text-gray-700 mt-1">178 cm</p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg shadow">
                <p className="font-semibold text-blue-700">Weight</p>
                <p className="text-gray-700 mt-1">72 kg</p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg shadow">
                <p className="font-semibold text-blue-700">Allergies</p>
                <p className="text-gray-700 mt-1">No known allergies</p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg shadow">
                <p className="font-semibold text-blue-700">Existing Conditions</p>
                <p className="text-gray-700 mt-1">None</p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg shadow">
                <p className="font-semibold text-blue-700">Current Medications</p>
                <p className="text-gray-700 mt-1">Not taking any regular medication</p>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>


    <Footer/>
    </>
  );
}
