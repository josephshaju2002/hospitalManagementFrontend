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

      <section className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center my-10">
          Contacts
        </h1>
        <p className="mx-30">
          At our hospital, your health and satisfaction are our top priorities.
          If you have questions, need support, or want to know more about our
          services, we’re here to help. Feel free to reach out to us anytime—our
          team is always ready to assist you with appointments, medical
          inquiries, or general information. <br />
          We’re always happy to hear from you! Whether you need help booking an
          appointment, understanding our services, or simply want more
          information, our support team is here for you. Reach out to us, and
          we’ll make sure your concerns are addressed with care and attention.
        </p>
        <div className="md:grid grid-cols-3 mt-10 text-center">
          <div className="flex items-center justify-center gap-2">
            <FaLocationDot
              style={{ backgroundColor: "gray" }}
              className="text-3xl p-1 rounded-full"
            />
            <h1>123 Main Street, Apt 4B, Anytown, India</h1>
          </div>

          <div className="flex items-center justify-center gap-2">
            <FaPhoneAlt
              style={{ backgroundColor: "gray" }}
              className="text-3xl p-1 rounded-full"
            />
            <h1>+91 4568136791</h1>
          </div>

          <div className="flex items-center justify-center gap-2">
            <IoMail
              style={{ backgroundColor: "gray" }}
              className="text-3xl p-1 rounded-full"
            />
            <h1>medipulse@gmail.com</h1>
          </div>
        </div>

        <div className="md:grid grid-cols-2 mx-30 mt-10">
          <div className="flex justify-center items-center mt-10">
            <div className="bg-gray-100 shadow-lg rounded-2xl p-8 w-full max-w-md">
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Send Us Message
              </h2>

              <form className="space-y-4">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Id"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="message..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
                >
                  Send <FiSend />
                </button>
              </form>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.439214127285!2d76.57955317501657!3d10.030958972626527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d916a7b7f1b1%3A0x9fa17b8a6dbbc1cd!2sMuvattupuzha%2C%20Kerala!5e0!3m2!1sen!2sin!4v1696512345678!5m2!1sen!2sin"
              width="600"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contactus;
