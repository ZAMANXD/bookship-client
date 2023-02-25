import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AllBooks = () => {
    useTitle(`- All Books`)
    let activeStyle = {
        backgroundColor: '#303640',
        color: '#fff'
    }
    return (
        <div className='max-w-7xl mx-auto lg:py-10'>
            <div className='lg:flex lg:gap-x-5'>
                <div className='lg:w-[220px] mb-5 lg:fixed'>
                    <div className='flex flex-col gap-y-4 mx-5 lg:mx-0 mt-5 lg:mt-0'>
                        <NavLink to={'/books/bookprice'} className={`bs-button-2 py-4 px-3 text-center`} style={({ isActive }) => isActive ? activeStyle : undefined}>Books</NavLink>
                        <NavLink to={'/books/authorbooks'} className={`bs-button-2 py-4 px-3 text-center`} style={({ isActive }) => isActive ? activeStyle : undefined}>Authors</NavLink>
                        <NavLink to={'/books/publicationbooks'} className={' bs-button-2 py-4 px-3 text-center'} style={({ isActive }) => isActive ? activeStyle : undefined}>Publications</NavLink>
                        <NavLink to={'/books/categoriesbooks'} className=' bs-button-2 py-4 px-3 text-center' style={({ isActive }) => isActive ? activeStyle : undefined}>Categories</NavLink>
                    </div>
                </div>
                <div className='lg:max-w-5xl w-full lg:mx-0 lg:relative lg:left-[250px]'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AllBooks;