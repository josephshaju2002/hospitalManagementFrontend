import React, { useState } from "react";
import { FaUserMd, FaEdit, FaCalendarAlt, FaSave } from "react-icons/fa";
import DoctorHeader from "./DoctorHeader";

export default function DoctorProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [doctor, setDoctor] = useState({
    name: "Dr. John Mathew",
    specialization: "Cardiologist",
    experience: "12 Years experience treating heart & vascular diseases.",
    availableDays: ["Monday", "Wednesday", "Friday"],
    photo:
      "https://cdn-icons-png.flaticon.com/512/387/387561.png",
  });

  const allDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

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

  return (
    <>

    <DoctorHeader/>
    
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-5">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-3xl">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600 flex items-center gap-2">
            <FaUserMd /> Doctor Profile
          </h1>

          <button
            onClick={toggleEdit}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {isEditing ? <FaSave /> : <FaEdit />}
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        {/* Profile Details */}
        <div className="mt-6 flex gap-6">
          <img
            src={doctor.photo}
            alt="doctor"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />

          <div className="flex-1">
            {isEditing ? (
              <>
                <input
                  type="text"
                  className="border w-full p-2 rounded-lg mb-3"
                  value={doctor.name}
                  onChange={(e) =>
                    setDoctor({ ...doctor, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="border w-full p-2 rounded-lg mb-3"
                  value={doctor.specialization}
                  onChange={(e) =>
                    setDoctor({ ...doctor, specialization: e.target.value })
                  }
                />
                <textarea
                  className="border w-full p-2 rounded-lg"
                  rows={3}
                  value={doctor.experience}
                  onChange={(e) =>
                    setDoctor({ ...doctor, experience: e.target.value })
                  }
                ></textarea>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold">{doctor.name}</h2>
                <p className="text-blue-600 font-medium">
                  {doctor.specialization}
                </p>
                <p className="text-gray-700 mt-2">{doctor.experience}</p>
              </>
            )}
          </div>
        </div>

        {/* Available Days */}
        <div className="mt-8">
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
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600 border-gray-400 hover:bg-gray-100"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
