import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../redux/AuthSlice';

export default configureStore({
    reducer: {
        auth: authSlice, // Add your authSlice to the store
    },
})