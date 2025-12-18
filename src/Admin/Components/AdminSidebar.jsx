import React from "react";
import { FaHome } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { FaCalendarPlus } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <>
      <div
        className="w-full md:min-h-screen flex items-center flex-col  
        bg-[#FAF7FF] border-r-4 border-[#EDE7F6]"
      >
        {/* Profile Image */}
        <div className="my-10">
          <img
            src="https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png"
            alt="profile image"
            style={{
              width: "170px",
              height: "170px",
              borderRadius: "50%",
              border: "4px solid #7E57C2",
            }}
          />
        </div>

        {/* Username */}
        <h1 className="text-2xl mb-10 text-[#5E35B1] font-semibold">
          Medipulse Admin
        </h1>

        {/* Menu */}
        <div className="mb-10 w-full px-6 text-[#1E142F]">
          <div className="mb-4 flex hover:bg-[#EDE7F6] p-2 rounded-lg transition">
            <Link to={"/adminhome"} className="flex ms-3">
              <FaHome className="mt-1 me-2 text-[#7E57C2]" /> Home
            </Link>
          </div>

          <div className="mb-4 flex hover:bg-[#EDE7F6] p-2 rounded-lg transition">
            <Link to={"/medicines"} className="flex ms-3">
              <GiMedicines className="mt-1 me-2 text-[#7E57C2]" /> Manage
              Medicines
            </Link>
          </div>

          <div className="mb-4 flex hover:bg-[#EDE7F6] p-2 rounded-lg transition">
            <Link to={"/appointments"} className="flex ms-3">
              <FaCalendarPlus className="mt-1 me-2 text-[#7E57C2]" />{" "}
              Appointments
            </Link>
          </div>

          <div className="mb-4 flex hover:bg-[#EDE7F6] p-2 rounded-lg transition">
            <Link to={"/docprofiles"} className="flex ms-3">
              <FaUserDoctor className="mt-1 me-2 text-[#7E57C2]" /> Doctors
            </Link>
          </div>

          <div className="mb-4 flex hover:bg-[#EDE7F6] p-2 rounded-lg transition">
            <Link to={"/messages"} className="flex ms-3">
              <TiMessages className="mt-1 me-2 text-[#7E57C2]" /> Messages
            </Link>
          </div>

          <div className="mb-4 flex hover:bg-[#EDE7F6] p-2 rounded-lg transition">
            <Link to={"/adminsettings"} className="flex ms-3">
              <IoSettings className="mt-1 me-2 text-[#7E57C2]" /> Settings
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;
