import React, { useState } from "react";
import { FaUser, FaPills, FaComments, FaEdit } from "react-icons/fa";
import DoctorHeader from "./DoctorHeader";

function PatientCard() {
  const [tab, setTab] = useState("profile");

  return (
    <>
    <DoctorHeader/>
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      {/* Header */}
      <div className="bg-blue-600 text-white p-8 rounded-xl shadow mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-3">
          <FaUser /> Patient Details
        </h1>
        <p className="mt-2 text-lg">Manage patient info & prescribe medicines.</p>
      </div>

      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow">

        {/* Tabs */}
        <div className="flex justify-center gap-8 border-b pb-3">
          <button
            onClick={() => setTab("profile")}
            className={`font-semibold pb-2 ${
              tab === "profile"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
          >
            Patient Profile
          </button>

          <button
            onClick={() => setTab("medicines")}
            className={`font-semibold pb-2 ${
              tab === "medicines"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
          >
            Prescribe Medicines
          </button>

          <button
            onClick={() => setTab("chat")}
            className={`font-semibold pb-2 ${
              tab === "chat"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
          >
            Chat
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {tab === "profile" && (
              <div>
    {/* Basic Info */}
    <div className="flex items-center gap-6">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
        className="w-24 h-24 rounded-full shadow"
        alt=""
      />
      <div>
        <h2 className="text-2xl font-bold">Joseph Mathew</h2>
        <p className="text-gray-600">Age: 22</p>
        <p className="text-gray-600">Issue: Chest Pain</p>
      </div>
    </div>

    {/* Basic Details Form */}
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 bg-gray-50 p-6 rounded-xl shadow">
      <h3 className="text-xl font-semibold col-span-2 mb-2">
        Basic Details
      </h3>

      <div>
        <label className="font-semibold">Name</label>
        <input className="w-full border p-2 rounded" defaultValue="Joseph Mathew" />
      </div>

      <div>
        <label className="font-semibold">Age</label>
        <input className="w-full border p-2 rounded" defaultValue="22" />
      </div>
    </form>

    {/* Health Status Form */}
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 bg-gray-50 p-6 rounded-xl shadow">
      <h3 className="text-xl font-semibold col-span-2 mb-2">
        Health Status
      </h3>

      <div>
        <label className="font-semibold">Blood Group</label>
        <input
          className="w-full border p-2 rounded"
          placeholder="O+ / A- / B+"
          defaultValue="O+"
        />
      </div>

      <div>
        <label className="font-semibold">Height (cm)</label>
        <input
          className="w-full border p-2 rounded"
          placeholder="Height in cm"
          defaultValue="178"
        />
      </div>

      <div>
        <label className="font-semibold">Weight (kg)</label>
        <input
          className="w-full border p-2 rounded"
          placeholder="Weight"
          defaultValue="72"
        />
      </div>

      <div>
        <label className="font-semibold">Allergies</label>
        <input
          className="w-full border p-2 rounded"
          placeholder="e.g. Dust, Pollen"
          defaultValue="None"
        />
      </div>

      <div className="md:col-span-2">
        <label className="font-semibold">Existing Conditions</label>
        <textarea
          className="w-full border p-2 rounded"
          placeholder="e.g. Diabetes, Asthma"
          defaultValue="None"
        ></textarea>
      </div>

      <div className="md:col-span-2">
        <label className="font-semibold">Current Medications</label>
        <textarea
          className="w-full border p-2 rounded"
          placeholder="List medications here"
          defaultValue="Not on regular medication"
        ></textarea>
      </div>

      <div className="col-span-2 flex justify-end mt-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow">
          Save Health Status
        </button>
      </div>
    </form>
  </div>
          )}

          {/* Medicines */}
          {tab === "medicines" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Prescribe Medicines</h2>

              <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input
                  type="text"
                  placeholder="Medicine Name"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Dosage (e.g. 1-0-1)"
                  className="border p-2 rounded"
                />
                <button className="bg-green-600 text-white py-2 rounded-lg">
                  Add
                </button>
              </form>

              <div className="mt-6 bg-gray-100 p-4 rounded">
                <p className="font-semibold">Prescribed Medicines:</p>
                <ul className="mt-2 list-disc ml-5">
                  <li>Paracetamol (1-0-1)</li>
                  <li>Vitamin D3 (1-0-0)</li>
                </ul>
              </div>
            </div>
          )}

          {/* Chat UI */}
          {tab === "chat" && (
            <div className="bg-gray-100 p-6 rounded-xl">
              <div className="h-64 overflow-y-auto bg-white p-4 rounded shadow">
                <p className="text-gray-700">
                  <strong>Patient:</strong> Hello Doctor...
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>You:</strong> Hi, tell me what you're feeling.
                </p>
              </div>

              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="w-full p-3 border rounded"
                />
                <button className="bg-blue-600 text-white px-4 rounded-lg">
                  Send
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
    </>
  );
}

export default PatientCard;


