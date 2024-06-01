import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import './product.css'
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { RiArrowRightSLine } from "react-icons/ri";
import { Product1 } from './ProductDetails/ProductDetails';
import SimilarProducts from './ProductDetails/SimilarProducts';
import FrequentlyBroughtTogether from './ProductDetails/frequentlyBroughtTogether';
import { successfunction } from '../../tostify';


export default function Product() {
  const {name,id}=useParams()
  const [img,setimg]=useState('https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/1776922/1.jpg?9257');
  
  const images=[
    {id:1,
      img:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/1776922/1.jpg?9257"
    },
    {id:2,
      img:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/1776922/1.jpg?9257"
    },
    {id:3,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqT6p3e4U2FukrzIvUSrjgYOpVfFVU1bCRjc7fJGQ6L4HmA9nELEoacgVLa0bwlm7kz9s&usqp=CAU"
    },
    {id:4,
      img:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/1776922/1.jpg?9257"
    },
    {id:5,
      img:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/1776922/1.jpg?9257"
    },
    {id:6,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqT6p3e4U2FukrzIvUSrjgYOpVfFVU1bCRjc7fJGQ6L4HmA9nELEoacgVLa0bwlm7kz9s&usqp=CAU"
    },
    {id:7,
      img:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/1776922/1.jpg?9257"
    },
    {id:8,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgovoaRv0fCgvJ_Gg7sXnibMplaFtYzQ9riV_xBtkf-RDL8-Gq1E8fn2B9tGzZTb5aGE&usqp=CAU"
    }
  ]

  return (
    <>
    <div className="containe">
    <h5 className='mt-4 mb-5'><a href="/" className='text-decoration-none text-dark'>Home</a> <RiArrowRightSLine /> {name} <RiArrowRightSLine />{id}</h5>

        <div className="Product-card">

          <div className="Product-card-left">
            <div className="product-image">
            <img src={img} alt="img"/>
            </div>
            <div className="product-other-images d-flex gap-2 mt-2">
              {
                images.map((i)=>{
                  return(<img key={i.id} src={i.img}
                  onClick={()=>setimg(i.img)} />)
                })
              }
            </div>
          </div>
          
          <div className="Product-card-right">
            <h4>Noise ColorFit Ultra 3 Bluetooth Calling Smart Watch with Biggest 1.96" AMOLED Display, Premium Metallic Build,...</h4>
           
            <div className="d-flex gap-3 align-items-baseline">
              <div className="">
              {
                  [1,2,3,4,5].map((item,index)=>{
                      return(<CiStar key={index} className='fs-4'/>)
                  })
              }
              </div>
              <div className=""><h6>(112 ratings)</h6></div>
            </div>
            <div className="d-flex gap-2"><h6><del>₹4999</del></h6><h6>₹2999</h6><h6>(saved 70%)</h6></div>
            <div className="">
              <label htmlFor="sel1" className="form-label">Models</label>
              <select className="form-select" id="sel1" name="sellist1">
                <option>model-1</option>
                <option>model-2</option>
               
              </select>
            </div>
            <div className="d-flex gap-2  align-items-baseline">
            <h4>Quantity:</h4>
            <div className="d-flex gap-3 fs-4 quantity">
                <span>-</span>               
                <span>1</span>
                <span>+</span>


            </div>

            </div>
            <div className="d-flex gap-5">
              <button className='btn btn-outline-info' onClick={()=>successfunction("Successfully add to Cart")}>Add To Cart</button>
              <button className='btn btn-info'>Buy Now</button>
              <CiHeart className='fs-1'/>
            </div>
          
          </div>
        </div>

        <Product1/>
        <SimilarProducts/>
        <FrequentlyBroughtTogether/>
    </div>

    </>
  )
}


