import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import DoctorHeader from "./DoctorHeader";
import Footer2 from "../Common/Components/Footer2";
import { getSingleAppointmentAPI, updatePatientHealthAPI } from "../services/allAPI";
import { toast } from "react-toastify";
import SERVERURL from "../services/serverURL";

function PatientCard() {
  const { appointmentId } = useParams();
  const [tab, setTab] = useState("profile");
  const [appointment, setAppointment] = useState(null);

  const [health, setHealth] = useState({
    bloodGroup: "",
    height: "",
    weight: "",
    allergies: "",
    conditions: "",
    medications: "",
    smoking: "No",
    alcohol: "No",
  });

  const handleSaveHealth = async () => {
  try {
    const token = sessionStorage.getItem("token");

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    await updatePatientHealthAPI(patient._id, health, reqHeader);

    toast.success("Health status updated");
  } catch (error) {
    toast.error("Failed to save health status");
  }
};


  /* ================= FETCH APPOINTMENT ================= */
  useEffect(() => {
    fetchAppointment();
  }, []);

  const fetchAppointment = async () => {
  try {
    const token = sessionStorage.getItem("token");

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const res = await getSingleAppointmentAPI(appointmentId, reqHeader);

    if (res.status === 200) {
      const appt = res.data.data;
      setAppointment(appt);

      if (appt.patientId?.health) {
        setHealth(appt.patientId.health);
      }
    }
  } catch (error) {
    console.error(error);
    toast.error("Failed to load patient details");
  }
};


  if (!appointment) {
    return (
      <>
        <DoctorHeader />
        <p className="text-center mt-20">Loading patient details...</p>
      </>
    );
  }

  const patient = appointment.patientId;

  return (
    <>
      <DoctorHeader />

      <div className="min-h-screen bg-[#FAF7FF] p-3 sm:p-6 md:p-10">
        {/* Header */}
        <div className="bg-[#7E57C2] text-white p-6 rounded-xl shadow mb-10 text-center">
          <h1 className="text-2xl md:text-4xl font-bold flex justify-center items-center gap-3">
            <FaUser /> Patient Details
          </h1>
        </div>

        <div className="max-w-5xl mx-auto bg-[#EDE7F6] p-6 rounded-xl shadow">
          {/* Tabs */}
          <div className="flex justify-center gap-8 border-b pb-3">
            {["profile", "medicines", "chat"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`font-semibold pb-2 ${
                  tab === t
                    ? "text-[#7E57C2] border-b-2 border-[#7E57C2]"
                    : "text-gray-600"
                }`}
              >
                {t === "profile" && "Patient Profile"}
                {t === "medicines" && "Prescribe Medicines"}
                {t === "chat" && "Chat"}
              </button>
            ))}
          </div>

          {/* ================= PROFILE TAB ================= */}
          {tab === "profile" && (
            <div className="mt-8 space-y-8">
              {/* ================= BASIC INFO ================= */}
              <div className="flex items-center gap-6 bg-white p-6 rounded-xl shadow">
                <img
                  src={
                    patient.profile
                      ? `${SERVERURL}/imgUploads/${patient.profile}`
                      : "https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
                  }
                  className="w-24 h-24 rounded-full border-2 border-[#7E57C2] object-cover"
                  alt="profile"
                />

                <div>
                  <h2 className="text-2xl font-bold text-[#1E142F]">
                    {patient.username}
                  </h2>
                  <p className="text-[#5E35B1]">
                    Phone Number: {patient.number || "N/A"}
                  </p>
                  <p className="text-[#5E35B1]">Email: {patient.email}</p>
                </div>
              </div>

              {/* ================= BASIC DETAILS ================= */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow">
                <div>
                  <label className="font-semibold">Name</label>
                  <input
                    value={patient.username}
                    readOnly
                    className="w-full p-2 mt-1 bg-gray-200 rounded"
                  />
                </div>

                <div>
                  <label className="font-semibold">Phone Number</label>
                  <input
                    value={patient.number || "No Number Available"}
                    readOnly
                    className="w-full p-2 mt-1 bg-gray-200 rounded"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="font-semibold">
                    Appointment Date & Time
                  </label>
                  <input
                    value={`${appointment.date} • ${appointment.time}`}
                    readOnly
                    className="w-full p-2 mt-1 bg-gray-200 rounded"
                  />
                </div>
              </div>

              {/* =================Editable HEALTH STATUS  ================= */}
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-4 text-[#1E142F]">
                  Edit Patient Health Status
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    ["Blood Group", "bloodGroup"],
                    ["Height (cm)", "height"],
                    ["Weight (kg)", "weight"],
                    ["Allergies", "allergies"],
                    ["Chronic Conditions", "conditions"],
                    ["Current Medications", "medications"],
                  ].map(([label, key]) => (
                    <div key={key}>
                      <label className="font-semibold text-[#5E35B1]">
                        {label}
                      </label>
                      <input
                        className="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-[#7E57C2]"
                        value={health[key]}
                        onChange={(e) =>
                          setHealth({ ...health, [key]: e.target.value })
                        }
                      />
                    </div>
                  ))}

                  {/* Lifestyle */}
                  <div>
                    <label className="font-semibold text-[#5E35B1]">
                      Smoking
                    </label>
                    <select
                      className="w-full mt-1 p-2 border rounded"
                      value={health.smoking}
                      onChange={(e) =>
                        setHealth({ ...health, smoking: e.target.value })
                      }
                    >
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-semibold text-[#5E35B1]">
                      Alcohol Consumption
                    </label>
                    <select
                      className="w-full mt-1 p-2 border rounded"
                      value={health.alcohol}
                      onChange={(e) =>
                        setHealth({ ...health, alcohol: e.target.value })
                      }
                    >
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button  onClick={handleSaveHealth} className="bg-[#7E57C2] text-white px-6 py-2 rounded-lg hover:bg-[#5E35B1]">
                    Save Health Status
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ================= MEDICINE TAB (UNCHANGED) ================= */}
          {tab === "medicines" && (
            <p className="mt-8 text-center">Medicine UI stays same</p>
          )}

          {/* ================= CHAT TAB (UNCHANGED) ================= */}
          {tab === "chat" && (
            <p className="mt-8 text-center">Chat UI stays same</p>
          )}
        </div>
      </div>

      <Footer2 />
    </>
  );
}

export default PatientCard;
