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
  return await commonAPI("GET",`${SERVERURL}/featured-medicines`);
};

// get all medicines
export const getAllCommonMedicinesAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVERURL}/getall-medicines`,{},reqHeader);
};

// get single medicine

export const getSingleMedicineAPI = (id,reqHeader) => {
  return commonAPI("GET", `${SERVERURL}/medicine/${id}`,{},reqHeader);
};




// ............................................patient..................................................

// ............................................Admin....................................................
// add medicine
export const addMedicineAPI = async (reqBody, reqHeader) => {
  return await commonAPI( "POST", `${SERVERURL}/add-medicine`, reqBody, reqHeader);
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
  return await commonAPI("PUT",`${SERVERURL}/update-medicines/${id}`,reqBody,reqHeader);
};
