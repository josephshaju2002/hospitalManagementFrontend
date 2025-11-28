import React, { useState } from "react";
import {
  FaSearch,
  FaUserMd,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import AdminHeader from "../Components/Adminheader";
import AdminSidebar from "../Components/AdminSidebar";
import Footer2 from "../../Common/Components/Footer2";

function AllDocProfiles() {
  const [search, setSearch] = useState("");

  const doctors = [
    {
      id: 1,
      name: "Dr. Aby George",
      specialty: "Cardiologist",
      experience: "12 Years",
      active: true,
      img: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
    },
    {
      id: 2,
      name: "Dr. Laya Nair",
      specialty: "Dermatologist",
      experience: "7 Years",
      active: false,
      img: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
    },
    {
      id: 3,
      name: "Dr. Mathew Joseph",
      specialty: "Neurologist",
      experience: "10 Years",
      active: true,
      img: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
    },
  ];

  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-[1fr_4fr]">
        <div>
          <AdminSidebar />
        </div>
        <div className="min-h-screen bg-[#FAF7FF] p-6 md:p-10">
          {/* Header */}
          <div className="bg-[#7E57C2] text-white p-8 rounded-xl shadow mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
              <FaUserMd /> All Doctors
            </h1>
            <p className="mt-2 text-lg">View all doctor profiles.</p>
          </div>

          <div className="max-w-7xl mx-auto bg-[#EDE7F6] p-8 rounded-xl shadow">
            {/* Search */}
            <div className="flex justify-start items-center mb-6">
              <div className="flex items-center bg-[#D1C4E9] px-3 py-2 rounded-lg w-72">
                <FaSearch className="text-[#5E35B1]" />
                <input
                  type="text"
                  placeholder="Search doctor..."
                  className="bg-transparent ml-2 outline-none w-full text-[#1E142F]"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Doctors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {doctors
                .filter((doc) =>
                  doc.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((doc) => (
                  <div
                    key={doc.id}
                    className="bg-[#FAF7FF] p-6 rounded-xl shadow hover:shadow-md transition"
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Image */}
                      <img
                        src={doc.img}
                        alt={doc.name}
                        className="w-28 h-28 rounded-full shadow mb-4"
                      />

                      {/* Name */}
                      <h2 className="text-xl font-bold text-[#1E142F]">{doc.name}</h2>

                      {/* Speciality */}
                      <p className="text-[#5E35B1]">{doc.specialty}</p>

                      {/* Experience */}
                      <p className="text-[#1E142F] mt-1 font-medium">
                        Experience: {doc.experience}
                      </p>

                      {/* Status */}
                      <div className="mt-3">
                        {doc.active ? (
                          <span className="flex items-center gap-2 text-green-600 font-semibold">
                            <FaCheckCircle /> Active
                          </span>
                        ) : (
                          <span className="flex items-center gap-2 text-red-600 font-semibold">
                            <FaTimesCircle /> Inactive
                          </span>
                        )}
                      </div>

                      {/* View Button */}
                      <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700">
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
}

export default AllDocProfiles;
