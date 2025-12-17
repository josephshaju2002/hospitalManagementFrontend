import React, { useContext, useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaCamera, FaLock } from "react-icons/fa";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";
import { toast } from "react-toastify";
import { getLoggedUserAPI, updateUserProfileAPI } from "../../services/allAPI";
import SERVERURL from "../../services/serverURL";
import { useNavigate } from "react-router-dom";
import { userProfileUpdate } from "../../context/ContextShare";

function ProfilePage() {
  const DEFAULT_AVATAR =
    "https://cdn-icons-png.flaticon.com/512/2922/2922510.png";

  const [activeTab, setActiveTab] = useState("details");

  const [health, setHealth] = useState({
  bloodGroup: "",
  height: "",
  weight: "",
  allergies: "",
  conditions: "",
  medications: "",
  smoking: "No",
  alcohol: "No",
});

useEffect(() => {
  if (activeTab === "health") {
    fetchLatestUser();
  }
}, [activeTab]);


const fetchLatestUser = async () => {
  try {
    const token = sessionStorage.getItem("token");
    const reqHeader = { Authorization: `Bearer ${token}` };

    const res = await getLoggedUserAPI(reqHeader);

    if (res.status === 200) {
      sessionStorage.setItem("existingUser", JSON.stringify(res.data));
      setHealth(res.data.health || {});
    }
  } catch (error) {
    console.error(error);
  }
};




  const { setUpdateProfileStatus } = useContext(userProfileUpdate);

  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  console.log(username);

  const [details, setDetails] = useState({
    username: "",
    email: "",
    number: "",
    bio: "",
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const Navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [profilePreview, setProfilePreview] = useState(DEFAULT_AVATAR);

  useEffect(() => {
    const existingUser = sessionStorage.getItem("existingUser");

    if (existingUser) {
      const user = JSON.parse(existingUser);

      setUsername(user.username || "");
      setBio(user.bio || "");

      setDetails({
        username: user.username || "",
        email: user.email || "",
        number: user.number || "",
        bio: user.bio || "",
      });

      if (user.profile) {
        setProfilePreview(`${SERVERURL}/imgUploads/${user.profile}`);
      } else {
        setProfilePreview(DEFAULT_AVATAR);
      }
    } else {
      setProfilePreview(DEFAULT_AVATAR);
    }
  }, []);

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile(file);
      setProfilePreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem("token");
    if (!token) {
      toast.error("Please login again");
      return;
    }

    const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
    const reqHeader = { Authorization: `Bearer ${token}` };
    const reqBody = new FormData();

    // If updating password
    if (activeTab === "password") {
      if (passwords.newPassword !== passwords.confirmPassword) {
        toast.error("New password and confirm password do not match");
        return;
      }
      reqBody.append("password", passwords.newPassword);
    } else {
      // Update other profile fields
      reqBody.append("username", details.username);
      reqBody.append("email", details.email);
      reqBody.append("number", details.number);
      reqBody.append("bio", details.bio);
    }

    if (profile) {
      reqBody.append("profile", profile);
    }

    try {
      const result = await updateUserProfileAPI(reqBody, reqHeader);

      if (result.status === 200) {
        // Logout if email changed
        if (details.email !== existingUser.email) {
          toast.info("Email changed. Please login again.");
          sessionStorage.clear();
          Navigate("/login");
          return;
        }

        toast.success(
          activeTab === "password"
            ? "Password updated successfully"
            : "Profile updated successfully"
        );
        setUpdateProfileStatus(result);

        // Update session storage & UI
        sessionStorage.setItem("existingUser", JSON.stringify(result.data));
        setUsername(result.data.username);
        setBio(result.data.bio);
        if (result.data.profile) {
          setProfilePreview(`${SERVERURL}/imgUploads/${result.data.profile}`);
        } else {
          setProfilePreview(DEFAULT_AVATAR);
        }

        // Clear password fields
        setPasswords({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      }
    } catch (err) {
      console.log(err);
      toast.error(
        activeTab === "password"
          ? "Password update failed"
          : "Profile update failed"
      );
    }
  };
  return (
    <>
      <Header />

      <div
        className="min-h-screen p-6 md:p-10"
        style={{ backgroundColor: "#FAF7FF" }}
      >
        {/* Header */}
        <div
          className="text-white p-8 rounded-xl shadow mb-10 text-center"
          style={{ backgroundColor: "#7E57C2" }}
        >
          <h1 className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-3">
            <FaUser /> {username}
          </h1>
          <p className="mt-2 text-lg text-purple-100">{bio}</p>
        </div>

        <div
          className="max-w-4xl mx-auto rounded-xl shadow p-6 md:p-10"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          {/* Profile Photo */}
          <div className="flex flex-col items-center">
            <img
              src={profilePreview}
              alt="Profile"
              className="w-32 h-32 rounded-full shadow"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = DEFAULT_AVATAR;
              }}
            />

            <label
              className="mt-4 cursor-pointer text-white px-4 py-2 rounded-lg flex items-center gap-2"
              style={{ backgroundColor: "#7E57C2" }}
            >
              <FaCamera /> Update Photo
              <input
                type="file"
                name="profile"
                className="hidden"
                onChange={handleProfileChange}
              />
            </label>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mt-10 border-b border-purple-200">
            <button
              onClick={() => setActiveTab("details")}
              className={`px-6 py-3 font-semibold ${
                activeTab === "details" ? "border-b-2" : "text-gray-600"
              }`}
              style={{
                color: activeTab === "details" ? "#7E57C2" : "#6B6B6B",
                borderColor:
                  activeTab === "details" ? "#7E57C2" : "transparent",
              }}
            >
              Edit Details
            </button>

            <button
              onClick={() => setActiveTab("password")}
              className={`px-6 py-3 font-semibold ${
                activeTab === "password" ? "border-b-2" : "text-gray-600"
              }`}
              style={{
                color: activeTab === "password" ? "#7E57C2" : "#6B6B6B",
                borderColor:
                  activeTab === "password" ? "#7E57C2" : "transparent",
              }}
            >
              Change Password
            </button>

            <button
              onClick={() => setActiveTab("health")}
              className={`px-6 py-3 font-semibold ${
                activeTab === "health" ? "border-b-2" : "text-gray-600"
              }`}
              style={{
                color: activeTab === "health" ? "#7E57C2" : "#6B6B6B",
                borderColor: activeTab === "health" ? "#7E57C2" : "transparent",
              }}
            >
              Health Status
            </button>
          </div>

          {/* TAB CONTENT */}
          <div className="mt-8">
            {/* ===== TAB 1: DETAILS ===== */}
            {activeTab === "details" && (
              <form
                onSubmit={handleUpdateProfile}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4"
              >
                {/* Full Name */}
                <div>
                  <label className="block font-semibold mb-1 text-purple-900">
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3 text-purple-400" />
                    <input
                      type="text"
                      name="username"
                      value={details.username}
                      onChange={handleDetailsChange}
                      className="w-full pl-10 p-3 border rounded-lg"
                      style={{ borderColor: "#D1C4E9" }}
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block font-semibold mb-1 text-purple-900">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-3 text-purple-400" />
                    <input
                      type="email"
                      name="email"
                      value={details.email}
                      onChange={handleDetailsChange}
                      className="w-full pl-10 p-3 border rounded-lg"
                      style={{ borderColor: "#D1C4E9" }}
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-semibold mb-1 text-purple-900">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="number"
                    value={details.number}
                    onChange={handleDetailsChange}
                    className="w-full p-3 border rounded-lg"
                    style={{ borderColor: "#D1C4E9" }}
                    placeholder="Enter phone number"
                  />
                </div>

                {/* Bio */}
                <div>
                  <label className="block font-semibold mb-1 text-purple-900">
                    Bio
                  </label>
                  <input
                    type="text"
                    name="bio"
                    value={details.bio}
                    onChange={handleDetailsChange}
                    className="w-full p-3 border rounded-lg"
                    style={{ borderColor: "#D1C4E9" }}
                    placeholder="Your Bio"
                  />
                </div>

                {/* Save Button */}
                <div className="col-span-1 md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-lg shadow"
                    style={{ backgroundColor: "#7E57C2", color: "white" }}
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            )}

            {/* ===== TAB 2: PASSWORD ===== */}
            {activeTab === "password" && (
              <form
                onSubmit={handleUpdateProfile}
                className="grid grid-cols-1 gap-6 max-w-lg mx-auto"
              >
                <div>
                  <label className="block font-semibold mb-1 text-purple-900">
                    New Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-3 text-purple-400" />
                    <input
                      type="password"
                      name="newPassword"
                      // value={passwords.newPassword}
                      onChange={handlePasswordChange}
                      className="w-full pl-10 p-3 border rounded-lg"
                      style={{ borderColor: "#D1C4E9" }}
                      placeholder="Enter new password"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-purple-900">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-3 text-purple-400" />
                    <input
                      type="password"
                      name="confirmPassword"
                      // value={passwords.confirmPassword}
                      onChange={handlePasswordChange}
                      className="w-full pl-10 p-3 border rounded-lg"
                      style={{ borderColor: "#D1C4E9" }}
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="py-2 rounded-lg shadow"
                  style={{ backgroundColor: "#7E57C2", color: "white" }}
                >
                  Update Password
                </button>
              </form>
            )}

            {/* ===== TAB 3: HEALTH ===== */}
            {activeTab === "health" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  ["Blood Group", health.bloodGroup || "Not updated"],
                  [
                    "Height",
                    health.height ? `${health.height} cm` : "Not updated",
                  ],
                  [
                    "Weight",
                    health.weight ? `${health.weight} kg` : "Not updated",
                  ],
                  ["Allergies", health.allergies || "None"],
                  ["Chronic Conditions", health.conditions || "None"],
                  ["Current Medications", health.medications || "None"],
                  ["Smoking", health.smoking || "No"],
                  ["Alcohol Consumption", health.alcohol || "No"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="p-5 rounded-lg shadow"
                    style={{ backgroundColor: "#EDE7F6" }}
                  >
                    <p className="font-semibold text-[#5E35B1]">{label}</p>
                    <p className="mt-1 text-[#1E142F]">{value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProfilePage;
