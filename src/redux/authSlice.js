import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser } from '../api/authApi.js';

export const registerUserAsync=createAsyncThunk(
    'https://api.likelionhufsglobal.com/join',
    async(userData, {rejectWithValue})=>{
        try{
            const response=await registerUser(userData);
            return response.data;
        }catch(error){
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    loading:false,
    error:null,
};

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(bulider)=>{
        bulider
        .addCase(registerUserAsync.pending, (state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(registerUserAsync.fulfilled, (state)=>{
            state.loading=false;
        })
        .addCase(registerUserAsync.rejected, (state, action)=>{
            state.loading=false;
            state.error=action.payload;
        });
    },
});

export default authSlice.reducer;