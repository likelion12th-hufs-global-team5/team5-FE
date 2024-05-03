import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export const userSlice=createSlice({
    name:'user',

    initialState:{
        accessToken:null,
        studentNumber:null,
        id:null,
    },

    reducers:{
        login:(state,action)=>{
            state.accessToken=action.payload.accessToken;
            state.studentNumber=action.payload.studentNumber;
            state.id=action.payload.id;

            Cookies.set('accessToken',action.payload.accessToken,{
                expires:1,
            });
            Cookies.set('studentNumber',action.payload.studentNumber,{
                expires:1,
            });
            Cookies.set('id',action.payload.id,{
                expires:1,
            })
        },
        logout:(state)=>{
            state.accessToken=null;
            state.studentNumber=null;
            state.id=null;

            Cookies.remove('accessToken');
            Cookies.remove('email');
            Cookies.remove('id');
        },
    },

});

export const {login,logout}=userSlice.actions;

export const selectToken=(state)=>state.user.accessToken;
export const selectStudentNumber=(state)=>state.user.studentNumber;
export const selectId=(state)=>state.user.id;
export const selectIsLoggedIn=(state)=>state.user.accessToken !== null;

export default userSlice.reducer;