import axios from "axios"

const AxiosPostRequests = async (endPoint,requestBody,handleResponse,handleError) =>{
    try{
        const res = await axios.post(endPoint,requestBody)
        handleResponse(res)
    }catch(err){
        handleError(err.response.data.message)
    }
}

export default AxiosPostRequests;
