import React from 'react';
import Carousel from './Header/carousel/Carousel';
import ProductCard from './Product-card-10/Product-card';
import  Categories from './Categories/categories';
import {cards} from './Product-card-10/cards.js';


export default function HomePage() {
  return (
    
    <>

   <div className="container-fluid">
   <Carousel imgonly={false} />
    <Categories/>
    <ProductCard data={cards}/>
   </div>
    
    </>
  )
}
