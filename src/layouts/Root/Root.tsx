import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../Pages/Home/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';

const Root = () => {
    return (
        <div>
            <NavBar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Root;