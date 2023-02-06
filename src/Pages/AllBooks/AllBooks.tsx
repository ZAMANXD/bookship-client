import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AllBooks = () => {
    useTitle(`- All Books`)
    return (
        <div className='max-w-7xl mx-auto lg:py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-5'>
                <div className='flex flex-col gap-y-2 mx-5 lg:mx-0 mt-5 lg:mt-0'>
                    <NavLink to={'/books/authorbooks'} className={`bg-gray-200 rounded-md p-3 text-center`}>Authors</NavLink>
                    <Link to={'/books/publicationbooks'} className='bg-gray-200 rounded-md p-3 text-center'>Publications</Link>
                    <Link to={'/books/categoriesbooks'} className='bg-gray-200 rounded-md p-3 text-center'>Categories</Link>
                    <NavLink to={'/books/bookprice'} className={`bg-gray-200 rounded-md p-3 text-center`}>Price</NavLink>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AllBooks;