import React from 'react'
import { GiHospitalCross } from "react-icons/gi";


function Footer2() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-6">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

    {/* Logo / Title */}
    <div className='flex'>
        <GiHospitalCross className='text-white text-4xl me-3'/>
        <h2 className="text-xl font-semibold tracking-wide">
          MEDIPULSE
        </h2>
    </div>

   

    {/* Copyright */}
    <p className="text-gray-400 text-sm">
      © {new Date().getFullYear()} Medipulse. All Rights Reserved.
    </p>
  </div>
</footer>

    </>
  )
}

export default Footer2
