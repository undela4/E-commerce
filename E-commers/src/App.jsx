import React ,{useState} from 'react';
import './App.css';
import { FcAssistant } from "react-icons/fc";
import { Toaster } from 'react-hot-toast';
import Model from '../Ai/Model.jsx';
import Button from 'react-bootstrap/Button';

export default function App() {
const [modalShow, setModalShow] =useState(false);

  return (
    <> 

      <Start/>
      <div className="Ai" >

      <FcAssistant  onClick={() => setModalShow(true)}/>
      </div>
    
      <Model
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> 
     

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
