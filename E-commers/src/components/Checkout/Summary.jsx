import React from 'react';

export default function Summary({price})
{
    return(
        <div className="summary">
            <center><h3>Bill</h3></center>
            <hr></hr>
            <div className="">
            <h4 className='fw-bold'>Order summary</h4>
            <div className="flex">
                <h5>Items:</h5>
                <h5>₹{price}.00</h5>
            </div>
            <div className="flex">
                <h5>Delivery:</h5>
                <h5>₹{0}.00</h5>
            </div>
            <div className="flex">
                <h5>Total:</h5>
                <h5>₹{price}.00</h5>
            </div>
            <div className="flex">
                <h5>Promotion Applied</h5>
                <h5>-₹{160}.00</h5>
            </div>


            </div>
            <hr></hr>
            <div className="flex text-danger fw-bold">
                <h3>Order Total:</h3>
                <h3>₹{price-160}.00</h3>
            </div>
            <hr></hr>
            <div className="">
               <h6>Your svings: ₹{113}.00 (60%)</h6> 
               <ul>
                <li>Free Delivery</li>
                <li>Item Discount</li>

               </ul>
            </div>
            <hr></hr>
            <center>
            <img src="http://localhost:5173/src/assets/img/Bandage.png" alt="" />

            </center>
            <hr></hr>

        </div>

    )
}
