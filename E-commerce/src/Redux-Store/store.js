import { configureStore } from "@reduxjs/toolkit";
import review_slice from "./review_slice";
import userSlice from "./userSlice";
import productSlice from './products.js';

const store=configureStore({
    reducer:{
        review_slice:review_slice,
        userSlice:userSlice,
        productSlice:productSlice
    }
});
export default store;