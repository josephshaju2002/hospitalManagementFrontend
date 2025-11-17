import React from "react";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";

const Cart = () => {
  return (
    <>
    <Header/>


    <div className="px-5 md:px-20 py-16">
      
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center">
        My Cart
      </h1>
      <p className="text-center text-gray-500 mt-2 mb-10">
        Review your selected medicines and proceed to checkout.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Cart Items List */}
        <div className="md:col-span-2 space-y-6">

          {/* Single Cart Item */}
          <div className="flex items-center justify-between bg-white shadow-md rounded-xl p-4">
            
            {/* Image + Name */}
            <div className="flex items-center gap-4">
              <img
                src="https://www.paxhealthcare.com/wp-content/uploads/2017/01/PELCIN-650-1.jpg"
                alt="product"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Paracetamol 
                </h2>
                <p className="text-blue-600 font-semibold text-lg">₹ 45</p>
              </div>
            </div>

            {/* Quantity Buttons */}
            <div className="flex items-center gap-3">
              <button className="bg-gray-300 px-3 py-1 text-lg rounded-md hover:bg-gray-400">
                -
              </button>
              <span className="text-lg font-semibold">1</span>
              <button className="bg-gray-300 px-3 py-1 text-lg rounded-md hover:bg-gray-400">
                +
              </button>
            </div>

            {/* Remove */}
            <button className="text-red-500 font-bold text-lg hover:text-red-700">
              ✖
            </button>
          </div>

          {/* Duplicate few items for UI preview */}
          <div className="flex items-center justify-between bg-white shadow-md rounded-xl p-4">
            <div className="flex items-center gap-4">
              <img
                src="https://images.apollo247.in/pub/media/catalog/product/A/L/ALK0009_1_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%20400w"
                alt="product"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Cough Syrup</h2>
                <p className="text-blue-600 font-semibold text-lg">₹ 120</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="bg-gray-300 px-3 py-1 text-lg rounded-md hover:bg-gray-400">
                -
              </button>
              <span className="text-lg font-semibold">1</span>
              <button className="bg-gray-300 px-3 py-1 text-lg rounded-md hover:bg-gray-400">
                +
              </button>
            </div>

            <button className="text-red-500 font-bold text-lg hover:text-red-700">
              ✖
            </button>
          </div>

        </div>

        {/* Order Summary */}
        <div className="bg-white shadow-xl rounded-xl p-6 h-fit">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">Order Summary</h2>

          <div className="flex justify-between text-lg font-medium mb-3">
            <span>Total Items</span>
            <span>2</span>
          </div>

          <div className="flex justify-between text-lg font-medium mb-3">
            <span>Total Amount</span>
            <span className="text-blue-600 font-bold">₹ 170</span>
          </div>

          <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
            Proceed to Payment
          </button>
        </div>

      </div>
    </div>

    <Footer/>
    </>
  );
};

export default Cart;
