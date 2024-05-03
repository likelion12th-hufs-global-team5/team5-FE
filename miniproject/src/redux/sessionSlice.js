import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { act } from 'react';

export const sessionSlice=createSlice({
    name:'session',

    initialState:{
        // 세션자료에도 accesstoken이 필요한가?
        // 준영 왈 : 필요 없을 듯
        accessToken:null,
        sessionNumber:null,
        uploadUser:null,
    },

    reducers:{
        upload:(state,action)=>{
            state.accessToken=action.payload.accessToken;
            state.sessionNumber=action.payload.sessionNumber;
            state.uploadUser=action.payload.uploadUser;

            Cookies.set('accessToken',action.payload.accessToken,{
                expires:1,
            });

            Cookies.set('sessionNumber',action.payload.sessionNumber,{
                expires:1,
            });

            Cookies.set('uploadUser',action.payload.uploadUser,{
                expires:1,
            });
        },
        edit:(state)=>{
            state.accessToken=null;
            state.sessionNumber=null;
            state.uploadUser=null;

            Cookies.remove('accessToken');
            Cookies.remove('sessionNumber');
            Cookies.remove('uploadUser');
        },
    },
});

export const {upload,edit}=sessionSlice.actions;

export const selectToken=(state)=>state.session.accessToken;
export const selectSessionNumber=(state)=>state.session.sessionNumber;
export const selectUploadUser=(state)=>state.session.uploadUser;
export const selectIsUploadedSession=(state)=>state.session.accessToken !== null;

export default sessionSlice.reducer