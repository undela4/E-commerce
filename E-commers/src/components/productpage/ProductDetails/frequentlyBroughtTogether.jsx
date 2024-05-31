

import React from 'react'
import './Product-details.css';
import Card from '../../ProductListPage/ProductCart/Card';

export default function FrequentlyBroughtTogether() {
  return (
    <div className='similar-products'>
        <h2>Frequently brought together</h2>

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
