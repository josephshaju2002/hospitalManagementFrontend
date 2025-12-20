import React, { useEffect, useRef, useState } from "react";
import AdminHeader from "../Components/Adminheader";
import AdminSidebar from "../Components/AdminSidebar";
import Footer2 from "../../Common/Components/Footer2";
import { toast } from "react-toastify";
import { updateAdminSettingsAPI } from "../../services/allAPI";
import SERVERURL from "../../services/serverURL";
import { useContext } from "react";
import { adminProfileUpdate } from "../../context/ContextShare";

function AdminSettings() {
  const DEFAULT_AVATAR =
    "https://cdn-icons-png.flaticon.com/512/2922/2922510.png";

  const fileRef = useRef(null);

  const { setAdminProfileStatus } = useContext(adminProfileUpdate);


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profile, setProfile] = useState(null);
  const [preview, setPreview] = useState(DEFAULT_AVATAR);

  const [originalAdmin, setOriginalAdmin] = useState({
    username: "",
    email: "",
    profile: "",
  });

  /* ================= LOAD ADMIN DATA ================= */
  useEffect(() => {
    const admin = JSON.parse(sessionStorage.getItem("existingUser"));

    if (admin && admin.role === "admin") {
      setUsername(admin.username);
      setEmail(admin.email);

      setOriginalAdmin({
        username: admin.username,
        email: admin.email,
        profile: admin.profile || "",
      });

      if (admin.profile) {
        setPreview(`${SERVERURL}/imgUploads/${admin.profile}`);
      }
    }
  }, []);

  /* ================= IMAGE ================= */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  /* ================= RESET ================= */
  const handleReset = () => {
    setUsername(originalAdmin.username);
    setEmail(originalAdmin.email);

    if (originalAdmin.profile) {
      setPreview(`${SERVERURL}/imgUploads/${originalAdmin.profile}`);
    } else {
      setPreview(DEFAULT_AVATAR);
    }

    setProfile(null);
    setPassword("");
    setConfirmPassword("");

    toast.info("Changes reverted");
  };

  /* ================= UPDATE ================= */
  const handleUpdateSettings = async (e) => {
    e.preventDefault();

    if (password && password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const token = sessionStorage.getItem("token");
    const reqHeader = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    };

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);

    if (password) formData.append("password", password);
    if (profile) formData.append("profile", profile);

    try {
      const res = await updateAdminSettingsAPI(formData, reqHeader);

      if (res.status === 200) {
        toast.success("Admin settings updated");
        setAdminProfileStatus(res)

        const updatedAdmin = res.data.data;

        sessionStorage.setItem(
          "existingUser",
          JSON.stringify(updatedAdmin)
        );

        setOriginalAdmin({
          username: updatedAdmin.username,
          email: updatedAdmin.email,
          profile: updatedAdmin.profile || "",
        });

        setPassword("");
        setConfirmPassword("");
        setProfile(null);
      }
    } catch (error) {
      toast.error("Update failed");
    }
  };

  return (
    <>
      <AdminHeader />

      <div className="md:grid grid-cols-[260px_1fr] min-h-screen bg-[#FAF7FF]">
        <div className="bg-[#EDE7F6]">
          <AdminSidebar />
        </div>

        <div className="p-6 md:p-10">
          <h1 className="text-3xl font-bold mb-10">Admin Settings</h1>

          <div className="grid md:grid-cols-2 gap-10">
            {/* LEFT */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">
                Hospital Administration Overview
              </h2>

              <p className="text-sm text-gray-600 mb-6">
                Centralized control panel to manage hospital operations efficiently.
              </p>

              <ul className="space-y-4 text-sm">
                <li>• Manage medicine inventory</li>
                <li>• View patient & doctor feedback</li>
                <li>• Monitor appointments</li>
                <li>• Manage doctor profiles</li>
              </ul>

              <img
                src="https://img.freepik.com/free-vector/hospital-management-concept-illustration_114360-8897.jpg"
                alt="Hospital"
                className="mt-8  rounded-xl"
              />
            </div>

            {/* RIGHT */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-8">Account Settings</h2>

              {/* Profile Image */}
              <div className="flex flex-col items-center mb-6">
                <img
                  src={preview}
                  alt="profile"
                  className="w-32 h-32 rounded-full border-4 border-[#7E57C2] cursor-pointer"
                  onClick={() => fileRef.current.click()}
                />
                <input
                  type="file"
                  ref={fileRef}
                  hidden
                  onChange={handleImageChange}
                />
                <p className="text-sm mt-2 text-gray-500">
                  Click image to change
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleUpdateSettings}>
                <div>
                  <label>Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-3 border rounded-xl"
                  />
                </div>

                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border rounded-xl"
                  />
                </div>

                <div>
                  <label>New Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border rounded-xl"
                  />
                </div>

                <div>
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-3 border rounded-xl"
                  />
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-3 border border-amber-500 text-amber-600 rounded-xl"
                  >
                    Reset
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-green-600 text-white rounded-xl"
                  >
                    Update Settings
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer2 />
    </>
  );
}

export default AdminSettings;
