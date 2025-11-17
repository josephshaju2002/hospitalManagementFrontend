import React from 'react'
import { FaHome } from "react-icons/fa";
import { PiBooks } from "react-icons/pi";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { GiMedicines } from "react-icons/gi";
import { FaCalendarPlus } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";




function AdminSidebar() {
  return (
    <>
      <div className="bg-gray-200 w-full md:min-h-screen flex items-center flex-col">
        <div className='my-10'>
            <img src="https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png" alt="profile image" style={{width:"170px", height:"170px", borderRadius:"50%"}}/>
        </div>
        <h1 className='text-2xl mb-10'>Joseph Shaju</h1>
        <div className="mb-10">
            <div className="mb-4 flex">
                {/* <input type="radio" id='home' readOnly/> */}
                <Link to={"/adminhome"}><label htmlFor="home" className='flex ms-3'><FaHome className='mt-1 me-1'/>Home</label></Link>
            </div>
            <div className="mb-4 flex">
                {/* <input type="radio" id='books' readOnly/> */}
                <Link to={"/medicines"}><label htmlFor="medicines" className='flex ms-3'><GiMedicines  className='mt-1 me-1'/>Manage Medicines</label></Link>
            </div>
            <div className="mb-4 flex">
                {/* <input type="radio" id='careers' readOnly/> */}
                <Link to={"/appointments"}><label htmlFor="appointments" className='flex ms-3'><FaCalendarPlus className='mt-1 me-1'/>Appointments</label></Link>
            </div>
             <div className="mb-4 flex">
                {/* <input type="radio" id='careers' readOnly/> */}
                <Link to={"/docprofiles"}><label htmlFor="Doctors" className='flex ms-3'><FaUserDoctor className='mt-1 me-1'/>Doctors</label></Link>
            </div>
            <div className="mb-4 flex">
                {/* <input type="radio" id='careers' readOnly/> */}
                <Link to={"/messages"}><label htmlFor="messages" className='flex ms-3'><TiMessages  className='mt-1 me-1'/>Messages</label></Link>
            </div>
            <div className="mb-4 flex">
                {/* <input type="radio" id='settings' readOnly/> */}
                <Link to={"/adminsettings"}><label htmlFor="settings" className='flex ms-3'><IoSettings  className='mt-1 me-1'/>Settings</label></Link>
            </div>
        </div>

       
      </div>
    </>
  )
}

export default AdminSidebar



