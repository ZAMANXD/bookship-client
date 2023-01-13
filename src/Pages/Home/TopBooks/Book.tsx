import React from 'react';
import { AiOutlineStar } from 'react-icons/ai'

const Book = () => {
    return (
        <div className='bg-white rounded-lg shadow-lg hover:shadow-2xl  transition duration-150 ease-in-out p-5 mx-2 my-3'>
            <img className='w-full rounded-lg' src="https://cdn.pixabay.com/photo/2016/09/08/22/43/books-1655783_960_720.jpg" alt="" />
            <div className='my-3'>
                <div className='flex items-center gap-x-2 my-2'>
                    <img className='w-8 h-8 rounded-full border' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCXNh9OsJ5FQZPljU_-rLiND2_9XogYnyxQ&usqp=CAU" alt="" />
                    <h4 className='text-md'>Tarek Solaiman</h4>
                </div>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-semibold text-[#34315D]'>Book Title</h2>
                    <div className='flex justify-between items-center'>
                        {
                            [...Array(5)].map(star => <AiOutlineStar className='text-xl text-yellow-500' />)
                        }
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, reprehenderit.</p>
                <div className='flex justify-between items-center my-3'>
                    <p className='text-3xl font-bold text-[#342D65]'>$234</p>
                    <button className='px-2 py-2 bg-[#3DB188] rounded-md text-white'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Book;