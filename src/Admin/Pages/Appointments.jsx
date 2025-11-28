import React, { useState } from "react";
import AdminHeader from "../Components/Adminheader";
import AdminSidebar from "../Components/AdminSidebar";
import { FaCalendarAlt, FaSearch, FaUser, FaUserMd } from "react-icons/fa";
import Footer2 from "../../Common/Components/Footer2";

function Appointments() {
  const [search, setSearch] = useState("");

  const appointments = [
    {
      id: 1,
      doctor: "Dr. Anita Joseph",
      patient: "Joseph Mathew",
      date: "2025-02-12",
      time: "10:30 AM",
      status: "Completed",
    },
    {
      id: 2,
      doctor: "Dr. Rahul Nair",
      patient: "Manu P",
      date: "2025-02-12",
      time: "12:00 PM",
      status: "Pending",
    },
    {
      id: 3,
      doctor: "Dr. Lekha Varghese",
      patient: "Sneha T",
      date: "2025-02-14",
      time: "3:15 PM",
      status: "Cancelled",
    },
  ];

  return (
    <>
      <AdminHeader />
      <div className="md:grid md:grid-cols-[1fr_4fr]">
        <div>
          <AdminSidebar />
        </div>

        <div className="min-h-screen bg-[#FAF7FF] p-6 md:p-10">
          {/* Header */}
          <div className="bg-[#7E57C2] text-white p-7 rounded-xl shadow mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">All Appointments</h1>
            <p className="mt-2 text-lg">View all patient-doctor appointments.</p>
          </div>

          <div className="max-w-7xl mx-auto bg-[#EDE7F6] p-4 md:p-6 rounded-xl shadow">
            {/* Search */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-5">
              <div className="flex items-center bg-[#D1C4E9] px-3 py-2 rounded-lg w-full md:w-72">
                <FaSearch className="text-[#5E35B1]" />
                <input
                  type="text"
                  placeholder="Search patient or doctor..."
                  className="bg-transparent ml-2 outline-none w-full text-sm text-[#1E142F]"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-max w-full border-collapse text-[#1E142F]">
                <thead>
                  <tr className="bg-[#D1C4E9] text-[#5E35B1] text-xs md:text-sm">
                    <th className="p-3 text-left">Patient</th>
                    <th className="p-3 text-left">Doctor</th>
                    <th className="p-3 text-left">Date</th>
                    <th className="p-3 text-left">Time</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Action</th>
                  </tr>
                </thead>

                <tbody className="text-xs md:text-sm">
                  {appointments.map((a) => (
                    <tr
                      key={a.id}
                      className="border-b hover:bg-[#FAF7FF] transition"
                    >
                      {/* Patient */}
                      <td className="p-3">
                        <div className="flex items-center gap-2 min-w-[120px]">
                          <FaUser className="text-blue-600 text-base md:text-lg" />
                          <span className="truncate">{a.patient}</span>
                        </div>
                      </td>

                      {/* Doctor */}
                      <td className="p-3">
                        <div className="flex items-center gap-2 min-w-[120px]">
                          <FaUserMd className="text-green-600 text-base md:text-lg" />
                          <span className="truncate">{a.doctor}</span>
                        </div>
                      </td>

                      {/* Date */}
                      <td className="p-3 min-w-[90px]">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-[#9575CD] text-base md:text-lg" />
                          <span>{a.date}</span>
                        </div>
                      </td>

                      {/* Time */}
                      <td className="p-3 min-w-[80px]">{a.time}</td>

                      {/* Status */}
                      <td className="p-3 min-w-[90px]">
                        <span
                          className={`px-2 md:px-3 py-1 rounded-full text-white text-[10px] md:text-xs font-semibold ${
                            a.status === "Completed"
                              ? "bg-green-600"
                              : a.status === "Pending"
                              ? "bg-yellow-500"
                              : "bg-red-600"
                          }`}
                        >
                          {a.status}
                        </span>
                      </td>

                      {/* Action */}
                      <td className="p-3 min-w-[90px]">
                        <button className="bg-blue-600 text-white px-3 md:px-4 py-1 rounded-lg shadow text-xs md:text-sm hover:bg-blue-700">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
}

export default Appointments;
