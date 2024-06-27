import React from 'react';
import { carouselInner } from '../../../../assets/img';



export default function Carousel({data,imgonly}) {


  var d=[{img:carouselInner},{img:carouselInner},{img:carouselInner}];

  if(data){
    d=data;

  }


return (
    <div  style={{marginTop:"4.49%"}}>
      
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
            <CouroselItem img={item.img} key={index}/>  
          )

      }else
      {
        return(
          <CutomeCarousel img={item.img} key={index}/>
          
        )

      }
      
    })

  }

  
</div>

<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="carousel-control-next-icon"></span>
</button>
</div>

    </div>
  )
}



function CouroselItem({img}){
return(
  <div className="carousel-item active">
    
 <img src={img}  className="w-100" alt="..."/> 
  </div>
  
)

}




function CutomeCarousel({img}){


  return(

    <div className="carousel-item active">

    <div className="hero-section d-flex pt-5 h-100
justify-content-around align-items-center bg-success">

  <div className="hero-section-left mt-5 d-flex justify-content-around">
    
    <div className="w-50 text-light">
            <h6>SUMMER 2020</h6>
            <h1 style={{fontSize:"55px"}}>vita Classic Product</h1>
            <p>We know how large objects will act, We know how are objects will act, We know</p>
            <div className="d-flex gap-5">
            <h5 className='text-light pt-2'>₹160 </h5>
            <button style={{background:"#2DC071"}} className='btn  fw-bold align-items-baseline'>ADD TO CART</button>
            </div>

    </div>

   

  </div>
  <div className="hero-section-right w-50">
  
  <img src={img} alt="..."/> 

    </div>  
    </div>


  </div>

  )
}

  