import React, { useEffect, useState } from "react";
import { FaSearch, FaCalendarAlt, FaUserMd } from "react-icons/fa";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";
import { getAllDoctorsAPI } from "../../services/allAPI";
import SERVERURL from "../../services/serverURL";

function GetAppointments() {
  const [doctors, setDoctors] = useState([]);
  const [specialization, setSpecialization] = useState("");
  const [date, setDate] = useState("");
  const uniqueSpecializations = [
    ...new Set(doctors.map((doc) => doc.specialization).filter(Boolean)),
  ];

  /* ================= FETCH DOCTORS ================= */
  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await getAllDoctorsAPI();
      if (res.status === 200) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  /* ================= FILTER ================= */
  const filteredDoctors = doctors.filter((doc) => {
    return specialization === "" || doc.specialization === specialization;
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
          <p className="mt-2 text-lg">
            Choose a doctor and schedule your appointment easily.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-[#EDE7F6] p-6 rounded-2xl shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-5 text-[#1E142F]">
            Find Your Doctor
          </h2>

          <div className="max-w-md mx-auto">
            <label className="block font-medium mb-2 text-[#1E142F]">
              Specialization
            </label>

            <div className="relative">
              <select
                className="w-full p-4 border border-[#9575CD] rounded-xl bg-white
                   text-[#1E142F] focus:outline-none focus:ring-2
                   focus:ring-[#7E57C2] transition"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
              >
                <option value="">All Specializations</option>
                {uniqueSpecializations.map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>

              {/* Optional icon */}
              <FaUserMd className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7E57C2]" />
            </div>
          </div>
        </div>

        {/* Doctors List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredDoctors.map((doc) => (
            <div
              key={doc._id}
              className="bg-white p-6 rounded-xl shadow border"
            >
              <div className="flex flex-col items-center">
                <img
                  src={
                    doc.photo
                      ? `${SERVERURL}/imgUploads/${doc.photo}`
                      : "https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
                  }
                  alt="doctor"
                  className="w-24 h-24 rounded-full"
                />

                <h3 className="text-xl font-semibold mt-3">{doc.name}</h3>
                <p className="text-[#7E57C2] font-semibold">
                  {doc.specialization}
                </p>
                <p className="text-gray-600 text-sm">
                  Experience: {doc.experience}
                </p>

                {/* Available Days */}
                <div className="mt-3 flex gap-2 flex-wrap">
                  {doc.availableDays.map((day, i) => (
                    <span
                      key={i}
                      className="bg-[#D1C4E9] px-3 py-1 rounded-full text-sm"
                    >
                      {day}
                    </span>
                  ))}
                </div>

                {/* Book Button */}
                <button className="w-full mt-5 bg-[#7E57C2] text-white py-2 rounded-lg">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default GetAppointments;
