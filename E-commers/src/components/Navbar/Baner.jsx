import React,{useRef} from 'react';
import { IoCallOutline } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";  
import { FaTwitter } from "react-icons/fa6"; 


export default function Baner() {

  const r=useRef(null);
  
  return (
    <div className='banner containe text-light' ref={r} style={{display:"block"}} >

      <div className="content">

        <div className="d-flex gap-5 align-items-baseline">
       <div className="fs-5">
       <IoCallOutline /><span> +91 9951058416</span>

       </div>
       <div className="fs-5">
       <MdAttachEmail /><span> Example143@gmail.com</span>

       </div>
   
        </div>

        <div className="">
          <h6>Follow Us  and get a chance to win 80% off</h6>
        </div>

        <div className="d-flex gap-3 align-items-center fs-5">
          <h6>Follow Us :  </h6>
          <FaYoutube   />
          <FaFacebook  />
          <FaInstagram />
          <FaTwitter   />
          <button type="button" onClick={()=>{r.current.style.display="none" }} className="ms-5 btn-close btn-close-white" aria-label="Close"></button>

        </div>

      </div>

    </div>
  )
}
