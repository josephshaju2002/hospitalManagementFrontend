import React, { useEffect } from 'react';
import Header from '../../Common/Components/Header';
import Footer from '../../Common/Components/Footer';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function PaymentSuccess() {
  const { setCartItems } = useCart(); // get setCartItems from context

  useEffect(() => {
    // Clear cart from sessionStorage and context state
    sessionStorage.removeItem("cart");
    setCartItems([]);
  }, []);

  return (
    <>
      <Header />
      <div className="grid grid-cols-2 py-20 px-40 justify-center items-center bg-[#FAF7FF]">
        <div>
          <h1 className="text-6xl text-[#7E57C2] font-bold">
            Congratulations!!!
          </h1>

          <p className="mt-5 mb-10 text-[#1E142F]">
            Thank you for shopping with Medipulse. Hope you have a good time ahead.
          </p>

          <Link
            to={"/buymed"}
            className="
              px-4 py-3
              bg-[#7E57C2]
              text-white
              border border-[#7E57C2]
              hover:bg-white
              hover:text-[#7E57C2]
              transition-all duration-300
            "
          >
            View More Medicines....
          </Link>
        </div>

        <div>
          <img
            className="w-3/4 ms-30"
            src="https://funtura.in/wp-content/themes/funtura/assets/images/success.svg"
            alt="Success"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaymentSuccess;
