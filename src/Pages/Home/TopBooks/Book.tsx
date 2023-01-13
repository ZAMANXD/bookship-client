import React from 'react';
import { AiOutlineStar } from 'react-icons/ai'

const Book = ({ ...book }) => {
    return (
        <div className='bg-white rounded-lg shadow-lg hover:shadow-2xl  transition duration-150 ease-in-out p-5 mx-2 my-3'>
            <img className='w-full h-80 rounded-lg' src={book.image} alt="" />
            <div className='grid grid-rows-4 gap-2 my-3'>
                <div className='row-span-1 flex items-center gap-x-2 my-2'>
                    <img className='w-8 h-8 rounded-full border' src={book.image} alt="" />
                    <h4 className='text-md'>{book.authorName}</h4>
                </div>
                <div className='row-span-2 flex justify-between items-center'>
                    <h2 className='text-2xl font-semibold text-[#34315D]'>{book.bookTitle}</h2>
                    <div className='flex justify-between items-center'>
                        {
                            [...Array(5)].map(star => <AiOutlineStar className='text-xl text-yellow-500' />)
                        }
                    </div>
                </div>
                <p>{book.description}</p>
                <div className='row-span-1 flex justify-between items-center my-3'>
                    <p className='text-3xl font-bold text-[#342D65]'>${book.originalPrice}</p>
                    <button className='px-2 py-2 bg-[#3DB188] rounded-md text-white'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Book;