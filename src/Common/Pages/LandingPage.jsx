import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import {
  FaUserMd,
  FaCalendarCheck,
  FaPills,
  FaRobot,
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Button, Card, CardContent, Typography } from "@mui/material";
import Header2 from "../Components/Header2";
import { FaXTwitter } from "react-icons/fa6";

function LandingPage() {
  return (
    <>
      <Header2 />

      <div className="w-full">
        {/* HERO SECTION */}

        <div
          style={{ height: "600px" }}
          className="flex flex-col justify-center items-center bg-[url(https://i.pinimg.com/1200x/48/50/81/485081e5d4fbcc4a93d2ac4f3d02dcc0.jpg)] bg-no-repeat bg-cover bg-center text-white"
        >
          <div
            style={{ height: "600px", backgroundColor: "rgba(0,0,0,0.5)" }}
            className="w-full flex flex-col justify-center items-center"
          >
            <h1 className="text-5xl font-bold mb-2">
              Your Health, Our Responsibility
            </h1>
            <p className="mb-2">
              {" "}
              Book appointments, chat with doctors, buy medicines and access
              health services — all in one place.
            </p>
            <Link to="/login">
              <button className="mt-6 bg-white text-blue-600 py-2 px-6 rounded-xl font-semibold shadow-lg hover:bg-gray-200">
                Login Now
              </button>
            </Link>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mt-20 mb-5">
          Why Us?
        </h1>
        <div className="py-14 px-5 mt-5 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-2xl transition">
            <CardContent className="text-center">
              <FaUserMd size={40} className="mx-auto text-blue-600" />
              <Typography variant="h6" className="mt-4 font-bold">
                Expert Doctors
              </Typography>
              <Typography className="text-gray-600 mt-2">
                Book appointments with qualified specialists.
              </Typography>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-2xl transition">
            <CardContent className="text-center">
              <FaPills size={40} className="mx-auto text-green-600" />
              <Typography variant="h6" className="mt-4 font-bold">
                Buy Medicines
              </Typography>
              <Typography className="text-gray-600 mt-2">
                Order genuine medicines instantly.
              </Typography>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-2xl transition">
            <CardContent className="text-center">
              <FaCalendarCheck size={40} className="mx-auto text-purple-600" />
              <Typography variant="h6" className="mt-4 font-bold">
                Easy Appointments
              </Typography>
              <Typography className="text-gray-600 mt-2">
                Fast and hassle-free scheduling system.
              </Typography>
            </CardContent>
          </Card>
        </div>

        

       

        {/* TESTIMONIALS SECTION */}
        <div className="mt-20 mb-10 mx-10">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
            What Our Users Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-0">
            {/* TESTIMONIAL 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-2xl transition">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User"
                  className="w-14 h-14 rounded-full border-2 border-blue-500"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    Rahul Menon
                  </h3>
                  <p className="text-sm text-gray-500">Patient</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                “Booking appointments has become super easy. The doctors respond
                fast and the platform is very user-friendly. Great experience!”
              </p>
            </div>

            {/* TESTIMONIAL 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-2xl transition">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="User"
                  className="w-14 h-14 rounded-full border-2 border-blue-500"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    Dr. Anjali Varma
                  </h3>
                  <p className="text-sm text-gray-500">Doctor</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                “Managing my appointments and patient records is now effortless.
                The platform saves me a lot of time every day.”
              </p>
            </div>

            {/* TESTIMONIAL 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-2xl transition">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  alt="User"
                  className="w-14 h-14 rounded-full border-2 border-blue-500"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800">Arun Sabu</h3>
                  <p className="text-sm text-gray-500">Medicine Buyer</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                “Ordering medicines online is smooth and fast. Delivery and
                payment work perfectly. Highly recommend this system!”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="md:grid grid-cols-3 md:gap-10 bg-blue-600 text-black p-10">
        <div className="text-bold">
          <h3 className="text-xl font-bold">About Us</h3>
          <p className="text-justify mt-3">
            MEDIPULSE is a comprehensive hospital management platform designed
            to simplify and enhance the way hospitals operate. Our mission is to
            connect patients, doctors, and healthcare services through a
            seamless and secure digital experience. From booking appointments to
            purchasing medicines, we ensure that every interaction is easy,
            transparent, and efficient. With user-friendly tools, trusted
            medical information, and a focus on patient care, we aim to bring
            modern healthcare to your fingertips.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold">Login For Getting Our Services</h3>
          <ul className="mt-3 space-y-2 text-center">
            <li>Online Appointments</li>
            <li>Chat with Doctors</li>
            <li>Buy Medicines</li>
            <li>Health Awareness Videos</li>
            <li>AI Health Assistant</li>
          </ul>
        </div>

        {/* third div */}
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-bold text-xl">Follow Us</h3>
          <p className="my-5">Let Us Be Social</p>
          <div className="flex mt-4">
            <FaInstagram className="me-3 text-2xl" />
            <FaXTwitter className="me-3 text-2xl" />
            <FaFacebookSquare className="me-3 text-2xl" />
            <FaLinkedin className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="bg-black p-3 text-center text-white">
        <p>
          Copyright &#xA9; 2025 All rights reserved | This website is made with
          &#10084; by Joseph Shaju
        </p>
      </div>
    </>
  );
}

export default LandingPage;

// LandingPage
