import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { FaUserMd, FaCalendarCheck, FaPills, FaRobot } from "react-icons/fa";
import { Button, Card, CardContent, Typography } from "@mui/material";

function Home() {
  return (
    <>
      <Header />

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
            <Link to="/getappo">
              <button className="mt-6 bg-white text-blue-600 py-2 px-6 rounded-xl font-semibold shadow-lg hover:bg-gray-200">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mt-20 mb-5">Why Us?</h1>
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

        {/* AI CHAT SECTION */}
        <div className="px-5 md:px-20 my-16 text-center">
          <h2 className="text-3xl font-bold">AI Chat Assistant</h2>
          <p className="text-gray-600 mt-2">
            Ask health-related questions anytime.
          </p>

          <Link to="/ai-chat">
            <button className="mt-5 bg-blue-600 text-white px-8 py-3 rounded-xl shadow hover:bg-blue-700">
              Chat with AI <FaRobot className="inline ml-2" />
            </button>
          </Link>
        </div>

        {/* Products */}
        <div className="px-5 md:px-20 my-20">
          <h2 className="text-3xl font-bold  text-blue-600 mb-10">
            Featured Medical Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* 1 — Digital Thermometer */}
            <div className="rounded-xl shadow-lg p-5 bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="https://images-cdn.ubuy.co.in/689df7a1d7e03c547c034c38-digital-thermometer-for-adults-and-kids.jpg"
                className="w-50 h-50"
              />
              <h3 className="text-lg font-semibold mt-3">
                Digital Thermometer
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Fast and accurate temperature readings.
              </p>
              <p className="text-blue-600 font-bold mt-2">₹299</p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
                Buy Now
              </button>
            </div>

            {/* 2 — Blood Pressure Monitor */}
            <div className="rounded-xl shadow-lg p-5 bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="https://images-cdn.ubuy.co.in/653f96517ef55a02027b2404-blood-pressure-monitor-upper-arm-lovia.jpg"
                className="w-50 h-50"
              />
              <h3 className="text-lg font-semibold mt-3">
                Blood Pressure Monitor
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Automatic BP checking with memory storage.
              </p>
              <p className="text-blue-600 font-bold mt-2">₹1,799</p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
                Buy Now
              </button>
            </div>

            {/* 3 — Oximeter */}
            <div className="rounded-xl shadow-lg p-5 bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="https://m.media-amazon.com/images/I/6189MAMYiqL._AC_UF1000,1000_QL80_.jpg"
                className="w-50 h-50"
              />
              <h3 className="text-lg font-semibold mt-3">Oximeter</h3>
              <p className="text-gray-600 text-sm mt-1">
                Check oxygen levels & pulse rate instantly.
              </p>
              <p className="text-blue-600 font-bold mt-2">₹899</p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
                Buy Now
              </button>
            </div>

            {/* 4 — First Aid Kit */}
            <div className="rounded-xl shadow-lg p-5 bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="https://protectorfiresafety.com/31636-thickbox_default/first-aid-kit-o-type.jpg"
                className="w-50 h-50"
              />
              <h3 className="text-lg font-semibold mt-3">First Aid Kit</h3>
              <p className="text-gray-600 text-sm mt-1">
                Complete emergency kit with essential supplies.
              </p>
              <p className="text-blue-600 font-bold mt-2">₹649</p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
                Buy Now
              </button>
            </div>

            {/* 5 — Glucometer */}
            <div className="rounded-xl shadow-lg p-5 bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="https://cdn01.pharmeasy.in/dam/products_otc/I14791/accu-chek-instant-s-glucometer-kit-with-free-10-strips-6.1-1726640112.jpg?dim=400x0&dpr=1&q=100"
                className="w-50 h-50"
              />
              <h3 className="text-lg font-semibold mt-3">Glucometer</h3>
              <p className="text-gray-600 text-sm mt-1">
                Fast and reliable blood sugar monitoring.
              </p>
              <p className="text-blue-600 font-bold mt-2">₹999</p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
                Buy Now
              </button>
            </div>

            {/* 6 — Steam Vaporizer */}
            <div className="rounded-xl shadow-lg p-5 bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="https://www.jiomart.com/images/product/original/rvjhamgeke/amkay-steam-vaporiser-steam-inhaler-for-cold-cough-sinus-product-images-orvjhamgeke-p604556325-0-202310301323.jpg?im=Resize=(420,420)"
                className="w-50 h-50"
              />
              <h3 className="text-lg font-semibold mt-3">Steam Vaporizer</h3>
              <p className="text-gray-600 text-sm mt-1">
                Great for cold relief and facial steaming.
              </p>
              <p className="text-blue-600 font-bold mt-2">₹499</p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
                Buy Now
              </button>
            </div>
          </div>

          <Link to="/buymed">
            <button className="mt-6 bg-gray-900 text-white px-6 py-2 rounded-lg">
              View More Products
            </button>
          </Link>
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

      <Footer />
    </>
  );
}

export default Home;
