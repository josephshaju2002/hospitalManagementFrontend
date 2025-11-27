import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";

function Contactus() {
  return (
    <>
      <Header />

      <section className="bg-[#FAF7FF] px-6 md:px-20 py-10 text-[#1E142F]">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#5E35B1] text-center my-10">
          Contact Us
        </h1>

        {/* Description */}
        <p className="md:w-3/4 mx-auto text-center text-gray-700 leading-relaxed">
          At our hospital, your health and satisfaction are our top priorities.
          If you have questions, need support, or want to know more about our
          services, we’re here to help. <br />
          Our team is always ready to assist you with appointments, medical
          inquiries, or general information.
        </p>

        {/* Contact Options */}
        <div className="md:grid grid-cols-3 mt-10 text-center gap-5">

          <div className="flex items-center justify-center gap-3 mb-6">
            <FaLocationDot
              className="text-3xl p-2 rounded-full bg-[#D1C4E9] text-[#5E35B1]"
            />
            <h1>123 Main Street, Anytown, India</h1>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <FaPhoneAlt
              className="text-3xl p-2 rounded-full bg-[#D1C4E9] text-[#5E35B1]"
            />
            <h1>+91 4568136791</h1>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <IoMail
              className="text-3xl p-2 rounded-full bg-[#D1C4E9] text-[#5E35B1]"
            />
            <h1>medipulse@gmail.com</h1>
          </div>
        </div>

        {/* Form + Map */}
        <div className="md:grid grid-cols-2 gap-10 mt-14">

          {/* Contact Form */}
          <div className="flex justify-center items-center">
            <div className="bg-[#EDE7F6] shadow-lg rounded-2xl p-8 w-full max-w-md border border-[#D1C4E9]">
              <h2 className="text-2xl font-bold text-center mb-6 text-[#5E35B1]">
                Send Us a Message
              </h2>

              <form className="space-y-4">

                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border border-[#D1C4E9] rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-[#7E57C2] bg-white"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-[#D1C4E9] rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-[#7E57C2] bg-white"
                />

                <textarea
                  rows="4"
                  placeholder="Message..."
                  className="w-full px-4 py-2 border border-[#D1C4E9] rounded-lg resize-none
                  focus:outline-none focus:ring-2 focus:ring-[#7E57C2] bg-white"
                ></textarea>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 
                  bg-[#7E57C2] text-white py-2 rounded-lg font-semibold 
                  hover:bg-[#5E35B1] transition shadow-md"
                >
                  Send <FiSend />
                </button>

              </form>
            </div>
          </div>

          {/* Google Map */}
          <div className="flex justify-center mt-10 md:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.439214127285!2d76.57955317501657!3d10.030958972626527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d916a7b7f1b1%3A0x9fa17b8a6dbbc1cd!2sMuvattupuzha%2C%20Kerala!5e0!3m2!1sen!2sin!4v1696512345678!5m2!1sen!2sin"
              width="600"
              height="400"
              className="rounded-xl shadow-xl border border-[#D1C4E9]"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contactus;
