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
import PrivateRoute from './PrivateRoute.jsx';
import Profile from './components/UserProfile/Profile.jsx';

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

        <Route  path="/cart" element={<PrivateRoute><Cartpage/></PrivateRoute>} />
        <Route  path="/checkout/" element={<PrivateRoute><Checkout/></PrivateRoute>} />
        <Route  path="/payment_success" element={<PrivateRoute><Payment_success/></PrivateRoute>} />
        
        <Route  path="/account" element={<PrivateRoute><Profile/></PrivateRoute>} />



        <Route  path="*" element={<Error/>} />



      </Routes>

    </>
  )
}
