import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import SingleBook from '../../Shared/SingleBook/SingleBook';
import Book from '../Home/TopBooks/Book';

const BooksByCategory = () => {
    const books: any = useLoaderData()
    useTitle(`- ${books[0]?.category}`)
    return (
        <div className='max-w-7xl mx-auto bg-sky-50 p-5 rounded-lg'>
            <h2 className='text-center text-3xl my-5'> <span className='uppercase'>{books[0]?.name || books[0]?.category}</span> { }</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 px-5 lg:grid-cols-3 gap-5 py-10'>
                {
                    books.map((book: any, i: number) => <Book key={i} {...book} />)
                }
            </div>
        </div>
    );
};

export default BooksByCategory;