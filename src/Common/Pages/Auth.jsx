import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

function Auth({ register }) {
  const [pass, setPass] = useState(false);

  const [useDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  console.log(useDetails);

  const handleRegister = async () => {
    const { username, email, password } = useDetails;
    if (!username || !email || !password) {
      alert("Fill the form completely");
    } else {
      // const result = await registerAPI(useDetails)
      console.log(result);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen relative flex justify-center items-center flex-col bg-[url(https://www.sbstrains.com/images/coverimages/abduction/Emergency_Medicine_Abduction_Management_Training_SBS_Training_Solutions.jpg)] bg-cover bg-center">
        <Link to={"/"}>
          <div className="absolute top-5 left-5 text-white text-xl font-bold flex gap-2">
            <FaHome className="text-3xl" />
            Go To Home
          </div>
        </Link>

        <div className="p-10">
          <h1 className="text-3xl font-bold text-center">MEDIPULSE -`♡´-</h1>
          <div
            style={{ width: "400px" }}
            className="bg-blue-950 text-white p-5 flex flex-col my-5 justify-center items-center rounded"
          >
            <div
              style={{ width: "100px", height: "100px", borderRadius: "100%" }}
              className="border mb-3 flex justify-center items-center"
            >
              <FaUserCircle className="text-6xl" />
            </div>
            {register ? (
              <h1 className="text-2xl">Register</h1>
            ) : (
              <h1 className="text-2xl">Login</h1>
            )}

            <form action="">
              {register && (
                <div className="my-5">
                  <label htmlFor="">UserName</label>
                  <input
                    value={useDetails?.username}
                    onChange={(e) =>
                      setUserDetails({
                        ...useDetails,
                        username: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Username"
                    className="bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black"
                  />
                </div>
              )}
              <div className="my-5">
                <label htmlFor="">Email</label>
                <input
                  value={useDetails?.email}
                  onChange={(e) =>
                    setUserDetails({ ...useDetails, email: e.target.value })
                  }
                  type="email"
                  placeholder="Email"
                  className="bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="">Password</label>
                <div className="flex items-center">
                  <input
                    value={useDetails?.password}
                    onChange={(e) =>
                      setUserDetails({
                        ...useDetails,
                        password: e.target.value,
                      })
                    }
                    type={pass ? "text" : "password"}
                    placeholder="Password"
                    className="bg-white p-2 w-full rounded placeholder-gray-500 text-black"
                  />
                  {pass ? (
                    <FaRegEyeSlash
                      onClick={() => setPass(!pass)}
                      className="text-gray-500 cursor-pointer"
                      style={{ marginLeft: "-30px" }}
                    />
                  ) : (
                    <FaRegEye
                      onClick={() => setPass(!pass)}
                      className="text-gray-500 cursor-pointer"
                      style={{ marginLeft: "-30px" }}
                    />
                  )}
                </div>
              </div>

              <div className="mt-2">
                <p className="text-xs text-orange-400">
                  *Never Share Your Password With Others
                </p>
              </div>
              <div className="mt-4">
                {register ? (
                  <button
                    onClick={handleRegister}
                    type="button"
                    className="bg-green-700 p-2 w-full rounded"
                  >
                    Register
                  </button>
                ) : (
                  <button
                    type="button"
                    className="bg-green-700 p-2 w-full rounded"
                  >
                    Login
                  </button>
                )}
              </div>
              <div>{/* Google Authentication */}</div>
              <div className="mt-3">
                {register ? (
                  <p>
                    Are you already a user{" "}
                    <Link className="text-blue-400" to={"/login"}>
                      Login
                    </Link>
                  </p>
                ) : (
                  <p>
                    Are you new user?{" "}
                    <Link className="text-blue-400" to={"/register"}>
                      Register
                    </Link>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
