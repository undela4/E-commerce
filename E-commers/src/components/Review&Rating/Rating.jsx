import React from 'react'
import { AiFillStar } from "react-icons/ai";


export default function Rating({rate}) {

  return (
    <div>
      <div className="">
            {
                    [1,2,3,4,5].map((item ,index)=>{
                        return(<span    key={index} 
                        
                        style={{ cursor: 'pointer',color: item <= rate? 'gold' : 'gray' }} >
                        <AiFillStar className='fs-3'/>

                        </span>)
                    })
                }

        </div>
                          
    </div>
  )
}



export  function Rating_to({r_data,setr_data}) {
    
    return (
      <div> 
        <div className="">
              {
                      [1,2,3,4,5].map((item ,index)=>{
                          return(<span    key={index} 
                          onClick={()=>setr_data({...r_data,['rating']:item})}
                          style={{ cursor: 'pointer',color: item <= r_data.rating? 'gold' : 'gray' }} >
                          <AiFillStar className='fs-2'/>
  
                          </span>)
                      })
                  }
  
          </div>
                            
      </div>
    )
  }
  