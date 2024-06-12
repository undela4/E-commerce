import { configureStore } from "@reduxjs/toolkit";
import user_data_slice from "./user_data_slice";
import userSlice from "./userSlice";
import productSlice from './products.js';

const store=configureStore({
    reducer:{
        user_data_slice:user_data_slice,
        userSlice:userSlice,
        productSlice:productSlice
    }
});
export default store;