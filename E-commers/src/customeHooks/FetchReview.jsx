import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { set_review_data } from '../Redux-Store/review_slice';

export default function useFetchReview() {

    const dispatch=useDispatch();

    async function Fetch_reviews()
    {
        try{
            const result= await axios.get(`http://localhost:5000/v1/review/get`);
            dispatch(set_review_data(result.data.data));
    
        }
        catch(err){
            console.log(err);
        }
        
        }


    return [Fetch_reviews]
    
  
}
