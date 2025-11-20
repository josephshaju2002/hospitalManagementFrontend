import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { GiHospitalCross } from "react-icons/gi";

function Header2() {
  return (
    <div className="w-full bg-blue-600 p-4 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <GiHospitalCross className="text-white text-3xl " />

          <h1 className="text-white text-xl font-bold">MEDIPULSE</h1>
        </div>

        {/* Right Side - Login Button */}
        <Link to="/login">
          <button className="flex items-center gap-2 bg-white text-blue-600 px-5 py-2 rounded-lg shadow hover:bg-gray-100">
            <FaSignInAlt /> Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header2;
