import SERVERURL from "./serverURL"
import commonAPI from "./commonAPI"

// register
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

// login
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}
