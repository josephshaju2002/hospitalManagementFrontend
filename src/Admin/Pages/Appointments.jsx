import React, { useEffect, useState } from "react";
import AdminHeader from "../Components/Adminheader";
import AdminSidebar from "../Components/AdminSidebar";
import { FaCalendarAlt, FaSearch, FaUser, FaUserMd } from "react-icons/fa";
import Footer2 from "../../Common/Components/Footer2";
import { getAllAppointmentsAdminAPI } from "../../services/allAPI";

function Appointments() {
  const [search, setSearch] = useState("");

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const token = sessionStorage.getItem("token");

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const res = await getAllAppointmentsAdminAPI(reqHeader);

      if (res.status === 200) {
        setAppointments(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filteredAppointments = appointments.filter(
    (a) =>
      a.patientId?.username.toLowerCase().includes(search.toLowerCase()) ||
      a.doctorId?.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <AdminHeader />
      <div className="md:grid md:grid-cols-[1fr_4fr]">
        <div className="bg-[#EDE7F6]">
          <AdminSidebar />
        </div>

        <div className="min-h-screen bg-[#FAF7FF] p-6 md:p-10">
          {/* Header */}
          <div className="bg-[#7E57C2] text-white p-7 rounded-xl shadow mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">All Appointments</h1>
            <p className="mt-2 text-lg">
              View all patient-doctor appointments.
            </p>
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
                  </tr>
                </thead>

                <tbody className="text-xs md:text-sm">
                  {filteredAppointments.map((a) => (
                    <tr
                      key={a._id}
                      className="border-b hover:bg-[#FAF7FF] transition"
                    >
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <FaUser className="text-blue-600" />
                          {a.patientId?.username}
                        </div>
                      </td>

                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <FaUserMd className="text-green-600" />
                          {a.doctorId?.name}
                        </div>
                      </td>

                      <td className="p-3">{a.date}</td>
                      <td className="p-3">{a.time}</td>

                      <td className="p-3">
                        <span
                          className={`px-3 py-1 rounded-full text-white ${
                            a.status === "Completed"
                              ? "bg-green-600"
                              : a.status === "Pending"
                              ? "bg-yellow-500"
                              : "bg-blue-600"
                          }`}
                        >
                          {a.status}
                        </span>
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
