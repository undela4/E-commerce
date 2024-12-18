import React ,{useState,useEffect} from 'react';
import './App.css';
import AOS from 'aos'
import { FcAssistant } from "react-icons/fc";
import { Toaster } from 'react-hot-toast';
import Model from '../Ai/Model.jsx';
import { useDispatch } from 'react-redux';
import { login } from './Redux-Store/userSlice.js';
import Cookies from 'js-cookie';
import ContextProvider from './Usecontext.jsx';

export default function App() {
 
  const dispatch = useDispatch();
  const [modalShow, setModalShow] =useState(false);


  useEffect(()=>{
  
    const  token=Cookies.get('token');
     if(token)
       dispatch(login())
   
  },[])
  useEffect(()=>{
    AOS.init({
      duration: 2000,
    });
  },[])

  return (
    <ContextProvider>


<> 

<Start/>

{/* <div className="Ai" >
<FcAssistant  onClick={() => setModalShow(true)}/>
</div> */}

<Model
  show={modalShow}
  onHide={() => setModalShow(false)}
/> 


</>
    </ContextProvider>

  )
}


import RoutesC from './Routes';
import HomePage from './components/Home/HomePage';
import Footer from './components/Footer/Footer';


function Start() {
  return (
    <>
    <RoutesC/>
    <Footer/>
    <Toaster
        position="top-right"
      />
      </>
  )
}
