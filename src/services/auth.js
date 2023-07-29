import axios from "axios";
import instance from "./instance";
import { useParams } from "react-router-dom";

// const signup =async(credentials) =>{
//     try
//     {
//         console.log('Signing up User...');
//         const response = await instance.authInstance.post('/signup',credentials);
//         console.log('Signup successful...');
//         console.log(response.data.message);
//     }
//     catch(error)
//     {
//         console.log('Signup Failed', error);
//     }
// }

// const signin = async(credentials)=>{
//     try{
//         console.log('Signing in User...');
//         const response = await instance.authInstance.post('/signin',credentials);
//         console.log('Signin successful...');
//         console.log(response.data);
//     }
//     catch(error)
//     {
//         console.log('SignIn Failed...')
//     }
// }

const forgotpassword=async(credentials)=>{
    try{
        
        const response=await instance.authInstance.post('/forgot_password',credentials);
        console.log(response.data.message);
        console.log(response.data)
    }catch(error)
    {
        console.log("Mailed Failed to Send")
    }
}

const resetpassword = async(credentials)=>{
    try{
        const response=await instance.authInstance.post('/reset_password/:token',credentials);   
        console.log(response.data.message);
        console.log(response.data);

    }
    catch(error)
    {
        console.log("Reset Password Failed ", error);
    }
}

//export default {signup,signin,forgotpassword,resetpassword};
export default {forgotpassword,resetpassword};