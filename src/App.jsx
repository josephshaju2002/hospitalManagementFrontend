import { Route, Routes } from "react-router-dom";
import Loader from "./Common/Pages/Loader";
import Home from "./Common/Pages/Home";
import Aboutus from "./Common/Pages/Aboutus";
import Auth from "./Common/Pages/Auth";
import Pnf from "./Common/Pages/Pnf";
import Awareness from "./Patient/Pages/Awareness";
import { useEffect, useState } from "react";
import GetAppointments from "./Patient/Pages/GetAppointments";
import BuyMedicines from "./Patient/Pages/BuyMedicines";
import Contactus from "./Patient/Pages/Contactus";
import MyAppointments from "./Patient/Pages/MyAppointments";
import Profile from "./Patient/Pages/Profile";
import ViewMedicines from "./Patient/Pages/ViewMedicines";
import DoctorAppointments from "./Doctor/DoctorAppointments";
import DoctorProfile from "./Doctor/DoctorProfile";
import PatientCard from "./Doctor/PatientCard";
import Appointments from "./Admin/Pages/Appointments";
import Medicines from "./Admin/Pages/Medicines";
import Messages from "./Admin/Pages/Messages";
import AllDocProfiles from "./Admin/Pages/AllDocProfiles";
import Cart from "./Patient/Pages/Cart";
import Doctorcontact from "./Doctor/Doctorcontact";
import AdminHome from "./Admin/Pages/AdminHome";
import AdminSettings from "./Admin/Pages/AdminSettings.jsx";
import { ToastContainer } from "react-toastify";
import PaymentSuccess from "./Patient/Pages/PaymentSuccess.jsx";
import PaymentError from "./Patient/Pages/PaymentError.jsx";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <>
      <Routes>
        {/* common */}
        <Route path={"/"} element={loader ? <Loader /> : <Home />} />
        <Route path={"/about"} element={<Aboutus />} />
        <Route path={"/login"} element={<Auth />} />
        <Route path={"/register"} element={<Auth register />} />
        <Route path={"*"} element={<Pnf />} />

        {/* patient */}
        <Route path={"/awareness"} element={<Awareness />} />
        <Route path={"/buymed"} element={<BuyMedicines />} />
        <Route path={"/contact"} element={<Contactus />} />
        <Route path={"/getappo"} element={<GetAppointments />} />
        <Route path={"/myappo"} element={<MyAppointments />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/view/:id"} element={<ViewMedicines />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/paymentsuccess"} element={<PaymentSuccess />} />
        <Route path={"/paymenterror"} element={<PaymentError />} />

        {/* doctor */}
        <Route path={"/doctorappo"} element={<DoctorAppointments />} />
        <Route path={"/doctorprofile"} element={<DoctorProfile />} />
        <Route path={"/patientcard"} element={<PatientCard />} />
        <Route path={"/doctorcontact"} element={<Doctorcontact />} />

        {/* admin */}
        <Route path={"/appointments"} element={<Appointments />} />
        <Route path={"/medicines"} element={<Medicines />} />
        <Route path={"/messages"} element={<Messages />} />
        <Route path={"/docprofiles"} element={<AllDocProfiles />} />
        <Route path={"/adminhome"} element={<AdminHome />} />
        <Route path={"/adminsettings"} element={<AdminSettings />} />

      </Routes>

      <ToastContainer
          position="top-center"
          autoClose={3000}
          theme="colored"
        />
    </>
  );
}

export default App;
