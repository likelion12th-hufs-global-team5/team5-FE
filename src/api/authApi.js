import axios from 'axios';

const API_URL='https://api.likelionhufsglobal.com/join'

export const registerUser=async(userData)=>{
    try{
        const response=await axios.post(`${API_URL}/register`,userData);
        return response.data;
    }catch (error){
        throw error;
    }
};