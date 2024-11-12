import axios from 'axios';
import { successfunction,errorfunction } from '../../tostify';
import Cookies from 'js-cookie';
import { clear_cart } from '../cart/methods';

const uId=Cookies.get('uId');

export async function add_address(address)
{

    const data={"_id":uId, "address":address }
    
    try{

        
        const res=await axios.post('https://e-commers-application.onrender.com/v1/address/add',data);
        if(res.data.status)
        {
          console.log(res.data);
          successfunction(res.data.msg)

        }
    }
    catch(err){
        console.log(err);
    }
}


export async function get_address(setaddress){

    const data={"_id":uId}
    
    try{
        const res=await axios.post('https://e-commers-application.onrender.com/v1/address/get',data);
        if(res.data.status)
        {
          setaddress(res.data.data);
       
        }
    }
    catch(err){
        console.log(err);
    }
}

export async function del_address(id){

    const data={"_id":uId,'id':id } 
    
    try{
        const res=await axios.post('https://e-commers-application.onrender.com/v1/address/del',data);
        if(res.data.status)
        {
         successfunction("Address Deleted")
       
        }
    }
    catch(err){
        console.log(err);
    }
}


export async function create_order(data){
    
        data.map((item)=>{

            axios.post('https://e-commers-application.onrender.com/v1/orders/create',{"_id":uId,"data":item}).then((r)=>{
                if(r.data.status){
                    clear_cart(uId);
                    successfunction(r.data.msg);
                }
                else{
                    errorfunction(r.data.msg);
                }
            })

        }).catch(()=>{console.log(err)})
    


}

