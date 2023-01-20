import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleBook from '../../Shared/SingleBook/SingleBook';

const AuthorBook = ({ ...author }) => {

    const [books, setBooks] = useState<any[]>([])
    useEffect(() => {
        fetch('https://bookship-server-zamanxd.vercel.app/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
    }, [])
    console.log(books);

    return (
        <div className='my-5 border p-3'>
            <Link to={'/books'} className='flex justify-between items-center mb-3'>
                <div className='flex items-center gap-x-3'>
                    <img className='w-10 h-10 rounded-full' src={author?.img} alt="" />
                    <h2 className='font-bold text-xl'>{author?.name}</h2>
                </div>
                <Link to={'/books'} className='text-blue-400'>View All</Link>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    books.slice(0, 3).map((book, i) => <SingleBook key={i} {...book} />)
                }
            </div>
        </div>
    );
};

export default AuthorBook;