import React, { useState,useEffect } from 'react';
import axios from 'axios';
import  {useSelector,useDispatch} from 'react-redux';
import { add_products } from '../Redux-Store/products';
export default  function useFetch_products(){

    const dispatch = useDispatch();

   const products=useSelector(state=>state.productSlice.products);
    
   async function fetch(category,state){
    try{
        const result= await axios.get(`http://localhost:5000/v1/products/${category}`);
        dispatch(add_products(result.data.data));
        state(result.data.data);

    }
    catch(err){
        console.log(err);
    }


    }
    return [fetch]

   


}
