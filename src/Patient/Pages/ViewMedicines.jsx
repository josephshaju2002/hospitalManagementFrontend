import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";
import { getSingleMedicineAPI } from "../../services/allAPI";

function ViewMedicines() {
  const { id } = useParams();
  const [medicine, setMedicine] = useState(null);
  const [token, setToken] = useState("");

  const fetchMedicine = async (userToken) => {
    const reqHeader = {
      Authorization: `Bearer ${userToken}`,
    };

    try {
      const res = await getSingleMedicineAPI(id, reqHeader);
      if (res.status === 200) {
        setMedicine(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token");
      setToken(userToken);
      fetchMedicine(userToken);
    }
  }, [id]);

  if (!medicine) {
    return <p className="text-center mt-40">Loading...</p>;
  }

  return (
    <>
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-36 px-5 md:px-20 mb-20 text-[#1E142F]">
        {/* Image */}
        <div>
          <img
            src={medicine.imageUrl}
            alt={medicine.name}
            className="h-[300px] w-full object-contain rounded-lg shadow bg-[#EDE7F6]"
          />

        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold text-[#5E35B1]">
            {medicine.name}
          </h1>

          <p className="text-2xl text-red-500 font-semibold mt-2">
            ₹ {medicine.price}
          </p>

        
           <button className="bg-[#7E57C2] text-white rounded-lg px-5 py-3 mt-5 hover:bg-[#5E35B1]">
            ADD TO CART
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ViewMedicines;
