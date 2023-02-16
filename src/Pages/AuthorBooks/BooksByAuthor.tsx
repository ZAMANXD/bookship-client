import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import SingleBook from '../../Shared/SingleBook/SingleBook';

const BooksByAuthor = () => {
    const books: any = useLoaderData()
    console.log(books)
    useTitle(`- ${books[0]?.authorName || 'Author Not Found'}`)
    return (
        <div className='max-w-7xl mx-auto bg-gray-200 p-5 rounded-lg'>
            {/* <h2 className='text-center text-3xl my-5'> From <span className='uppercase'>{books[0]?.authorName || 'Author Not Found'}</span> :
                {books?.length}</h2> */}
            <h2 className='text-center text-3xl my-5'> <span className='uppercase'>{books[0]?.authorName || 'Author Not Found'}</span>{}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 px-5 lg:grid-cols-3 gap-5 py-10'>
                {!books?.length ? <p className='text-center lg:text-2xl'>No Books Found.</p> :
                    books?.map((book: any, i: number) => <SingleBook key={i} {...book} />)
                }
            </div>
        </div>
    );
};

export default BooksByAuthor;