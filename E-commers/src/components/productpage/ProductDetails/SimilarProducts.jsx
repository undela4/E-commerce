import React from 'react'
import './Product-details.css';
import Card from '../../ProductListPage/ProductCart/Card';

export default function SimilarProducts() {
  return (
    <div className='similar-products'>
        <h2>Similar Products</h2>
        <div className="similar-products-list">
                {
                    [1,2,3,4,5,6,7,8,9,10].map((index) => {
                        return (

                             <Card className='d-inline-block' key={index} />
                            
                        )
                    })
                }
        </div>
    </div>
  )
}
