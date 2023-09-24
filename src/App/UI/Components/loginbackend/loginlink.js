
import axios from 'axios';

    const handleLogin = async (Base_Url,requestBody) => {
        try {
            console.log(Base_Url,requestBody)
            const response = await axios.post(Base_Url, requestBody);
            console.log(response)
            if (response.data === 'Login successful') {
                // Handle successful login
            } else {
                // Handle login failure
            }
        } catch (error) {
            // Handle error
            console.error('Error:', error);
        }
    };



export default handleLogin;
