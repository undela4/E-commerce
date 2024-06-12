import { createSlice } from "@reduxjs/toolkit";

const initialState={

  user_data:[]

};

 const user_data_slice=createSlice({

            name:'user-data_slice',
            initialState:initialState, 
        
        reducers:{

            set_user_data:(state,action)=>{
                state.user_data.push(action.payload)
            }

        },



 });
 export const {set_user_data}=user_data_slice.actions;
 export default user_data_slice.reducer;