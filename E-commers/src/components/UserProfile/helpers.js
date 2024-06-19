import axios from 'axios';
import { successfunction,errorfunction } from '../../tostify';
import Cookies from 'js-cookie';

const uId=Cookies.get('uId');

export async function uploadimg(photo){

  
    try{

        const formData = new FormData();
        formData.append('file', photo);

        const result= await axios.post(`http://localhost:5000/v1/profile/upload_image/${uId}`,formData, {
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
      const res=await axios.post('http://localhost:5000/v1/orders/get',{"_id":uId});
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
      const res=await axios.post('http://localhost:5000/v1/orders/cancel',{"_id":uId,oid:oid});
      if(res.data.status)
      {
        successfunction(res.data.msg);
      }
  }
  catch(err){
      console.log(err);
  }

}


