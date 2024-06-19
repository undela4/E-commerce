import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'userSlice',
    initialState:{
        user:false,
    },
    reducers:{
        login:(state,action)=>{

            state.user=true;
            
        },
        logout:(state)=>{
            state.user=false;
        }
    }
});
export const {login,logout}=userSlice.actions;
export default userSlice.reducer;