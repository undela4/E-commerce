import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Login from './components/Authentication/Login/Login';
import Signup from './components/Authentication/SignUp/Signup';
import HomePage from './components/Home/HomePage';
import ProductLIst from './components/ProductListPage/ProductLIst';
import Product from './components/productpage/Product';
import { Error } from './components/Footer/Error';
import Cartpage from './components/cart/Cartpage.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import Payment_success from './components/Checkout/Payment_success.jsx';

export default function RoutesC() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<HomePage/>} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/signup" element={<Signup/>} />
        <Route  path="/product/:name" element={<ProductLIst/>}/>
        <Route  path="/product/:name/:id" element={<Product/>} />
        <Route  path="/cart" element={<Cartpage/>} />
        <Route  path="/checkout/:price" element={<Checkout/>} />
        <Route  path="/payment_success" element={<Payment_success/>} />


        <Route  path="*" element={<Error/>} />



      </Routes>

    </>
  )
}
