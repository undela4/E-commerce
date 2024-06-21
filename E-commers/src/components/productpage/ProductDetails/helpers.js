import axios from 'axios';
import { successfunction,errorfunction } from '../../../tostify';
import Cookies from 'js-cookie'

const uId=Cookies.get('uId')

export  async function add_item_to_cart(id,count=1,setf,f)
{

 try{
    const data={'_id':uId,'data':{'id':id,'count':count} }

    const result=await axios.put('http://localhost:5000/v1/cartupdate',data);
    if(result.data.status){
        successfunction("Cart Updated")
        if(setf)
            setf(!f);
    }else{errorfunction("Error")}
 
 }catch(e){

console.log(e);
 }


}

