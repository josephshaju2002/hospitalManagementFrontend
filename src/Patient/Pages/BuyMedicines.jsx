import React, { useState ,useEffect} from "react";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";
import { toast } from "react-toastify";
import { getAllCommonMedicinesAPI } from "../../services/allAPI";


function BuyMedicines() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState([]);


 

  useEffect(() => {
  const fetchMedicines = async () => {
    try {
      const res = await getAllCommonMedicinesAPI();
      if (res.status === 200) {
        setProducts(res.data);
      }
    } catch (error) {
      toast.error("Failed to load medicines");
      console.log(error);
    }
  };

  fetchMedicines();
}, []);


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
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition border border-[#D1C4E9]"
            >
              <img
                src={product.imageUrl}
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
                
                className="w-full mt-4 bg-[#7E57C2] text-white py-2 rounded-lg hover:bg-[#5E35B1] transition"
              >
                Click to Buy
              </button>
            </div>
          ))}
        </div>

        

       
      </div>

      <Footer />
    </>
  );
}

export default BuyMedicines;
  