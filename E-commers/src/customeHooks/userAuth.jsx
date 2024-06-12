import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../Redux-Store/userSlice';
import Cookies from 'js-cookie';

export default function userAuth() {

    const dispatch = useDispatch();
    const nav = useNavigate();

    const user=useSelector(state=>state.userSlice.user);
    const [u,setuser]=useState(user);

    useEffect(() => {
        setuser(user);
      },[user]); 

    function logout(){

        Cookies.remove('token');
        dispatch(logout());
        nav('/')
        
        
    }

    return [u,logout]
}
