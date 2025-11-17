import React, { useState } from "react";
import AdminHeader from "../Components/Adminheader";
import AdminSidebar from "../Components/AdminSidebar";
import { FaCalendarAlt, FaSearch, FaUser, FaUserMd } from "react-icons/fa";

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

  <div className="min-h-screen bg-gray-100 p-6 md:p-10">
    {/* Header */}
    <div className="bg-purple-700 text-white p-7 rounded-xl shadow mb-10 text-center">
      <h1 className="text-3xl md:text-4xl font-bold">All Appointments</h1>
      <p className="mt-2 text-lg">View all patient-doctor appointments.</p>
    </div>

    <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow">
      {/* Search */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-72">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search patient or doctor..."
            className="bg-transparent ml-2 outline-none w-full"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-sm">
              <th className="p-3 text-left w-[18%]">Patient</th>
              <th className="p-3 text-left w-[18%]">Doctor</th>
              <th className="p-3 text-left w-[16%]">Date</th>
              <th className="p-3 text-left w-[16%]">Time</th>
              <th className="p-3 text-left w-[16%]">Status</th>
              <th className="p-3 text-left w-[16%]">Action</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {appointments.map((a) => (
              <tr
                key={a.id}
                className="border-b hover:bg-gray-50 transition text-gray-800"
              >
                {/* Patient */}
                <td className="p-3">
                  <div className="flex items-center gap-2 min-w-[130px]">
                    <FaUser className="text-blue-600 text-lg" />
                    <span className="truncate">{a.patient}</span>
                  </div>
                </td>

                {/* Doctor */}
                <td className="p-3">
                  <div className="flex items-center gap-2 min-w-[130px]">
                    <FaUserMd className="text-green-600 text-lg" />
                    <span className="truncate">{a.doctor}</span>
                  </div>
                </td>

                {/* Date */}
                <td className="p-3">
                  <div className="flex items-center gap-2 min-w-[100px]">
                    <FaCalendarAlt className="text-purple-600 text-lg" />
                    <span>{a.date}</span>
                  </div>
                </td>

                {/* Time */}
                <td className="p-3 min-w-[80px]">{a.time}</td>

                {/* Status */}
                <td className="p-3 min-w-[100px]">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
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
                <td className="p-3 min-w-[100px]">
                  <button className="bg-blue-600 text-white px-4 py-1 rounded-lg shadow text-sm hover:bg-blue-700">
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

    </>
  );
}

export default Appointments;

// Appointments
