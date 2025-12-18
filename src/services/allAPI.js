import SERVERURL from "./serverURL";
import commonAPI from "./commonAPI";

// register
export const registerAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVERURL}/register`, reqBody);
};

// login
export const loginAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVERURL}/login`, reqBody);
};

// get home medicines
export const getFeaturedMedicinesAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/featured-medicines`);
};

// get all medicines
export const getAllCommonMedicinesAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVERURL}/getall-medicines`, {}, reqHeader);
};

// get single medicine

export const getSingleMedicineAPI = (id, reqHeader) => {
  return commonAPI("GET", `${SERVERURL}/medicine/${id}`, {}, reqHeader);
};

// ............................................patient..................................................

// make cart payment (Stripe Checkout)
export const makeCartPaymentAPI = (data, reqHeader) => {
  return commonAPI("POST", `${SERVERURL}/cart-payment`, data, reqHeader);
};

// send message (user or doctor)
export const sendContactMessageAPI = (reqBody) => {
  return commonAPI("POST", `${SERVERURL}/send-message`, reqBody);
};

// update user profile
export const updateUserProfileAPI = (reqBody,reqHeader) => {
  return commonAPI("PUT", `${SERVERURL}/update-userProfile`, reqBody, reqHeader); 
};

// get all doctor profiles
export const getAllDoctorsAPI = () => {
  return commonAPI("GET", `${SERVERURL}/get-all-doctors`);
};

// book appointment
export const bookAppointmentAPI = (reqBody, reqHeader) => {
  return commonAPI("POST",`${SERVERURL}/book-appointment`,reqBody,reqHeader);
};

// get appointment doctors
export const getMyAppointmentsAPI = (reqHeader) => {
  return commonAPI("GET",`${SERVERURL}/my-appointments`,{},reqHeader);
};

// cancel appointment
export const cancelAppointmentAPI = (appointmentId, reqHeader) => {
  return commonAPI("DELETE",`${SERVERURL}/cancel-appointment/${appointmentId}`,"",reqHeader);
};


// ............................................Doctor...................................................
// update doctor profile
export const updateDoctorProfileAPI = (reqBody, reqHeader) => {
  return commonAPI("PUT",`${SERVERURL}/update-doctor-profile`,reqBody,reqHeader);
};

// get doctor profile
export const getDoctorProfileAPI = (reqHeader) => {
  return commonAPI("GET",`${SERVERURL}/get-doctor-profile`,{},reqHeader);
};

// get all appointments
export const getDoctorAppointmentsAPI = (reqHeader) => {
  return commonAPI("GET",`${SERVERURL}/doctor/appointments`,"",reqHeader);
};

// get single patient card
export const getSingleAppointmentAPI = (id, reqHeader) => {
  return commonAPI("GET",`${SERVERURL}/appointment/${id}`,"",reqHeader);
};

// edit patient health status
export const updatePatientHealthAPI = (patientId, reqBody, reqHeader) => {
  return commonAPI("PUT",`${SERVERURL}/update-patient-health/${patientId}`,reqBody,reqHeader);
};

// to update health status in session storage

export const getLoggedUserAPI = (reqHeader) => {
  return commonAPI("GET", `${SERVERURL}/get-logged-user`, "", reqHeader);
};

// prescribe medicines
export const updatePrescriptionAPI = (appointmentId, reqBody, reqHeader) => {
  return commonAPI("PUT",`${SERVERURL}/update-prescription/${appointmentId}`,reqBody,reqHeader);
};






// ............................................Admin....................................................

// add medicine
export const addMedicineAPI = async (reqBody, reqHeader) => {
  return await commonAPI("POST",`${SERVERURL}/add-medicine`,reqBody,reqHeader);
};

// get all medicines
export const getAllMedicinesAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVERURL}/all-medicines`, "", reqHeader);
};

// delete medicine
export const deleteMedicineAPI = async (id, reqHeader) => {
  return await commonAPI("DELETE",`${SERVERURL}/delete-medicines/${id}`,{},reqHeader);
};

// update medicine
export const updateMedicineAPI = async (id, reqBody, reqHeader) => {
  return await commonAPI( "PUT", `${SERVERURL}/update-medicines/${id}`, reqBody, reqHeader);
};



// admin → get user messages
export const getUserMessagesAPI = (reqHeader) => {
  return commonAPI("GET", `${SERVERURL}/user-messages`, {}, reqHeader);
};

// admin → get doctor messages
export const getDoctorMessagesAPI = (reqHeader) => {
  return commonAPI("GET", `${SERVERURL}/doctor-messages`, {}, reqHeader);
};

// admin → delete message
export const deleteMessageAPI = (id, reqHeader) => {
  return commonAPI("DELETE",`${SERVERURL}/delete-messages/${id}`,{},reqHeader);
};
