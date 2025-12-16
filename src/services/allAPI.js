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

// ............................................Doctor...................................................
// update doctor profile
export const updateDoctorProfileAPI = (reqBody, reqHeader) => {
  return commonAPI("PUT",`${SERVERURL}/update-doctor-profile`,reqBody,reqHeader);
};

// get doctor profile
export const getDoctorProfileAPI = (reqHeader) => {
  return commonAPI("GET",`${SERVERURL}/get-doctor-profile`,{},reqHeader);
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
