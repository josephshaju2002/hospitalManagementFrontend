import React, { useEffect, useState } from "react";
import socket from "../SocketChat";

function ChatBox({ appointmentId, user }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const normalizedRole = user.role === "user" ? "patient" : user.role;


  /* ================= JOIN ROOM ================= */
  useEffect(() => {
    socket.emit("joinRoom", { appointmentId });

    socket.on("chatHistory", (history) => {
      setMessages(history);
    });

    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("chatHistory");
      socket.off("receiveMessage");
    };
  }, [appointmentId]);

  /* ================= SEND MESSAGE ================= */
  const sendMessage = () => {
    if (!message.trim()) return;

    socket.emit("sendMessage", {
      appointmentId,
      sender: {
        _id: user._id,
    role: user.role === "user" ? "patient" : user.role,
      },
      message,
    });

    setMessage("");
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow h-[400px] flex flex-col">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-[70%] ${
              msg.senderRole === normalizedRole
                ? "bg-[#7E57C2] text-white ml-auto"
                : "bg-gray-200"
            }`}
          >
            <p className="text-sm">{msg.message}</p>
            <p className="text-xs opacity-70">
              {new Date(msg.createdAt).toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex mt-3 gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border rounded-lg p-2"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-[#7E57C2] text-white px-4 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
