import React from 'react'
import './Product-details.css';
import Card from '../../ProductListPage/ProductCart/Card';
import { useNavigate } from 'react-router-dom';

export default function SimilarProducts() {
  const nav=useNavigate();
  return (
    <div className='similar-products'>
        <h2>Similar Products</h2>
        <div className="similar-products-list">
                {
                    [1,2,3,4,5,6,7,8,9,10].map((index) => {
                        return (
                          <div className="" key={index} onClick={()=>nav(`/product/k/${index}`)} >

                          <Card  className='d-inline-block'  />

                          </div>
                            
                        )
                    })
                }
        </div>
    </div>
  )
}
