import React,{useState,useRef} from 'react'
import './review.css';
import InputFeild from '../Authentication/Login/InputFeild';
import { FaCloudUploadAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Rating_to } from './Rating';
import { add_review } from './helpers';
import { errorfunction, successfunction } from '../../tostify';


export default function Review({product,setr,ud})
{
    const ini={

        "user_id":ud._id,
        "user_name":ud.username,
        "product_id":product._id,
        "product_name":product.model,
        "product_brand":product.brand,
        "title":"",
        "description":"",
        "rating":0,
        "photo":""
      
    
    }

const rf=useRef();
const [r_data,setr_data]=useState(ini)

const [file,setfile]=useState('');
const nav=useNavigate();


function onchange(e)
{
setr_data({...r_data,[e.target.name]:e.target.value})
}

function onchange_file(e)
{
    setfile(e.target.files[0]);
}

function onsubmit(){
    
    const{user_name,title,description,rating}=r_data
    if(user_name.trim()!='' && title.trim()!='' && description.trim()!='' && rating!=0){
        add_review(r_data,file,setr_data,setr);
        successfunction("Your review has been processing")
}
    else{
        errorfunction("Please fill all the fields")
    }

}



  return (
    <>
    <div className="container">
        <div className="row review mt-4">
            <div className="col-sm-7 review-left p-5">

                <div className="p-img d-flex align-items-center gap-3 mb-3">
                    <img src={product.key_img}/>
                    <h3>{product.model}</h3>
                </div>
                <div className="">
                    <h4>Rate This product</h4>
                    <Rating_to r_data={r_data} setr_data={setr_data}/>
                </div>

                <div className="review_product">
                    <h4 className='mb-4'>Write a Review</h4>

                   <div className="row">
                   <InputFeild label="Enter Your Name"  className="col-sm-6 p-1" name="user_name" defaultValue={ud.username} method={onchange}/>
                   <InputFeild label="Give a review title" className="col-sm-6 p-1"  name="title" value={r_data.title} method={onchange}/>
                   </div>

                    <div className="text-area form-floating mb-3">

                        <textarea className='form-control' placeholder='enter' name='description' value={r_data.description} onChange={onchange}style={{height:"150px"}}></textarea>
                        <label htmlFor="floatingInput" >Write Your Review</label>
                    </div>

                        <div className="">
                            <h4>Add Video / Photos</h4>
                            <div className="box" onClick={()=>rf.current.click()}><FaCloudUploadAlt className='fs-2'/><p className='p-0'>click here to upload</p></div>
                            <input ref={rf} type="file" onChange={onchange_file} multiple  style={{display:"none"}}/>
                            <p className='mt-3 text-secondary'>Note: Up to 5 photos and 10 MB per photo. Limited to 1 video below 200MB. Accepted file format: JPG, PNG, MP4, AVI, MOV, WMV, FLV.</p>
                        </div>


                </div>

                <div className=" d-flex gap-5 mt-5">
                    <button className='btn btn-outline-warning' onClick={onsubmit}>Submit Review</button>
                    <button className='btn btn-outline-danger' onClick={()=>setr(false)}>Cancel</button>

                </div>
            


            </div>

            <div className="col-sm-4 review-right p-5">
            <span className='fs-2'>Product Review Tips:</span>

                <p>
                <span>Product Review Tips:</span>

<span>Add a video or photos!:</span> These are the most helpful.
<br></br>
<br></br>

<span>Be real:</span> We and our customers want honest reviews, so tell others the good, the bad, and all the in-betweens.
<br></br>
<br></br>

<span>Get detailed:</span> Sure, saying that an item was "Good" or "Bad" is nice - but what made you feel this way?
Include something that you may have wanted to know before you bought the item.
<br></br>
<br></br>

<span>Stay respectful:</span> It's ok to be upset, but anything that breaks our review guidelines will be removed - so be sure to follow thern otherwise your feedback won't be seen.
<br></br>
<br></br>

<span>Don't mention Price, Shipping, or Service-related issues:</span> That's not the product's fault.
<br></br>
<br></br>

<span>Don't mention Price, Shipping, or Service-related issues: </span>That's not the product's fault.
                </p>
            </div>
        </div>
    </div>
    </>
  )
}
