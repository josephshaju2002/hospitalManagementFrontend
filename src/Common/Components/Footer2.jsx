import React from 'react'
import { GiHospitalCross } from "react-icons/gi";

function Footer2() {
  return (
    <>
      <footer className="bg-[#7E57C2] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Logo / Title */}
          <div className='flex items-center'>
            <GiHospitalCross className='text-white text-4xl me-3'/>
            <h2 className="text-xl font-semibold tracking-wide">
              MEDIPULSE
            </h2>
          </div>

          {/* Copyright */}
          <p className="text-[#D1C4E9] text-sm">
            © {new Date().getFullYear()} Medipulse. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer2
