import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn } from '../Auth';
export default function PrivateRoute() {
    if (isLoggedIn())
        return <Outlet />
    else return <Navigate to={'/login'} />;
}
