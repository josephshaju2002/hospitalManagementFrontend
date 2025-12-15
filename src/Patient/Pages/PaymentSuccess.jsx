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
      <div className="grid grid-cols-2 py-20 px-40 justify-center items-center">
        <div>
          <h1 className='text-6xl text-blue-700'>Congratulations!!!</h1>
          <p className='mt-5 mb-10'>
            Thank you for shopping with Bookstore. Hope you have a good time ahead.
          </p>
          <Link
            to={"/buymed"}
            className='px-4 py-3 bg-blue-600 text-white hover:border hover:border-blue-600 hover:bg-white hover:text-blue-600'
          >
            View More Medicines....
          </Link>
        </div>
        <div>
          <img
            className='w-3/4 ms-30'
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
