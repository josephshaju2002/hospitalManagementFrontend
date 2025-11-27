import React, { useState } from "react";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";

const productsData = [
  {
    id: 1,
    name: "Paracetamol",
    price: 45,
    image: "https://www.paxhealthcare.com/wp-content/uploads/2017/01/PELCIN-650-1.jpg",
  },
  {
    id: 2,
    name: "Cough Syrup",
    price: 120,
    image: "https://images.apollo247.in/pub/media/catalog/product/A/L/ALK0009_1_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%20400w",
  },
  {
    id: 3,
    name: "Vitamin D Tablets",
    price: 180,
    image: "https://swisse.co.in/cdn/shop/products/Artboard1_7648cb2c-a56d-4bca-9f0b-1b56cf983de1_600x.jpg?v=1681495957",
  },
  {
    id: 4,
    name: "Antibiotic Capsules",
    price: 90,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/3/KS/NJ/TH/26747562/amoxycillin-capsules-500x500.png",
  },
  {
    id: 5,
    name: "Pain Relief Spray",
    price: 160,
    image: "https://m.media-amazon.com/images/I/61uaRmQ8RwL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 8,
    name: "Hand Sanitizer",
    price: 80,
    image: "https://images.apollo247.in/pub/media/catalog/product/a/p/apl0063-_2_.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%20400w",
  },
  {
    id: 10,
    name: "Allergy Relief Tablets",
    price: 110,
    image: "https://5.imimg.com/data5/SELLER/Default/2024/2/386950917/FQ/XN/MH/210735223/allergy-relief.jpg",
  },
  {
    id: 11,
    name: "ORS Hydration Powder",
    price: 40,
    image: "https://zeelabpharmacy.com/uploads/files/MW684a804f0a37f.webp",
  },
  {
    id: 12,
    name: "Antacid Syrup",
    price: 95,
    image: "https://ayushcare.in/cdn/shop/products/6122mKiaMhL._SL1500.jpg?v=1747143418",
  },
  {
    id: 13,
    name: "Nebulizer Machine",
    price: 1800,
    image: "https://m.media-amazon.com/images/I/71tvB6D7GPL.jpg",
  },
  {
    id: 14,
    name: "Bandage Roll",
    price: 45,
    image: "https://m.media-amazon.com/images/I/81j7N40AjBL.jpg",
  },
  {
    id: 15,
    name: "Eye Drops",
    price: 250,
    image: "https://himalayawellness.in/cdn/shop/products/OPHTHACARE-DROPS-10ML.jpg?v=1659002377",
  },
];

function BuyMedicines() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <Header />

      <div className="w-full bg-[#FAF7FF] py-16 px-6 md:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#7E57C2]">
            Buy Medicines Online
          </h1>
          <p className="mt-3 text-[#1E142F] md:w-2/3 mx-auto">
            Order genuine medicines at the best price. Browse from our wide
            range of healthcare products and essentials.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Image */}
          <div>
            <img
              src="https://www.sciencepharma.com/wp-content/uploads/2024/09/forms_drugs_baner_rf-scaled.jpg"
              alt="Hospital"
              className="rounded-xl shadow-lg object-cover w-full h-[350px]"
            />
          </div>

          {/* Right Text */}
          <div className="flex flex-col gap-5">
            {/* Card 1 */}
            <div className="bg-[#FFFFFF] shadow-lg rounded-xl p-6 hover:shadow-2xl transition border border-[#D1C4E9]">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png"
                alt="Medicines"
                className="w-20 mx-auto"
              />
              <h3 className="text-xl font-semibold text-center mt-4 text-[#7E57C2]">
                Wide Range of Medicines
              </h3>
              <p className="text-[#1E142F] text-center mt-2">
                Choose from thousands of trusted and verified medicines.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFFFFF] shadow-lg rounded-xl p-6 hover:shadow-2xl transition border border-[#D1C4E9]">
              <img
                src="https://i-media.vyaparify.com/vcards/blogs/147470/home-delivery-service.jpg"
                alt="Medicines"
                className="w-20 mx-auto"
              />
              <h3 className="text-xl font-semibold text-center mt-4 text-[#7E57C2]">
                Fast Delivery
              </h3>
              <p className="text-[#1E142F] text-center mt-2">
                Get medicines delivered to your doorstep quickly and safely.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="px-5 md:px-20 py-10 relative">
        <h1 className="text-3xl md:text-4xl font-bold text-[#7E57C2] text-center">
          Buy Medicines
        </h1>
        <p className="text-center text-[#1E142F] mt-2 mb-10">
          Choose from trusted and verified medical products.
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition border border-[#D1C4E9]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-24 mx-auto"
              />
              <h3 className="text-xl font-semibold text-[#1E142F] text-center mt-4">
                {product.name}
              </h3>

              <p className="text-center text-[#7E57C2] font-bold text-lg mt-2">
                ₹ {product.price}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="w-full mt-4 bg-[#7E57C2] text-white py-2 rounded-lg hover:bg-[#5E35B1] transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Floating Cart Button */}
        <button
          onClick={() => setShowCart(true)}
          className="fixed bottom-5 right-5 bg-[#7E57C2] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#5E35B1]"
        >
          Cart ({cart.length})
        </button>

        {/* Cart Sidebar */}
        {showCart && (
          <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl p-6 z-50 border-l-4 border-[#7E57C2]">
            <h2 className="text-2xl font-bold text-[#7E57C2]">Your Cart</h2>

            <button
              onClick={() => setShowCart(false)}
              className="absolute top-4 right-4 text-[#1E142F] hover:text-black"
            >
              ✖
            </button>

            <div className="mt-6">
              {cart.length === 0 ? (
                <p className="text-[#1E142F]">Your cart is empty.</p>
              ) : (
                cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b py-3"
                  >
                    <span className="text-[#1E142F]">{item.name}</span>
                    <span className="font-semibold text-[#7E57C2]">₹{item.price}</span>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-[#1E142F]">
                  Total: <span className="text-[#7E57C2]">₹{totalAmount}</span>
                </h3>

                <button className="w-full mt-4 bg-[#5E35B1] text-white py-2 rounded-lg hover:bg-[#7E57C2] transition">
                  Proceed to Buy
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default BuyMedicines;
  