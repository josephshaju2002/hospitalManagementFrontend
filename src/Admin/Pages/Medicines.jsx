import React, { useEffect, useState } from "react";
import AdminHeader from "../Components/Adminheader";
import AdminSidebar from "../Components/AdminSidebar";
import Footer2 from "../../Common/Components/Footer2";
import { toast } from "react-toastify";
import { addMedicineAPI, deleteMedicineAPI, getAllMedicinesAPI, updateMedicineAPI } from "../../services/allAPI";

function Medicines() {
  const [medicines, setMedicines] = useState([]);
 const [formData, setFormData] = useState({
  name: "",
  price: "",
  imageUrl: "",
});

  const [editData, setEditData] = useState(null);

  const token = sessionStorage.getItem("token");
  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  // 🔹 Fetch medicines
  const fetchMedicines = async () => {
    try {
      const res = await getAllMedicinesAPI(reqHeader);
      if (res.status === 200) {
        setMedicines(res.data);
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch medicines");
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  // 🔹 Add medicine
  const handleAddMedicine = async () => {
    const { name, price, imageUrl } = formData;
    if (!name || !price || !imageUrl) {
      toast.warning("Please fill all fields");
      return;
    }

    try {
      const res = await addMedicineAPI(formData, reqHeader);
      if (res.status === 200 || res.status === 201) {
        toast.success("Medicine added successfully");
        setFormData({ name: "", price: "", imageUrl: "" });
        fetchMedicines();
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to add medicine");
    }
  };

  // 🔹 Delete medicine
  const handleDeleteMedicine = async (id) => {
    try {
      const res = await deleteMedicineAPI(id, reqHeader);
      if (res.status === 200) {
        toast.success("Medicine deleted");
        fetchMedicines();
      }
    } catch (err) {
      console.log(err);
      toast.error("Delete failed");
    }
  };

  // 🔹 Update medicine
  const handleUpdateMedicine = async () => {
    try {
      const res = await updateMedicineAPI(
        editData._id,
        editData,
        reqHeader
      );
      if (res.status === 200) {
        toast.success("Medicine updated");
        setEditData(null);
        fetchMedicines();
      }
    } catch (err) {
      console.log(err);
      toast.error("Update failed");
    }
  };

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
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border px-3 py-2 rounded w-full md:w-48 border-[#9575CD] bg-[#FAF7FF]"
              />
              <input
                type="number"
                placeholder="Price"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className="border px-3 py-2 rounded w-full md:w-40 border-[#9575CD] bg-[#FAF7FF]"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={formData.imageUrl}
                onChange={(e) =>
                  setFormData({ ...formData, imageUrl: e.target.value })
                }
                className="border px-3 py-2 rounded w-full md:w-64 border-[#9575CD] bg-[#FAF7FF]"
              />

              <button
                onClick={handleAddMedicine}
                className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
              >
                Add
              </button>
            </div>
          </div>

          {/* Medicine Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {medicines.map((item) => (
              <div
                key={item._id}
                className="border p-4 rounded-xl shadow bg-[#EDE7F6] hover:shadow-lg transition border-[#D1C4E9]"
              >
                <h3 className="font-semibold text-lg text-[#5E35B1]">
                  {item.name}
                </h3>
                <p className="text-[#1E142F]">₹ {item.price}</p>

                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded mt-3"
                />

                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => handleDeleteMedicine(item._id)}
                    className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setEditData(item)}
                    className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Edit Modal */}
          {editData && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
              <div className="bg-white p-6 rounded-xl w-full max-w-md">
                <h3 className="text-xl font-bold mb-4 text-[#5E35B1]">
                  Edit Medicine
                </h3>

                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) =>
                    setEditData({ ...editData, name: e.target.value })
                  }
                  className="border px-3 py-2 rounded w-full mb-3 border-[#9575CD]"
                />
                <input
                  type="number"
                  value={editData.price}
                  onChange={(e) =>
                    setEditData({ ...editData, price: e.target.value })
                  }
                  className="border px-3 py-2 rounded w-full mb-3 border-[#9575CD]"
                />
                <input
                  type="text"
                  value={editData.imageUrl}
                  onChange={(e) =>
                    setEditData({ ...editData, imageUrl: e.target.value })
                  }
                  className="border px-3 py-2 rounded w-full mb-3 border-[#9575CD]"
                />

                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={() => setEditData(null)}
                    className="px-4 py-2 border rounded border-[#9575CD]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdateMedicine}
                    className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer2 />
    </>
  );
}

export default Medicines;
