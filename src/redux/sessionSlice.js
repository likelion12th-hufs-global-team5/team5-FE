import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 백엔드 서버 URL
const SERVER_URL = 'https://likelionteam5.pythonanywhere.com';

// 초기 상태
const initialState = {
    "id": 8,  //id는 장고에서 자동으로 등록되는 pk입니다.
    "sessionName": "test8",
    "url": "https://www.test8.com", 
    "sessionIntro": "This is a test8 post",
    "part": "",
    "created_at": ""
}

// 비동기 세션 디테일 페이지 액션 생성
export const sessionDetial=createAsyncThunk(
    'session/Detail',
    async(credentials, thunkAPI)=>{
        try{
            // 동적라우팅으로 설정
            const response = await axios.get(`${SERVER_URL}/sessions/detail/${initialState.id}/`,credentials);
            return response.data;
        } catch (error) {
            console.error('session detail failed : ',error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// 비동기 세션 업로드 액션 생성성
export const sessionUpload=createAsyncThunk(
    'session/upload',
    async(credentials,thunkAPI)=>{
        try{
            // 동적라우팅으로 설정
            const response = await axios.patch(`${SERVER_URL}/sessions/upload/${initialState.id}/`,credentials);
            return response.data;
        } catch (error) {
            console.error('session Upload failed : ',error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const sessionSlice=createSlice({
    name:'session',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(sessionDetial.pending, (state)=>{
                state.status='loading';
            })
            .addCase(sessionUpload.pending,(state)=>{
                state.status='loading';
            })
            .addCase(sessionUpload.fulfilled,(state,action)=>{
                state.status='succeeded';
                Object.assign(state,action.payload);
            })
            .addCase(sessionUpload.rejected,(state,action)=>{
                state.status='failed';
                state.error=action.payload;
            })
    }
});

export default sessionSlice.reducer;
