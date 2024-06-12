import axios from 'axios';
import { successfunction } from '../../tostify';


export async function add_address(address){

    const data={"email":"muraliundela369@gmail.com",
        "address":address}
    
    try{
        console.log(address);
        const res=await axios.post('http://localhost:5000/v1/address/add',data);
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

    const data={"email":"muraliundela369@gmail.com"}
    
    try{
        const res=await axios.post('http://localhost:5000/v1/address/get',data);
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

    const data={"email":"muraliundela369@gmail.com",'id':id } 
    
    try{
        const res=await axios.post('http://localhost:5000/v1/address/del',data);
        if(res.data.status)
        {
         successfunction("Address Deleted")
       
        }
    }
    catch(err){
        console.log(err);
    }
}
