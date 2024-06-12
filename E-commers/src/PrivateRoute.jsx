import React from 'react';
import {useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function PrivateRoute({children}) {

    const user=useSelector(state=>state.userSlice.user);
    const token=Cookies.get('token');

    if(token)
        return children
    else
        return <Navigate to='/login' ></Navigate>

 
}
