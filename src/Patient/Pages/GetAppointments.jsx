import React, { useState } from "react";
import { FaSearch, FaCalendarAlt, FaUserMd } from "react-icons/fa";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";

const doctorsData = [
  {
    id: 1,
    name: "Dr. John Mathew",
    specialization: "Cardiologist",
    experience: "12 Years",
    image:
      "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
    availableDays: ["Mon", "Wed", "Fri"],
  },
  {
    id: 2,
    name: "Dr. Sneha Thomas",
    specialization: "Dermatologist",
    experience: "7 Years",
    image:
      "https://cdn-icons-png.flaticon.com/512/2922/2922656.png",
    availableDays: ["Tue", "Thu", "Sat"],
  },
  {
    id: 3,
    name: "Dr. Rahul Nair",
    specialization: "Neurologist",
    experience: "10 Years",
    image:
      "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    availableDays: ["Mon", "Tue", "Fri"],
  },
];

function GetAppointments() {
  const [specialization, setSpecialization] = useState("");
  const [date, setDate] = useState("");

  const filteredDoctors = doctorsData.filter((doc) => {
    const matchesSpec =
      specialization === "" || doc.specialization === specialization;

    return matchesSpec;
  });

  return (
    <>
      <Header />

      <div className="min-h-screen bg-[#FAF7FF] p-5 md:p-10 text-[#1E142F]">
        
        {/* Header */}
        <div className="bg-[#7E57C2] text-white p-8 rounded-xl shadow-lg mb-10 text-center">
          <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
            <FaUserMd /> Book an Appointment
          </h1>
          <p className="mt-2 text-lg">Choose a doctor and schedule your appointment easily.</p>
        </div>

        {/* Filters */}
        <div className="bg-[#EDE7F6] p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Search Filters</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Specialization */}
            <div>
              <label className="block font-medium mb-2">Specialization</label>
              <select
                className="w-full p-3 border border-[#9575CD] rounded-lg bg-white"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
              >
                <option value="">All</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Neurologist">Neurologist</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block font-medium mb-2">Choose Date</label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full p-3 border border-[#9575CD] rounded-lg bg-white"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <FaCalendarAlt className="absolute right-3 top-4 text-gray-500" />
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button className="w-full bg-[#7E57C2] hover:bg-[#5E35B1] text-white p-3 rounded-lg flex items-center justify-center gap-2 shadow">
                <FaSearch /> Search
              </button>
            </div>
          </div>
        </div>

        {/* Doctors List */}
        <h2 className="text-2xl font-bold mb-4">Available Doctors</h2>

        {filteredDoctors.length === 0 ? (
          <p className="text-gray-600">No doctors available</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-[#FFFFFF] p-6 rounded-xl shadow hover:shadow-2xl transition duration-300 border border-[#EDE7F6]"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={doc.image}
                    alt="doctor"
                    className="w-24 h-24 rounded-full"
                  />
                  <h3 className="text-xl font-semibold mt-3">{doc.name}</h3>
                  <p className="text-[#7E57C2] font-semibold">{doc.specialization}</p>
                  <p className="text-gray-600 text-sm mt-1">Experience: {doc.experience}</p>

                  {/* Available Days */}
                  <div className="mt-3">
                    <p className="font-medium mb-1 text-gray-700">Available Days:</p>
                    <div className="flex gap-2">
                      {doc.availableDays.map((d, idx) => (
                        <span
                          key={idx}
                          className="bg-[#D1C4E9] text-[#5E35B1] px-3 py-1 rounded-full text-sm"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Book Button */}
                  <button className="w-full mt-5 bg-[#7E57C2] hover:bg-[#5E35B1] text-white py-2 rounded-lg font-semibold shadow">
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default GetAppointments;
