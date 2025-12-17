import React, { useEffect, useState } from "react";
import { FaUserMd, FaPills, FaUser, FaComments } from "react-icons/fa";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";
import { getMyAppointmentsAPI } from "../../services/allAPI";
import SERVERURL from "../../services/serverURL";
import { toast } from "react-toastify";

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [openModal, setOpenModal] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  /* ================= FETCH APPOINTMENTS ================= */
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const token = sessionStorage.getItem("token");

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const res = await getMyAppointmentsAPI(reqHeader);

      if (res.status === 200) {
        setAppointments(res.data.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load appointments");
    }
  };

  const open = (type, appointment) => {
    setSelectedAppointment(appointment);
    setOpenModal(type);
  };

  const close = () => {
    setOpenModal(null);
    setSelectedAppointment(null);
  };

  return (
    <>
      <Header />

      <div className="bg-[#FAF7FF] p-6 md:p-10 text-[#1E142F]">
        {/* Header */}
        <div className="bg-[#7E57C2] text-white p-8 rounded-xl shadow mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-3">
            <FaUserMd /> My Appointments
          </h1>
          <p className="mt-2 text-lg">
            View all your booked doctor consultations.
          </p>
        </div>

        {/* Appointment List */}
        {appointments.length === 0 ? (
          <p className="text-center text-gray-600">No appointments found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appointments.map((item) => (
              <div
                key={item._id}
                className="bg-white p-6 rounded-xl shadow border hover:shadow-2xl transition"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={
                      item.doctorId?.photo
                        ? `${SERVERURL}/imgUploads/${item.doctorId.photo}`
                        : "https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
                    }
                    alt="doctor"
                    className="w-20 h-20 rounded-full object-cover"
                  />

                  <div>
                    <h2 className="text-xl font-bold">
                      Dr. {item.doctorId?.name}
                    </h2>
                    <p className="text-[#7E57C2] font-semibold">
                      {item.doctorId?.specialization}
                    </p>
                    <p className="text-gray-600 mt-1">
                      {item.date} • {item.time}
                    </p>
                    <span className="text-sm text-green-600 font-semibold">
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <button
                    className="flex items-center justify-center gap-2 bg-[#9575CD] hover:bg-[#7E57C2] text-white py-2 rounded-lg"
                    onClick={() => open("medicine", item)}
                  >
                    <FaPills /> Medicines
                  </button>

                  <button
                    className="flex items-center justify-center gap-2 bg-[#D1C4E9] hover:bg-[#C5B1E5] text-[#1E142F] py-2 rounded-lg"
                    onClick={() => open("profile", item)}
                  >
                    <FaUser /> Profile
                  </button>

                  <button
                    className="flex items-center justify-center gap-2 bg-[#7E57C2] hover:bg-[#5E35B1] text-white py-2 rounded-lg"
                    onClick={() => open("chat", item)}
                  >
                    <FaComments /> Chat
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= MODALS (UI ONLY FOR NOW) ================= */}

      {openModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-5 z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-bold text-[#7E57C2] mb-4 capitalize">
              {openModal}
            </h2>

            <p className="text-gray-700">
              Feature coming soon 🚀
            </p>

            <button
              className="mt-6 w-full bg-[#7E57C2] text-white py-2 rounded-lg"
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
