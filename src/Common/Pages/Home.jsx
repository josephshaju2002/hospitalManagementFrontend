import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { getFeaturedMedicinesAPI } from "../../services/allAPI";
import { Link } from "react-router-dom";
import { FaUserMd, FaCalendarCheck, FaPills, FaRobot } from "react-icons/fa";
import { Card, CardContent, Typography } from "@mui/material";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getFeaturedMedicinesAPI();
        if (res.status === 200) {
          setProducts(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header />

      <div className="w-full bg-[#FAF7FF] text-[#1E142F]">
        {/* HERO SECTION */}
        <div
          style={{ height: "600px" }}
          className="flex flex-col justify-center items-center bg-[url(https://i.pinimg.com/1200x/48/50/81/485081e5d4fbcc4a93d2ac4f3d02dcc0.jpg)] bg-no-repeat bg-cover bg-center"
        >
          <div
            style={{ height: "600px", backgroundColor: "rgba(0,0,0,0.4)" }}
            className="w-full flex flex-col justify-center items-center"
          >
            <h1 className="text-5xl font-bold mb-2 text-white">
              Your Health, Our Responsibility
            </h1>
            <p className="mb-2 text-white">
              Book appointments, chat with doctors, buy medicines and access
              health services — all in one place.
            </p>
            <Link to="/getappo">
              <button className="mt-6 bg-[#7E57C2] text-white py-2 px-6 rounded-xl font-semibold shadow-lg hover:bg-[#5E35B1] transition">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <h1 className="text-3xl font-bold text-center text-[#7E57C2] mt-20 mb-5">
          Why Us?
        </h1>

        <div className="py-14 px-5 mt-5 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg bg-[#EDE7F6] hover:shadow-2xl transition border border-[#D1C4E9]">
            <CardContent className="text-center">
              <FaUserMd size={40} className="mx-auto text-[#7E57C2]" />
              <Typography variant="h6" className="mt-4 font-bold">
                Expert Doctors
              </Typography>
              <Typography className="text-gray-600 mt-2">
                Book appointments with qualified specialists.
              </Typography>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-[#EDE7F6] hover:shadow-2xl transition border border-[#D1C4E9]">
            <CardContent className="text-center">
              <FaPills size={40} className="mx-auto text-[#9575CD]" />
              <Typography variant="h6" className="mt-4 font-bold">
                Buy Medicines
              </Typography>
              <Typography className="text-gray-600 mt-2">
                Order genuine medicines instantly.
              </Typography>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-[#EDE7F6] hover:shadow-2xl transition border border-[#D1C4E9]">
            <CardContent className="text-center">
              <FaCalendarCheck size={40} className="mx-auto text-[#5E35B1]" />
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
        {/* <div className="px-5 md:px-20 my-16 text-center">
          <h2 className="text-3xl font-bold text-[#7E57C2]">
            AI Chat Assistant
          </h2>
          <p className="text-gray-600 mt-2">
            Ask health-related questions anytime.
          </p>

          <Link to="/ai-chat">
            <button className="mt-5 bg-[#7E57C2] text-white px-8 py-3 rounded-xl shadow hover:bg-[#5E35B1] transition">
              Chat with AI <FaRobot className="inline ml-2" />
            </button>
          </Link>
        </div> */}

        {/* PRODUCTS */}
        <div className="px-5 md:px-20 my-20">
          <h2 className="text-3xl font-bold text-[#7E57C2] mb-10">
            Featured Medical Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {products.map((item) => (
              <div
                key={item._id}
                className="rounded-xl shadow-lg p-5 bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-[#D1C4E9]"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-80 object-cover rounded"
                />

                <h3 className="text-lg font-semibold mt-3">{item.name}</h3>

                <p className="text-[#7E57C2] font-bold mt-2">₹ {item.price}</p>

                {/* <button className="mt-3 bg-[#7E57C2] text-white px-4 py-2 rounded-lg w-full hover:bg-[#5E35B1] transition">
                  Buy Now
                </button> */}
              </div>
            ))}
          </div>

          <Link to="/buymed">
            <button className="mt-6 bg-[#5E35B1] text-white px-6 py-2 rounded-lg hover:bg-[#7E57C2] transition">
              View and Buy More Products
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-0 mb-10 mx-10">
          {/* Testimonial 1 */}
          <div className="bg-[#EDE7F6] p-6 rounded-2xl shadow-lg">
            <p className="text-[#1E142F] text-lg">
              “Medipulse has completely transformed how I manage my
              appointments. The interface is clean, fast, and incredibly easy to
              use!”
            </p>
            <div className="mt-4 flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/80?img=12"
                className="w-12 h-12 rounded-full"
                alt="user"
              />
              <div>
                <h4 className="font-bold text-[#7E57C2]">Aarav Nair</h4>
                <p className="text-sm text-[#5E35B1]">Verified User</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[#EDE7F6] p-6 rounded-2xl shadow-lg">
            <p className="text-[#1E142F] text-lg">
              “The platform really helps me stay organized with my medicines and
              doctor visits. Smooth performance and great UI!”
            </p>
            <div className="mt-4 flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/80?img=5"
                className="w-12 h-12 rounded-full"
                alt="user"
              />
              <div>
                <h4 className="font-bold text-[#7E57C2]">Sahana R</h4>
                <p className="text-sm text-[#5E35B1]">Medipulse Member</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-[#EDE7F6] p-6 rounded-2xl shadow-lg">
            <p className="text-[#1E142F] text-lg">
              “As a student, this app helps me track health records easily. The
              reminders are super helpful. Highly recommended!”
            </p>
            <div className="mt-4 flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/80?img=30"
                className="w-12 h-12 rounded-full"
                alt="user"
              />
              <div>
                <h4 className="font-bold text-[#7E57C2]">Rithik Raj</h4>
                <p className="text-sm text-[#5E35B1]">Daily User</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
