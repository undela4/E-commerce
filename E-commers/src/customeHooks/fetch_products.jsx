import axios from 'axios';
import { useDispatch } from 'react-redux';
import { add_products } from '../Redux-Store/products';

export default  function useFetch_products(){

    const dispatch=useDispatch();
    
   async function fetch(category,state){
    try{
        const result= await axios.get(`https://e-commers-application.onrender.com/v1/products/${category}`);
        state(result.data.data);
        dispatch(add_products(result.data.data));

    }
    catch(err){
        console.log(err);
    }
    
    }
    return [fetch]

   


}
