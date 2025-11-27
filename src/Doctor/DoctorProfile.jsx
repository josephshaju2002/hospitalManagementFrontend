import React, { useState, useRef } from "react";
import DoctorHeader from "./DoctorHeader";
import Footer2 from "../Common/Components/Footer2";
import { 
  FaUserMd, FaEdit, FaCalendarAlt, FaSave, 
  FaPhoneAlt, FaEnvelope, FaStar, FaHospitalUser 
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GiStethoscope } from "react-icons/gi";

export default function DoctorProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [doctor, setDoctor] = useState({
    name: "Dr. John Mathew",
    specialization: "Cardiologist",
    experience: "12 Years experience treating heart & vascular diseases.",
    availableDays: ["Monday", "Wednesday", "Friday"],
    phone: "+91 98765 43210",
    email: "dr.john@example.com",
    location: "Heart Care Hospital, Kochi",
    qualifications: [
      "MBBS – AIIMS Delhi",
      "MD Cardiology – CMC Vellore",
      "Fellowship in Interventional Cardiology – Australia",
      "Member – Indian Heart Association",
    ],
    skills: [
      "ECG Analysis",
      "Bypass Surgery Prep",
      "Heart Monitoring",
      "Rehab Planning",
      "Emergency Care",
    ],
    fee: 700,
    duration: "30 Minutes",
    photo: "https://cdn-icons-png.flaticon.com/512/387/387561.png",
  });

  const fileInputRef = useRef(null);

  const allDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleDaySelect = (day) => {
    setDoctor((prev) => {
      const exists = prev.availableDays.includes(day);
      return {
        ...prev,
        availableDays: exists
          ? prev.availableDays.filter((d) => d !== day)
          : [...prev.availableDays, day],
      };
    });
  };

  const handleImageClick = () => {
    if (isEditing) fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setDoctor({ ...doctor, photo: imageUrl });
    }
  };

  return (
    <>
      <DoctorHeader />

      <div className="min-h-screen bg-[#FAF7FF] p-6">

        {/* Editable Profile Header */}
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#FAF7FF] to-[#EDE7F6] p-6 rounded-3xl shadow-xl flex flex-col md:flex-row gap-6 items-center mt-10 transition-all duration-300">
          <div className="relative group">
            <img
              src={doctor.photo}
              alt="doctor"
              onClick={handleImageClick}
              className="w-36 h-36 md:w-40 md:h-40 rounded-2xl shadow-2xl object-cover cursor-pointer hover:scale-105 transition-transform duration-300 border-4 border-[#7E57C2] group-hover:shadow-[#7E57C2]/50"
            />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />
            {isEditing && (
              <div className="absolute bottom-1 right-1 bg-[#7E57C2] text-white p-1 rounded-full shadow-md cursor-pointer">
                <FaEdit />
              </div>
            )}
          </div>

          <div className="flex-1 flex flex-col gap-3 w-full">
            {isEditing ? (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  className="border border-[#D1C4E9] bg-[#FAF7FF] w-full p-3 rounded-xl shadow-inner placeholder-[#7E57C2] focus:outline-none focus:ring-2 focus:ring-[#7E57C2] transition"
                  value={doctor.name}
                  placeholder="Doctor Name"
                  onChange={(e) => setDoctor({ ...doctor, name: e.target.value })}
                />
                <input
                  type="text"
                  className="border border-[#D1C4E9] bg-[#FAF7FF] w-full p-3 rounded-xl shadow-inner placeholder-[#7E57C2] focus:outline-none focus:ring-2 focus:ring-[#7E57C2] transition"
                  value={doctor.specialization}
                  placeholder="Specialization"
                  onChange={(e) => setDoctor({ ...doctor, specialization: e.target.value })}
                />
                <textarea
                  className="border border-[#D1C4E9] bg-[#FAF7FF] w-full p-3 rounded-xl shadow-inner placeholder-[#7E57C2] focus:outline-none focus:ring-2 focus:ring-[#7E57C2] transition"
                  rows={3}
                  placeholder="Experience"
                  value={doctor.experience}
                  onChange={(e) => setDoctor({ ...doctor, experience: e.target.value })}
                ></textarea>
              </div>
            ) : (
              <>
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#1E142F]">{doctor.name}</h1>
                <p className="text-[#5E35B1] text-lg md:text-xl font-medium">{doctor.specialization}</p>
                <p className="text-[#1E142F] mt-2 leading-relaxed">{doctor.experience}</p>
              </>
            )}
          </div>

          <button
            onClick={toggleEdit}
            className="flex items-center gap-2 bg-[#7E57C2] hover:bg-[#5E35B1] text-white px-5 py-3 rounded-2xl shadow-lg transition-transform transform hover:scale-105 mt-4 md:mt-0 self-start md:self-center"
          >
            {isEditing ? <FaSave /> : <FaEdit />}
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        {/* Available Days */}
        <div className="max-w-5xl mx-auto mt-6">
          <h3 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
            <FaCalendarAlt /> Available Days
          </h3>
          <div className="flex flex-wrap gap-3 mt-4">
            {allDays.map((day) => (
              <button
                key={day}
                onClick={() => isEditing && handleDaySelect(day)}
                className={`px-4 py-2 rounded-full border transition ${
                  doctor.availableDays.includes(day)
                    ? "bg-[#7E57C2] text-white border-[#7E57C2]"
                    : "bg-white text-gray-600 border-gray-400 hover:bg-gray-100"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Doctor Info & Contact */}
        <div className="max-w-5xl mx-auto mt-6 space-y-6">

          {/* Doctor Information */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-bold text-[#5E35B1] mb-4">Doctor Information</h2>
            {isEditing ? (
              <textarea
                rows={3}
                value={doctor.experience}
                onChange={(e) => setDoctor({ ...doctor, experience: e.target.value })}
                className="border w-full p-3 rounded-xl"
              />
            ) : (
              <p className="text-[#1E142F] leading-relaxed">{doctor.experience}</p>
            )}
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-bold text-[#5E35B1] mb-4">Contact Information</h2>
            {isEditing ? (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={doctor.phone}
                  onChange={(e) => setDoctor({ ...doctor, phone: e.target.value })}
                  className="border p-2 rounded-lg"
                  placeholder="Phone"
                />
                <input
                  type="text"
                  value={doctor.email}
                  onChange={(e) => setDoctor({ ...doctor, email: e.target.value })}
                  className="border p-2 rounded-lg"
                  placeholder="Email"
                />
                <input
                  type="text"
                  value={doctor.location}
                  onChange={(e) => setDoctor({ ...doctor, location: e.target.value })}
                  className="border p-2 rounded-lg"
                  placeholder="Location"
                />
              </div>
            ) : (
              <>
                <p className="flex items-center gap-3 text-[#1E142F]"><FaPhoneAlt className="text-[#7E57C2]" /> {doctor.phone}</p>
                <p className="flex items-center gap-3 text-[#1E142F]"><FaEnvelope className="text-[#7E57C2]" /> {doctor.email}</p>
                <p className="flex items-center gap-3 text-[#1E142F]"><MdLocationOn className="text-[#7E57C2]" /> {doctor.location}</p>
              </>
            )}
          </div>

          {/* Qualifications */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-bold text-[#5E35B1] mb-4">Qualifications</h2>
            {isEditing ? (
              <textarea
                rows={4}
                value={doctor.qualifications.join("\n")}
                onChange={(e) => setDoctor({ ...doctor, qualifications: e.target.value.split("\n") })}
                className="border w-full p-3 rounded-xl"
              />
            ) : (
              <ul className="list-disc ml-6 text-[#1E142F]">
                {doctor.qualifications.map((q, i) => <li key={i}>{q}</li>)}
              </ul>
            )}
          </div>

          {/* Skills */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-bold text-[#5E35B1] mb-4">Special Skills</h2>
            {isEditing ? (
              <input
                type="text"
                value={doctor.skills.join(", ")}
                onChange={(e) => setDoctor({ ...doctor, skills: e.target.value.split(",").map(s => s.trim()) })}
                className="border w-full p-3 rounded-xl"
                placeholder="Comma separated skills"
              />
            ) : (
              <div className="flex flex-wrap gap-2">
                {doctor.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-[#D1C4E9] text-[#1E142F] rounded-full text-sm font-medium">{skill}</span>
                ))}
              </div>
            )}
          </div>

          {/* Consultation Details */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-bold text-[#5E35B1] mb-4">Consultation Details</h2>
            {isEditing ? (
              <div className="flex flex-col gap-2">
                <input
                  type="number"
                  value={doctor.fee}
                  onChange={(e) => setDoctor({ ...doctor, fee: e.target.value })}
                  className="border p-2 rounded-lg"
                  placeholder="Fee"
                />
                <input
                  type="text"
                  value={doctor.duration}
                  onChange={(e) => setDoctor({ ...doctor, duration: e.target.value })}
                  className="border p-2 rounded-lg"
                  placeholder="Duration"
                />
              </div>
            ) : (
              <>
                <p className="text-[#1E142F] mb-2"><strong>Fee:</strong> ₹{doctor.fee} per session</p>
                <p className="text-[#1E142F]"><strong>Consultation Duration:</strong> {doctor.duration}</p>
              </>
            )}
          </div>

        </div>
      </div>

      <Footer2 />
    </>
  );
}
