import React from "react";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";
import { useCart } from "../../context/CartContext";
import { makeCartPaymentAPI } from "../../services/allAPI";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePurchase = async () => {
    try {
      if (cartItems.length === 0) {
        alert("Your cart is empty");
        return;
      }

      const token = sessionStorage.getItem("token");

      if (!token) {
        alert("Please login to continue");
        return;
      }

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const res = await makeCartPaymentAPI(
        {
          items: cartItems,
          totalAmount,
        },
        reqHeader
      );

      if (res.status === 200) {
        window.location.href = res.data.checkoutSessionUrl;
      }
    } catch (error) {
      console.log(error);
      alert("Payment failed");
    }
  };

  return (
    <>
      <Header />

      <div className="px-5 md:px-20 py-16 bg-[#FAF7FF] min-h-screen text-[#1E142F]">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#5E35B1]">
          My Cart
        </h1>

        <p className="text-center text-gray-600 mt-2 mb-10">
          Review your selected medicines and proceed to checkout.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4
                  bg-[#EDE7F6] p-5 rounded-2xl shadow-md border border-[#D1C4E9]"
                >
                  <div className="flex gap-4 items-center">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-20 h-20 object-contain rounded-xl"
                    />

                    <div>
                      <h2 className="font-semibold text-lg text-[#5E35B1]">
                        {item.name}
                      </h2>
                      <p className="text-[#7E57C2] font-bold">
                        ₹ {item.price * item.quantity}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item._id, -1)}
                      className="px-3 py-1 bg-[#D1C4E9] rounded"
                    >
                      −
                    </button>

                    <span className="font-semibold">{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item._id, 1)}
                      className="px-3 py-1 bg-[#7E57C2] text-white rounded"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-600 font-bold"
                  >
                    ✖
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center">Your cart is empty</p>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-[#EDE7F6] rounded-xl p-6 border border-[#D1C4E9] h-fit">
            <h2 className="text-2xl font-bold text-[#5E35B1] mb-5">
              Order Summary
            </h2>

            <div className="flex justify-between mb-3">
              <span>Total Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between mb-3">
              <span>Total Amount</span>
              <span className="font-bold text-[#7E57C2]">₹ {totalAmount}</span>
            </div>

            <button
              onClick={handlePurchase}
              disabled={cartItems.length === 0}
              className={`w-full mt-6 py-3 rounded-lg font-semibold
    ${
      cartItems.length === 0
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-[#16a34a] hover:bg-[#15803d] text-white"
    }
  `}
            >
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
