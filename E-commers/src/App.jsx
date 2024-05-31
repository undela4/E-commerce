import React from 'react';
import './App.css';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <> 
      <Start/>
    </>
  )
}


import RoutesC from './Routes';
import HomePage from './components/Home/HomePage';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-bootstrap';


function Start() {
  return (
    <>
    <RoutesC/>
    <Footer/>
    <Toaster
        position="bottom-left"
        reverseOrder={true}
      />
      </>
  )
}
