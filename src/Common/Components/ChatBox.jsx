import React, { useEffect, useState } from "react";
import socket from "../SocketChat";

function ChatBox({ appointmentId, user }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  /* ================= JOIN ROOM ================= */
  useEffect(() => {
    socket.emit("joinRoom", { appointmentId });

    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [appointmentId]);

  /* ================= SEND MESSAGE ================= */
  const sendMessage = () => {
    if (!message.trim()) return;

    const data = {
      appointmentId,
      sender: user.role, // "doctor" or "patient"
      senderName: user.username,
      text: message,
      time: new Date().toLocaleTimeString(),
    };

    socket.emit("sendMessage", data);
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
              msg.sender === user.role
                ? "bg-[#7E57C2] text-white ml-auto"
                : "bg-gray-200"
            }`}
          >
            <p className="text-sm">{msg.text}</p>
            <p className="text-xs opacity-70">{msg.time}</p>
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
