import React, { useEffect, useState } from "react";
import { FaUserMd, FaPills, FaUser, FaComments } from "react-icons/fa";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";
import { getMyAppointmentsAPI } from "../../services/allAPI";
import { cancelAppointmentAPI } from "../../services/allAPI";
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

  const handleCancelAppointment = async (appointmentId) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );

    if (!confirmCancel) return;

    try {
      const token = sessionStorage.getItem("token");

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const res = await cancelAppointmentAPI(appointmentId, reqHeader);

      if (res.status === 200) {
        toast.success("Appointment cancelled");
        fetchAppointments();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to cancel appointment");
    }
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
                    <FaPills /> View Medicines
                  </button>

                  <button
                    className="flex items-center justify-center gap-2 bg-[#7E57C2] hover:bg-[#5E35B1] text-white py-2 rounded-lg"
                    onClick={() => open("chat", item)}
                  >
                    <FaComments /> Chat
                  </button>
                  <button
                    className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
                    onClick={() => handleCancelAppointment(item._id)}
                  >
                    Cancel
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
              Prescribed Medicines
            </h2>

            {openModal === "medicine" && (
              <>
                {selectedAppointment?.prescription?.length > 0 ? (
                  <div className="space-y-4">
                    {selectedAppointment.prescription.map((med, index) => (
                      <div
                        key={index}
                        className="border rounded-lg p-4 bg-[#EDE7F6]"
                      >
                        <p className="font-semibold text-[#5E35B1]">
                          💊 {med.medicine}
                        </p>
                        <p className="text-sm">Dosage: {med.dosage}</p>
                        <p className="text-sm">Duration: {med.duration}</p>
                        {med.notes && (
                          <p className="text-sm text-gray-600">
                            Notes: {med.notes}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 text-center">
                    No medicines prescribed yet
                  </p>
                )}
              </>
            )}

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
