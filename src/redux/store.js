import { configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import sessionReducer from './sessionSlice';
import projectReducer from './projectSlice';

const store=configureStore({
    reducer:{
        user:userReducer,
        session:sessionReducer,
        project:projectReducer
    },
});

export default store

