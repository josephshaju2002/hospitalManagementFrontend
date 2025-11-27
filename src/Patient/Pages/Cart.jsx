import React from "react";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";

const Cart = () => {
  return (
    <>
      <Header />

      <div className="px-5 md:px-20 py-16 bg-[#FAF7FF] min-h-screen text-[#1E142F]">

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#5E35B1]">
          My Cart
        </h1>
        <p className="text-center text-gray-600 mt-2 mb-10">
          Review your selected medicines and proceed to checkout.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Cart Items List */}
          <div className="md:col-span-2 space-y-6">

            {/* Single Cart Item */}
            <div className="flex items-center justify-between bg-[#EDE7F6] shadow-md rounded-xl p-4 border border-[#D1C4E9]">

              {/* Image + Name */}
              <div className="flex items-center gap-4">
                <img
                  src="https://www.paxhealthcare.com/wp-content/uploads/2017/01/PELCIN-650-1.jpg"
                  alt="product"
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <h2 className="text-xl font-semibold">Paracetamol</h2>
                  <p className="text-[#7E57C2] font-bold text-lg">₹ 45</p>
                </div>
              </div>

              {/* Quantity Buttons */}
              <div className="flex items-center gap-3">
                <button className="bg-[#D1C4E9] px-3 py-1 text-lg rounded-md hover:bg-[#C7B8E6]">
                  -
                </button>
                <span className="text-lg font-semibold">1</span>
                <button className="bg-[#D1C4E9] px-3 py-1 text-lg rounded-md hover:bg-[#C7B8E6]">
                  +
                </button>
              </div>

              {/* Remove */}
              <button className="text-red-500 font-bold text-lg hover:text-red-700">
                ✖
              </button>
            </div>

            {/* Another Cart Item */}
            <div className="flex items-center justify-between bg-[#EDE7F6] shadow-md rounded-xl p-4 border border-[#D1C4E9]">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.apollo247.in/pub/media/catalog/product/A/L/ALK0009_1_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%20400w"
                  alt="product"
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <h2 className="text-xl font-semibold">Cough Syrup</h2>
                  <p className="text-[#7E57C2] font-bold text-lg">₹ 120</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="bg-[#D1C4E9] px-3 py-1 text-lg rounded-md hover:bg-[#C7B8E6]">
                  -
                </button>
                <span className="text-lg font-semibold">1</span>
                <button className="bg-[#D1C4E9] px-3 py-1 text-lg rounded-md hover:bg-[#C7B8E6]">
                  +
                </button>
              </div>

              <button className="text-red-500 font-bold text-lg hover:text-red-700">
                ✖
              </button>
            </div>

          </div>

          {/* Order Summary */}
          <div className="bg-[#EDE7F6] shadow-xl rounded-xl p-6 h-fit border border-[#D1C4E9]">
            <h2 className="text-2xl font-bold text-[#5E35B1] mb-5">Order Summary</h2>

            <div className="flex justify-between text-lg font-medium mb-3">
              <span>Total Items</span>
              <span>2</span>
            </div>

            <div className="flex justify-between text-lg font-medium mb-3">
              <span>Total Amount</span>
              <span className="text-[#7E57C2] font-bold">₹ 170</span>
            </div>

            <button className="w-full mt-6 bg-[#16a34a] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#15803d] transition">
              Proceed to Payment
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
