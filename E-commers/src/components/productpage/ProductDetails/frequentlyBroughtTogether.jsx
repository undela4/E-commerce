
import React ,{useState,useEffect} from 'react'
import './Product-details.css';
import Card from '../../ProductListPage/ProductCart/Card';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



export default function FrequentlyBroughtTogether({name}) {


const {products}=useSelector(state=>state.productSlice);
const {reviews}=useSelector(state=>state.review_slice);
const [similardata,setsimilardata]=useState([])
const nav=useNavigate();

useEffect(()=>{

  setsimilardata(products.slice(5,10))

},[])


  return (
    <div className='similar-products'>
        <h2>Frequently brought together</h2>

        <div className="similar-products-list">
                {
                   similardata.map((item,index) => {
                    const t=reviews.filter((i)=>i.product_id===item._id);

                        return (

                          <div className="" key={index} onClick={()=>nav(`/product/${name}/${item._id}`)} >

                          <Card img={item.key_img} title={item.model} id={item._id} reviews={t}
                          category={item.category} price={item.price} delprice={item.delprice}
                          colors={item.colors}/>

                    </div>
                            
                        )
                    })
                }
        </div>
    </div>
  )
}
