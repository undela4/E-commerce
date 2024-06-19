import React, { useEffect, useState ,useContext} from 'react'
import { FaHeart } from "react-icons/fa";
import axios from 'axios';




export default function Heart({product_id,ud}) 
{

    
const [s,sets]=useState(false);

  useEffect(()=>{
        const f=ud.wishList
        if(f.includes(product_id))
            sets(true)

    },[])


  async function click()
    {

      try{
          if(s){
            //remove from wish list
       await axios.post('http://localhost:5000/v1/wishList/del',{"_id":ud._id,"pid":product_id} ).then((r)=>{
              console.log(r.data);
              sets(false)


            })
       
          }
          else{
            //add to wish list
            await axios.post('http://localhost:5000/v1/wishList/add',{"_id":ud._id,'pid':product_id}).then((r)=>{
              console.log(r.data)
            sets(true)
            });

          }



        }catch(err){
           console.log(err.message)
        }
        

    }


  return (
    <div>

         <span 

         onClick={click}
         style={{cursor:"pointer", color: s ? "red":"gray" }}
         ><FaHeart className='fs-3'/></span>

    </div>
  )


}
