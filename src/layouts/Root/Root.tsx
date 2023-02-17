import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../Pages/Home/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';

const Root = () => {
    return (
        <div>
            <NavBar/>
            <div className="gradient-bg-1"><Outlet></Outlet></div>
            <Footer/>
        </div>
    );
};

export default Root;