import axios from "axios"

const AxiosPostRequests = async (endPoint,requestBody,handleResponse,handleError,setLoading) =>{
    try{
        const res = await axios.post(endPoint,requestBody)
        setLoading(false)
        handleResponse(res)
        
    }catch(err){    
        console.log(err.message)
    }
}

export default AxiosPostRequests;
