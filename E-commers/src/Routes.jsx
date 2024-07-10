import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import ScrollToTop from './ScollTotop.jsx';

// Lazily load components
const Login = lazy(() => import('./components/Authentication/Login/Login'));
const Signup = lazy(() => import('./components/Authentication/SignUp/Signup'));
const HomePage = lazy(() => import('./components/Home/HomePage'));
const ProductList = lazy(() => import('./components/ProductListPage/ProductLIst'));
const Product = lazy(() => import('./components/productpage/Product'));
const Error = lazy(() => import('./components/Footer/Error'));
const CartPage = lazy(() => import('./components/cart/Cartpage.jsx'));
const Checkout = lazy(() => import('./components/Checkout/Checkout.jsx'));
const PaymentSuccess = lazy(() => import('./components/Checkout/Payment_success.jsx'));
const Profile = lazy(() => import('./components/UserProfile/Profile.jsx'));
const Review = lazy(() => import('./components/Review&Rating/Review.jsx'));
const ThankU = lazy(() => import('./components/Review&Rating/ThankU.jsx'));
const PrivateRoute = lazy(() => import('./PrivateRoute.jsx'));
import Loder from './components/loder/Loder.jsx';
export default function RoutesC() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Suspense fallback={<center><Loder/></center>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/product/:name*" element={<ProductList />}>
            <Route path=":id" element={<Product />} />
            <Route path="thankU" element={<PrivateRoute><ThankU /></PrivateRoute>} />
          </Route>

          <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
          <Route path="/checkout/" element={<PrivateRoute><Checkout /></PrivateRoute>} />
          <Route path="/payment_success" element={<PrivateRoute><PaymentSuccess /></PrivateRoute>} />
          <Route path="/account" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/review" element={<PrivateRoute><Review /></PrivateRoute>} />

          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </>
  );
}