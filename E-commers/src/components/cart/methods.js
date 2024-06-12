import axios from 'axios';
import { add_item_to_cart } from '../productpage/ProductDetails/helpers';



export async function get_cart_items(setitems,setcount,setprice)
{
    try{
           const r= await axios.post('http://localhost:5000/v1/get_cartList',{'email':'muraliundela369@gmail.com'})
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
    add_item_to_cart(id,0);
    setf((t)=>(t+1))
    
}



export async function Increment(id,count,f,setf)
{
    add_item_to_cart(id,count+1);
    setf((t)=>(t+1))
    
}
export async function decrement(id,count,f,setf)
{
    add_item_to_cart(id,count-1);
    setf((t)=>(t+1))

}
      