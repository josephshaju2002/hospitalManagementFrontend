import axios from "axios"

const commonAPI = async (httpRequest,url,reqBody,reqHeader)=>{
    const requestConfiq = {
        method : httpRequest,
        url,
        data:reqBody,
        headers:reqHeader
    }

    return await axios(requestConfiq).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}

export default commonAPI