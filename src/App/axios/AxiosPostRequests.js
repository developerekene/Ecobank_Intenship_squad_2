import axios from "axios"

const AxiosPostRequests = async (endPoint,requestBody) =>{
    console.log(endPoint,requestBody)
    try{
        console.log(endPoint, requestBody)
        const res = await axios.post(endPoint,requestBody)
        alert(res.data.message)  
    }catch(err){
        alert(err)
    }
}

export default AxiosPostRequests;
