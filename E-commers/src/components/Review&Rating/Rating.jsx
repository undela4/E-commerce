import React from 'react'
import { AiFillStar } from "react-icons/ai";


export default function Rating() {

  return (
    <div>
      <div className="">
            {
                    [1,2,3,4,5].map((item ,index)=>{
                        return(<span    key={index} 
                        
                        style={{ cursor: 'pointer',color: item <= 3? 'gold' : 'gray' }} >
                        <AiFillStar className='fs-3'/>

                        </span>)
                    })
                }

        </div>
                          
    </div>
  )
}



export  function Rating_to() {
    
    return (
      <div>
        <div className="">
              {
                      [1,2,3,4,5].map((item ,index)=>{
                          return(<span    key={index} 
                          
                          style={{ cursor: 'pointer',color: item <= 3? 'gold' : 'gray' }} >
                          <AiFillStar className='fs-3'/>
  
                          </span>)
                      })
                  }
  
          </div>
                            
      </div>
    )
  }
  