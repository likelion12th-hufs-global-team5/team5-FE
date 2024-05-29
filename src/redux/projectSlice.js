import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 백엔드 서버 URL
const SERVER_URL = 'https://likelionteam5.pythonanywhere.com';

// 초기 상태
const initialState = {
    "id": Number,
    "teamName": "",
    "projectType": "",
    "projectDetail": "",
    "projectImage": "프로젝트 사진(default사진 존재)"
};

// 비동기 프로젝트 업로드 액션 생성
export const projectUpload=createAsyncThunk(
    'project/upload',
    async (credentials,thunkAPI) => {
        try{
            const response = await axios.post(`${SERVER_URL}/projects/button/${initialState.id}/`, credentials);
            return response.data;
        }catch{
            console.error('project Upload failed : ',error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// 비동기 프로젝트 디테일 액션 생성
export const projectAll=createAsyncThunk(
    'project/all',
    async (credentials, thunkAPI)=>{
        try{
            const response=await axios.get(`${SERVER_URL}/projects/all/}/`, credentials)
            return response.data;
        }catch{
            console.error('project all failed : ',error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// 비동기 프로젝트 조회 액션 생성
export const projectDetail=createAsyncThunk(
    'project/detail',
    async (credentials, thunkAPI)=> {
        try{
            const response=await axios.get(`${SERVER_URL}/projects/detail/${initialState.id}/`, credentials)
            return response.data;
        }catch{
            console.error('project detail failed : ',error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const sessionSlice=createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(projectUpload.pending, (state)=>{
                state.status='loading';
            })
            .addCase(projectUpload.fulfilled, (state,action)=>{
                state.status='succeeded';
                state.isLoggedIn=true;
                Object.assign(state,action.payload);
            })
            .addCase(projectUpload.rejected, (state,action)=>{
                state.status='failed';
                state.error=action.payload;
            })
            .addCase(projectAll.pending, (state)=>{
                state.status='loading'
            })
            .addCase(projectAll.pending, (state)=>{
                state.status='loading';
            })
            .addCase(projectAll.rejected, (state,action)=>{
                state.status='failed';
                state.error=action.payload;
            })
            .addCase(projectDetail.pending, (state)=>{
                state.status='loading'
            })
            .addCase(projectDetail.rejected, (state, action)=>{
                state.status='failed';
                state.error=action.payload;
            });
    }
});

export default projectSlice.reducer;