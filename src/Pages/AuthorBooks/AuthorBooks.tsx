import React from 'react';
import { Link } from 'react-router-dom';

const AuthorBooks = () => {
    return (
        <div className='p-5 bg-gray-100'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-xl'>Dr. Jafar Iqbal</h2>
                <Link to={'/books'} className='text-blue-400'>View All</Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5'>
                
            </div>
        </div>
    );
};

export default AuthorBooks;