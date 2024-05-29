import { configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import sessionReducer from './sessionSlice';
import projectSlice from './projectSlice';

const store=configureStore({
    reducer:{
        user:userReducer,
        session:sessionReducer,
        project:projectSlice
    },
});

export default store

