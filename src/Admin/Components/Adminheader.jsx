import React from 'react'
import { Link } from 'react-router-dom'
import { FaPowerOff } from "react-icons/fa";

function AdminHeader() {
  return (
    <>
      <div className="grid grid-cols-3 p-3 bg-[#FAF7FF] shadow-md">

        {/* logo */}
        <div className="flex items-center">
          <img
            width={"50px"}
            height={"50px"}
            src="https://static.vecteezy.com/system/resources/thumbnails/002/610/084/small/cross-symbol-healthcare-medical-and-hospital-pictogram-silhouette-style-icon-free-vector.jpg"
            alt=""
            className="rounded-full border-2 border-[#7E57C2]"
          />
          <h1 className="font-bold text-2xl ms-2 md:hidden text-[#5E35B1]">
            MEDIPULSE
          </h1>
        </div>

        {/* title */}
        <div className="md:flex justify-center items-center hidden">
          <h1 className="text-3xl font-bold text-[#5E35B1]">
            MEDIPULSE
          </h1>
        </div>

        {/* logout */}
        <div className="md:flex justify-end items-center hidden">
          <Link to={"/login"}>
            <button className="flex justify-between gap-2 items-center 
              border border-[#5E35B1] text-[#5E35B1] rounded px-3 py-2 ms-3 
              hover:bg-[#5E35B1] hover:text-white transition">
              <FaPowerOff /> Logout
            </button>
          </Link>
        </div>

        {/* mobile logout */}
        <div className="md:hidden flex justify-end col-span-3">
          <Link to={"/login"}>
            <button className="flex justify-between gap-2 items-center 
              border border-[#5E35B1] text-[#5E35B1] rounded px-3 py-2 ms-3 
              hover:bg-[#5E35B1] hover:text-white transition">
              <FaPowerOff /> Logout
            </button>
          </Link>
        </div>

      </div>

      {/* divider */}
      <hr className="border-[#7E57C5]" />
      <hr className="border-[#7E57C5]" />
      <hr className="border-[#7E57C5]" />
      <hr className="border-[#7E57C5]" />
      <hr className="border-[#7E57C5]" />
      <hr className="border-[#7E57C5]" />
      <hr className="border-[#7E57C5]" />
      <hr className="border-[#7E57C5]" />
      <hr className="border-[#7E57C5]" />
      <hr className="border-[#7E57C5]" />
      <hr className="border-[#7E57C5]" />
      <hr className="border-[#7E57C5]" />
    </>
  )
}

export default AdminHeader
