import React, { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaCamera, FaLock } from "react-icons/fa";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("details");

  const [username,setUsername] = useState("")
  const [bio,setBio] = useState("")
  console.log(username);

  useEffect(()=>{
    if (sessionStorage.getItem("existingUser")) {
      const name = JSON.parse(sessionStorage.getItem("existingUser"));
      setUsername(name.username);
      setBio(name.bio)
}

  },[])
  
  return (
    <>
      <Header />

      <div className="min-h-screen p-6 md:p-10" style={{ backgroundColor: "#FAF7FF" }}>
        
        {/* Header */}
        <div
          className="text-white p-8 rounded-xl shadow mb-10 text-center"
          style={{ backgroundColor: "#7E57C2" }}
        >
          <h1 className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-3">
            <FaUser /> {username}
          </h1>
          <p className="mt-2 text-lg text-purple-100">
            {bio}
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto rounded-xl shadow p-6 md:p-10"
          style={{ backgroundColor: "#FFFFFF" }}
        >

          {/* Profile Photo */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
              alt="Profile"
              className="w-32 h-32 rounded-full shadow"
            />

            <label
              className="mt-4 cursor-pointer text-white px-4 py-2 rounded-lg flex items-center gap-2"
              style={{ backgroundColor: "#7E57C2" }}
            >
              <FaCamera /> Update Photo
              <input type="file" className="hidden" />
            </label>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mt-10 border-b border-purple-200">

            <button
              onClick={() => setActiveTab("details")}
              className={`px-6 py-3 font-semibold ${
                activeTab === "details"
                  ? "border-b-2"
                  : "text-gray-600"
              }`}
              style={{
                color: activeTab === "details" ? "#7E57C2" : "#6B6B6B",
                borderColor: activeTab === "details" ? "#7E57C2" : "transparent"
              }}
            >
              Edit Details
            </button>

            <button
              onClick={() => setActiveTab("password")}
              className={`px-6 py-3 font-semibold ${
                activeTab === "password"
                  ? "border-b-2"
                  : "text-gray-600"
              }`}
              style={{
                color: activeTab === "password" ? "#7E57C2" : "#6B6B6B",
                borderColor: activeTab === "password" ? "#7E57C2" : "transparent"
              }}
            >
              Change Password
            </button>

            <button
              onClick={() => setActiveTab("health")}
              className={`px-6 py-3 font-semibold ${
                activeTab === "health"
                  ? "border-b-2"
                  : "text-gray-600"
              }`}
              style={{
                color: activeTab === "health" ? "#7E57C2" : "#6B6B6B",
                borderColor: activeTab === "health" ? "#7E57C2" : "transparent"
              }}
            >
              Health Status
            </button>
          </div>

          {/* TAB CONTENT */}
          <div className="mt-8">

            {/* ===== TAB 1: DETAILS ===== */}
            {activeTab === "details" && (
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                
                {/* Full Name */}
                <div>
                  <label className="block font-semibold mb-1 text-purple-900">Full Name</label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3 text-purple-400" />
                    <input
                      type="text"
                      className="w-full pl-10 p-3 border rounded-lg"
                      style={{
                        borderColor: "#D1C4E9",
                        backgroundColor: "#FFFFFF"
                      }}
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block font-semibold mb-1 text-purple-900">Email Address</label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-3 text-purple-400" />
                    <input
                      type="email"
                      className="w-full pl-10 p-3 border rounded-lg"
                      style={{
                        borderColor: "#D1C4E9",
                        backgroundColor: "#FFFFFF"
                      }}
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-semibold mb-1 text-purple-900">Phone Number</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    style={{
                      borderColor: "#D1C4E9",
                      backgroundColor: "#FFFFFF"
                    }}
                    placeholder="Enter phone number"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block font-semibold mb-1 text-purple-900">Address</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    style={{
                      borderColor: "#D1C4E9",
                      backgroundColor: "#FFFFFF"
                    }}
                    placeholder="Your address"
                  />
                </div>

                {/* Save Button */}
                <div className="col-span-1 md:col-span-2 flex justify-end">
                  <button
                    className="px-6 py-2 rounded-lg shadow"
                    style={{
                      backgroundColor: "#7E57C2",
                      color: "white"
                    }}
                  >
                    Save Changes
                  </button>
                </div>

              </form>
            )}

            {/* ===== TAB 2: PASSWORD ===== */}
            {activeTab === "password" && (
              <form className="grid grid-cols-1 gap-6 max-w-lg mx-auto">

                <div>
                  <label className="block font-semibold mb-1 text-purple-900">Current Password</label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-3 text-purple-400" />
                    <input
                      type="password"
                      className="w-full pl-10 p-3 border rounded-lg"
                      style={{ borderColor: "#D1C4E9" }}
                      placeholder="Enter current password"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-purple-900">New Password</label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-3 text-purple-400" />
                    <input
                      type="password"
                      className="w-full pl-10 p-3 border rounded-lg"
                      style={{ borderColor: "#D1C4E9" }}
                      placeholder="Enter new password"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-purple-900">Confirm New Password</label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-3 text-purple-400" />
                    <input
                      type="password"
                      className="w-full pl-10 p-3 border rounded-lg"
                      style={{ borderColor: "#D1C4E9" }}
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>

                <button
                  className="py-2 rounded-lg shadow"
                  style={{ backgroundColor: "#7E57C2", color: "white" }}
                >
                  Update Password
                </button>
              </form>
            )}

            {/* ===== TAB 3: HEALTH ===== */}
            {activeTab === "health" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {[
                  ["Blood Group", "O+ Positive"],
                  ["Height", "178 cm"],
                  ["Weight", "72 kg"],
                  ["Allergies", "No known allergies"],
                  ["Existing Conditions", "None"],
                  ["Current Medications", "Not taking any regular medication"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="p-5 rounded-lg shadow"
                    style={{ backgroundColor: "#EDE7F6" }}
                  >
                    <p className="font-semibold" style={{ color: "#5E35B1" }}>
                      {label}
                    </p>
                    <p className="mt-1" style={{ color: "#1E142F" }}>{value}</p>
                  </div>
                ))}

              </div>
            )}

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
