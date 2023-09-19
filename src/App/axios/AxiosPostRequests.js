import axios from "axios"

const AxiosPostRequests = async (endPoint,requestBody,handleResponse,handleError) =>{
    try{
        const res = await axios.post(endPoint,requestBody)
        handleResponse(res)
    }catch(err){
        if(err.code!=="ERR_NETWORK")
        handleError(err.response.data.message)
    else{
        console.log(err.message)
    }
    }
}

export default AxiosPostRequests;
