import React, { useState } from "react";
import { FaUserMd, FaPills, FaUser, FaComments } from "react-icons/fa";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";

// Dummy backend data (From Doctor)
const prescribedData = {
  1: ["Aspirin 75mg", "Atorvastatin 20mg", "Vitamin D3"],
  2: ["Skin Ointment A", "Aloe Vera Gel", "Cetirizine 10mg"],
};

// Dummy Patient Profiles Updated by Doctor
const patientProfiles = {
  1: { name: "Joseph Shaju", age: 22, condition: "Chest pain", note: "Follow low-salt diet" },
  2: { name: "Joseph Shaju", age: 22, condition: "Skin allergy", note: "Avoid harsh soaps" },
};

// Dummy chat (UI Only)
const dummyChat = [
  { sender: "doctor", msg: "Hello, how are you feeling now?" },
  { sender: "patient", msg: "I'm feeling better, doctor." }
];

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
  const [openModal, setOpenModal] = useState(null); // medicine, chat, profile
  const [selectedId, setSelectedId] = useState(null);

  const open = (type, id) => {
    setSelectedId(id);
    setOpenModal(type);
  };

  const close = () => {
    setOpenModal(null);
    setSelectedId(null);
  };

  return (
    <>
      <Header />

      <div className="bg-[#FAF7FF] p-6 md:p-10 text-[#1E142F]">

        {/* Header Section */}
        <div className="bg-[#7E57C2] text-white p-8 rounded-xl shadow mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-3">
            <FaUserMd /> My Appointments
          </h1>
          <p className="mt-2 text-lg">View all your booked doctor consultations.</p>
        </div>

        {/* Appointment List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {appointmentsData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-xl shadow border border-[#EDE7F6] hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center gap-5">
                <img src={item.image} alt="doctor" className="w-20 h-20 rounded-full" />
                <div>
                  <h2 className="text-xl font-bold">{item.doctor}</h2>
                  <p className="text-[#7E57C2] font-semibold">{item.specialization}</p>
                  <p className="text-gray-600 mt-1">{item.date} • {item.time}</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">

                <button
                  className="flex items-center justify-center gap-2 bg-[#9575CD] hover:bg-[#7E57C2] text-white py-2 rounded-lg shadow"
                  onClick={() => open("medicine", item.id)}
                >
                  <FaPills /> Medicines
                </button>

                <button
                  className="flex items-center justify-center gap-2 bg-[#D1C4E9] hover:bg-[#C5B1E5] text-[#1E142F] py-2 rounded-lg shadow"
                  onClick={() => open("profile", item.id)}
                >
                  <FaUser /> Profile
                </button>

                <button
                  className="flex items-center justify-center gap-2 bg-[#7E57C2] hover:bg-[#5E35B1] text-white py-2 rounded-lg shadow"
                  onClick={() => open("chat", item.id)}
                >
                  <FaComments /> Chat
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------ MODALS ----------------------------- */}

      {/* Medicine Modal */}
      {openModal === "medicine" && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-5 z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl relative">

            <h2 className="text-xl font-bold text-[#7E57C2]">Prescribed Medicines</h2>

            <ul className="mt-4 space-y-2">
              {prescribedData[selectedId].map((med, index) => (
                <li key={index} className="p-3 rounded bg-[#F4EDFF] border">
                  {med}
                </li>
              ))}
            </ul>

            <button
              className="mt-6 w-full bg-[#7E57C2] text-white py-2 rounded-lg"
              onClick={close}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {openModal === "profile" && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-5 z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl">

            <h2 className="text-xl font-bold text-[#7E57C2]">Patient Profile</h2>

            <div className="mt-4 space-y-2">
              <p><b>Name:</b> {patientProfiles[selectedId].name}</p>
              <p><b>Age:</b> {patientProfiles[selectedId].age}</p>
              <p><b>Condition:</b> {patientProfiles[selectedId].condition}</p>
              <p><b>Doctor Notes:</b> {patientProfiles[selectedId].note}</p>
            </div>

            <button
              className="mt-6 w-full bg-[#7E57C2] text-white py-2 rounded-lg"
              onClick={close}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Chat Modal */}
      {openModal === "chat" && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-5 z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl flex flex-col">

            <h2 className="text-xl font-bold text-[#7E57C2] mb-3">Chat with Doctor</h2>

            {/* Chat Box */}
            <div className="flex-1 overflow-y-auto border p-3 rounded-lg bg-[#FAF7FF] space-y-3">
              {dummyChat.map((chat, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg w-fit max-w-[75%] ${
                    chat.sender === "doctor"
                      ? "bg-[#D1C4E9] text-[#1E142F]"
                      : "bg-[#7E57C2] text-white ml-auto"
                  }`}
                >
                  {chat.msg}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border p-2 rounded-lg"
              />
              <button className="bg-[#7E57C2] text-white px-4 rounded-lg">
                Send
              </button>
            </div>

            <button
              className="mt-4 w-full bg-gray-300 text-black py-2 rounded-lg"
              onClick={close}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default MyAppointments;
