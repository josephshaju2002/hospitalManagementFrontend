import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="md:grid grid-cols-3 md:gap-10 p-10"
        style={{ backgroundColor: "#D1C4E9", color: "#1E142F" }}
      >
        {/* ABOUT SECTION */}
        <div>
          <h3 className='text-xl font-bold' style={{ color: "#5E35B1" }}>About Us</h3>
          <p className='text-justify mt-3'>
            MEDIPULSE is a comprehensive hospital management platform designed to
            simplify and enhance the way hospitals operate. Our mission is to connect
            patients, doctors, and healthcare services through a seamless and secure
            digital experience. From booking appointments to purchasing medicines,
            we ensure every interaction is easy, transparent, and efficient.
          </p>
        </div>

        {/* LINKS */}
        <div className='flex flex-col items-center text-center'>
          <h3 className='font-bold text-xl' style={{ color: "#5E35B1" }}>Links</h3>
          <p className='my-5'>Quick Links To Our Features</p>

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

        {/* FOLLOW US */}
        <div className='flex flex-col justify-center items-center'>
          <h3 className='font-bold text-xl' style={{ color: "#5E35B1" }}>Follow Us</h3>
          <p className='my-5'>Let Us Be Social</p>
          <div className="flex mt-4">
            <FaInstagram className='me-3 text-2xl' />
            <FaXTwitter className='me-3 text-2xl' />
            <FaFacebookSquare className='me-3 text-2xl' />
            <FaLinkedin className='text-2xl' />
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div
        className='p-3 text-center text-white'
        style={{ backgroundColor: "#5E35B1" }}
      >
        <p>
          Copyright © 2025 All rights reserved |
          This website is made with ❤️ by Joseph Shaju
        </p>
      </div>
    </>
  )
}

export default Footer
