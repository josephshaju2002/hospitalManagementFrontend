import React from "react";
import AdminHeader from "../Components/Adminheader";
import AdminSidebar from "../Components/AdminSidebar";

function Medicines() {
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-[1fr_4fr]">
        <div>
          <AdminSidebar />
        </div>
        <div className="p-6 md:p-10">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-8">
            Manage Medicines
          </h2>

          {/* Add New Medicine */}
          <div className="flex justify-center mb-6">
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <input
                type="text"
                placeholder="Name"
                className="border px-3 py-2 rounded w-full md:w-48"
              />
              <input
                type="number"
                placeholder="Price"
                className="border px-3 py-2 rounded w-full md:w-40"
              />
              <input
                type="text"
                placeholder="Image URL"
                className="border px-3 py-2 rounded w-full md:w-64"
              />
              <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">
                Add
              </button>
            </div>
          </div>

          {/* Medicine Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="border p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">Cough Syrup</h3>
              <p className="text-gray-600">₹ 120</p>

              <img
                src="https://images.apollo247.in/pub/media/catalog/product/A/L/ALK0009_1_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%20400w"
                alt="Medicine"
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
            <div className="border p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">Paracetamol</h3>
              <p className="text-gray-600">₹ 45</p>

              <img
                src="https://www.paxhealthcare.com/wp-content/uploads/2017/01/PELCIN-650-1.jpg"
                alt="Paracetamol"
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
            <div className="border p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">Vitamin D Tablets</h3>
              <p className="text-gray-600">₹ 180</p>

              <img
                src="https://swisse.co.in/cdn/shop/products/Artboard1_7648cb2c-a56d-4bca-9f0b-1b56cf983de1_600x.jpg?v=1681495957"
                alt="Medicine"
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
            <div className="border p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">Antibiotic Capsules</h3>
              <p className="text-gray-600">₹ 90</p>

              <img
                src="https://5.imimg.com/data5/SELLER/Default/2022/3/KS/NJ/TH/26747562/amoxycillin-capsules-500x500.png"
                alt="Medicine"
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
            <div className="border p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">Pain Relief Spray</h3>
              <p className="text-gray-600">₹ 160</p>

              <img
                src="https://m.media-amazon.com/images/I/61uaRmQ8RwL._AC_UF1000,1000_QL80_.jpg"
                alt="Medicine"
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
            <div className="border p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">Hand Sanitizer</h3>
              <p className="text-gray-600">₹ 80</p>

              <img
                src="https://images.apollo247.in/pub/media/catalog/product/a/p/apl0063-_2_.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%20400w"
                alt="Medicine"
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
            <div className="border p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">Allergy Relief Tablets</h3>
              <p className="text-gray-600">₹ 110</p>

              <img
                src="https://5.imimg.com/data5/SELLER/Default/2024/2/386950917/FQ/XN/MH/210735223/allergy-relief.jpg"
                alt="Medicine"
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
            <div className="border p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">ORS Hydration Powder</h3>
              <p className="text-gray-600">₹ 40</p>

              <img
                src="https://zeelabpharmacy.com/uploads/files/MW684a804f0a37f.webp"
                alt="Medicine"
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
            <div className="border p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">Antacid Syrup</h3>
              <p className="text-gray-600">₹ 95</p>

              <img
                src="https://ayushcare.in/cdn/shop/products/6122mKiaMhL._SL1500.jpg?v=1747143418"
                alt="Medicine"
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
            <div className="border p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">Nebulizer Machine</h3>
              <p className="text-gray-600">₹ 1800</p>

              <img
                src="https://m.media-amazon.com/images/I/71tvB6D7GPL.jpg"
                alt="Medicine"
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
            <div className="border p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">Bandage Roll</h3>
              <p className="text-gray-600">₹ 45</p>

              <img
                src="https://m.media-amazon.com/images/I/81j7N40AjBL.jpg"
                alt="Medicine"
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
            <div className="border p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">Eye Drops</h3>
              <p className="text-gray-600">₹ 250</p>

              <img
                src="https://himalayawellness.in/cdn/shop/products/OPHTHACARE-DROPS-10ML.jpg?v=1659002377"
                alt="Medicine"
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
          </div>

          {/* Edit Modal */}
          <div className="hidden fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded-xl w-full max-w-md">
              <h3 className="text-xl font-bold mb-4">Edit Medicine</h3>

              <input
                type="text"
                placeholder="Name"
                className="border px-3 py-2 rounded w-full mb-3"
              />
              <input
                type="number"
                placeholder="Price"
                className="border px-3 py-2 rounded w-full mb-3"
              />
              <input
                type="text"
                placeholder="Image URL"
                className="border px-3 py-2 rounded w-full mb-3"
              />

              <div className="flex justify-end gap-3 mt-4">
                <button className="px-4 py-2 border rounded">Cancel</button>
                <button className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Medicines;
