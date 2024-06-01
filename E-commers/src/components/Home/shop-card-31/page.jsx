import React from 'react';
import './.css';
import  {filter,filterWomen,filterAccessories,filterkids}  from '../../../assets/img';


export default function Page() {
  return (
    <>
    <div className="containe">

        <div className="card-container">

          <div className="card-header">
            <h2> EDITOR’S PICK</h2>
            <h5 class="text-secondry">Problems trying to resolve the conflict between </h5>

          </div>    

          <div className="card-img row">

            <div className="category men col-6">
                <button>MEN</button>
                <a><img src={filter} alt="card-img" class="w-100"/></a>
            </div>

            <div className="category women col-3">
            <button>WOMEN</button>

                <a><img src={filterWomen} alt="card-img" class="w-100 h-100"/></a>
            </div>

            <div className="category  col-3">

                <div className="Accessories">
                <button>ACCESSORIES</button>
                <a><img src={filterAccessories} alt="card-img" class="w-100 h-50"/></a>

                </div>
               

                <div className="position-relative kids mt-3 ">
                 <button>KIDS</button>
                <a><img src={filterkids} alt="card-img"  class="" /></a>
            </div>

          </div>
            </div>



        </div>

    </div>
      
    </>
  )
}
