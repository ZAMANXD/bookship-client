import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const AllBooks = () => {
    return (
        <div className='max-w-7xl mx-auto p-5 lg:py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-5'>
                <div className='flex flex-col gap-y-2'>
                    <NavLink to={'/books/authorbooks'} className={`bg-gray-200 rounded-md p-3 text-center`}>Authors</NavLink>
                    <Link to={'/books/publicationbooks'} className='bg-gray-200 rounded-md p-3 text-center'>Publications</Link>
                    <Link to={'/books/categoriesbooks'} className='bg-gray-200 rounded-md p-3 text-center'>Categories</Link>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AllBooks;