import React, { useEffect, useState } from "react";
import AdminHeader from "../Components/Adminheader";
import AdminSidebar from "../Components/AdminSidebar";
import { FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import Footer2 from "../../Common/Components/Footer2";
import Hospital from "../../Media/Medipulse.png";

import { getAdminDashboardCountsAPI } from "../../services/allAPI";

function AdminHome() {

  const [counts, setCounts] = useState({
  users: 0,
  doctors: 0,
  appointments: 0,
});

useEffect(() => {
  fetchDashboardCounts();
}, []);

const fetchDashboardCounts = async () => {
  try {
    const token = sessionStorage.getItem("token");

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const res = await getAdminDashboardCountsAPI(reqHeader);

    if (res.status === 200) {
      setCounts(res.data.data);
    }
  } catch (error) {
    console.error(error);
  }
};


  return (
    <>
      <AdminHeader />

      <div className="md:grid grid-cols-[1fr_4fr] bg-[#FAF7FF] min-h-screen">
        <div className="bg-[#EDE7F6]">
          <AdminSidebar />
        </div>

        <div className="pt-1 pe-1">
          <div className="bg-gradient-to-r from-[#7E57C2] to-[#9575CD] text-white p-6 rounded-xl mb-8 shadow-lg flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Welcome Admin</h1>
              <p className="text-sm opacity-90 mt-1">
                Manage doctors, users, and appointments effortlessly.
              </p>
            </div>

            <img
              src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png"
              alt="Dashboard"
              className="w-24 drop-shadow-lg hidden md:block"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-6 text-white">
            {/* Card 1 */}
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="grid grid-cols-[1fr_3fr] bg-blue-700 p-5 rounded-2xl shadow-lg">
                <div className="flex justify-center items-center">
                  <FaBook className="text-4xl" />
                </div>
                <div>
                  <h1 className="font-semibold">Total Appointments:</h1>
                  <span className="text-2xl font-bold">{counts.appointments}</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="grid grid-cols-[1fr_3fr] bg-green-700 p-5 rounded-2xl shadow-lg">
                <div className="flex justify-center items-center">
                  <FaUsers className="text-4xl" />
                </div>
                <div>
                  <h1 className="font-semibold">Total Users:</h1>
                  <span className="text-2xl font-bold">{counts.users}</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="grid grid-cols-[1fr_3fr] bg-yellow-700 p-5 rounded-2xl shadow-lg">
                <div className="flex justify-center items-center">
                  <FaUserDoctor className="text-4xl" />
                </div>
                <div>
                  <h1 className="font-semibold">Total Doctors:</h1>
                  <span className="text-2xl font-bold">{counts.doctors}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className="w-full h-screen mt-5" src={Hospital} alt="" />
          </div>
        </div>
      </div>

      <Footer2 />
    </>
  );
}

export default AdminHome;
