import { createSlice } from "@reduxjs/toolkit";

const initialState={

  reviews:[],
  flag:false

};

 const review_slice=createSlice({

            name:'review_slice',
            initialState:initialState, 
        
        reducers:{

            set_review_data:(state,action)=>{
                state.reviews=(action.payload)
                state.flag=true
            }

        },



 });
 export const {set_review_data}=review_slice.actions;
 export default review_slice.reducer;