import React, { useState } from 'react';
import AdminHeader from '../Components/Adminheader';
import AdminSidebar from '../Components/AdminSidebar';
import Footer2 from '../../Common/Components/Footer2';

function Messages() {
  const [doctorMessage, setDoctorMessage] = useState(true);
  const [userMessage, setUserMessage] = useState(false);

  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-[1fr_4fr]">
        <div>
          <AdminSidebar />
        </div>
        <div className='m-10 bg-[#FAF7FF] p-6 rounded-xl'>
          <h1 className='text-center text-3xl font-bold text-[#1E142F]'>All Messages</h1>

          {/* Tabs */}
          <div className='flex justify-center items-center my-8 font-medium'>
            <p
              onClick={() => { setUserMessage(false); setDoctorMessage(true); }}
              className={`p-4 border border-gray-200 cursor-pointer rounded-t-lg ${
                doctorMessage ? 'bg-[#D1C4E9] text-[#5E35B1] border-[#7E57C2]' : 'bg-[#EDE7F6] text-[#1E142F]'
              }`}
            >
              Doctor Messages
            </p>
            <p
              onClick={() => { setUserMessage(true); setDoctorMessage(false); }}
              className={`p-4 border border-gray-200 cursor-pointer rounded-t-lg ${
                userMessage ? 'bg-[#D1C4E9] text-[#5E35B1] border-[#7E57C2]' : 'bg-[#EDE7F6] text-[#1E142F]'
              }`}
            >
              User Messages
            </p>
          </div>

          {/* Content */}
          <div className='bg-[#EDE7F6] p-6 rounded-b-xl shadow'>
            {doctorMessage && <h1 className='text-[#1E142F] text-xl font-semibold'>Doctor Messages</h1>}
            {userMessage && <h1 className='text-[#1E142F] text-xl font-semibold'>User Messages</h1>}
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
}

export default Messages;
