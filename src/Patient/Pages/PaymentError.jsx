import React from 'react'
import Header from '../../Common/Components/Header'
import Footer from '../../Common/Components/Footer'
import { Link } from 'react-router-dom'

function PaymentError() {
  return (
    <>
      <Header/>
        <div className="grid grid-cols-2 py-20 px-40 justify-center items-center">
            <div>
                <h1 className='text-6xl text-red-700'>Sorry! Your Payment is Unsuccesfull...</h1>
                <p className='mt-5 mb-10'>We appologize for the inconvinience caused and appreciate your visit to Bookstore.</p>
                <Link to={"/buymed"} className='px-4 py-3 bg-blue-600 text-white hover:border hover:border-blue-600 hover:bg-white hover:text-blue-600'>View More Medicines...</Link>
            </div>
            <div>
                <img className='w-3/4 ms-30' src="https://png.pngtree.com/png-clipart/20250516/original/pngtree-payment-error-icon-png-image_20994702.png" alt="" />
            </div>
        </div>
      <Footer/>
    </>
  )
}

export default PaymentError
