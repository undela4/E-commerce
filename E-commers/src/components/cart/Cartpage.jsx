import React, { useEffect, useState } from 'react'
import './cart.css';
import  Cartcard  from './Cartcard';
import Price from './Price';
import Loder from '../loder/Loder';

import { get_cart_items,ondelete,Increment,decrement } from './methods';



export function Fun(){

  const [items,setitems]=useState([]);
  const [count,setcount]=useState([]);
  const [price,setprice]=useState(0);

return {items,setitems,count,setcount,price,setprice}


}


export default function Cartpage() {


const {items,setitems,count,setcount,price,setprice}=Fun();

const [f,setf]=useState(false);
const [loader,setloader]=useState(false);


useEffect(()=>{

  get_cart_items(setitems,setcount,setprice,setloader);

},[f]);








return loader ? (
    <>
      {
       items.length!=0 ? (<div className="container">

        <div className="cart mt-5 row gap-5">

          <div className="cart-left col-sm-8 p-4">

            <article className="title">
            <h4>Shopping Cart</h4>
            <p className='p'>Price</p>
            </article>

          {
            items.map((item,index)=>{
              return(
                <Cartcard key={index} img={item.key_img} title={item.model} 
                quantity={count[index]} price={Math.round(item.price)} del_price={Math.round(item.price)+5000} 
                id={item._id} category={item.category}
                spec={`${item.ram} | ${item.storage} | ${item.processor}`}
                adf={item.additional_features} 
                colors={item.color_options}
                method={()=>ondelete(item._id,f,setf)}

                Increment={()=>Increment(item._id,count[index],f,setf)} decrement={()=>decrement(item._id,count[index],f,setf)} flag={{display:'block'}}
                />
              )
            })
          }


          </div>



          <div className="cart-right col-sm-3">
            <Price price={price} items={items}/>
            
          </div>

        </div>
       </div>):(<Emptycart/>)
      }

    </>
  ) : (<center><Loder/></center>)
  
}




function Emptycart(){
  return(
    <div className="container-sm-fluid mt-3">
      <center className='empty-cart'>
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png" alt="" />
      <h2 className='text-danger'> No items in Cart  <a href="/">Add something</a></h2>
      </center>
      
    </div>
  )
}

