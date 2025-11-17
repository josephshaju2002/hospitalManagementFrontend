import React from "react";
import { FaUserMd, FaPills, FaUser, FaComments } from "react-icons/fa";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";

const appointmentsData = [
  {
    id: 1,
    doctor: "Dr. John Mathew",
    specialization: "Cardiologist",
    date: "2025-05-20",
    time: "10:00 AM",
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
  },
  {
    id: 2,
    doctor: "Dr. Sneha Thomas",
    specialization: "Dermatologist",
    date: "2025-05-22",
    time: "02:00 PM",
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922656.png",
  },
];

function MyAppointments() {
  return (
    <>
    <Header/>


    <div className=" bg-gray-100 p-6 md:p-10">
      {/* Header */}
      <div className="bg-blue-600 text-white p-8 rounded-xl shadow mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-3">
          <FaUserMd /> My Appointments
        </h1>
        <p className="mt-2 text-lg">View all your booked doctor consultations.</p>
      </div>

      {/* Appointment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {appointmentsData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-5">
              <img
                src={item.image}
                alt="doctor"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h2 className="text-xl font-bold">{item.doctor}</h2>
                <p className="text-blue-600 font-semibold">{item.specialization}</p>
                <p className="text-gray-600 mt-1">
                  {item.date} • {item.time}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
              
              <button className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg shadow">
                <FaPills /> Prescribed Medicines
              </button>

              <button className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg shadow">
                <FaUser /> Patient Profile
              </button>

              <button className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg shadow">
                <FaComments /> Chat 
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>


    <Footer/>
    </>
  );
}

export default MyAppointments;
