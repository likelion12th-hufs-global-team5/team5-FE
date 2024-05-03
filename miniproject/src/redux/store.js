import { configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import sessionSlice from './sessionSlice';

const store=configureStore({
    reducer:{
        user:userSlice,
        session:sessionSlice,
    },
});

export default store;