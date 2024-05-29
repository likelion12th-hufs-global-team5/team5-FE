import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

// 백엔드 서버 URL
const SERVER_URL = 'https://likelionteam5.pythonanywhere.com';

// 초기 상태
const initialState = {
    memberId: "",
    name: "",
    studentNumber: "",
    userPhoto: "",
    password1: "",
    password2: "",
    currentPosition: "",
    year: 0,
    introduction: "",
    part: "",
    isLoggedIn: false,
    status: 'idle',
    error: null
};


// 비동기 로그인 액션 생성
export const userLogin = createAsyncThunk(
    'user/login',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post(`${SERVER_URL}/members/login/`, credentials);
            // 로그인 성공 후 쿠키에 로그인 정보 설정
            // 로그인 상태 유지 1일 동안 유지
            Cookies.set(
                'accessToken',
                response.data.accessToken,
                {expires:1}
            );
            return response.data;
        } catch (error) {
            console.error('Login failed:',error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


// 비동기 회원가입 액션 생성
export const userJoinMembership = createAsyncThunk(
    'user/signUp',
    async (userInfo, thunkAPI) => {
        try {
            const response = await axios.post(`${SERVER_URL}/members/join/`, userInfo);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// 비동기 사용자 정보 업데이트 액션 생성
export const editUser = createAsyncThunk(
    'user/updateUser',
    async (userInfo, thunkAPI) => {
        try {
            const response = await axios.patch(`${SERVER_URL}/members/update/`, userInfo);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// 회원 정보 쿠키에 저장 액션
export const saveCookies=createAsyncThunk(
    'user/saveCookies',
    async (userInfo, thunkAPI)=>{
        try{
            // 여기에 쿠키 저장 코드를 작성하면
            const response = Cookies.saveCookies(userInfo);
            console.log('userInfo : ',userInfo);
            return response.data;
        } catch(error){
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// 회원 정보 쿠키에 저장한거 받아온 것
export const getSaveCookies=createAsyncThunk(
    'user/getSaveCookies',
    async(userInfo, thunkAPI)=>{
        try{
            const response=Cookies.set(userInfo,userInfo.value);
            return response.data
        }catch(error){
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogout: (state) => {
            // 쿠키에서 로그인 정보 제거
            // 토큰 관련 부분 백엔드와 얘기 못해봄
            Cookies.remove('accessToken삭제하기')
            return { ...initialState, isLoggedIn: false };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.isLoggedIn = true;
                Object.assign(state, action.payload);
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(userJoinMembership.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(userJoinMembership.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // 회원가입 성공 후, 필요한 상태 업데이트
            })
            .addCase(userJoinMembership.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(editUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(editUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                Object.assign(state, action.payload);
            })
            .addCase(editUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export const { userLogout } = userSlice.actions;
export default userSlice.reducer;
// export { userLogin, userJoinMembership, editUser };
// export { userJoinMembership, editUser };