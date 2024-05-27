import { configureStore} from '@reduxjs/toolkit';
// import userSlice from './userSlice';
import userReducer from '..redux/userSlice';

const store=configureStore({
    reducer:{
        user:userReducer,
    },
});

export default store;