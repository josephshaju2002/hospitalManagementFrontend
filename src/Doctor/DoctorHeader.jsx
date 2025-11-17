import React, { useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";




function DoctorHeader() {

    const [listStatus,setlistStatus] = useState(false)
  return (
    <>
      <div className="grid grid-cols-3 p-3">
        {/* logo */}
        <div className='flex items-center'>
            <img width={"50px"} height={"50px"} src="https://static.vecteezy.com/system/resources/thumbnails/002/610/084/small/cross-symbol-healthcare-medical-and-hospital-pictogram-silhouette-style-icon-free-vector.jpg" alt="" />
            <h1 className='font-bold text-2xl ms-2 md:hidden'>MEDIPULSE</h1>
        </div>
        {/* title */}
        <div className='md:flex justify-center items-center hidden'>
            <h1 className='text-3xl font-bold'>MEDIPULSE</h1>

        </div>
        {/* logo */}
        <div className='md:flex justify-end items-center hidden'>
            <FaInstagram className='me-3 text-2xl'/>
            <FaXTwitter className='me-3 text-2xl'/>
            <FaFacebookSquare className='me-3 text-2xl'/>
            <Link to={"/login"}><button className='flex justify-between gap-2 items-center border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'><IoPersonOutline /> Login</button></Link>

        </div>
      </div>
      <nav className='w-full bg-gray-900 p-5 text-white'>
        <div className='flex justify-between items-center md:hidden'>
            <button onClick={()=>setlistStatus(!listStatus)}><TiThMenu className='2xl'/></button>
            <Link to={"/login"}><button className='flex justify-between items-center gap-2 border border-white rounded px-3 py-2 ms-3 hover:bg-white hover:text-black'><IoPersonOutline /> Login</button></Link>
        </div>
        <ul className={listStatus ? "flex flex-col" : 'md:flex justify-center items-center hidden'}>
            <li className='md:mx-4 mt-3 md:mt-0'><Link to={"/doctorprofile"}>Profile</Link></li>
            <li className='md:mx-4 mt-3 md:mt-0'><Link to={"/doctorappo"} >Appointments</Link></li>
            <li className='md:mx-4 mt-3 md:mt-0'><Link to={"/patientcard"} >PatientCards</Link></li>
            <li className='md:mx-4 mt-3 md:mt-0'><Link to={"/doctorcontact"} >Contact</Link></li>
        </ul>

      </nav>
    </>
  )
}

export default DoctorHeader
