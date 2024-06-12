import React, { useState,useEffect } from 'react';
import {NavLink,Link} from "react-router-dom"
import './Navbar.css'



import Baner from './Baner';

export default function Navbar() {
  return (
    <>
    <Baner/>
    <Nav/>
    </>
  )
}


import { Bandage } from '../../assets/img';
import { IoIosArrowDown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import userAuth from '../../customeHooks/userAuth';
import Icon from '../UserProfile/Icon';

const navlinks=[
  {
    id:1,
    title:"Home",
    path:"/",
    cName:"nav-links",

  },
  {
    id:2,
    title:"Shop ",
    path:"/shop",
    cName:"nav-links",
    Component:<IoIosArrowDown />,


  },
  {
    id:3,
    title:"About",
    path:"/about",
    cName:"nav-links"

  },
  {
    id:4,
    title:"Contact",
    path:"/contact",
    cName:"nav-links"

  }
]


function Nav() {

  const [u,logout]=userAuth();


  return (
    <>
      <div className="containe ">

        <div className="nav-bar">

          <div className="logo">
          <img src={Bandage} width={100} height={30} alt="logo" />

          </div>

          <div className="nav-items">
            <div className="nav-items-left">
              {
                navlinks.map((item, index) => {
                  return (
                    <NavLink  className="NavLink" to={item.path} key={index}>
                      {item.title}{item.Component}
                    </NavLink>
                  )
                })
              }

            </div>

            <div className="nav-items-right">
              {u?(<Link   className="NavLink" onClick={()=>nav('/account')}><Icon/></Link>):
                (<NavLink to="/login"  className="NavLink" >  Login</NavLink>)
               }
           
              <NavLink to=""  className="NavLink"><IoIosSearch className='nav-icons' /></NavLink>
              <NavLink to="/cart"  className="NavLink"><CiShoppingCart className='nav-icons'/><span> 1</span></NavLink>
              <NavLink to="/"  className="NavLink"><CiHeart className='nav-icons'/><span> 1</span></NavLink>
              
              </div>

          </div>


        </div>
      </div>
    </>
  )
}
