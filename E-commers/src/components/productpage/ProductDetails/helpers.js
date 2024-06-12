import axios from 'axios';
import { successfunction,errorfunction } from '../../../tostify';

export  async function add_item_to_cart(id,count=1)
{
 try{
    const data={'email':"muraliundela369@gmail.com",'data':{'id':id,'count':count} }

    const result=await axios.put('http://localhost:5000/v1/cartupdate',data);
    if(result.data.status){
        console.log(123,result);
        successfunction("Cart Updated")
    }else{errorfunction("Error")}
 
 }catch(e){

console.log(e);
 }


}