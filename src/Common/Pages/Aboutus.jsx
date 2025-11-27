import React from "react";
import { Typography } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function About() {
  return (
    <>
      <Header />

      <div className="w-full bg-[#FAF7FF] py-16 px-6 md:px-20">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#7E57C2]">About Us</h1>
          <p className="mt-3 text-[#1E142F] md:w-2/3 mx-auto">
            We are committed to providing high-quality healthcare services with
            advanced technology and compassionate care.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Image */}
          <div>
            <img
              src="https://i.pinimg.com/1200x/43/12/df/4312df0eb0d2b93983ac9fd037506345.jpg"
              alt="Hospital"
              className="rounded-xl shadow-lg object-cover w-full h-[350px]"
            />
          </div>

          {/* Right Text */}
          <div className="flex flex-col justify-center">
            <Typography variant="h5" className="font-bold text-[#7E57C2] mb-3">
              Who We Are
            </Typography>

            <p className="text-[#1E142F] leading-relaxed">
              Our Hospital Management System is designed to simplify healthcare 
              access for patients, doctors, and administrators. We aim to reduce 
              waiting times, enhance patient-doctor communication, and bring all 
              essential medical services into one digital platform.
            </p>

            <p className="text-[#1E142F] leading-relaxed mt-4">
              From booking appointments to purchasing medicines and consulting 
              doctors online, our system ensures a smooth and efficient healthcare 
              experience. We use modern technologies to make hospital operations 
              faster, smarter, and more reliable.
            </p>
          </div>
        </div>

        {/* Mission + Vision */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">

          <div className="bg-[#EDE7F6] p-8 rounded-xl shadow-md border border-[#D1C4E9]">
            <h2 className="text-2xl font-bold text-[#5E35B1] mb-3">Our Mission</h2>
            <p className="text-[#1E142F] leading-relaxed">
              To deliver accessible, affordable, and high-quality healthcare 
              through digital innovation — empowering both patients and medical 
              professionals.
            </p>
          </div>

          <div className="bg-[#EDE7F6] p-8 rounded-xl shadow-md border border-[#D1C4E9]">
            <h2 className="text-2xl font-bold text-[#5E35B1] mb-3">Our Vision</h2>
            <p className="text-[#1E142F] leading-relaxed">
              To become a leading digital healthcare platform that transforms 
              hospital management and improves patient well-being globally.
            </p>
          </div>
        </div>

        {/* Founders Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-[#7E57C2] mb-10">
            Meet Our Founders
          </h2>

          <p className="text-center text-[#1E142F] mb-14 max-w-2xl mx-auto">
            Our hospital management system was created and guided by passionate leaders 
            committed to transforming healthcare through technology, compassion, 
            and innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-0">

            {/* Card 1 */}
            <div className="bg-[#FFFFFF] p-8 rounded-xl shadow-lg border border-[#D1C4E9] hover:shadow-2xl transition">
              <img
                src="https://img.freepik.com/free-photo/handsome-young-cheerful-man-with-arms-crossed_171337-1073.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Owner"
                className="w-28 h-28 rounded-full border-4 border-[#9575CD] mx-auto mb-5 object-cover"
              />
              <h3 className="text-xl font-bold text-center text-[#1E142F]">
                Dr. Samuel Mathew
              </h3>
              <p className="text-center text-sm text-[#7E57C2] mb-4">
                Founder & Chief Medical Director
              </p>
              <p className="text-[#1E142F] text-center leading-relaxed">
                A visionary healthcare leader with 20+ years of medical experience.
                Dr. Samuel believes in using digital innovation to make healthcare 
                faster, accessible, and patient-centric.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFFFFF] p-8 rounded-xl shadow-lg border border-[#D1C4E9] hover:shadow-2xl transition">
              <img
                src="https://randomuser.me/api/portraits/women/47.jpg"
                alt="Owner"
                className="w-28 h-28 rounded-full border-4 border-[#9575CD] mx-auto mb-5 object-cover"
              />
              <h3 className="text-xl font-bold text-center text-[#1E142F]">
                Dr. Meera Joseph
              </h3>
              <p className="text-center text-sm text-[#7E57C2] mb-4">
                Co-Founder & Operations Head
              </p>
              <p className="text-[#1E142F] text-center leading-relaxed">
                Known for her exceptional leadership in hospital operations,  
                Dr. Meera ensures that patients, doctors, and staff experience 
                smooth, reliable, and efficient care every day.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FFFFFF] p-8 rounded-xl shadow-lg border border-[#D1C4E9] hover:shadow-2xl transition">
              <img
                src="https://randomuser.me/api/portraits/men/52.jpg"
                alt="Owner"
                className="w-28 h-28 rounded-full border-4 border-[#9575CD] mx-auto mb-5 object-cover"
              />
              <h3 className="text-xl font-bold text-center text-[#1E142F]">
                Arun Thomas
              </h3>
              <p className="text-center text-sm text-[#7E57C2] mb-4">
                Technical Co-Founder & Software Architect
              </p>
              <p className="text-[#1E142F] text-center leading-relaxed">
                Arun leads the technology and development behind the platform.
                His goal is to build secure, scalable, and user-friendly solutions 
                that simplify healthcare for everyone.
              </p>
            </div>

          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default About;
