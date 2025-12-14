import React from "react";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
  {cartItems.map((item) => (
    <div
      key={item._id}
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 
                 bg-[#EDE7F6] p-5 rounded-2xl shadow-md hover:shadow-lg 
                 transition-all border border-[#D1C4E9]"
    >
      {/* Left Section */}
      <div className="flex gap-4 items-center">
        <img
          src={item.imageUrl}
          className="w-20 h-20 object-cover rounded-xl border border-[#D1C4E9]"
        />
        <div>
          <h2 className="font-semibold text-lg text-[#5E35B1]">
            {item.name}
          </h2>
          <p className="text-[#7E57C2] font-bold mt-1">
            ₹ {item.price * item.quantity}
          </p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3 bg-[#FAF7FF] px-4 py-2 rounded-full border border-[#D1C4E9]">
        <button
          onClick={() => updateQuantity(item._id, -1)}
          className="w-8 h-8 flex items-center justify-center 
                     rounded-full bg-[#D1C4E9] text-[#5E35B1] 
                     hover:bg-[#B39DDB] font-bold transition"
        >
          −
        </button>

        <span className="font-semibold text-[#1E142F]">
          {item.quantity}
        </span>

        <button
          onClick={() => updateQuantity(item._id, 1)}
          className="w-8 h-8 flex items-center justify-center 
                     rounded-full bg-[#7E57C2] text-white 
                     hover:bg-[#5E35B1] font-bold transition"
        >
          +
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item._id)}
        className="text-red-500 hover:text-red-700 
                   text-xl font-bold transition self-end sm:self-auto"
      >
        ✖
      </button>
    </div>
  ))}
</div>


          {/* Order Summary */}
          <div className="bg-[#EDE7F6] shadow-xl rounded-xl p-6 h-fit border border-[#D1C4E9]">
            <h2 className="text-2xl font-bold text-[#5E35B1] mb-5">
              Order Summary
            </h2>

            <div className="flex justify-between text-lg font-medium mb-3">
              <span>Total Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between text-lg font-medium mb-3">
              <span>Total Amount</span>
              <span className="text-[#7E57C2] font-bold">₹ {totalAmount}</span>
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
