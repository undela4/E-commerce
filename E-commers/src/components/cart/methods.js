import axios from 'axios';
import { add_item_to_cart } from '../productpage/ProductDetails/helpers';
import Cookies from 'js-cookie'



export async function get_cart_items(setitems,setcount,setprice)
{
    const uId=Cookies.get('uId');
    try{
           const r= await axios.post('http://localhost:5000/v1/get_cartList',{'_id':uId})
           if(r.data.status){
            const d=r.data.data.items
            setitems(d)
            setcount(r.data.data.count)
            var t=0;


            for(var i=0;i<d.length;i++){
              t+=d[i].price*r.data.data.count[i];
            }
            setprice(Math.round(t))
  
  
           }
  
    }
    catch(err){
      console.log(err);
    }

}
  
export async function ondelete(id,f,setf)
{
    add_item_to_cart(id,0,setf,f); 
}

export async function Increment(id,count,f,setf)
{
  console.log(count)  
  add_item_to_cart(id,count+1,setf,f);
    
    
}
export async function decrement(id,count,f,setf)
{
    add_item_to_cart(id,count-1,setf,f);
    

}
export async function clear_cart(_id)
{
  axios.put('http://localhost:5000/v1/clear_cart',{"_id":_id}).then((r)=>{


  }).catch((err)=>{
    console.log(err.message);
  })
    
    

}
     
      