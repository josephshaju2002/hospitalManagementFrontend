import React from "react";
import { FaUser, FaCalendarAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import DoctorHeader from "./DoctorHeader";
import Footer2 from "../Common/Components/Footer2";

const doctorAppointments = [
  {
    id: 1,
    patientName: "Joseph Mathew",
    age: 22,
    date: "2025-05-20",
    time: "10:00 AM",
    issue: "Chest Pain",
    img: "https://cdn-icons-png.flaticon.com/512/2922/2922522.png",
  },
  {
    id: 2,
    patientName: "Anju Thomas",
    age: 28,
    date: "2025-05-21",
    time: "3:00 PM",
    issue: "Skin Allergy",
    img: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
  },
];

function DoctorAppointments() {
  return (
    <>
    <DoctorHeader/>
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      {/* Header */}
      <div className="bg-blue-600 text-white p-8 rounded-xl shadow mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-3">
          <FaCalendarAlt /> My Appointments
        </h1>
        <p className="mt-2 text-lg">View all your appointments from patients.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {doctorAppointments.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition"
          >
            <div className="flex items-center gap-5">
              <img src={item.img} alt="" className="w-20 h-20 rounded-full" />
              <div>
                <h2 className="text-xl font-bold">{item.patientName}</h2>
                <p className="text-gray-600">Age: {item.age}</p>
                <p className="text-blue-600 font-semibold">{item.issue}</p>

                <div className="flex gap-3 mt-2 text-gray-700">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {item.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock /> {item.time}
                  </span>
                </div>
              </div>
            </div>

            <a href={`/doctor/appointment/${item.id}`}>
            <Link to={"/patientcard"}>
              <button className="mt-6 bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition">
                View Details
              </button>
            </Link>
            </a>
          </div>
        ))}
      </div>
    </div>

    <Footer2/>
    </>
  );
}

export default DoctorAppointments;
