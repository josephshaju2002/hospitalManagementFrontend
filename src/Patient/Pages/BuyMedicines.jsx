import React, { useState, useEffect } from "react";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";
import { toast } from "react-toastify";
import { getAllCommonMedicinesAPI } from "../../services/allAPI";
import { useNavigate } from "react-router-dom";

function BuyMedicines() {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const fetchMedicines = async (userToken) => {
    const reqHeader = {
      Authorization: `Bearer ${userToken}`,
    };

    try {
      const res = await getAllCommonMedicinesAPI(reqHeader);
      if (res.status === 200) {
        setProducts(res.data);
      }
    } catch (error) {
      toast.error("Failed to load medicines");
      console.log(error);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token");
      setToken(userToken);
      fetchMedicines(userToken);
    }
  }, []);

  return (
    <>
      <Header />

      {token ? (
        <>
          {/* Banner */}
          <div className="w-full bg-[#FAF7FF] py-16 px-6 md:px-20">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-[#7E57C2]">
                Buy Medicines and Medical Equipments Online
              </h1>
              <p className="mt-3 text-[#1E142F] md:w-2/3 mx-auto">
                Order genuine medicines and equipments at the best price.
              </p>
            </div>
          </div>

          {/* Products */}
          <div className="px-5 md:px-20 py-10">
            <h1 className="text-3xl font-bold text-center text-[#7E57C2]">
              Available Medicines
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
              {products.length > 0 ? (
                products.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white shadow-md rounded-xl p-5 border border-[#D1C4E9]"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-24 mx-auto"
                    />

                    <h3 className="text-xl font-semibold text-center mt-4">
                      {product.name}
                    </h3>

                    <p className="text-center text-[#7E57C2] font-bold mt-2">
                      ₹ {product.price}
                    </p>

                    <button
                      onClick={() => navigate(`/view/${product._id}`)}
                      className="w-full mt-4 bg-[#7E57C2] text-white py-2 rounded-lg hover:bg-[#5E35B1]"
                    >
                      View Medicine
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-4">No medicines available</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="my-20 text-center">
          <p className="text-xl font-semibold">
            Please login to view medicines
          </p>
        </div>
      )}

      <Footer />
    </>
  );
}

export default BuyMedicines;
