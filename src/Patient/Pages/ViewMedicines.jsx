import React from "react";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";

function ViewMedicines() {
  return (
    <>
      <Header/>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-36 px-5 md:px-20 mb-20">

        {/* Left Side */}
        <div>
          <img
            className="h-[300px] w-full object-contain rounded-lg shadow"
            src="https://swisse.co.in/cdn/shop/products/Artboard1_7648cb2c-a56d-4bca-9f0b-1b56cf983de1_600x.jpg?v=1681495957" 
            alt=""
          />

          <div className="flex justify-between gap-5">
            
            <button className="bg-blue-500 text-white rounded-lg px-5 py-3 mt-5 hover:bg-blue-600 transition">
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h1 className="text-3xl font-bold">Product Title</h1>

          <p className="text-2xl text-red-500 font-semibold mt-2">$199</p>

          <p className="mt-2">
            <span className="text-xl font-bold">Brand</span> : Sample Brand
          </p>

          <p className="mt-1">
            <span className="text-xl font-bold">Category</span> : Sample Category
          </p>

          <p className="mt-2">
            <span className="text-xl font-bold">Description</span> : Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>


         
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default ViewMedicines;




