import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:'productslice',
    initialState:{
        products:[],
        flag:false
    },
    reducers:{
        
        add_products:(state,action)=>{
            state.products=action.payload
            state.flag=true
        }
    }

})
export const  {add_products} = productSlice.actions;
export default productSlice.reducer;