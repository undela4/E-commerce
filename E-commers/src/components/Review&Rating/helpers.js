import axios from "axios";
import { errorfunction,successfunction } from '../../tostify';


export async function add_review(data,file,setr_data,setr){
try{
    
    const formData = new FormData();
    formData.append('file',file);

    const r=await axios.post('https://e-commers-application.onrender.com/v1/review/upload',formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
    )
    if(r.data.status){

        const res=await axios.post('https://e-commers-application.onrender.com/v1/review/add',{"data":data,"img":r.data.img[0]});
        console.log(res.data)
        if(res.data.status){
            successfunction(res.data.msg);
            setr(false)
        }
        
    }

}
catch(err){
    console.log(err);
}

}