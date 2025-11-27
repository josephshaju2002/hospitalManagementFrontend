import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { GiHospitalCross } from "react-icons/gi";

function Header2() {
  return (
    <div className="w-full bg-[#7E57C2] p-4 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <GiHospitalCross className="text-white text-3xl" />
          <h1 className="text-white text-xl font-bold tracking-wide">
            MEDIPULSE
          </h1>
        </div>

        {/* Right Side - Login Button */}
        <Link to="/login">
          <button className="flex items-center gap-2 bg-white text-[#5E35B1] px-5 py-2 rounded-xl shadow-md hover:bg-[#EDE7F6] transition">
            <FaSignInAlt /> Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header2;
