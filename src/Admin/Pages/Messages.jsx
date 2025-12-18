import React, { useEffect, useState } from "react";
import AdminHeader from "../Components/Adminheader";
import AdminSidebar from "../Components/AdminSidebar";
import Footer2 from "../../Common/Components/Footer2";
import {
  getDoctorMessagesAPI,
  getUserMessagesAPI,
  deleteMessageAPI,
} from "../../services/allAPI";
import { toast } from "react-toastify";

function Messages() {
  const [doctorMessage, setDoctorMessage] = useState(true);
  const [userMessage, setUserMessage] = useState(false);
  const [messages, setMessages] = useState([]);

  const token = sessionStorage.getItem("token");

  const reqHeader = {
    Authorization: `Bearer ${token}`,
  };

  // fetch doctor messages
  const fetchDoctorMessages = async () => {
    try {
      const res = await getDoctorMessagesAPI(reqHeader);
      if (res.status === 200) {
        setMessages(res.data);
      }
    } catch (error) {
      toast.error("Failed to load doctor messages");
    }
  };

  // fetch user messages
  const fetchUserMessages = async () => {
    try {
      const res = await getUserMessagesAPI(reqHeader);
      if (res.status === 200) {
        setMessages(res.data);
      }
    } catch (error) {
      toast.error("Failed to load user messages");
    }
  };

  // 🗑 delete message
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;

    try {
      const res = await deleteMessageAPI(id, reqHeader);
      if (res.status === 200) {
        toast.success("Message deleted");
        doctorMessage ? fetchDoctorMessages() : fetchUserMessages();
      }
    } catch (error) {
      toast.error("Failed to delete message");
    }
  };

  useEffect(() => {
    doctorMessage && fetchDoctorMessages();
    userMessage && fetchUserMessages();
  }, [doctorMessage, userMessage]);

  return (
    <>
      <AdminHeader />

      <div className="md:grid grid-cols-[1fr_4fr]">
        <AdminSidebar />

        <div className="m-10 bg-[#FAF7FF] p-6 rounded-xl">
          <h1 className="text-center text-3xl font-bold text-[#1E142F]">
            All Messages
          </h1>

          {/* Tabs */}
          <div className="flex justify-center items-center my-8 font-medium">
            <p
              onClick={() => {
                setUserMessage(false);
                setDoctorMessage(true);
              }}
              className={`p-4 border cursor-pointer rounded-t-lg ${
                doctorMessage
                  ? "bg-[#D1C4E9] text-[#5E35B1]"
                  : "bg-[#EDE7F6]"
              }`}
            >
              Doctor Messages
            </p>

            <p
              onClick={() => {
                setUserMessage(true);
                setDoctorMessage(false);
              }}
              className={`p-4 border cursor-pointer rounded-t-lg ${
                userMessage
                  ? "bg-[#D1C4E9] text-[#5E35B1]"
                  : "bg-[#EDE7F6]"
              }`}
            >
              User Messages
            </p>
          </div>

          {/* Messages */}
          <div className="bg-[#EDE7F6] p-6 rounded-b-xl shadow space-y-4">
            {messages.length === 0 ? (
              <p className="text-center text-gray-600">No messages found</p>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg._id}
                  className="bg-white p-4 rounded-lg shadow border-l-4 border-[#7E57C2]"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">{msg.subject}</h2>
                    <button
                      onClick={() => handleDelete(msg._id)}
                      className="text-red-600 text-sm hover:underline"
                    >
                      Delete
                    </button>
                  </div>

                  <p className="text-sm mt-1">
                    <strong>Name:</strong> {msg.name}
                  </p>
                  <p className="text-sm">
                    <strong>Email:</strong> {msg.email}
                  </p>

                  <p className="mt-3 text-gray-800">{msg.message}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <Footer2 />
    </>
  );
}

export default Messages;
