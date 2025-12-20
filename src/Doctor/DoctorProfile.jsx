import React, { useEffect, useRef, useState } from "react";
import DoctorHeader from "./DoctorHeader";
import Footer2 from "../Common/Components/Footer2";
import {
  FaEdit,
  FaSave,
  FaCalendarAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock ,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { toast } from "react-toastify";
import {
  updateDoctorProfileAPI,
  getDoctorProfileAPI,
} from "../services/allAPI";
import SERVERURL from "../services/serverURL";

export default function DoctorProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [preview, setPreview] = useState("");
  const [token, setToken] = useState("");

  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    experience: "",
    availableDays: [],
    phone: "",
    email: "",
    location: "",
    qualifications: [],
    skills: [],
    fee: "",
    duration: "",
    photo: "",
     consultationTime: {
    start: "",
    end: "",
  },
  });

  const fileInputRef = useRef(null);

  const allDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  /* ================= TOKEN ================= */
  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  /* ================= FETCH PROFILE ================= */
  useEffect(() => {
    if (token) fetchDoctorProfile();
  }, [token]);

 const fetchDoctorProfile = async () => {
  try {
    const reqHeader = { Authorization: `Bearer ${token}` };
    const res = await getDoctorProfileAPI(reqHeader);

    if (res.status === 200) {
      const profile = res.data.data;

      setDoctor({
        ...profile,
        consultationTime: profile.consultationTime || {
          start: "",
          end: "",
        },
      });
    }
  } catch (err) {
    toast.error("Failed to load doctor profile");
  }
};


  /* ================= IMAGE ================= */
  const handleImageClick = () => {
    if (isEditing) fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDoctor({ ...doctor, photo: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  /* ================= DAYS ================= */
  const handleDaySelect = (day) => {
    if (!isEditing) return;
    setDoctor((prev) => ({
      ...prev,
      availableDays: prev.availableDays.includes(day)
        ? prev.availableDays.filter((d) => d !== day)
        : [...prev.availableDays, day],
    }));
  };

  /* ================= SAVE ================= */
  const handleSaveProfile = async () => {
    try {
      const formData = new FormData();

      Object.entries({
        name: doctor.name,
        specialization: doctor.specialization,
        experience: doctor.experience,
        phone: doctor.phone,
        email: doctor.email,
        location: doctor.location,
        fee: doctor.fee,
        duration: doctor.duration,
        availableDays: JSON.stringify(doctor.availableDays),
        qualifications: JSON.stringify(doctor.qualifications),
        skills: JSON.stringify(doctor.skills),
        consultationTime: JSON.stringify(doctor.consultationTime),

      }).forEach(([key, value]) => formData.append(key, value));

      if (doctor.photo instanceof File) {
        formData.append("photo", doctor.photo);
      }

      const reqHeader = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      };

      const res = await updateDoctorProfileAPI(formData, reqHeader);

      if (res.status === 200) {
        toast.success("Profile updated");
        setIsEditing(false);
        setPreview("");
        fetchDoctorProfile();
      }
    } catch (err) {
      toast.error("Update failed");
    }
  };

  return (
    <>
      <DoctorHeader />

      <div className="min-h-screen bg-[#FAF7FF] p-6">
        {/* ================= HEADER ================= */}
        <div className="max-w-5xl mx-auto bg-[#EDE7F6] p-6 rounded-3xl shadow flex gap-6 items-center mt-10">
          <img
            src={
              preview
                ? preview
                : doctor.photo
                ? `${SERVERURL}/imgUploads/${doctor.photo}`
                : "https://cdn-icons-png.flaticon.com/512/387/387561.png"
            }
            onClick={handleImageClick}
            className="w-40 h-40 rounded-2xl object-cover cursor-pointer border-4 border-[#7E57C2]"
            alt=""
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            hidden
          />

          <div className="flex-1">
            {isEditing ? (
              <>
                <input
                  className="border p-2 w-full mb-2"
                  value={doctor.name}
                  onChange={(e) =>
                    setDoctor({ ...doctor, name: e.target.value })
                  }
                />
                <input
                  className="border p-2 w-full mb-2"
                  value={doctor.specialization}
                  onChange={(e) =>
                    setDoctor({ ...doctor, specialization: e.target.value })
                  }
                />
                <textarea
                  className="border p-2 w-full"
                  value={doctor.experience}
                  onChange={(e) =>
                    setDoctor({ ...doctor, experience: e.target.value })
                  }
                />
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold">{doctor.name}</h1>
                <p className="text-[#5E35B1]">{doctor.specialization}</p>
                <p>{doctor.experience}</p>
              </>
            )}
          </div>

          <button
            onClick={isEditing ? handleSaveProfile : () => setIsEditing(true)}
            className="bg-[#7E57C2] text-white px-5 py-3 rounded-xl flex items-center gap-2"
          >
            {isEditing ? <FaSave /> : <FaEdit />}
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        {/* ================= DAYS ================= */}
        <div className="max-w-5xl mx-auto mt-6">
          <h3 className="font-semibold flex gap-2">
            <FaCalendarAlt /> Available Days
          </h3>
          <div className="flex gap-2 mt-2 flex-wrap">
            {allDays.map((day) => (
              <button
                key={day}
                onClick={() => handleDaySelect(day)}
                className={`px-4 py-2 rounded-full ${
                  doctor.availableDays.includes(day)
                    ? "bg-[#7E57C2] text-white"
                    : "bg-gray-200"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-6 bg-white p-6 rounded-2xl shadow">
  <h3 className="font-semibold flex gap-2 mb-4">
    <FaClock /> Consultation Time
  </h3>

  {isEditing ? (
    <div className="flex gap-6">
      {/* Start Time */}
      <div>
        <label className="block text-sm text-gray-500 mb-1">Start Time</label>
        <input
          type="time"
          className="border p-2 rounded-lg"
          value={doctor.consultationTime.start}
          onChange={(e) =>
            setDoctor({
              ...doctor,
              consultationTime: {
                ...doctor.consultationTime,
                start: e.target.value,
              },
            })
          }
        />
      </div>

      {/* End Time */}
      <div>
        <label className="block text-sm text-gray-500 mb-1">End Time</label>
        <input
          type="time"
          className="border p-2 rounded-lg"
          value={doctor.consultationTime.end}
          onChange={(e) =>
            setDoctor({
              ...doctor,
              consultationTime: {
                ...doctor.consultationTime,
                end: e.target.value,
              },
            })
          }
        />
      </div>
    </div>
  ) : (
    <p className="font-medium">
      {doctor.consultationTime.start} – {doctor.consultationTime.end}
    </p>
  )}
</div>


        {/* ================= QUALIFICATIONS ================= */}
        <div className="max-w-5xl mx-auto mt-6 bg-white p-6 rounded-2xl shadow">
          <h2 className="font-bold text-xl mb-3">Qualifications</h2>
          {isEditing ? (
            <textarea
              className="border w-full p-2"
              value={doctor.qualifications.join("\n")}
              onChange={(e) =>
                setDoctor({
                  ...doctor,
                  qualifications: e.target.value.split("\n"),
                })
              }
            />
          ) : (
            <ul className="list-disc ml-6">
              {doctor.qualifications.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          )}
        </div>

        {/* ================= SKILLS ================= */}
        <div className="max-w-5xl mx-auto mt-6 bg-white p-6 rounded-2xl shadow">
          <h2 className="font-bold text-xl mb-3">Skills</h2>
          {isEditing ? (
            <input
              className="border w-full p-2"
              value={doctor.skills.join(", ")}
              onChange={(e) =>
                setDoctor({
                  ...doctor,
                  skills: e.target.value.split(",").map((s) => s.trim()),
                })
              }
            />
          ) : (
            <div className="flex gap-2 flex-wrap">
              {doctor.skills.map((s) => (
                <span key={s} className="px-3 py-1 bg-[#D1C4E9] rounded-full">
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ================= CONTACT + CONSULT ================= */}
        <div className="max-w-5xl mx-auto mt-6 bg-[#FAF7FF] p-6 rounded-2xl shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone */}
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <FaPhoneAlt className="text-[#7E57C2] text-xl" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-semibold text-[#1E142F]">{doctor.phone}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <FaEnvelope className="text-[#7E57C2] text-xl" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold text-[#1E142F]">{doctor.email}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <MdLocationOn className="text-[#7E57C2] text-2xl" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold text-[#1E142F]">
                  {doctor.location}
                </p>
              </div>
            </div>

            {/* Fee & Duration */}
            <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm">
              <div>
                <p className="text-sm text-gray-500">Consultation Fee</p>
                <p className="font-bold text-[#7E57C2] text-lg">
                  ₹{doctor.fee}
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-semibold text-[#1E142F]">
                  {doctor.duration}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer2 />
    </>
  );
}
