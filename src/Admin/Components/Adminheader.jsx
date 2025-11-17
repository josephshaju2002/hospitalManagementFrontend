import React from 'react'
import { Link } from 'react-router-dom'
import { FaPowerOff } from "react-icons/fa";

function AdminHeader() {
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
        {/* login */}
        <div className='md:flex justify-end items-center hidden'>
            <Link to={"/login"}><button className='flex justify-between gap-2 items-center border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'><FaPowerOff /> Logout</button></Link>

        </div>
        <div className='md:hidden flex justify-end'>
          <Link to={"/login"}><button className='flex justify-between gap-2 items-center border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'><FaPowerOff /> Logout</button></Link>
        </div>
      </div>
      <hr /><hr /><hr />
      <hr /><hr /><hr />
    </>
  )
}

export default AdminHeader
