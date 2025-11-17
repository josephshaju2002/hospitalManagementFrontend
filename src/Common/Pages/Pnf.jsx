import React from "react";
import { Link } from "react-router-dom";

function Pnf() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-5">
      <h1 className="text-9xl font-extrabold text-blue-600 drop-shadow-lg">404</h1>

      <h2 className="text-3xl font-bold mt-5 text-gray-800 text-center">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-600 mt-3 text-center max-w-md">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>

      

      <div className="mt-10">
        <img
          src="https://illustrations.popsy.co/gray/work-from-home.svg"
          alt="Not Found Illustration"
          className="w-72 md:w-96 opacity-90"
        />
      </div>
    </div>
  );
}

export default Pnf;
