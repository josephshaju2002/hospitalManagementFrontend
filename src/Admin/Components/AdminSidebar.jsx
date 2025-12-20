import React, { useContext, useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { FaCalendarPlus } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";
import SERVERURL from "../../services/serverURL";
import { adminProfileUpdate } from "../../context/ContextShare";

function AdminSidebar() {
  const DEFAULT_AVATAR =
    "https://cdn-icons-png.flaticon.com/512/2922/2922510.png";

  const { adminProfileStatus } = useContext(adminProfileUpdate);

  const [admin, setAdmin] = useState({
    username: "Admin",
    profile: "",
  });

  /* ================= INITIAL LOAD ================= */
  useEffect(() => {
    const storedAdmin = JSON.parse(sessionStorage.getItem("existingUser"));
    if (storedAdmin && storedAdmin.role === "admin") {
      setAdmin(storedAdmin);
    }
  }, []);

  /* ================= UPDATE WHEN CONTEXT CHANGES ================= */
  useEffect(() => {
    if (adminProfileStatus?.data) {
      setAdmin(adminProfileStatus.data);
    }
  }, [adminProfileStatus]);

  return (
    <div
      className="w-full md:min-h-screen flex items-center flex-col  
      bg-[#FAF7FF] border-r-4 border-[#EDE7F6]"
    >
      {/* Profile Image */}
      <div className="my-10">
        <img
          src={
            admin.profile
              ? `${SERVERURL}/imgUploads/${admin.profile}`
              : DEFAULT_AVATAR
          }
          alt="profile image"
          className="w-[170px] h-[170px] rounded-full border-4 border-[#7E57C2] object-cover"
        />
      </div>

      {/* Username */}
      <h1 className="text-2xl mb-10 text-[#5E35B1] font-semibold">
        {admin.username}
      </h1>

      {/* Menu */}
      <div className="mb-10 w-full px-6 text-[#1E142F]">
        <MenuItem to="/adminhome" icon={<FaHome />} label="Home" />
        <MenuItem to="/medicines" icon={<GiMedicines />} label="Manage Medicines" />
        <MenuItem to="/appointments" icon={<FaCalendarPlus />} label="Appointments" />
        <MenuItem to="/docprofiles" icon={<FaUserDoctor />} label="Doctors" />
        <MenuItem to="/messages" icon={<TiMessages />} label="Messages" />
        <MenuItem to="/adminsettings" icon={<IoSettings />} label="Settings" />
      </div>
    </div>
  );
}

/* ===== Reusable Menu Item ===== */
const MenuItem = ({ to, icon, label }) => (
  <div className="mb-4 flex hover:bg-[#EDE7F6] p-2 rounded-lg transition">
    <Link to={to} className="flex ms-3 items-center">
      <span className="me-2 text-[#7E57C2]">{icon}</span>
      {label}
    </Link>
  </div>
);

export default AdminSidebar;
