import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AllBooks = () => {
    useTitle(`- All Books`)
    let activeStyle = {
        backgroundColor: '#3DB188',
        color: '#fff'
    }
    return (
        <div className='max-w-7xl mx-auto lg:py-10'>
            {/* <div className='grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-5'> */}
            <div className='lg:flex lg:gap-x-5'>
                <div className='lg:w-[25%] mb-5 lg:fixed'>
                    <div className='flex flex-col gap-y-2 mx-5 lg:mx-0 mt-5 lg:mt-0'>
                        <NavLink to={'/books/bookprice'} className={`bg-gray-200 rounded-md p-3 text-center`} style={({ isActive }) => isActive ? activeStyle : undefined}>Books</NavLink>
                        <NavLink to={'/books/authorbooks'} className={`bg-gray-200 rounded-md p-3 text-center`} style={({ isActive }) => isActive ? activeStyle : undefined}>Authors</NavLink>
                        <NavLink to={'/books/publicationbooks'} className={'bg-gray-200 rounded-md p-3 text-center'} style={({ isActive }) => isActive ? activeStyle : undefined}>Publications</NavLink>
                        <NavLink to={'/books/categoriesbooks'} className='bg-gray-200 rounded-md p-3 text-center' style={({ isActive }) => isActive ? activeStyle : undefined}>Categories</NavLink>
                    </div>
                </div>
                <div className='lg:w-[75%] mx-5 lg:mx-0 lg:relative lg:left-[27%]'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AllBooks;