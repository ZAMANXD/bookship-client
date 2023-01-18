import React from 'react';
import { Link } from 'react-router-dom';
import SingleBook from '../../Shared/SingleBook/SingleBook';

const AuthorBook = () => {
    return (
        <div className='my-5 border p-3'>
            <Link to={'/books'} className='flex justify-between items-center mb-3'>
                <div className='flex items-center gap-x-3'>
                    <img className='w-10 h-10 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCXNh9OsJ5FQZPljU_-rLiND2_9XogYnyxQ&usqp=CAU" alt="" />
                    <h2 className='font-bold text-xl'>Dr. Jafar Iqbal</h2>
                </div>
                <Link to={'/books'} className='text-blue-400'>View All</Link>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    [...Array(3)].map(book => <SingleBook />)
                }
            </div>
        </div>
    );
};

export default AuthorBook;