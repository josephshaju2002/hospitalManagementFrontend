import React from "react";
import AdminHeader from "../Components/Adminheader";
import AdminSidebar from "../Components/AdminSidebar";
import Footer2 from "../../Common/Components/Footer2";

function Medicines() {
  return (
    <>
      <AdminHeader />

      <div className="md:grid grid-cols-[1fr_4fr] bg-[#FAF7FF] text-[#1E142F]">
        <div className="bg-[#EDE7F6]">
          <AdminSidebar />
        </div>

        <div className="p-6 md:p-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#5E35B1]">
            Manage Medicines
          </h2>

          {/* Add New Medicine */}
          <div className="flex justify-center mb-6">
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <input
                type="text"
                placeholder="Name"
                className="border px-3 py-2 rounded w-full md:w-48 border-[#9575CD] bg-[#FAF7FF]"
              />
              <input
                type="number"
                placeholder="Price"
                className="border px-3 py-2 rounded w-full md:w-40 border-[#9575CD] bg-[#FAF7FF]"
              />
              <input
                type="text"
                placeholder="Image URL"
                className="border px-3 py-2 rounded w-full md:w-64 border-[#9575CD] bg-[#FAF7FF]"
              />

              <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">
                Add
              </button>
            </div>
          </div>

          {/* Medicine Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Cough Syrup",
                price: "₹ 120",
                img: "https://images.apollo247.in/pub/media/catalog/product/A/L/ALK0009_1_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%20400w",
              },
              {
                name: "Paracetamol",
                price: "₹ 45",
                img: "https://www.paxhealthcare.com/wp-content/uploads/2017/01/PELCIN-650-1.jpg",
              },
              {
                name: "Vitamin D Tablets",
                price: "₹ 180",
                img: "https://swisse.co.in/cdn/shop/products/Artboard1_7648cb2c-a56d-4bca-9f0b-1b56cf983de1_600x.jpg?v=1681495957",
              },
              {
                name: "Antibiotic Capsules",
                price: "₹ 90",
                img: "https://5.imimg.com/data5/SELLER/Default/2022/3/KS/NJ/TH/26747562/amoxycillin-capsules-500x500.png",
              },
              {
                name: "Pain Relief Spray",
                price: "₹ 160",
                img: "https://m.media-amazon.com/images/I/61uaRmQ8RwL._AC_UF1000,1000_QL80_.jpg",
              },
              {
                name: "Hand Sanitizer",
                price: "₹ 80",
                img: "https://images.apollo247.in/pub/media/catalog/product/a/p/apl0063-_2_.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%20400w",
              },
              {
                name: "Allergy Relief Tablets",
                price: "₹ 110",
                img: "https://5.imimg.com/data5/SELLER/Default/2024/2/386950917/FQ/XN/MH/210735223/allergy-relief.jpg",
              },
              {
                name: "ORS Hydration Powder",
                price: "₹ 40",
                img: "https://zeelabpharmacy.com/uploads/files/MW684a804f0a37f.webp",
              },
              {
                name: "Antacid Syrup",
                price: "₹ 95",
                img: "https://ayushcare.in/cdn/shop/products/6122mKiaMhL._SL1500.jpg?v=1747143418",
              },
              {
                name: "Nebulizer Machine",
                price: "₹ 1800",
                img: "https://m.media-amazon.com/images/I/71tvB6D7GPL.jpg",
              },
              {
                name: "Bandage Roll",
                price: "₹ 45",
                img: "https://m.media-amazon.com/images/I/81j7N40AjBL.jpg",
              },
              {
                name: "Eye Drops",
                price: "₹ 250",
                img: "https://himalayawellness.in/cdn/shop/products/OPHTHACARE-DROPS-10ML.jpg?v=1659002377",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border p-4 rounded-xl shadow bg-[#EDE7F6] hover:shadow-lg transition border-[#D1C4E9]"
              >
                <h3 className="font-semibold text-lg text-[#5E35B1]">
                  {item.name}
                </h3>
                <p className="text-[#1E142F]">{item.price}</p>

                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded mt-3"
                />

                <div className="mt-4 flex gap-3">
                  <button className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700">
                    Delete
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Edit Modal */}
          <div className="hidden fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded-xl w-full max-w-md">
              <h3 className="text-xl font-bold mb-4 text-[#5E35B1]">
                Edit Medicine
              </h3>

              <input
                type="text"
                placeholder="Name"
                className="border px-3 py-2 rounded w-full mb-3 border-[#9575CD]"
              />
              <input
                type="number"
                placeholder="Price"
                className="border px-3 py-2 rounded w-full mb-3 border-[#9575CD]"
              />
              <input
                type="text"
                placeholder="Image URL"
                className="border px-3 py-2 rounded w-full mb-3 border-[#9575CD]"
              />

              <div className="flex justify-end gap-3 mt-4">
                <button className="px-4 py-2 border rounded border-[#9575CD]">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer2 />
    </>
  );
}

export default Medicines;

