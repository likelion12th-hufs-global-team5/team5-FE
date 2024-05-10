import { configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import sessionSlice from './sessionSlice';
import authSlice from './authSlice';

const store=configureStore({
    reducer:{
        // user:userSlice,
        // session:sessionSlice,
        auth:authSlice
    },
});

export default store;