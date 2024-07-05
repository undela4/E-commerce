import React,{useState,useEffect,useContext} from 'react';
import {  useParams } from 'react-router-dom';
import './product.css'
import { RiArrowRightSLine } from "react-icons/ri";
import { Product1 } from './ProductDetails/ProductDetails';
import SimilarProducts from './ProductDetails/SimilarProducts';
import FrequentlyBroughtTogether from './ProductDetails/frequentlyBroughtTogether';
import { errorfunction, successfunction } from '../../tostify';
import { useNavigate } from 'react-router-dom';
import {fetch_by_id} from '../ProductListPage/fetch';
import { add_item_to_cart } from './ProductDetails/helpers';
import Rating from '../Review&Rating/Rating';
import Heart from '../Review&Rating/Heart';
import { UserContext } from '../../Usecontext';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import Review from '../Review&Rating/Review';
import { comma } from '../ProductListPage/ProductCart/.js';


export default function Product()
{


const {products}=useSelector(state=>state.productSlice);
const {reviews}=useSelector(state=>state.review_slice);


const {name,id}=useParams();

const [product,setproduct]=useState(null);
const [img,setimg]=useState('');
const [avgr,setavgr]=useState(0);
const {ud}=useContext(UserContext);
const [r,setr]=useState(false);
const uid=Cookies.get('uId');


const nav=useNavigate();

function review(){
  if(uid){
    setr(true);
  }else
  errorfunction("Please Login to review");


}

function add_to_cart(flag)
{
 
  if(uid){
    add_item_to_cart(product._id)
    if(!flag)
      setTimeout(()=>nav('/cart'),1000)
  }
  else
    errorfunction("Please Login To Access All Features")

}

function filter(){

  const temp=reviews.filter((i)=>i.product_id === id)
  let a=0;
  temp.map((i)=>{
    a+=i.rating;
  })    
  setavgr(Math.floor(a/temp.length));


}

useEffect(()=>{
  fetch_by_id(products,setproduct,setimg,id)
  filter();

},[id]);


  return product ? (
    <>
    <div className="container" data-aos="fade-down" data-aos-duration="1000">
    <h5 className='m-3 text-capitalize name'><a href="/" className='text-decoration-none text-dark'>Home</a> <RiArrowRightSLine /> {name} <RiArrowRightSLine />{product.model}</h5>

      {
        !r ? (<div className="Product-card-in-product-page">

          <div className="Product-card-left">
            <div className="product-image">
           <div className="">
           {
              ud&&(<Heart product_id={id} ud={ud} />)
           }
           </div>
            <img src={img} alt="img"/>
            </div>
            <div className="product-other-images d-flex gap-2 mt-2">
              {
                product.images.map((i,index)=>{
                  return(<img key={index} src={i}
                  onClick={()=>setimg(i)} />)
                })
              }
            </div>
          </div>
          
          <div className="Product-card-right">
            
            <h4>{product.brand} | {product.model}| {product.ram} |{product.storage} |{product.processor}</h4>
           
            <div className="d-flex gap-3 align-items-baseline">
             <Rating rate={avgr}/>
              <div className=""><h6>(112)</h6></div>
            </div>
            <div className="d-flex gap-2"><h6><del>₹ {comma(Math.floor(product.price+(5000*60)/100))}</del></h6><h6>₹ {comma(Math.floor(product.price))}</h6><h6>(saved 60%)</h6></div>
            <div className="">
              <label htmlFor="sel1" className="form-label">Models</label>
              <select className="form-select" id="sel1" name="sellist1">
                <option>model-1</option>
                <option>model-2</option>
               
              </select>
            </div>

            {
            product.color_options.length!=0&&(<div className="d-flex gap-3 align-baseline mt-3">

          <p className='fw-600 fs-3'>Colours:</p>

            {
              product.color_options.map((item,index)=>{
                return(
  
                 <div className=""  key={index}>
                   <div className="rounded-circle colors"
                   style={{backgroundColor:item}}>
                    </div>
                    <p>{item}</p>
                 </div>
                )
            
            
          })
        }
            </div>)
          }
          
            <div className="d-flex  Butttons">
              <button className='btn btn-outline-success' onClick={()=>add_to_cart(true)}>Add To Cart</button>
              <button className='btn btn-outline-success' onClick={()=>add_to_cart(false)}>Buy Now</button>
             
              <button className='ms-lg-5 btn btn-outline-success' onClick={review}>Review</button>

            </div>

          
          </div>
        </div>):(<Review ud={ud} setr={setr} product={product}/>)
      }


        <Product1 pdata={product} />

        <SimilarProducts name={name} />
        <FrequentlyBroughtTogether name={name} />



    </div>

    </>
  ):(<center><h1 className='text-danger'>Loading.....</h1></center>)
}


