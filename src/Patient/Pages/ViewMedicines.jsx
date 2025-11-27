import React from "react";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";

function ViewMedicines() {
  return (
    <>
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-36 px-5 md:px-20 mb-20 text-[#1E142F]">

        {/* Left Side */}
        <div>
          <img
            className="h-[300px] w-full object-contain rounded-lg shadow-lg bg-[#EDE7F6]"
            src="https://swisse.co.in/cdn/shop/products/Artboard1_7648cb2c-a56d-4bca-9f0b-1b56cf983de1_600x.jpg?v=1681495957"
            alt=""
          />

          <div className="flex justify-between gap-5">
            <button className="bg-[#7E57C2] text-white rounded-lg px-5 py-3 mt-5 hover:bg-[#5E35B1] transition font-semibold shadow">
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h1 className="text-3xl font-bold text-[#5E35B1]">Product Title</h1>

          <p className="text-2xl text-red-500 font-semibold mt-2">$199</p>

          <p className="mt-2">
            <span className="text-xl font-bold text-[#7E57C2]">Brand</span> : Sample Brand
          </p>

          <p className="mt-1">
            <span className="text-xl font-bold text-[#7E57C2]">Category</span> : Sample Category
          </p>

          <p className="mt-2">
            <span className="text-xl font-bold text-[#7E57C2]">Description</span> : Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ViewMedicines;
