import React from 'react';
import {iphone,laptop,tv} from '../../../../assets/img';
import './.css';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function Carousel({data,imgonly}) {


var d=[
          {img:iphone,cap:"Experience the Future with iPhone 15."},
          {img:laptop,cap:"Versatility Meets Performance with Lenovo Yoga."},
          {img:tv,cap:"Immerse Yourself in Sound with Bose Headset."}

      ]

  if(data){
    d=data;
  }


return (
    
<div className='container-fluid mt-2'>      
<div id="demo" className="carousel slide " data-bs-ride="carousel">
<div className="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

<div className="carousel-inner">
  
  {
      d.map((item,index)=>{

      if(imgonly)
        {
          return(
            <CouroselItem img={item.img}  key={index}/>  
          )

      }else
      {
        return(
          <CutomeCarousel img={item.img} 
          active={index===0&&"active"}
          caption={item.cap} key={index}/>
        )

      }
      
    })

  }

  
</div>

<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span><SlArrowLeft className='fs-3 text-dark'/></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span><SlArrowRight className='fs-3 text-dark'/></span>

</button>
</div>
</div>

  )
}



function CouroselItem({img}){
return(
  <div className="carousel-item active Carousel d-flex">
    
 <img src={img} alt="..."/> 
  </div>
  
)

}




function CutomeCarousel({img,caption,active}){

  return(

    <div className={`carousel-item ${active}`}>

    <div className="hero-section d-flex justify-content-between align-items-center">

    <div className="hero-section-left w-50">
            <p>{caption}</p>
            <br></br>
            <button style={{background:"#2DC071"}} className='btn  fw-bold align-items-baseline'>Shop Now</button>
    </div>

  <div className="hero-section-right w-50">
  
  <img src={img} alt="..."/> 

    </div>  
    </div>


  </div>

  )
}

  