import React, { useState } from 'react'
import AdminHeader from '../Components/Adminheader'
import AdminSidebar from '../Components/AdminSidebar'
import Footer2 from '../../Common/Components/Footer2'


function Messages() {

  const [doctorMessage,setDoctorMessage] = useState(true)
  const [userMessage,setUserMessage] = useState(false)
  return (
    <>
      <AdminHeader/>
      <div className="md:grid grid-cols-[1fr_4fr]">
        <div>
          <AdminSidebar/>
        </div>
        <div className='m-10'>
          <h1 className='text-center text-3xl font-bold'>All Messages</h1>
          {/* tabs */}
          <div className='flex justify-center items-center my-8 font-medium'>
            <p onClick={()=>{setUserMessage(false),setDoctorMessage(true)}} className={doctorMessage?'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border border-gray-200 cursor-pointer'}>Doctor Messages</p>
            <p onClick={()=>{setUserMessage(true),setDoctorMessage(false)}} className={userMessage?'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border border-gray-200 cursor-pointer'}>User Messages</p>
          </div>

         {doctorMessage && 
          <h1>Doctor Messages</h1>
          }

          

          {userMessage && 
          <h1>User Messages</h1>
          }
        </div>
      </div>
      <Footer2/>
    </>
  )
}

export default Messages
