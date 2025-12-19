import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function DoctorHeader() {
  const navigate = useNavigate()

  const handleLogout = () => {
      // sessionStorage.removeItem("token");
      // sessionStorage.removeItem("existingUser");
      sessionStorage.clear();
  
      // setToken("");
      // setAvatar(DEFAULT_AVATAR);
  
      navigate("/");
    };
  const [listStatus, setlistStatus] = useState(false);
  return (
    <>
      <div className="grid grid-cols-3 p-3 bg-[#FAF7FF]">
        {/* logo */}
        <div className="flex items-center">
          <img
            width={"50px"}
            height={"50px"}
            src="https://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/hospital-bed-icon.png"
            alt=""
          />
          <h1 className="font-bold text-2xl ms-2 md:hidden text-[#5E35B1]">MEDIPULSE</h1>
        </div>
        {/* title */}
        <div className="md:flex justify-center items-center hidden">
          <h1 className="text-3xl font-bold text-[#7E57C2]">MEDIPULSE</h1>
        </div>
        {/* social + login */}
        <div className="md:flex justify-end items-center hidden text-[#1E142F]">
          
            <button onClick={handleLogout} className="flex justify-between gap-2 items-center border border-[#7E57C2] rounded px-3 py-2 ms-3 hover:bg-[#7E57C2] hover:text-white transition">
              <IoPersonOutline /> LOGOUT
            </button>
        </div>
      </div>

      <nav className="w-full bg-[#7E57C2] p-5 text-white">
        <div className="flex justify-between items-center md:hidden">
          <button onClick={() => setlistStatus(!listStatus)}>
            <TiThMenu className="2xl text-white" />
          </button>
            <button onClick={handleLogout} className="flex justify-between items-center gap-2 border border-white rounded px-3 py-2 ms-3 hover:bg-white hover:text-[#7E57C2] transition">
              <IoPersonOutline /> LOGOUT
            </button>
        </div>
        <ul
          className={
            listStatus
              ? "flex flex-col bg-[#7E57C2] text-white p-3 rounded-lg"
              : "md:flex justify-center items-center hidden"
          }
        >
          <li className="md:mx-4 mt-3 md:mt-0">
            <Link to={"/doctorprofile"} className="hover:text-[#D1C4E9]">Profile</Link>
          </li>
          <li className="md:mx-4 mt-3 md:mt-0">
            <Link to={"/doctorappo"} className="hover:text-[#D1C4E9]">Appointments</Link>
          </li>
          <li className="md:mx-4 mt-3 md:mt-0">
            <Link to={"/doctorcontact"} className="hover:text-[#D1C4E9]">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="w-full bg-[#D1C4E9] py-2 overflow-hidden">
        <motion.h2
          initial={{ x: "100%" }}
          animate={{ x: "-110%" }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="text-xl font-semibold whitespace-nowrap text-[#1E142F] px-5"
        >
          Reliable patient care begins with trust, compassion, and timely support from skilled medical professionals. Every appointment offers an opportunity to ensure comfort and clarity.
        </motion.h2>
      </div>
    </>
  );
}

export default DoctorHeader;
