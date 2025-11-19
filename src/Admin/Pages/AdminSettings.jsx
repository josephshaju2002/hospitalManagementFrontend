import React from 'react'

import { FaEdit } from "react-icons/fa";
import AdminHeader from '../Components/Adminheader';
import AdminSidebar from '../Components/AdminSidebar';
import Footer2 from '../../Common/Components/Footer2';

function AdminSettings() {
  return (
    <>
      <AdminHeader/>
      <div className="md:grid grid-cols-[1fr_4fr]">
        <div>
          <AdminSidebar/>
        </div>
        <div className="p-4">
          <h1 className='text-3xl text-center font-semibold my-10'>Settings</h1>
          <div className="md:grid grid-cols-2 mt-10">
            <div className='md:px-20 px-5'>
             <p className='text-justify'>The admin can add new medicines, update existing details, delete expired items, and maintain the complete medicine inventory. This ensures that the pharmacy database is always accurate and up-to-date. <br /><br />
             Admins can view all suggestions and feedback submitted by patients and doctors. This helps in understanding service quality, identifying issues, and improving the overall hospital experience. <br /><br />
             All patient appointments made through the system can be viewed here. The admin can monitor schedules, doctor availability, and appointment statuses to ensure smooth daily operations. <br /><br />
             The admin can access detailed profiles of all registered doctors. This includes their specialization, experience, availability, and other professional information, allowing better management of medical staff.</p>
            </div>
            <div className='md:px-20 px-5'>
              <form className='bg-blue-200 md:p-10 p-5 rounded my-10 md:my-0' action="">
                <div className="flex justify-center items-center my-10">
                  <label htmlFor="edituserprofile">
                    <input type="file" id='edituserprofile' style={{display:"none"}} />
                    <img src="https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png" alt="profile image" style={{width:"170px", height:"170px", borderRadius:"50%"}}/>
                  </label>
                  

                </div>
                <div>
                    <div className="mb-3">
                      <label htmlFor="">UserName</label>
                      <input type="text" placeholder='Username' className='bg-white rounded w-full p-2'/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="">Password</label>
                      <input type="text" placeholder='Password' className='bg-white rounded w-full p-2'/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="">Confirm Password</label>
                      <input type="text" placeholder='Confirm Password' className='bg-white rounded w-full p-2'/>
                    </div>
                    <div className="flex justify-between mt-10">
                      <button className='bg-amber-600 text-white rounded p-4 w-1/2 hover:border hover:border-amber-600 hover:text-amber-600 hover:bg-white'>Reset</button>
                       <button className='bg-green-600 text-white rounded p-4 w-1/2 hover:border hover:border-green-600 hover:text-green-600 hover:bg-white ms-3'>Update</button>
                    </div>
                  </div>
              </form>
            </div>

          </div>
        </div>
      </div>
      <Footer2/>
    </>
  )
}

export default AdminSettings
