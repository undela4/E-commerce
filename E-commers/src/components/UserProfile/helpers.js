import axios from 'axios';
import { successfunction,errorfunction } from '../../tostify';
import Cookies from 'js-cookie';

const uId=Cookies.get('uId');

export async function uploadimg(photo){

  
    try{

        const formData = new FormData();
        formData.append('file', photo);

        const result= await axios.post(`https://e-commers-application.onrender.com/v1/profile/upload_image/${uId}`,formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }); 
          console.log(result);
          if(result.data.status){
            successfunction(result.data.msg)
          }

    }
    catch(err){
        console.log(err.message);
    }


}


export async function get_orders(setorder,setf){
     
  try{
      const res=await axios.post('https://e-commers-application.onrender.com/v1/orders/get',{"_id":uId});
      if(res.data.status)
      {
        setorder(res.data.data);
        setf(true);
      }
  }
  catch(err){
      console.log(err);
  }
}

export async function cancel_order(oid){
  try{
      const res=await axios.post('https://e-commers-application.onrender.com/v1/orders/cancel',{"_id":uId,"oid":oid});
      if(res.data.status)
      {
        successfunction(res.data.msg);
      }
  }
  catch(err){
      console.log(err);
  }

}


//wish list items 
export async function fetch(setdata,ud){
  try{

    const result=await axios.get('https://e-commers-application.onrender.com/v1/products');
    if(result.data.status){

      const r=result.data.data;
      const p= await ud.wishList;

      const t=r.filter((item)=>p.includes(item._id) )
      setdata(t);

    }
    
  }
  catch(err){
    console.log(err);
  }

 } 

//remove items from wish list
export async function remove(ud,product_id){
  try{

    await axios.post('https://e-commers-application.onrender.com/v1/wishList/del',{"_id":ud._id,"pid":product_id} ).then((r)=>{
      successfunction(r.data.msg)
      
    })

  }
  catch(err){
    console.log(err);
  }
}