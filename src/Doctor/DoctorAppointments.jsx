import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import DoctorHeader from "./DoctorHeader";
import Footer2 from "../Common/Components/Footer2";
import { getDoctorAppointmentsAPI } from "../services/allAPI";

function DoctorAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchDoctorAppointments();
  }, []);

  const fetchDoctorAppointments = async () => {
    const token = sessionStorage.getItem("token");

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const res = await getDoctorAppointmentsAPI(reqHeader);

    if (res.status === 200) {
      setAppointments(res.data.data);
    }
  };

  return (
    <>
      <DoctorHeader />

      <div className="min-h-screen bg-[#FAF7FF] p-6 md:p-10">
        <div className="bg-[#7E57C2] text-white p-8 rounded-xl shadow mb-10 text-center">
          <h1 className="text-3xl font-bold flex justify-center items-center gap-3">
            <FaCalendarAlt /> My Appointments
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {appointments.map((item) => (
            <div
              key={item._id}
              className="bg-[#EDE7F6] rounded-xl p-6 shadow"
            >
              <h2 className="text-xl font-bold">
                {item.patientId?.username}
              </h2>

              <p className="text-gray-700">
                Email: {item.patientId?.email}
              </p>

              <div className="flex gap-3 mt-2 text-gray-700">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt /> {item.date}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock /> {item.time}
                </span>
              </div>

              <Link to={`/patientcard/${item._id}`}>
                <button className="mt-6 bg-[#7E57C2] text-white w-full py-2 rounded-lg">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer2 />
    </>
  );
}

export default DoctorAppointments;
