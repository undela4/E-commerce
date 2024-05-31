import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Navbar from 'D:/Projects/E-commers/E-commers/src/components/Navbar/Navbar.jsx';
import Login from './components/Authentication/Login/Login';
import Signup from './components/Authentication/SignUp/Signup';
import HomePage from './components/Home/HomePage';
import ProductLIst from './components/ProductListPage/ProductLIst';
import Product from './components/productpage/Product';
import { Error } from './components/Footer/Error';
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
        <Route  path="*" element={<Error/>} />



      </Routes>

    </>
  )
}
