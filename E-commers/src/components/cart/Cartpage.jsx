import React, { useEffect, useState } from 'react'
import './cart.css';
import  Cartcard  from './Cartcard';
import Price from './Price';

export default function Cartpage() {

const data=[
  {
    "id": 1,
    "img":"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/1776922/1.jpg?9257",
    "title": "iPhone 14 Pro Max",
    "description": "The latest model of the iPhone with advanced features and improvements.",
    "price":2899,
    "del_price":3199,
    "quantity": "3"
  },
  {
    "id": 2,
    "img":"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/1776922/1.jpg?9257",

    "title": "Samsung Galaxy S23 Ultra",
    "description": "A high-end smartphone with an impressive camera and performance.",
    "price": 2599,
    "del_price":3199,
    "quantity": "5"
  },
  {
    "id": 3,
    "img":"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/1776922/1.jpg?9257",

    "title": "Google Pixel 7 Pro",
    "description": "Google's flagship smartphone with exceptional camera quality and stock Android experience.",
    "price": 2399,
    "del_price": 3199,
    "quantity": "2"
  },
  {
    "id": 4,
    "img":"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/1776922/1.jpg?9257",

    "title": "OnePlus 11",
    "description": "A powerful smartphone with fast charging and smooth performance.",
    "price": 1999,
    "del_price":3199,
    "quantity": "4"
  },
  {
    "id": 5,
    "img":"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/1776922/1.jpg?9257",

    "title": "Xiaomi Mi 13",
    "description": "A budget-friendly smartphone with great features and battery life.",
    "price": 1499,
    "del_price":3199,
    "quantity": "6"
  }
]

const [items,setitems]=useState(data);
const [price,setprice]=useState(0);
var t=0;


useEffect(()=>{
  for(var i=0;i<items.length;i++){
    t+=items[i].price;
  }
  setprice(t)

},[items])


function ondelete(id){
setitems(items.filter((item)=>{
  return item.id!==id;
}));

}


  return items.length!=0 ? (
    <>
      <div className="containe">

        <div className="cart mt-5 row">

          <div className="cart-left col-sm-8">

            <article className="title">
            <h4>Shopping Cart</h4>
            <p className='title p'>Price</p>
            </article>

          {
            items.map((item)=>{
              return(
                <Cartcard key={item.id} img={item.img} title={item.title} description={item.description}
                quantity={item.quantity} price={item.price} del_price={item.del_price} method={()=>ondelete(item.id)}/>
              )
            })
          }


          </div>



          <div className="cart-right col-sm-3">
            <Price price={price} />
          </div>

        </div>
      </div>
    </>
  ) :(<Emptycart/>)
}


function Emptycart(){
  return(
    <div className="containe">
      <center>
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png" alt="" />
      <h2 className='text-danger'> No items in Cart  <a href="/">Add something</a></h2>
      </center>
      
    </div>
  )
}

