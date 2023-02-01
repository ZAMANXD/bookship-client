import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBook from '../../Shared/SingleBook/SingleBook';

const BooksByAuthor = () => {
    const books: any = useLoaderData()
    return (
        <div className='py-10 max-w-7xl mx-auto'>
            <h2 className='text-center text-3xl my-5'> From <span className='uppercase'>{books[0]?.authorName}</span> :
                {books?.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 px-5 lg:grid-cols-4 gap-5 py-10'>
                {
                    books.map((book: any, i: number) => <SingleBook key={i} {...book} />)
                }
            </div>
        </div>
    );
};

export default BooksByAuthor;