import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <>
      <div className="md:grid grid-cols-3 md:gap-10 bg-blue-600 text-black p-10">
        <div className="text-bold">
        <h3 className='text-xl font-bold'>About Us</h3>
        <p className='text-justify mt-3'>MEDIPULSE is a comprehensive hospital management platform designed to simplify and enhance the way hospitals operate. Our mission is to connect patients, doctors, and healthcare services through a seamless and secure digital experience. From booking appointments to purchasing medicines, we ensure that every interaction is easy, transparent, and efficient. With user-friendly tools, trusted medical information, and a focus on patient care, we aim to bring modern healthcare to your fingertips.</p>
        </div>
        <div className='flex flex-col items-center text-center'>

            <h3 className='font-bold text-xl'>Links</h3>
            <p className='my-5'>Quick Links To our Features</p>
            <div className='flex flex-col gap-2'>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/buymed"}>Buy Medicines</Link>
            <Link to={"/getappo"}>Meet The Doctor</Link>
            <Link to={"/myappo"}>My Appointments</Link>
            <Link to={"/awareness"}>Educational Videos</Link>
            <Link to={"/contact"}>Contact Us</Link>
            <Link to={"/cart"}>Cart</Link>
            </div>
        </div>
        {/* third div */}
        <div className='flex flex-col justify-center items-center'>
                <h3 className='font-bold text-xl'>Follow Us</h3>
                <p className='my-5'>Let Us Be Social</p>
                <div className="flex mt-4">
                    <FaInstagram className='me-3 text-2xl'/>
                    <FaXTwitter className='me-3 text-2xl'/>
                    <FaFacebookSquare className='me-3 text-2xl'/>
                    <FaLinkedin className='text-2xl'/>




                </div>
            </div>
      </div>
      <div className='bg-black p-3 text-center text-white'>
        <p>Copyright &#xA9; 2025 All rights reserved | This website is made with &#10084; by Joseph Shaju</p>
      </div>
    </>
  )
}

export default Footer
