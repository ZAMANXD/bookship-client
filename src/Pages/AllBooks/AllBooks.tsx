import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AllBooks = () => {
    return (
        <div className='max-w-7xl px-5 py-10'>
            <div className='grid grid-cols-[1fr_3fr] gap-x-5'>
                <div className='flex flex-col gap-y-2'>
                    <Link to={'/books/authorbooks'} className='bg-gray-200 rounded-md p-3 text-center'>Author</Link>
                    <Link to={'/books/publicationbooks'} className='bg-gray-200 rounded-md p-3 text-center'>Publication</Link>
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