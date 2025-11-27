import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import DoctorHeader from "./DoctorHeader";
import Footer2 from "../Common/Components/Footer2";

function PatientCard() {
  const [tab, setTab] = useState("profile");

  return (
    <>
      <DoctorHeader />

      <div className="min-h-screen bg-[#FAF7FF] p-3 sm:p-6 md:p-10">
        {/* Header */}
        <div className="bg-[#7E57C2] text-white p-4 sm:p-6 md:p-8 rounded-xl shadow mb-10 text-center">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold flex flex-wrap justify-center items-center gap-3">
            <FaUser className="text-2xl md:text-3xl" /> Patient Details
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg">
            Manage patient info & prescribe medicines.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-[#EDE7F6] p-4 sm:p-6 md:p-8 rounded-xl shadow">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-8 border-b pb-3 text-center">
            {["profile", "medicines", "chat"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`font-semibold pb-2 text-sm sm:text-base ${
                  tab === t
                    ? "text-[#7E57C2] border-b-2 border-[#7E57C2]"
                    : "text-gray-600"
                }`}
              >
                {t === "profile" && "Patient Profile"}
                {t === "medicines" && "Prescribe Medicines"}
                {t === "chat" && "Chat"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6 sm:mt-8">
            {/* PROFILE TAB */}
            {tab === "profile" && (
              <div className="w-full px-3 sm:px-6 md:px-10">
                {/* Basic Info */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white p-4 sm:p-6 shadow rounded-xl">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow border-2 border-[#7E57C2]"
                    alt="profile"
                  />

                  <div className="text-center md:text-left">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#1E142F]">
                      Joseph Mathew
                    </h2>
                    <p className="text-[#5E35B1] text-sm sm:text-base">Age: 22</p>
                    <p className="text-[#5E35B1] text-sm sm:text-base">Issue: Chest Pain</p>
                  </div>
                </div>

                {/* Basic Details Form (Read-only) */}
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 bg-[#FAF7FF] p-4 sm:p-6 rounded-xl shadow">
                  <h3 className="text-lg sm:text-xl font-semibold col-span-1 sm:col-span-2 text-[#1E142F]">
                    Basic Details
                  </h3>

                  <div>
                    <label className="font-semibold text-sm sm:text-base text-[#1E142F]">
                      Name
                    </label>
                    <input
                      className="w-full border border-[#D1C4E9] p-2 rounded mt-1 bg-gray-200 cursor-not-allowed"
                      value="Joseph Mathew"
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-sm sm:text-base text-[#1E142F]">
                      Age
                    </label>
                    <input
                      className="w-full border border-[#D1C4E9] p-2 rounded mt-1 bg-gray-200 cursor-not-allowed"
                      value="22"
                      readOnly
                    />
                  </div>
                </form>

                {/* Health Status Form */}
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 bg-[#FAF7FF] p-4 sm:p-6 rounded-xl shadow">
                  <h3 className="text-lg sm:text-xl font-semibold col-span-1 sm:col-span-2 text-[#1E142F]">
                    Health Status
                  </h3>

                  {/* Read-only fields */}
                  <div>
                    <label className="font-semibold text-sm sm:text-base text-[#1E142F]">
                      Blood Group
                    </label>
                    <input
                      className="w-full border border-[#D1C4E9] p-2 rounded mt-1 bg-gray-200 cursor-not-allowed"
                      value="O+"
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-sm sm:text-base text-[#1E142F]">
                      Height (cm)
                    </label>
                    <input
                      className="w-full border border-[#D1C4E9] p-2 rounded mt-1 bg-gray-200 cursor-not-allowed"
                      value="178"
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-sm sm:text-base text-[#1E142F]">
                      Weight (kg)
                    </label>
                    <input
                      className="w-full border border-[#D1C4E9] p-2 rounded mt-1 bg-gray-200 cursor-not-allowed"
                      value="72"
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-sm sm:text-base text-[#1E142F]">
                      Allergies
                    </label>
                    <input
                      className="w-full border border-[#D1C4E9] p-2 rounded mt-1 bg-gray-200 cursor-not-allowed"
                      value="None"
                      readOnly
                    />
                  </div>

                  {/* Editable fields */}
                  <div className="sm:col-span-2">
                    <label className="font-semibold text-sm sm:text-base text-[#1E142F]">
                      Existing Conditions
                    </label>
                    <textarea
                      className="w-full border border-[#D1C4E9] p-2 rounded mt-1 bg-white focus:outline-none focus:ring-2 focus:ring-[#7E57C2]"
                      rows={3}
                      defaultValue="None"
                    ></textarea>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="font-semibold text-sm sm:text-base text-[#1E142F]">
                      Current Medications
                    </label>
                    <textarea
                      className="w-full border border-[#D1C4E9] p-2 rounded mt-1 bg-white focus:outline-none focus:ring-2 focus:ring-[#7E57C2]"
                      rows={3}
                      defaultValue="Not on regular medication"
                    ></textarea>
                  </div>

                  <div className="col-span-1 sm:col-span-2 flex justify-end mt-4">
                    <button className="bg-[#7E57C2] text-white px-6 py-2 rounded-lg shadow hover:bg-[#5E35B1] transition">
                      Save Health Status
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* MEDICINE TAB */}
            {tab === "medicines" && (
              <div>
                <h2 className="text-xl font-bold mb-4 text-[#1E142F]">Prescribe Medicines</h2>

                <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Medicine Name"
                    className="border p-2 rounded border-[#D1C4E9]"
                  />
                  <input
                    type="text"
                    placeholder="Dosage (e.g. 1-0-1)"
                    className="border p-2 rounded border-[#D1C4E9]"
                  />
                  <button className="bg-[#7E57C2] text-white py-2 rounded-lg hover:bg-[#5E35B1] transition">
                    Add
                  </button>
                </form>

                <div className="mt-6 bg-[#FAF7FF] p-4 rounded shadow">
                  <p className="font-semibold text-[#1E142F]">Prescribed Medicines:</p>
                  <ul className="mt-2 list-disc ml-5 text-[#1E142F]">
                    <li>Paracetamol (1-0-1)</li>
                    <li>Vitamin D3 (1-0-0)</li>
                  </ul>
                </div>
              </div>
            )}

            {/* CHAT TAB */}
            {tab === "chat" && (
              <div className="bg-[#FAF7FF] p-4 sm:p-6 rounded-xl">
                <div className="h-56 sm:h-64 overflow-y-auto bg-white p-3 sm:p-4 rounded shadow">
                  <p className="text-[#1E142F] text-sm sm:text-base">
                    <strong>Patient:</strong> Hello Doctor...
                  </p>
                  <p className="text-[#1E142F] mt-2 text-sm sm:text-base">
                    <strong>You:</strong> Hi, tell me what you're feeling.
                  </p>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full p-3 border rounded border-[#D1C4E9] bg-white focus:outline-none focus:ring-2 focus:ring-[#7E57C2]"
                  />
                  <button className="bg-[#7E57C2] text-white px-4 py-2 rounded-lg hover:bg-[#5E35B1] transition">
                    Send
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
}

export default PatientCard;
