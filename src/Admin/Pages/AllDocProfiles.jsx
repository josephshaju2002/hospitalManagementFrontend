import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaUserMd,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import AdminHeader from "../Components/Adminheader";
import AdminSidebar from "../Components/AdminSidebar";
import Footer2 from "../../Common/Components/Footer2";
import SERVERURL from "../../services/serverURL";
import { getAllDoctorsAdminAPI, getSingleDoctorProfileAdminAPI } from "../../services/allAPI";


function AllDocProfiles() {
  const [search, setSearch] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // 🔹 Fetch all doctors (admin)
  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const res = await getAllDoctorsAdminAPI(reqHeader);
      if (res.status === 200) {
        setDoctors(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 🔹 View single doctor profile
  const handleViewProfile = async (id) => {
    try {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const res = await getSingleDoctorProfileAdminAPI(id, reqHeader);
      if (res.status === 200) {
        setSelectedDoctor(res.data);
        setShowModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AdminHeader />

      <div className="md:grid grid-cols-[1fr_4fr]">
        <AdminSidebar />

        <div className="min-h-screen bg-[#FAF7FF] p-6 md:p-10">
          {/* Header */}
          <div className="bg-[#7E57C2] text-white p-8 rounded-xl shadow mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
              <FaUserMd /> All Doctors
            </h1>
            <p className="mt-2 text-lg">View all doctor profiles</p>
          </div>

          <div className="max-w-7xl mx-auto bg-[#EDE7F6] p-8 rounded-xl shadow">
            {/* Search */}
            <div className="flex items-center mb-6">
              <div className="flex items-center bg-[#D1C4E9] px-3 py-2 rounded-lg w-72">
                <FaSearch className="text-[#5E35B1]" />
                <input
                  type="text"
                  placeholder="Search doctor..."
                  className="bg-transparent ml-2 outline-none w-full"
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
                    key={doc._id}
                    className="bg-[#FAF7FF] p-6 rounded-xl shadow hover:shadow-md transition"
                  >
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={
                          doc.photo
                            ? `${SERVERURL}/imgUploads/${doc.photo}`
                            : "https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
                        }
                        className="w-28 h-28 rounded-full mb-4"
                        alt="doctor"
                      />

                      <h2 className="text-xl font-bold">{doc.name}</h2>
                      <p className="text-[#5E35B1]">
                        {doc.specialization}
                      </p>

                      <p className="mt-1 font-medium">
                        Experience: {doc.experience}
                      </p>

                      <div className="mt-3">
                        {doc.isActive !== false ? (
                          <span className="flex items-center gap-2 text-green-600 font-semibold">
                            <FaCheckCircle /> Active
                          </span>
                        ) : (
                          <span className="flex items-center gap-2 text-red-600 font-semibold">
                            <FaTimesCircle /> Inactive
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => handleViewProfile(doc._id)}
                        className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 MODAL */}
      {showModal && selectedDoctor && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] md:w-[600px] rounded-xl p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-xl font-bold"
            >
              ✖
            </button>

            <div className="flex flex-col items-center">
              <img
                src={`${SERVERURL}/imgUploads/${selectedDoctor.photo}`}
                className="w-28 h-28 rounded-full mb-4"
                alt=""
              />

              <h2 className="text-2xl font-bold">{selectedDoctor.name}</h2>
              <p className="text-[#5E35B1]">
                {selectedDoctor.specialization}
              </p>

              <div className="mt-4 w-full space-y-2 text-left">
                <p><b>Email:</b> {selectedDoctor.email}</p>
                <p><b>Phone:</b> {selectedDoctor.phone}</p>
                <p><b>Location:</b> {selectedDoctor.location}</p>
                <p><b>Experience:</b> {selectedDoctor.experience}</p>
                <p><b>Fee:</b> ₹{selectedDoctor.fee}</p>
                <p><b>Duration:</b> {selectedDoctor.duration}</p>
                <p><b>Available Days:</b> {selectedDoctor.availableDays.join(", ")}</p>
                <p><b>Qualifications:</b> {selectedDoctor.qualifications.join(", ")}</p>
                <p><b>Skills:</b> {selectedDoctor.skills.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer2 />
    </>
  );
}

export default AllDocProfiles;
